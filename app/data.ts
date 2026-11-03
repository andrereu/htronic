export const IMG = "/img";
export const PHONE_TEL = "tel:+5541999025303";
export const PHONE_TEXT = "(41) 99902-5303";
export const WHATSAPP =
  "https://wa.me/5541999025303?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20para%20meu%20port%C3%A3o.";
export const MAPS = "https://maps.app.goo.gl/ZKuc6KN7fKLBhFJE9";
export const ADDRESS = "Rua Professor José Maurício Higgins, 2827 — Boqueirão, Curitiba/PR";

export const nav = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Sobre", "#sobre"],
  ["Avaliações", "#avaliacoes"],
  ["Dúvidas", "#duvidas"],
  ["Contato", "#contato"],
] as const;

export const brands = ["PPA", "Garen", "Peccinin", "GL", "Unisystem", "Rossi"] as const;

/** Cidades atendidas. `slug` vazio = pagina inicial (Curitiba). */
export const cityList = [
  { name: "Curitiba", slug: "" },
  { name: "São José dos Pinhais", slug: "portao-eletronico-sao-jose-dos-pinhais" },
  { name: "Pinhais", slug: "portao-eletronico-pinhais" },
  { name: "Colombo", slug: "portao-eletronico-colombo" },
  { name: "Araucária", slug: "portao-eletronico-araucaria" },
] as const;

export const href = (slug: string) => (slug ? `/${slug}/` : "/");
