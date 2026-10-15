# Estado do projeto · Site da Agência Orca

Atualizado em 15/10/2026. Este arquivo diz onde o projeto parou, o que já foi decidido, o que falta e como continuar. Quem pegar o projeto (você, o João ou uma próxima sessão do Claude) deve começar por aqui.

---

## 1. Onde parei

| Etapa | O que é | Situação |
|---|---|---|
| 1 | Mapa do site + textos da home e da página de atacado | ✅ Aprovada |
| 2 | Layout da home (celular e computador) | ✅ Aprovada |
| 3 | Página de distribuidoras e atacados, formulário do diagnóstico, página de obrigado | ⏭️ **Próxima. Ainda não começou** |
| 4 | Medição, SEO, política de privacidade e aviso de cookies | Não começou |
| 5 | Checklist final e README completo | Não começou |

**A home funciona por inteiro**, com 21 pendências marcadas em amarelo (seção 6). Os links para `/distribuidoras-e-atacados`, `/diagnostico-gratuito` e `/politica-de-privacidade` ainda caem numa página de erro provisória: as duas primeiras páginas são da etapa 3 e a política é da etapa 4.

Também já está pronta a marca: logo em SVG, ícone do site, ilustração da orca no notebook, cores e fonte.

---

## 2. O projeto em uma página

- **Negócio:** Agência Orca, uma dupla de Porto Alegre/RS que atende online todo o Brasil. Nathan Caprio faz sites, lojas virtuais (especialidade: lojas B2B para atacado na Tray) e anúncios. João Rossoni, da Rossoni Films (@rossonifilms), faz vídeo profissional com celular.
- **Domínio:** somosorca.com.br · **Instagram:** @agenciaorca
- **Objetivo do site:** gerar conversas no WhatsApp e pedidos de diagnóstico gratuito. As métricas são cliques no WhatsApp e formulários enviados.
- **Público:** dono ou gerente de pequena ou média empresa. Não tem tempo, desconfia de agência, decide pelo WhatsApp e navega pelo celular.
- **Diferencial:** quem faz a loja também faz o vídeo e o anúncio, e a loja já nasce pronta para vender pelo WhatsApp.

### Regras de conteúdo (valem para todo texto do site)

- Não inventar números, depoimentos, clientes, prêmios ou selos (Google Partner, Meta Partner).
- Não prometer resultado garantido de anúncio.
- Nada de lorem ipsum: escrever o texto real ou marcar `[[PREENCHER: …]]`.
- Frases curtas. Explicar cada termo técnico em uma linha (ex.: "remarketing: anúncio para quem já visitou sua loja").
- Sem clichês: "soluções inovadoras", "transformação digital", "360°" e parecidos.

---

## 3. Decisões fechadas

| Tema | Decisão |
|---|---|
| Foco | B: home ampla para PMEs + uma página por segmento, começando por distribuidoras e atacados. Escolas, clínicas e condomínios ficam prontos e desligados |
| Topo da home | Versão B: "Do anúncio ao cliente no seu WhatsApp, com uma equipe só." (A e C continuam guardadas em `content/home.js`) |
| Diagnóstico gratuito | Vídeo gravado analisando site, Google Meu Negócio e anúncios dos concorrentes, enviado pelo WhatsApp. Primeira resposta em até 24 h úteis |
| Fidelidade | Plano mensal com contrato mínimo de 3 meses; depois, mês a mês |
| Preço | Não aparece no site. Vem fechado na proposta |
| Caso Atacado Polvo | Texto pronto e desligado (`caso.ativo: false`) até a autorização e os prints |
| Base técnica | Do zero: HTML/CSS/JS sem framework + Node/Express |
| Cor | Azul-oceano `#1554E8` no logo, nos botões e nos links. O resto do site é preto e branco |
| Logo | Orca inteira em azul. No fundo escuro, branca |
| Fonte | Nunito (Google Fonts), hospedada no próprio site |
| Botões | No início da página, o WhatsApp é o botão principal (azul) e o diagnóstico fica em contorno. No fim da página, é o contrário |

---

## 4. Marca

Arquivos em `marca/`. A página `marca/proposta-identidade.html` mostra tudo junto; abra no navegador.

| Arquivo | Uso |
|---|---|
| `orca-simbolo.svg`, `orca-logo-horizontal.svg` | Principal, em azul |
| `orca-simbolo-branco.svg`, `orca-logo-horizontal-branco.svg` | Fundo escuro |
| `orca-simbolo-preto.svg`, `orca-logo-horizontal-preto.svg`, `orca-notebook-preto.svg` | Uma cor só: impressão, carimbo, documento |
| `orca-logo-horizontal-bicolor.svg` | Alternativa não escolhida: símbolo azul + nome preto |
| `favicon.svg` | Ícone do site: azul, e `#7DA8FF` quando o navegador está no tema escuro |
| `orca-notebook.svg`, `orca-notebook-branco.svg` | Ilustração. Use no topo, no obrigado e na página de erro, nunca no lugar do logo |

**Cores**

| Cor | Uso |
|---|---|
| `#1554E8` | Azul: logo, botões e links (6,1 : 1 sobre branco) |
| `#0F44C2` | Azul ao passar o mouse |
| `#7DA8FF` | Link e ícone sobre fundo preto (8,4 : 1) |
| `#0A0A0A` | Preto da orca: títulos e texto |
| `#52525B` | Texto de apoio (7,7 : 1) |
| `#F4F5F7` | Fundo de seção |
| `#E4E4E7` | Linhas e bordas |
| `#1DA851` | Botão flutuante do WhatsApp (ícone branco a 3,1 : 1, o mínimo para ícone) |

A palavra "orca" do logo é a Nunito Black transformada em desenho, então o logo não depende de fonte instalada.

---

## 5. Como o código está organizado

```
content/               textos e dados (é aqui que se edita no dia a dia)
  site.js              WhatsApp, e-mail, CNPJ, Instagram, prazos, mensagens prontas
  home.js              textos da home
  segmentos/           um arquivo por segmento + index.js
src/
  server.js            Express: monta as páginas na inicialização e serve tudo
  render/html.js       modelo de HTML: escapa os textos e destaca as pendências
  render/layout.js     <head>, cabeçalho, rodapé, WhatsApp flutuante, botões
  render/home.js       seções da home
  render/icones.js     ícones em SVG
  estilos/site.css     CSS (vai embutido em cada página)
public/assets/         fonte Nunito (+ licença OFL) e site.js (menu do celular)
scripts/pendencias.js  lista o que falta antes de publicar
marca/                 logo, ícone, ilustrações e proposta de marca
docs/                  textos aprovados e este arquivo
```

**Rodar:** `npm install` e depois `npm run dev`, que abre em http://localhost:3000 e recarrega sozinho. `npm run pendencias` lista o que falta. Precisa de Node 20 ou mais novo; aqui foi testado no 22.15.

**Como funciona por dentro**

- As páginas são montadas uma vez, quando o servidor sobe, e ficam na memória. Mudou um texto, o `npm run dev` reinicia sozinho.
- Todo texto vindo de `content/` passa por escape. `[[PREENCHER: …]]` e `[[CONFIRMAR]]` viram um destaque amarelo na tela, e o servidor avisa no terminal quantos sobraram.
- O CSS vai embutido no HTML, sem arquivo separado. Fonte e script ficam em `/assets`, com cache de 1 ano. O endereço do script leva uma versão (`site.js?v=…`), então mudar o script já força o navegador a baixar de novo.
- O desenho do WhatsApp entra uma vez por página e é reaproveitado com `<use>`.
- Cada botão tem `data-evento` (`whatsapp`, `diagnostico`, `loja-demo`, `video`) e `data-posicao` (`topo`, `cabecalho`, `flutuante`, `plano`, `final`…). A medição da etapa 4 vai usar esses atributos.
- Dependências: só `express` 5.3.0 e `compression` 1.8.2, com o `npm audit` zerado em 15/10/2026.

---

## 6. Pendências

Para ver a lista atual, rode `npm run pendencias` (21 itens em 15/10/2026).

### O que só vocês têm [PREENCHER]

**Trava a publicação**
- [ ] Número do WhatsApp, só dígitos com 55 e DDD → `content/site.js`, `whatsapp.numero`
- [ ] E-mail de contato, e o e-mail que recebe os leads se for outro → `site.email`
- [ ] CNPJ → `site.cnpj`
- [ ] Prazo de entrega do vídeo do diagnóstico → `site.diagnostico.prazoVideo`
- [ ] Link da loja B2B de demonstração → `site.lojaDemo.url`
- [ ] Fotos reais do Nathan e do João, de preferência trabalhando e com luz natural → `content/home.js`, `quemSomos.pessoas[].foto`
- [ ] Uma frase de cada um para o "Quem somos"
- [ ] De 3 a 6 Reels: link, imagem de capa e se pode citar o cliente → `home.videos.itens`
- [ ] Plano mensal: quantos vídeos por mês e se há limite de ajustes no site
- [ ] Aviso prévio para cancelar depois dos 3 meses

**Necessário na etapa 3**
- [ ] ERPs que vocês já integraram (página de atacado)

**Necessário na etapa 4**
- [ ] IDs do GA4, do Pixel da Meta e da conversão do Google Ads
- [ ] Onde o site vai rodar, e acesso ao DNS do domínio

**Opcional**
- [ ] Atacado Polvo: autorização, uma frase de "como era antes", de 3 a 5 prints e o link da loja

### O que eu supus [CONFIRMAR]

1. A verba dos anúncios é paga direto ao Google e à Meta pelo cliente.
2. O nome do plano mensal é "Plano Orca".
3. Site, loja e vídeo avulsos são contratados por projeto, sem mensalidade obrigatória.
4. Domínio, loja e contas de anúncio ficam no nome do cliente.
5. Como funciona gravar vídeo fora de Porto Alegre.
6. O João inclui roteiro e edição no serviço de vídeo.
7. O botão de WhatsApp da loja demo manda para o número da Orca? Se mandar, o texto pode convidar a "enviar um pedido de teste".
8. Quais recursos estão na loja do Atacado Polvo, e se teve vídeo ou anúncio.
9. O que a integração com o ERP sincroniza (produtos, preços, estoque).
10. Atacado: a loja mostra preço só para cliente cadastrado? Tem tabela de preço por cliente?
11. Atacado: dá para colocar os recursos numa loja Tray que já existe?
12. Painel de leads: vocês querem? Seria uma lista com a origem de cada lead e um botão para baixar planilha, protegida por senha.

---

## 7. Próximos passos

### Etapa 3: página de atacado, formulário e obrigado

1. **Modelo de página por segmento** (`src/render/segmento.js`), que lê `content/segmentos/<slug>.js`. A página de distribuidoras e atacados usa os textos aprovados na seção 3 de `docs/etapa-1-mapa-e-textos.md`: topo, dores, 6 recursos da loja B2B, loja demo, loja + vídeo + anúncio, como funciona, FAQ e chamada final. Criar `escolas.js`, `clinicas.js` e `condominios.js` desligados (`ativo: false`), com os textos marcados `[[PREENCHER]]`. Reaproveitar as seções que a home já tem.
2. **Origem do lead:** o `site.js` grava, na primeira visita, a página de entrada, os UTMs (`utm_source`, `medium`, `campaign`, `term`, `content`), `gclid`/`fbclid` e o referrer. O formulário envia esses dados em campos escondidos, junto com a página de onde a pessoa clicou.
3. **`/diagnostico-gratuito`:** nome, empresa, WhatsApp, e-mail, segmento, link do site ou Instagram, se já anuncia e maior desafio, mais a caixa de consentimento LGPD (desmarcada e obrigatória) com link para a política. Funciona sem JavaScript: é um envio normal que redireciona para `/obrigado`. O WhatsApp flutuante some nessa página no celular.
4. **Servidor (`POST /api/diagnostico`):**
   - validação dos campos;
   - limite de envios por IP;
   - proteção contra spam sem CAPTCHA: um campo escondido que só robô preenche, mais um tempo mínimo de preenchimento conferido por um token assinado;
   - grava o lead e avisa por e-mail (nodemailer com SMTP, configurado por variáveis de ambiente).
   - **Recomendação para guardar os leads:** um arquivo `dados/leads.jsonl` (uma linha por lead, sem dependência nova; a pasta já está no `.gitignore`). Para o volume de uma agência, basta. Exige disco persistente na hospedagem.
5. **`/obrigado`** (fora do Google): confirma o envio, diz o próximo passo e o prazo de 24 h úteis e tem botão de WhatsApp com a mensagem "Oi! Acabei de pedir o diagnóstico gratuito pelo site."
6. **Página de erro de verdade (404)**, com a ilustração da orca e botões para voltar e para o WhatsApp.
7. **Painel de leads**, se confirmado (item 12 acima).

### Etapa 4: medição, SEO e privacidade

- **Aviso de cookies** com categorias (necessários, medição e marketing) e Google Consent Mode v2, que começa negado. GA4, Pixel da Meta e conversão do Google Ads só carregam depois do consentimento.
- **Eventos:** clique no WhatsApp com a posição, envio do formulário (`generate_lead`) e clique na loja demo.
- **SEO:**
  - endereço canônico, Open Graph e imagem de compartilhamento 1200×630;
  - dados estruturados de empresa local, sem avaliações inventadas;
  - `sitemap.xml` gerado a partir das páginas ativas;
  - `robots.txt` bloqueando o painel, e `/obrigado` fora do Google;
  - ícones em PNG para iPhone e navegadores antigos.
- **Cabeçalhos de segurança:** CSP, que precisa aceitar o CSS embutido por hash e liberar os domínios do Google e da Meta; HSTS; `X-Content-Type-Options`; `Referrer-Policy`; `Permissions-Policy`.
- **Política de privacidade (LGPD):** quem é o controlador (precisa do CNPJ), que dados são coletados, para quê, base legal, com quem são compartilhados (Google, Meta, hospedagem, e-mail), por quanto tempo ficam guardados, direitos do titular e contato.
- **Hospedagem (recomendação):** qualquer servidor com Node 20 ou mais novo e disco persistente, por exemplo uma VPS com o Caddy na frente cuidando do HTTPS automático.

### Etapa 5: entrega

Checklist final: celular, velocidade, formulário testado de ponta a ponta, eventos disparando, links, LGPD e `npm run pendencias` sem nenhum item. README completo, explicando como editar textos e como criar uma página de segmento nova.

---

## 8. Como a etapa 2 foi verificada

- **Larguras de 320, 360, 390, 430, 768, 1024 e 1440 px:** nada passa da borda, nenhum botão quebra linha, nenhum marcador aparece cru, toda imagem tem texto alternativo, há um único título principal e a ordem dos títulos não pula níveis.
- **Interação no celular:** o menu abre, fecha e fecha também com Esc, devolvendo o foco ao botão; as perguntas do FAQ abrem; a ordem do teclado começa pelo "Pular para o conteúdo".
- **Lighthouse 12, 15/10/2026:**

| | Desempenho | Acessibilidade | Boas práticas | SEO | Maior elemento visível | Deslocamento de layout |
|---|---|---|---|---|---|---|
| Celular | 100 | 100 | 100 | 100 | 1,4 s | 0 |
| Computador | 100 | 100 | 100 | 100 | 0,3 s | 0 |

- **Tamanho:** a home tem 77 KB, ou 17,9 KB comprimida. A fonte tem 39 KB.
- **Ferramenta:** puppeteer-core controlando o Edge instalado, com tela de celular simulada. O Edge sozinho, sem janela, não desce de 492 px de largura e não serve para testar celular. Os scripts de teste ficaram numa pasta temporária, fora do projeto; na etapa 5 eles entram no projeto como parte do checklist.

---

## 9. Histórico

| Data | O que aconteceu |
|---|---|
| 15/10/2026 | Briefing recebido. Respondidas as perguntas: do zero, diagnóstico em vídeo, fidelidade de 3 meses, sem preço. Foco B |
| 15/10/2026 | Etapa 1 entregue. Logo vetorizado, orca no notebook, proposta de 2 cores e fonte |
| 15/10/2026 | Escolhido o azul, inclusive no logo |
| 15/10/2026 | Etapa 1 aprovada. Etapa 2 entregue e aprovada |
