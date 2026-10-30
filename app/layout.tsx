import type { Metadata } from "next";
import "@fontsource/montserrat/latin-400.css";
import "@fontsource/montserrat/latin-500.css";
import "@fontsource/montserrat/latin-600.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/montserrat/latin-800.css";
import "./htronic.css";
import { SITE_URL } from "./site";

const TITLE = "Htronic Portões Eletrônicos | Instalação e manutenção em Curitiba";
const DESCRIPTION =
  "Instalação, manutenção e automação de portões eletrônicos residenciais, comerciais e condomínios em Curitiba e região. Motores, placas, centrais e controles. Peça seu orçamento pelo WhatsApp.";

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
    images: [{ url: "/img/hero.jpg", alt: "Portão eletrônico instalado pela Htronic" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
