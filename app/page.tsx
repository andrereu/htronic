import type { Metadata } from "next";
import ComingSoon from "./coming-soon";
import Home from "./home";
import { COMING_SOON } from "./site";

// Em modo "Em breve" a home sai do indice de busca; a home completa continua em ./home.
export const metadata: Metadata = COMING_SOON
  ? {
      title: "Htronic Portões Eletrônicos | Em breve",
      description: "Htronic Portões Eletrônicos. Novo site em breve.",
      robots: { index: false, follow: false },
    }
  : {};

export default function Page() {
  return COMING_SOON ? <ComingSoon /> : <Home />;
}
