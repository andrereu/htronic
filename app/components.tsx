import Link from "next/link";
import { Arrow, Phone, Shield, WhatsApp } from "./icons";
import { ADDRESS, IMG, PHONE_TEL, PHONE_TEXT, WHATSAPP, brands, cityList, href, nav } from "./data";
import { services } from "./content";

export function Header({ sub = false }: { sub?: boolean }) {
  const base = sub ? "/" : "";
  return (
    <header className="ht-header">
      <div className="ht-header-in">
        <a href={sub ? "/" : "#inicio"} className="ht-logo">
          <img src={`${IMG}/logo.jpg`} alt="Htronic Portões Eletrônicos" width={552} height={138} />
        </a>
        <nav aria-label="Principal">
          {nav.map(([l, h], i) => (
            <a key={h} href={base + h} className={!sub && i === 0 ? "is-active" : undefined}>{l}</a>
          ))}
        </nav>
        <a className="ht-btn ht-btn-yellow ht-btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
          <WhatsApp /> <span>Pedir orçamento</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ht-footer">
      <div className="ht-footer-links">
        <nav aria-label="Serviços">
          <p>Serviços</p>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={href(s.slug)}>{s.short}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Cidades atendidas">
          <p>Cidades atendidas</p>
          <ul>
            {cityList.map((c) => (
              <li key={c.name}><Link href={href(c.slug)}>{c.name}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      <p>
        © Htronic Portões Eletrônicos · {ADDRESS} · <a href={PHONE_TEL}>{PHONE_TEXT}</a>
      </p>
    </footer>
  );
}

export function BrandsWarranty() {
  return (
    <section className="ht-brands">
      <div className="ht-brands-in">
        <div className="ht-brands-text">
          <h2 className="ht-title ht-title-light">Todas as <em>marcas e modelos</em> de portão eletrônico</h2>
          <p>Atendimento 24 horas em Curitiba e região. Atendemos, entre outras:</p>
          <ul className="ht-brand-list">
            {brands.map((b) => <li key={b}>{b}</li>)}
            <li className="more">e outras marcas</li>
          </ul>
        </div>
        <div className="ht-warranty">
          <h3><Shield /> Garantia nos serviços</h3>
          <ul>
            <li><strong>1 ano</strong><span>em peças e equipamentos novos</span></li>
            <li><strong>90 dias</strong><span>em peças e equipamentos usados</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items, id }: { items: readonly (readonly [string, string])[]; id?: string }) {
  return (
    <section className="ht-faq" id={id}>
      <div className="ht-faq-in">
        <h2 className="ht-title">Perguntas <em>frequentes</em></h2>
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Solicite seu orçamento agora" }: { title?: string }) {
  return (
    <section className="ht-cta-band">
      <div className="ht-cta-band-in">
        <h2>{title}</h2>
        <div className="ht-cta-row">
          <a className="ht-btn ht-btn-black ht-btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer">
            <WhatsApp /> Falar pelo WhatsApp <Arrow />
          </a>
          <a className="ht-btn ht-btn-outline-dark ht-btn-lg" href={PHONE_TEL}><Phone /> Ligar agora</a>
        </div>
      </div>
    </section>
  );
}
