"use client";

import { useLanguage } from "@/lib/language-context";
import { company } from "@/data/company";
import { villas } from "@/data/villas";
import {
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ReviewStarIcon,
} from "./icons/Icons";

export default function Footer() {
  const { lang, t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-title">{company.shortName}</span>
            <span className="brand-subtitle">{company.subtitle[lang]}</span>
            <p className="footer-desc">{f.desc}</p>
            <div className="footer-social">
              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={company.social.line} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LINE Official">
                <ChatIcon size={18} />
              </a>
              <a href={company.social.tripadvisor} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TripAdvisor">
                <ReviewStarIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">{f.quickLinks}</h4>
            <ul className="footer-links">
              <li><a href="#home">{f.links.home}</a></li>
              <li><a href="#about">{f.links.about}</a></li>
              <li><a href="#villas">{f.links.villas}</a></li>
              <li><a href="#facilities">{f.links.facilities}</a></li>
              <li><a href="#gallery">{f.links.gallery}</a></li>
              <li><a href="#booking">{f.links.offers}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">{f.accommodations}</h4>
            <ul className="footer-links">
              {villas.map((v) => (
                <li key={v.id}>
                  <a href="#villas">{v.name[lang]}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">{f.contactLocation}</h4>
            <ul className="contact-info">
              <li>
                <span className="contact-icon"><PinIcon /></span>
                <span>{company.address.full[lang]}</span>
              </li>
              <li>
                <span className="contact-icon"><PhoneIcon size={18} /></span>
                <span>
                  {company.phones.map((p, i) => (
                    <span key={p.tel}>
                      <a href={`tel:${p.tel}`}>{p.display}</a>
                      {i < company.phones.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <span className="contact-icon"><MailIcon /></span>
                <span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} {company.name}. {f.rights}</p>
          <p>{f.credit}</p>
        </div>
      </div>
    </footer>
  );
}
