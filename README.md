# Site da Agência Orca

HTML/CSS/JS sem framework + Node/Express. As páginas são montadas a partir dos arquivos de `content/`.

**Onde o projeto parou, decisões e pendências:** [docs/estado-do-projeto.md](docs/estado-do-projeto.md).

## Rodar

```bash
npm install
npm run dev          # http://localhost:3000, recarrega sozinho quando um arquivo muda
npm run pendencias   # lista o que falta preencher ou confirmar antes de publicar
```

Precisa de Node 20 ou mais novo.

## Onde fica cada coisa

| Pasta | O que tem |
|---|---|
| `content/site.js` | Dados gerais: WhatsApp, e-mail, CNPJ, Instagram, prazos, mensagens prontas do WhatsApp |
| `content/home.js` | Textos da home. A versão do topo é escolhida em `topo.versaoAtiva` |
| `content/segmentos/` | Um arquivo por segmento (`ativo: true` liga a página e o bloco na home) |
| `src/render/` | Modelos das páginas (cabeçalho, rodapé, seções) |
| `src/estilos/site.css` | Estilos. Vão embutidos em cada página |
| `public/assets/` | Fonte Nunito (licença em `fonts/OFL.txt`) e o script do site |
| `marca/` | Logo, ícone e ilustrações em SVG, e a proposta de marca |
| `docs/` | Textos aprovados e decisões de cada etapa |

## Marcadores de pendência

Nos textos, `[[PREENCHER: o que falta]]` e `[[CONFIRMAR]]` aparecem destacados em amarelo no site. Nenhum deles pode ir para o ar: `npm run pendencias` precisa terminar com "Nenhuma pendência".
