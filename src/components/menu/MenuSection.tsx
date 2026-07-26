import type { MenuChapter, MenuGroup } from "@/data/menu";

function Group({ group }: { group: MenuGroup }) {
  const compact = group.layout === "compact";

  return (
    <div className="menu-group">
      {(group.th || group.en) && (
        <div className="menu-group__head">
          <span className="menu-group__rule" aria-hidden="true" />
          <h3 className="menu-group__title">
            {group.th && <span className="menu-group__th">{group.th}</span>}
            {group.th && group.en && <span className="menu-group__dot"> · </span>}
            {group.en && <span className="menu-group__en">{group.en}</span>}
          </h3>
          <span className="menu-group__rule" aria-hidden="true" />
        </div>
      )}

      {group.note && <p className="menu-group__note">{group.note}</p>}

      <div className={compact ? "menu-list menu-list--compact" : "menu-list"}>
        {group.items.map((item, i) => (
          <article className="menu-item" key={i}>
            <div className="menu-item__head">
              <div className="menu-item__title">
                <h4 className="menu-item__thai">{item.th}</h4>
                <p className="menu-item__en">{item.en}</p>
              </div>
              <div className="menu-item__price">
                {item.price}
                <span className="baht">฿</span>
              </div>
            </div>
            {item.desc && <p className="menu-item__desc">{item.desc}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}

export default function MenuSection({ chapter }: { chapter: MenuChapter }) {
  return (
    <section className="menu-section" id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <header className="menu-section__head">
        <p className="menu-section__eyebrow">Chapter {chapter.numeral}</p>
        <h2 className="menu-section__th" id={`${chapter.id}-title`}>
          {chapter.th}
        </h2>
        <p className="menu-section__en">{chapter.en}</p>
        <div className="menu-divider" aria-hidden="true">
          <span className="menu-divider__line" />
          <span className="menu-divider__mark">✦</span>
          <span className="menu-divider__line" />
        </div>
      </header>

      {chapter.groups.map((g, i) => (
        <Group group={g} key={i} />
      ))}

      {(chapter.quoteTh || chapter.quoteEn) && (
        <div className="menu-quote">
          <div className="menu-quote__orn" aria-hidden="true">
            ✦ <span className="menu-quote__star">❋</span> ✦
          </div>
          {chapter.quoteTh && <p className="menu-quote__th">{chapter.quoteTh}</p>}
          {chapter.quoteEn && <p className="menu-quote__en">{chapter.quoteEn}</p>}
        </div>
      )}
    </section>
  );
}
