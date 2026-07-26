/**
 * Script-aware text splitting for reveal animations.
 *
 * Thai must NOT be split per code unit: vowels and tone marks are combining
 * characters, so `[..."ที่"]` yields ["ท","ี","่"] and wrapping each in its own
 * inline-block detaches the marks from their consonant — the word renders
 * broken. Thai also has no spaces between words.
 *
 * So: Latin splits per grapheme (letter-by-letter reads well), Thai splits per
 * word via Intl.Segmenter's Thai dictionary — each unit stays correctly shaped.
 */

export type SplitMode = "chars" | "words";

/** A word, already broken into the units that will animate individually. */
export interface SplitWord {
  units: string[];
  /** Trailing whitespace to re-emit after this word. */
  trailing: string;
}

const hasSegmenter = typeof Intl !== "undefined" && "Segmenter" in Intl;

/** Split into grapheme clusters (keeps base char + combining marks together). */
function toGraphemes(text: string): string[] {
  if (hasSegmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(seg.segment(text), (s) => s.segment);
  }
  return Array.from(text); // code-point fallback
}

/** Thai word segmentation (dictionary-based); falls back to whole string. */
function toThaiWords(text: string): string[] {
  if (hasSegmenter) {
    const seg = new Intl.Segmenter("th", { granularity: "word" });
    return Array.from(seg.segment(text), (s) => s.segment).filter((s) => s.length);
  }
  return [text];
}

/**
 * Split `text` into words with per-word animation units.
 * `mode: "words"` keeps each word whole (used for Thai).
 */
export function splitText(text: string, mode: SplitMode): SplitWord[] {
  const out: SplitWord[] = [];
  // Preserve existing spaces so Latin line-breaking still works.
  const chunks = text.split(/(\s+)/);

  for (let i = 0; i < chunks.length; i += 1) {
    const chunk = chunks[i];
    if (!chunk || /^\s+$/.test(chunk)) continue;
    const trailing = /^\s+$/.test(chunks[i + 1] ?? "") ? chunks[i + 1] : "";

    if (mode === "words") {
      // Thai: let the segmenter find word boundaries inside the chunk.
      const words = toThaiWords(chunk);
      words.forEach((w, wi) => {
        out.push({ units: [w], trailing: wi === words.length - 1 ? trailing : "" });
      });
    } else {
      out.push({ units: toGraphemes(chunk), trailing });
    }
  }

  return out;
}
