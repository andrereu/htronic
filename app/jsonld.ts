import { SITE_URL } from "./site";

/** Dados estruturados do negocio local (schema.org). Telefone, endereco e area de atendimento espelham a pagina. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#negocio`,
  name: "Htronic Portões Eletrônicos",
  description:
    "Conserto, manutenção, instalação e automação de portões eletrônicos residenciais, comerciais e condomínios em Curitiba e região. Atendimento 24 horas, todas as marcas e modelos.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og.jpg`,
  logo: `${SITE_URL}/img/logo.jpg`,
  telephone: "+55-41-99902-5303",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Professor José Maurício Higgins, 2827",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  areaServed: ["Curitiba", "São José dos Pinhais", "Pinhais", "Colombo", "Araucária"].map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  knowsAbout: ["PPA", "Garen", "Peccinin", "GL", "Unisystem", "Rossi"].map((b) => `Portões eletrônicos ${b}`),
  hasMap: "https://maps.app.goo.gl/ZKuc6KN7fKLBhFJE9",
  sameAs: ["https://maps.app.goo.gl/ZKuc6KN7fKLBhFJE9"],
  makesOffer: [
    "Instalação de motores de portão eletrônico",
    "Manutenção e reparo de portões eletrônicos",
    "Conserto e substituição de placas e centrais eletrônicas",
    "Controles, sensores e receptores",
    "Automação de portões",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};
