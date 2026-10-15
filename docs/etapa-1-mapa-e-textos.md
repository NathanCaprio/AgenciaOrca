# Etapa 1 · Mapa do site e textos

Agência Orca · somosorca.com.br · para aprovação · 15/10/2026

## Como revisar

- **[PREENCHER: …]** falta um dado que só você tem.
- **[CONFIRMAR: …]** escrevi supondo algo. Confirme ou corrija.
- Pode editar direto neste arquivo. Depois de aprovados, os textos vão para os arquivos de configuração do site, e é lá que você vai editar no dia a dia.
- A lista completa do que falta está na seção 5.

## Decisões fechadas

| Tema | Decisão |
|---|---|
| Foco | B: home ampla para pequenas e médias empresas, com uma página por segmento, começando por distribuidoras e atacados |
| Diagnóstico gratuito | Vídeo gravado analisando o site, o Google Meu Negócio e os anúncios dos concorrentes, enviado pelo WhatsApp |
| Fidelidade | Plano mensal com mínimo de 3 meses; depois, mês a mês |
| Preço | Não aparece no site. Vem fechado na proposta |
| Base técnica | Do zero: HTML/CSS/JS sem framework + Node/Express |
| Caso Atacado Polvo | Texto pronto, seção desligada até você confirmar a autorização e mandar os prints |

---

## 1. Mapa do site

| Página | URL | Para que serve | Ação principal | Aparece no Google |
|---|---|---|---|---|
| Home | `/` | Apresentar a Orca a qualquer PME e puxar a conversa | WhatsApp e diagnóstico | Sim |
| Distribuidoras e atacados | `/distribuidoras-e-atacados` | Vender a loja B2B para quem vende no atacado | WhatsApp, diagnóstico e loja demo | Sim |
| Escolas, clínicas e condomínios | `/escolas`, `/clinicas`, `/condominios` | Mesmo modelo da página de atacado, pronto e desligado | — | Não, até ligar |
| Diagnóstico gratuito | `/diagnostico-gratuito` | Formulário curto | Enviar o formulário | Sim |
| Obrigado | `/obrigado` | Confirmar o envio e dizer o próximo passo | WhatsApp | Não |
| Política de privacidade | `/politica-de-privacidade` | LGPD e cookies | — | Sim |
| Página não encontrada | qualquer endereço errado | Devolver a pessoa para a home | Voltar ou WhatsApp | Não |
| Painel de leads | `/painel` | Ver os leads com a origem e baixar em planilha (interno, com senha) [CONFIRMAR: quer o painel?] | — | Não |

**Em todas as páginas:** cabeçalho com logo e botão de WhatsApp, botão flutuante de WhatsApp, aviso de cookies na primeira visita e rodapé.

**Arquivos técnicos:** `sitemap.xml` e `robots.txt`.

### Para onde vai cada botão

- **Falar no WhatsApp:** abre o WhatsApp com uma mensagem pronta, diferente em cada página. Assim você já sabe de onde a pessoa veio.
- **Quero meu diagnóstico gratuito:** leva para `/diagnostico-gratuito`, guardando a página de origem e os UTMs (UTM: etiqueta no link que diz de qual anúncio ou post a pessoa veio).

| Página | Mensagem pronta do WhatsApp |
|---|---|
| Home e demais páginas | Oi! Vim pelo site da Orca e quero entender como vocês podem ajudar minha empresa. |
| Distribuidoras e atacados | Oi! Tenho uma distribuidora/atacado e quero saber mais sobre a loja B2B. |
| Obrigado | Oi! Acabei de pedir o diagnóstico gratuito pelo site. |

---

## 2. Home

**Título da aba e do Google:** Agência Orca | Site, loja, vídeo e anúncios em Porto Alegre
**Descrição no Google:** Loja virtual, vídeo e anúncios no Google e na Meta feitos pela mesma equipe. Peça um diagnóstico gratuito. Porto Alegre/RS, atendimento para todo o Brasil.

### 2.1 Cabeçalho

- Logo: símbolo + "orca" (leva para a home)
- Menu: Serviços · Como funciona · Atacado · Quem somos · Dúvidas
- Botão: **Falar no WhatsApp**
- No celular: logo, botão "WhatsApp" e menu.

### 2.2 Topo: escolha uma das 3 versões

**Versão A · a sua frase**

> **Sua empresa vendendo online: loja, vídeo e anúncios feitos pela mesma equipe.**
>
> A gente monta seu site ou sua loja virtual, grava os vídeos e cuida dos anúncios no Google e no Instagram. Você fala com uma equipe só, pelo WhatsApp.

**Versão B · o caminho até o cliente (recomendada)**

> **Do anúncio ao cliente no seu WhatsApp, com uma equipe só.**
>
> O anúncio aparece para quem procura o que você vende. O vídeo mostra por que escolher você. O site leva a pessoa direto para o seu WhatsApp. A gente faz as três partes.

**Versão C · sem três fornecedores**

> **Loja, vídeo e anúncio sem contratar três empresas.**
>
> Somos uma dupla de Porto Alegre: um faz o site, a loja e os anúncios; o outro grava os vídeos. Você fala direto com quem faz, pelo WhatsApp.

Por que recomendo a B: ela mostra como as três partes se ligam, em vez de só dizer que é tudo junto, e termina no WhatsApp, que é onde o seu cliente decide. Na página de atacado, a mesma ideia vira "o pedido chega pronto no seu WhatsApp".

**Igual nas três versões:**

- Botões: **Falar no WhatsApp** · **Quero meu diagnóstico gratuito**
- Abaixo dos botões: Diagnóstico gratuito: um vídeo analisando seu site, seu perfil no Google e os anúncios dos seus concorrentes. Sem compromisso.
- Linha de confiança: Porto Alegre/RS · Atendimento online para todo o Brasil

### 2.3 Dores

**Alguma dessas é a sua?**

1. **Você vende pelo WhatsApp e se perde nos pedidos.**
   Áudio, foto, lista pela metade. Alguém digita tudo de novo, erra a quantidade, e o pedido de ontem some no meio da conversa.
2. **Você tem site, mas ninguém visita.**
   Ele não aparece no Google, não tem botão de WhatsApp ou não diz por que comprar de você.
3. **Você paga anúncio e não vê cliente.**
   O dinheiro sai todo mês, mas ninguém sabe dizer quantas pessoas chamaram ou compraram por causa dele.

Fecho: Dá para resolver as três. E sem contratar três empresas diferentes.

### 2.4 Serviços

**O que a gente faz**
Dá para contratar uma parte só ou as três juntas.

**Sites e lojas virtuais**
Para ser encontrado e receber pedidos.

- Site ou loja feitos primeiro para o celular.
- Pronto para vender pelo WhatsApp: botão em todas as páginas e pedido que chega montado.
- Especialidade: loja B2B para atacado na Tray. (B2B: venda de empresa para empresa.)
- Estrutura para o Google entender o seu site. (SEO: ajustes para aparecer nas buscas.)
- Medição desde o primeiro dia, para saber de onde vem cada visita.
- Link: Tem distribuidora ou atacado? Veja a loja B2B →

**Vídeo**
Para mostrar o que você vende do jeito que é.

- Reels para o Instagram. (Reels: vídeos verticais curtos.)
- Vídeo institucional: quem é a sua empresa e por que confiar nela.
- Vídeos de produto para a loja, o catálogo e os anúncios.
- Gravado com celular, com qualidade profissional, no seu dia a dia, sem montar estúdio.
- Feito pelo João Rossoni, da Rossoni Films.

[CONFIRMAR com o João: roteiro e edição estão inclusos?]

**Anúncios no Google e na Meta**
Para quem já procura o que você vende.

- Google: para quem pesquisa o seu produto ou serviço.
- Meta: Instagram e Facebook, para quem tem o perfil de quem compra de você.
- Remarketing: anúncio para quem já visitou sua loja.
- Medição configurada antes de gastar o primeiro real: Google Analytics, Pixel da Meta e conversões. (Conversão: a ação que importa, como chamar no WhatsApp ou enviar um pedido.)
- Relatório mensal sem tecniquês: quanto foi investido, quantas pessoas chamaram e o que vamos ajustar.
- A verba dos anúncios é paga direto ao Google e à Meta, no cartão da sua empresa. [CONFIRMAR]

### 2.5 Plano mensal

**Ou as três partes juntas, num plano mensal**

Plano Orca [CONFIRMAR: nome]
Site ou loja com ajustes todo mês, vídeos novos e anúncios rodando com medição. Um relatório por mês e uma equipe para chamar quando precisar.

O plano inclui:

- Ajustes e melhorias no site ou na loja [PREENCHER: limite por mês, se houver]
- [PREENCHER: quantidade] vídeos por mês
- Gestão dos anúncios no Google e na Meta
- Relatório mensal explicado em português claro

Condições:

- Contrato mínimo de 3 meses. Depois, mês a mês.
- Preço fechado na proposta, depois do diagnóstico.

Botão: **Quero meu diagnóstico gratuito**

### 2.6 Por que uma equipe só

**Por que uma equipe só?**

1. **Ninguém empurra o problema para o outro.**
   Se a venda não vem, não existe "a culpa é do site" ou "é do anúncio". As duas partes são nossas. A gente resolve.
2. **Tudo é feito para funcionar junto.**
   O vídeo é gravado pensando no anúncio. O anúncio leva para uma página pronta para receber a visita. E a loja já manda o pedido para o seu WhatsApp.
3. **Você fala com quem faz.**
   Sem atendente no meio. Você fala direto com o Nathan e com o João.

### 2.7 Vídeos

**Vídeos gravados com celular**
Reels, institucionais e vídeos de produto feitos pelo João, da Rossoni Films. Toque para assistir.

[PREENCHER: de 3 a 6 links de Reels. Para cada um, diga se pode mostrar o nome do cliente.]

Botão: **Ver mais no @rossonifilms**

### 2.8 Como funciona

**Como funciona**

1. **Diagnóstico gratuito**
   Você preenche um formulário curto. A gente grava um vídeo analisando seu site, seu Google Meu Negócio e os anúncios dos seus concorrentes, e manda pelo WhatsApp.
2. **Proposta**
   Você recebe o que fazer primeiro, o prazo e o preço fechado. Se não fizer sentido, tudo bem: o diagnóstico continua seu.
3. **Implantação**
   A gente monta o site ou a loja, grava os vídeos e configura a medição e os anúncios. Você aprova antes de ir ao ar.
4. **Acompanhamento mensal**
   Todo mês, um relatório simples: quanto foi investido, quantas pessoas chamaram e o que muda no mês seguinte.

Abaixo: Primeira resposta em até 24 h úteis.
Botão: **Quero meu diagnóstico gratuito**

### 2.9 Veja funcionando

**Loja B2B de demonstração**

**Teste uma loja B2B funcionando**
Montamos uma loja de atacado com produtos fictícios. Mude as quantidades, veja a barra de pedido mínimo e veja como o pedido sai pronto para o WhatsApp.

- Botão: **Abrir a loja de demonstração** → [PREENCHER: URL] (abre em outra aba)
- Nota pequena: Produtos e preços fictícios. Nenhum pedido é cobrado.

[CONFIRMAR: o botão de WhatsApp da demo manda para o número da Orca? Se mandar, cada teste vira uma conversa com você, e o texto pode convidar a "enviar um pedido de teste".]

**Caso Atacado Polvo** (desligado até a autorização)

**Atacado Polvo: loja B2B na Tray**

- Antes: [PREENCHER: como os pedidos chegavam, em uma frase].
- O que a gente fez: loja B2B na Tray com quantidade no cartão do produto, barra de pedido mínimo, pedido enviado pelo WhatsApp e barra de compra fixa no celular. [CONFIRMAR: quais recursos estão nessa loja; teve vídeo ou anúncio?]
- Prints: [PREENCHER: de 3 a 5 prints: lista de produtos, carrinho com a barra, pedido chegando no WhatsApp, versão de celular]
- Botão: **Ver a loja do Atacado Polvo** [PREENCHER: URL, se puder linkar]
- Resultados: ficam de fora até você mandar números medidos.

### 2.10 Segmentos

**Tem distribuidora ou atacado?**
Fizemos uma página só para você: loja B2B com pedido mínimo, quantidade direto no produto e pedido enviado pelo WhatsApp.
Botão: **Ver a loja B2B para atacado**

(Quando escolas, clínicas e condomínios forem ligados, este bloco vira uma lista de segmentos sozinho.)

### 2.11 Quem somos

**Quem faz a Orca**
Somos dois, em Porto Alegre. Você fala direto com quem faz o trabalho.

**Nathan Caprio** · Sites, lojas virtuais e anúncios
Monta sites e lojas virtuais e cuida dos anúncios no Google e na Meta. Especialista em lojas B2B para atacado na Tray. [PREENCHER: uma frase sua, ex.: desde quando faz isso ou o que mais gosta de resolver.]
[PREENCHER: foto]

**João Rossoni** · Vídeo
Grava vídeo profissional com celular: Reels, institucionais e vídeos de produto. É da Rossoni Films (@rossonifilms). [PREENCHER: uma frase dele.]
[PREENCHER: foto]

Opcional: Por que Orca? Orcas trabalham em grupo, e cada uma sabe o seu papel. A gente também.

### 2.12 Perguntas frequentes

**Perguntas que todo mundo faz**

**Já vendo pelo WhatsApp. Por que eu precisaria de site ou loja?**
Você continua vendendo pelo WhatsApp. O site só organiza o caminho até ele: quem ainda não te conhece tem onde te achar, entende o que você faz e chega na conversa sabendo o que quer. Se você vende produto, a loja vai além: o cliente monta o pedido sozinho e ele chega pronto no seu WhatsApp. Menos digitação e menos erro.

**Isso não é caro?**
Depende do que a sua empresa precisa. Por isso o preço vem na proposta, fechado, antes de começar. Sem cobrança surpresa. Dá para começar por uma parte só, como a loja, e somar o resto depois. E o diagnóstico é gratuito: você vê o que precisa antes de decidir.

**Meu sobrinho faz site.**
Que bom ter quem ajude. A diferença está no que vem junto: medição para saber de onde vem cada cliente, loja pronta para receber pedido no WhatsApp, vídeo e anúncio pensados juntos, e alguém para responder quando algo der errado. Se quiser, o diagnóstico avalia o que já existe, e você decide com calma.

**Já tentei e não deu certo.**
Normalmente o problema está em um destes pontos: anúncio sem medição (ninguém sabe o que funcionou), site que não leva para o WhatsApp, ou cada parte feita por alguém diferente. O diagnóstico mostra o que aconteceu no seu caso antes de você gastar de novo.

**Tem fidelidade?**
No plano mensal, o contrato mínimo é de 3 meses. É o tempo de montar, medir e ajustar os anúncios com dados reais. Depois, segue mês a mês. [PREENCHER: aviso prévio para cancelar, ex.: 30 dias.] Site, loja e vídeo avulsos são contratados por projeto. [CONFIRMAR]

Extras sugeridos (corte o que não quiser):

**Vocês garantem resultado?**
Não. Resultado de anúncio depende do seu produto, do preço, da concorrência e do atendimento. Desconfie de quem garante. O nosso compromisso é medir e te mostrar, todo mês, o que está funcionando e o que vai mudar.

**O site, a loja e as contas ficam no meu nome?**
Sim. Domínio, loja e contas de anúncio ficam no nome da sua empresa. Se um dia você sair, leva tudo. [CONFIRMAR]

**Vocês atendem fora de Porto Alegre?**
Sim. Site, loja e anúncios são feitos online, para todo o Brasil. [CONFIRMAR: e a gravação de vídeo fora de Porto Alegre, como funciona?]

### 2.13 Chamada final

**Quer saber o que melhorar primeiro?**
Peça o diagnóstico gratuito. Em até 24 h úteis a gente responde no WhatsApp, e o vídeo com a análise do seu site, do seu Google e dos seus concorrentes chega em até [PREENCHER: prazo]. Sem compromisso.

Botões: **Quero meu diagnóstico gratuito** · **Falar no WhatsApp**

### 2.14 Rodapé

- Símbolo + "orca"
- Site, loja virtual, vídeo e anúncios para pequenas e médias empresas.
- WhatsApp: [PREENCHER: número]
- E-mail: [PREENCHER: e-mail]
- Instagram: @agenciaorca · Vídeos: @rossonifilms
- Porto Alegre/RS · Atendimento online para todo o Brasil
- CNPJ: [PREENCHER]
- Links: Diagnóstico gratuito · Distribuidoras e atacados · Política de privacidade · Preferências de cookies
- © 2026 Agência Orca

### 2.15 Botão flutuante de WhatsApp

- Ícone do WhatsApp no canto de baixo, à direita, em todas as páginas.
- Para leitor de tela: "Falar no WhatsApp".
- Usa a mensagem pronta da página.
- Some no formulário do diagnóstico, no celular, para não cobrir o botão de enviar.

---

## 3. Distribuidoras e atacados

**Título da aba e do Google:** Loja B2B para distribuidora e atacado na Tray | Agência Orca
**Descrição no Google:** Loja virtual B2B com pedido mínimo, quantidade direto no produto e pedido enviado pelo WhatsApp. Diagnóstico gratuito. Atendimento para todo o Brasil.
**Mensagem do WhatsApp:** Oi! Tenho uma distribuidora/atacado e quero saber mais sobre a loja B2B.

### 3.1 Topo

Etiqueta acima do título: Para distribuidoras e atacados

> **Seu cliente monta o pedido sozinho. Ele chega pronto no seu WhatsApp.**
>
> Loja B2B na Tray com pedido mínimo, quantidade direto no produto e catálogo ligado ao seu sistema. (B2B: venda de empresa para empresa.)

- Botões: **Falar no WhatsApp** · **Quero meu diagnóstico gratuito**
- Link: Ou teste a loja de demonstração →

### 3.2 Dores

**Quem vende no atacado pelo WhatsApp conhece isso**

1. **Pedido chega picado.**
   Foto da prateleira, áudio longo, lista sem quantidade. Alguém tem que montar tudo de novo.
2. **Vendedor vira digitador.**
   Em vez de vender, a equipe passa o dia copiando pedido para o sistema.
3. **Pedido abaixo do mínimo.**
   Você só descobre na hora de separar. Aí é mais uma conversa para explicar.
4. **Catálogo velho circulando.**
   PDF com preço antigo e produto que já acabou, rodando nos grupos de clientes.

### 3.3 Recursos da loja

**Uma loja feita para pedido de atacado**
Recursos que a gente já colocou para funcionar em loja B2B na Tray.

1. **Quantidade no cartão do produto**
   O cliente escolhe a quantidade direto na lista, sem abrir produto por produto. Quem compra muitos itens monta o pedido rolando a tela.
2. **Barra de pedido mínimo no carrinho**
   Uma barra mostra quanto falta para chegar ao mínimo. O cliente completa sozinho, e ninguém precisa avisar. (Pedido mínimo: o menor valor que você aceita por pedido.)
3. **Botão "Enviar pedido pelo WhatsApp"**
   O pedido chega no seu WhatsApp organizado, com produtos, quantidades e total. Seu vendedor só confere e confirma.
4. **Link do carrinho para compartilhar**
   O vendedor monta o carrinho e manda o link para o cliente. Ou o comprador manda para o sócio aprovar antes de fechar.
5. **Barra de compra fixa no celular**
   No celular, o total e o botão de finalizar ficam sempre à vista no rodapé da tela. O cliente não precisa procurar o carrinho.
6. **Catálogo integrado ao ERP**
   Produtos, preços e estoque vêm do seu sistema de gestão. Mudou lá, muda na loja. (ERP: o sistema onde você controla estoque, notas e financeiro.) [CONFIRMAR: o que sincroniza e com quais ERPs vocês já integraram, ex.: Bling, Tiny.]

### 3.4 Loja de demonstração

**Teste antes de conversar**
Abra a loja de demonstração, com produtos fictícios, e faça um pedido do começo ao fim.
Botão: **Abrir a loja de demonstração** → [PREENCHER: URL]

### 3.5 Caso Atacado Polvo

Mesmo bloco da home (2.9), desligado até a autorização.

### 3.6 Loja, vídeo e anúncio juntos

**Loja pronta é metade. A outra metade é cliente entrando nela.**

- **Vídeo de produto:** para a loja, o catálogo e o Instagram. O lojista vê o produto de verdade antes de pedir.
- **Anúncio no Google:** para quem pesquisa "distribuidora de [seu produto]" na sua região.
- **Remarketing:** anúncio para o lojista que visitou a loja e não pediu.

Tudo medido: você vê quantos visitaram, quantos chamaram e quantos enviaram pedido.

### 3.7 Como funciona

1. **Diagnóstico gratuito**
   A gente olha seu site ou Instagram, seu Google Meu Negócio e os anúncios das distribuidoras concorrentes, e manda um vídeo pelo WhatsApp.
2. **Proposta**
   O que fazer primeiro, o prazo e o preço fechado.
3. **Implantação**
   Montamos a loja na Tray, ligamos ao seu ERP e configuramos o pedido pelo WhatsApp. Você testa antes de abrir para os clientes.
4. **Acompanhamento mensal**
   Relatório simples: visitas, pedidos enviados e o que muda no mês seguinte.

### 3.8 Perguntas frequentes

**Meu cliente é das antigas. Ele não vai usar loja.**
Ele não precisa largar o WhatsApp. A loja termina no WhatsApp: ele monta o pedido e manda na mesma conversa de sempre. E o seu vendedor pode montar o carrinho e mandar o link pronto.

**Integra com o meu sistema?**
Depende do sistema. [PREENCHER: ERPs que vocês já integraram.] No diagnóstico a gente confirma o seu.

**Já tenho loja na Tray. Dá para colocar esses recursos nela?**
[CONFIRMAR: dá? Se sim: "Dá. A gente avalia a sua loja no diagnóstico e diz o que entra."]

**Dá para mostrar preço só para cliente cadastrado?**
[CONFIRMAR: a loja faz isso? E tabela de preço por cliente? Se não, corto a pergunta.]

**Tem fidelidade?**
Mesma resposta da home.

### 3.9 Chamada final

**Quer ver como ficaria a sua loja B2B?**
Peça o diagnóstico gratuito. Em até 24 h úteis a gente responde no WhatsApp. Depois, você recebe um vídeo com o que faríamos na sua loja, olhando também os seus concorrentes.

Botões: **Quero meu diagnóstico gratuito** · **Falar no WhatsApp**

---

## 4. Glossário

Explicações de uma linha, usadas no site todo.

| Termo | Explicação |
|---|---|
| B2B | venda de empresa para empresa |
| Pedido mínimo | o menor valor que você aceita por pedido |
| ERP | o sistema onde você controla estoque, notas e financeiro |
| Remarketing | anúncio para quem já visitou sua loja |
| Pixel da Meta | código no site que conta quem veio do anúncio e o que fez lá |
| Google Analytics | relatório gratuito do Google que mostra quem visita o site e de onde veio |
| Conversão | a ação que importa para você, como chamar no WhatsApp ou enviar um pedido |
| SEO | ajustes para o Google entender e mostrar o seu site nas buscas |
| Google Meu Negócio | seu perfil no Google e no Maps, com endereço, horário e avaliações (hoje o Google chama de Perfil da Empresa) |
| Reels | vídeos verticais curtos do Instagram |
| UTM | etiqueta no link que diz de qual anúncio ou post a pessoa veio |
| Tray | plataforma brasileira de loja virtual |

---

## 5. Pendências

### O que só você tem [PREENCHER]

**Contato e dados legais**

- Número do WhatsApp
- E-mail de contato (e o e-mail que recebe os leads, se for outro)
- CNPJ

**Provas e fotos**

- URL da loja de demonstração
- De 3 a 6 links de Reels, e se pode citar o cliente de cada um
- Fotos reais do Nathan e do João (de preferência trabalhando, com luz natural)
- Atacado Polvo: autorização e de 3 a 5 prints

**Comercial**

- Nome do plano mensal (sugestão: Plano Orca)
- Quantos vídeos por mês entram no plano
- Limite de ajustes no site por mês, se houver
- Aviso prévio para cancelar depois dos 3 meses
- Prazo de entrega do vídeo do diagnóstico
- ERPs que vocês já integraram
- Uma frase de cada um para o "Quem somos"

**Só para a etapa 4 (não trava nada agora)**

- IDs do GA4, do Pixel da Meta e da conversão do Google Ads
- Onde o site vai rodar (qualquer servidor com Node serve; eu recomendo um na etapa 4)

### O que eu supus [CONFIRMAR]

1. A verba dos anúncios é paga direto ao Google e à Meta pelo cliente.
2. Domínio, loja e contas de anúncio ficam no nome do cliente.
3. Vídeo: roteiro e edição estão inclusos. E como funciona gravar fora de Porto Alegre.
4. Site, loja e vídeo avulsos são contratados por projeto, sem mensalidade obrigatória.
5. Quais recursos estão na loja do Atacado Polvo, e se teve vídeo ou anúncio.
6. O que a integração com o ERP sincroniza (produtos, preços, estoque).
7. Atacado: a loja mostra preço só para cliente cadastrado? Tem tabela de preço por cliente?
8. Atacado: dá para colocar os recursos numa loja Tray que já existe?
9. O botão de WhatsApp da loja demo manda para o número da Orca?
10. Painel de leads: você quer? (lista com a origem de cada lead e botão para baixar em planilha)

---

## 6. Próxima etapa

Com estes textos aprovados, a etapa 2 é o layout da home no celular e no computador, já em HTML e CSS. A proposta de logo, cores e fonte está em [`marca/`](../marca/) para você escolher junto.
