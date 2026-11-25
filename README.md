# Htronic Portões Eletrônicos — site

Landing page da Htronic (Curitiba/PR). Next.js com exportação estática: o build gera a pasta `out/`, sem servidor.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera ./out
```

## Modo "Em breve"

A página inicial mostra apenas o logo e "Em breve" enquanto `COMING_SOON = true` em `app/site.ts`. Nesse modo a home recebe `noindex` e sai do `sitemap.xml`. A home completa está preservada em `app/home.tsx` (e na tag `home-original`).

Para o site voltar ao normal: troque `COMING_SOON` para `false`, faça commit e push. A Netlify publica sozinha.

## Publicação (Cloudflare Pages)

Conecte este repositório em Workers & Pages → Create → Pages → Connect to Git:

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Build output directory: `out`
- Variável de ambiente: `NODE_VERSION` = `22`

Depois, em Custom domains, adicione o domínio `.com.br`.

## Onde editar

- Textos, serviços e avaliações: `app/page.tsx`
- Estilos: `app/htronic.css`
- Imagens: `public/img/`
- Título, descrição e Open Graph: `app/layout.tsx`
- Domínio oficial (canonical e sitemap): `app/site.ts`
- WhatsApp, telefone e endereço: constantes no topo de `app/page.tsx`
