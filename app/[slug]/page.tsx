import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Phone, WhatsApp } from "../icons";
import { BrandsWarranty, CtaBand, FaqList, Footer, Header } from "../components";
import { allPages, cities, getPage, services } from "../content";
import { PHONE_TEL, WHATSAPP, href } from "../data";
import { SITE_URL } from "../site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPages.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPage((await params).slug);
  if (!p) return {};
  const url = href(p.slug);
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: "Htronic Portões Eletrônicos",
      title: p.title,
      description: p.description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Htronic Portões Eletrônicos" }],
    },
  };
}

export default async function Page({ params }: Props) {
  const p = getPage((await params).slug);
  if (!p) notFound();
  const url = `${SITE_URL}${href(p.slug)}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.h1,
      serviceType: p.serviceType,
      description: p.description,
      url,
      provider: { "@id": `${SITE_URL}/#negocio` },
      areaServed: { "@type": "City", name: p.area },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: p.short, item: url },
      ],
    },
  ];

  return (
    <div className="ht">
      <Header sub />
      <main>
        <section className="ht-sub-hero">
          <div className="ht-sub-hero-in">
            <nav className="ht-crumbs" aria-label="Você está em">
              <Link href="/">Início</Link> <span aria-hidden="true">/</span> <span>{p.short}</span>
            </nav>
            <p className="ht-eyebrow">{p.eyebrow}</p>
            <h1>{p.h1}</h1>
            <p className="ht-lead">{p.lead}</p>
            <div className="ht-cta-row">
              <a className="ht-btn ht-btn-yellow ht-btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer">
                <WhatsApp /> Pedir orçamento pelo WhatsApp <Arrow />
              </a>
              <a className="ht-btn ht-btn-ghost ht-btn-lg" href={PHONE_TEL}><Phone /> Ligar agora</a>
            </div>
          </div>
        </section>

        <article className="ht-doc">
          <div className="ht-doc-in">
            {p.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="ht-title">{s.h2}</h2>
                {s.blocks.map((b, i) =>
                  "p" in b ? (
                    <p key={i}>{b.p}</p>
                  ) : (
                    <ul key={i} className="ht-doc-list">
                      {b.ul.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  ),
                )}
              </section>
            ))}
          </div>
        </article>

        <BrandsWarranty />
        <FaqList items={p.faq} />

        <section className="ht-related">
          <div className="ht-related-in">
            <div>
              <h2 className="ht-title">Outros <em>serviços</em></h2>
              <ul>
                {services.filter((s) => s.slug !== p.slug).map((s) => (
                  <li key={s.slug}><Link href={href(s.slug)}>{s.short}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="ht-title">Cidades <em>atendidas</em></h2>
              <ul>
                <li><Link href="/">Curitiba</Link></li>
                {cities.filter((c) => c.slug !== p.slug).map((c) => (
                  <li key={c.slug}><Link href={href(c.slug)}>{c.short}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
