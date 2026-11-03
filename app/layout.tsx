import type { Metadata } from "next";
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-500.css";
import "@fontsource/montserrat/latin-600.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/montserrat/latin-800.css";
import "./htronic.css";
import { SITE_URL } from "./site";
import Analytics from "./analytics";
import { localBusinessJsonLd } from "./jsonld";

const TITLE = "Conserto de Portão Eletrônico em Curitiba 24h | Htronic";
const DESCRIPTION =
  "Conserto, manutenção e instalação de portão eletrônico em Curitiba e região, 24 horas. PPA, Garen, Peccinin, Rossi e outras marcas. Garantia de até 1 ano.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Htronic Portões Eletrônicos",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Htronic Portões Eletrônicos — portão eletrônico em Curitiba" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <Analytics />
      </body>
    </html>
  );
}
