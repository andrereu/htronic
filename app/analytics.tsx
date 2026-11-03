"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID } from "./site";

type Gtag = (...args: unknown[]) => void;

/** GA4 + eventos de contato: cliques em WhatsApp e telefone (delegacao no document). */
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (!gtag) return;
      const kind = href.startsWith("https://wa.me") ? "whatsapp" : href.startsWith("tel:") ? "telefone" : null;
      if (!kind) return;
      gtag("event", "generate_lead", { method: kind, link_url: href, link_text: a?.textContent?.trim().slice(0, 60) });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
