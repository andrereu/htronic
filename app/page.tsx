import { Arrow, Bolt, Check, Chip, GateIcon, Gear, GoogleG, Phone, Pin, Remote, Shield, Star, WhatsApp, Wrench } from "./icons";

const IMG = "/img";
const PHONE_TEL = "tel:+5541999025303";
const WHATSAPP = "https://wa.me/5541999025303?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento%20para%20meu%20port%C3%A3o.";
const MAPS = "https://maps.app.goo.gl/ZKuc6KN7fKLBhFJE9";
const ADDRESS = "Rua Professor José Maurício Higgins, 2827 — Boqueirão, Curitiba/PR";

const nav = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Sobre", "#sobre"],
  ["Avaliações", "#avaliacoes"],
  ["Contato", "#contato"],
] as const;

const badges = [
  [Bolt, "Atendimento", "rápido"],
  [Shield, "Serviço com", "garantia"],
  [Pin, "Curitiba e", "região"],
] as const;

const services = [
  [Gear, "Instalação", "de motores", "Portões residenciais, comerciais e condomínios."],
  [Wrench, "Manutenção", "e reparos", "Diagnóstico e solução de problemas."],
  [Chip, "Placas e", "centrais", "Conserto e substituição de placas eletrônicas."],
  [Remote, "Controles e", "acessórios", "Controles, sensores, receptores e muito mais."],
  [GateIcon, "Automação", "completa", "Mais segurança e praticidade no seu dia a dia."],
] as const;

const problems = [
  "Portão não abre ou não fecha",
  "Motor fazendo barulho",
  "Controle não funciona",
  "Placa eletrônica com defeito",
  "Manutenção preventiva",
  "Instalação de novos motores",
  "Automação de portões novos ou antigos",
];

const segments = [
  ["residencial.jpg", "Residencial", "Mais comodidade para o seu dia a dia.", "Portão de garagem residencial na cor grafite", Gear],
  ["comercial.jpg", "Comercial", "Soluções para empresas e estabelecimentos.", "Portão de correr comercial em metal", Wrench],
  ["condominio.jpg", "Condomínios", "Segurança e controle de acesso.", "Portão de condomínio com grade vertical", GateIcon],
] as const;

const reviews = [
  {
    name: "Jorge Luis Orlandi",
    meta: "Local Guide · 4 meses atrás",
    text: "Excelente atendimento, excelente custo-benefício. O Sr. Laurence se mostrou muito prestativo e resolveu rapidamente o problema no motor do meu portão e também do teto móvel da cozinha. Super recomendo.",
    reply: "Obrigado. Queremos o melhor para nossos clientes.",
  },
  {
    name: "Paulo Germano",
    meta: "154 avaliações em Curitiba · 2 meses atrás",
    text: "Fui muito bem atendido, serviço rápido e valor muito bom de peças e serviço. Atende rápido, entende do ramo. Indico sem medo.",
    reply: "Obrigado pela confiança. Nosso cliente em primeiro lugar.",
  },
] as const;

const cities = ["Curitiba", "São José dos Pinhais", "Pinhais", "Colombo", "Araucária", "e região"];

const Stars = ({ n = 5 }: { n?: number }) => (
  <span className="ht-stars" role="img" aria-label={`${n} estrelas`}>
    {[0, 1, 2, 3, 4].map((i) => <Star key={i} className={i < n ? "on" : undefined} />)}
  </span>
);

export default function Page() {
  return (
    <div className="ht">
      <header className="ht-header">
        <div className="ht-header-in">
          <a href="#inicio" className="ht-logo"><img src={`${IMG}/logo.jpg`} alt="Htronic Portões Eletrônicos" width={184} height={46} /></a>
          <nav aria-label="Principal">
            {nav.map(([l, h], i) => <a key={h} href={h} className={i === 0 ? "is-active" : undefined}>{l}</a>)}
          </nav>
          <a className="ht-btn ht-btn-yellow ht-btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
            <WhatsApp /> <span>Pedir orçamento</span>
          </a>
        </div>
      </header>

      <main>
        <section className="ht-hero" id="inicio">
          <img className="ht-hero-img" src={`${IMG}/hero.jpg`} alt="Portão eletrônico de lâminas horizontais iluminado em fachada residencial" />
          <div className="ht-hero-in">
            <div className="ht-hero-copy">
              <p className="ht-eyebrow">CURITIBA E REGIÃO</p>
              <h1>Seu portão parou?<br />A <em>Htronic resolve.</em></h1>
              <p className="ht-lead">Instalação, manutenção e automação de portões eletrônicos residenciais, comerciais e condomínios.</p>
              <div className="ht-cta-row">
                <a className="ht-btn ht-btn-yellow ht-btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer">
                  <WhatsApp /> Pedir orçamento pelo WhatsApp <Arrow />
                </a>
                <a className="ht-btn ht-btn-ghost ht-btn-lg" href={PHONE_TEL}><Phone /> Ligar agora</a>
              </div>
            </div>
            <ul className="ht-badges">
              {badges.map(([Icon, a, b]) => (
                <li key={a}><span className="ht-badge-ico"><Icon /></span><span>{a}<br />{b}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ht-services" id="servicos" aria-label="Serviços">
          <ul className="ht-services-in">
            {services.map(([Icon, a, b, d]) => (
              <li key={a + b}>
                <Icon className="ht-svc-ico" />
                <h2>{a}<br />{b}</h2>
                <p>{d}</p>
                <i aria-hidden="true" />
              </li>
            ))}
          </ul>
        </section>

        <section className="ht-problems" id="sobre">
          <div className="ht-problems-in">
            <div className="ht-problems-text">
              <h2 className="ht-title">Problemas que <em>resolvemos</em></h2>
              <ul className="ht-checks">
                {problems.map((p) => <li key={p}><Check />{p}</li>)}
              </ul>
            </div>
            <figure className="ht-photo">
              <img src={`${IMG}/placa.jpg`} alt="Placa eletrônica de portão aberta, com fios e componentes" loading="lazy" />
              <figcaption><b>Placa e central eletrônica</b>Diagnóstico e reparo de placas.</figcaption>
            </figure>
            <figure className="ht-photo">
              <img src={`${IMG}/motor.jpg`} alt="Motor de portão eletrônico sobre a base de fixação" loading="lazy" />
              <figcaption><b>Motores de portões</b>Manutenção e substituição.</figcaption>
            </figure>
          </div>
        </section>

        <section className="ht-segments">
          <div className="ht-segments-in">
            <div className="ht-segments-text">
              <h2 className="ht-title">Para casas, comércios e condomínios</h2>
              <p>Soluções sob medida para diferentes necessidades, com foco em segurança, praticidade e durabilidade.</p>
            </div>
            <ul className="ht-seg-grid">
              {segments.map(([img, t, d, alt, Icon]) => (
                <li key={t}>
                  <img src={`${IMG}/${img}`} alt={alt} loading="lazy" />
                  <div><span className="ht-seg-ico"><Icon /></span><p><b>{t}</b>{d}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ht-reviews" id="avaliacoes">
          <div className="ht-reviews-in">
            <div className="ht-rating">
              <h2><GoogleG /> Avaliações no Google</h2>
              <div className="ht-rating-score"><strong>4,3</strong><div><Stars n={4} /><small>com base em 7 avaliações</small></div></div>
              <a className="ht-btn ht-btn-outline" href={MAPS} target="_blank" rel="noreferrer"><Pin /> Ver no Google Maps</a>
            </div>
            <ul className="ht-review-list">
              {reviews.map((r) => (
                <li key={r.name} className="ht-review">
                  <div className="ht-review-head">
                    <span className="ht-avatar" aria-hidden="true">{r.name[0]}</span>
                    <div><b>{r.name}</b><small>{r.meta}</small></div>
                  </div>
                  <Stars />
                  <p>“{r.text}”</p>
                  <p className="ht-reply"><b>Resposta da Htronic:</b> {r.reply}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ht-area" id="contato">
          <div className="ht-area-in">
            <div className="ht-area-text">
              <Pin className="ht-area-pin" />
              <div>
                <h2 className="ht-title ht-title-light">Atendimento em Curitiba e região</h2>
                <p>Atendemos bairros de Curitiba e cidades próximas. Entre em contato e verifique a disponibilidade para a sua região.</p>
                <p className="ht-address">{ADDRESS}</p>
              </div>
            </div>
            <svg className="ht-map" viewBox="0 0 300 220" role="img" aria-label="Mapa estilizado da área de atendimento em Curitiba e região">
              <g stroke="rgba(255,255,255,.08)" strokeWidth="1" fill="none">
                <path d="M0 40 80 25 170 55 300 30M0 110 90 90 190 120 300 95M0 180 70 160 170 190 300 170M50 0 70 220M130 0 120 220M210 0 230 220M270 0 262 220" />
              </g>
              <path d="M95 35 150 22 205 50 238 92 222 140 238 182 190 205 140 188 100 205 62 168 78 120 56 78z" fill="rgba(255,180,0,.78)" stroke="#ffb400" strokeWidth="2" strokeLinejoin="round" />
              <path d="M150 62a15 15 0 0 0-15 15c0 11 15 27 15 27s15-16 15-27a15 15 0 0 0-15-15z" fill="#111" />
              <circle cx="150" cy="77" r="5.5" fill="#ffb400" />
              <text x="150" y="150" textAnchor="middle" fill="#111" fontSize="17" fontWeight="700">Curitiba</text>
              <text x="150" y="170" textAnchor="middle" fill="#111" fontSize="17" fontWeight="700">e região</text>
            </svg>
            <ul className="ht-cities">
              {cities.map((c) => <li key={c}><Check />{c}</li>)}
            </ul>
            <div className="ht-quote">
              <h2>Solicite seu orçamento agora</h2>
              <a className="ht-btn ht-btn-black" href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsApp /> Falar pelo WhatsApp <Arrow /></a>
              <a className="ht-btn ht-btn-outline-dark" href={PHONE_TEL}><Phone /> Ligar agora</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="ht-footer">
        <p>© Htronic Portões Eletrônicos · {ADDRESS}</p>
      </footer>
    </div>
  );
}
