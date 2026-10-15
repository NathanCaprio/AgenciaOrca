// Home: monta as seções a partir de content/home.js.
import site from '../../content/site.js';
import home from '../../content/home.js';
import { segmentosAtivos } from '../../content/segmentos/index.js';
import { html, attr } from './html.js';
import { icone } from './icones.js';
import { pagina, botaoWhatsApp, botaoDiagnostico, svgMarca } from './layout.js';

function topo() {
  const versao = home.topo.versoes[home.topo.versaoAtiva];
  return html`
<section class="hero" aria-labelledby="hero-titulo">
  <div class="container hero__grade">
    <div class="hero__texto">
      <h1 id="hero-titulo">${versao.titulo}</h1>
      <p class="hero__sub">${versao.subtitulo}</p>
      <div class="botoes">
        ${botaoWhatsApp({ posicao: 'topo' })}
        ${botaoDiagnostico({ posicao: 'topo' })}
      </div>
      <p class="hero__nota">${icone('check')}<span>${home.topo.notaDiagnostico}</span></p>
      <p class="hero__confianca">${icone('local')}<span>${site.cidade} · ${site.atendimento}</span></p>
    </div>
    <div class="hero__arte">${svgMarca('orca-notebook.svg', 'hero__orca')}</div>
  </div>
</section>`;
}

function dores() {
  const d = home.dores;
  return html`
<section class="secao secao--suave" aria-labelledby="dores-titulo">
  <div class="container">
    <h2 id="dores-titulo" class="titulo-secao cabeca-secao">${d.titulo}</h2>
    <ul class="grade grade--3" role="list">
      ${d.itens.map((item) => html`
      <li class="cartao">
        <span class="cartao__icone">${icone(item.icone)}</span>
        <h3 class="cartao__titulo">${item.titulo}</h3>
        <p>${item.texto}</p>
      </li>`)}
    </ul>
    <p class="dores__fecho">${d.fecho}</p>
  </div>
</section>`;
}

const itemLista = (item) => html`<li>${icone('check')}<span>${item.texto ?? item}${item.explica ? html` <span class="explica">(${item.explica})</span>` : ''}</span></li>`;

function plano() {
  const p = home.plano;
  return html`
<div class="plano" role="group" aria-labelledby="plano-titulo">
  <div class="plano__cabeca">
    <h3 id="plano-titulo" class="plano__titulo">${p.titulo}</h3>
    <p class="plano__nome">${p.nome}</p>
    <p class="plano__desc">${p.descricao}</p>
  </div>
  <div class="plano__listas">
    <div>
      <h4 class="plano__rotulo">O plano inclui</h4>
      <ul class="lista-check" role="list">${p.inclui.map(itemLista)}</ul>
    </div>
    <div>
      <h4 class="plano__rotulo">Condições</h4>
      <ul class="lista-check" role="list">${p.condicoes.map(itemLista)}</ul>
    </div>
  </div>
  <div class="botoes">${botaoDiagnostico({ posicao: 'plano', classe: 'botao botao--primario' })}</div>
</div>`;
}

function servicos() {
  const s = home.servicos;
  return html`
<section class="secao" id="servicos" aria-labelledby="servicos-titulo">
  <div class="container">
    <header class="cabeca-secao">
      <h2 id="servicos-titulo" class="titulo-secao">${s.titulo}</h2>
      <p class="sub-secao">${s.subtitulo}</p>
    </header>
    <div class="grade grade--3">
      ${s.blocos.map((b) => html`
      <article class="servico">
        <span class="servico__icone">${icone(b.icone)}</span>
        <h3 class="servico__titulo">${b.titulo}</h3>
        <p class="servico__chamada">${b.chamada}</p>
        <ul class="lista-check" role="list">${b.itens.map(itemLista)}</ul>
        ${b.link ? html`<a class="link-seta" href="${b.link.href}"><span>${b.link.texto}</span>${icone('seta')}</a>` : ''}
      </article>`)}
    </div>
    ${plano()}
  </div>
</section>`;
}

function equipe() {
  const e = home.equipe;
  return html`
<section class="secao secao--suave" aria-labelledby="equipe-titulo">
  <div class="container dividido">
    <h2 id="equipe-titulo" class="titulo-secao">${e.titulo}</h2>
    <ul class="motivos" role="list">
      ${e.itens.map((item) => html`
      <li class="motivo">
        <span class="motivo__icone">${icone(item.icone)}</span>
        <div>
          <h3 class="motivo__titulo">${item.titulo}</h3>
          <p>${item.texto}</p>
        </div>
      </li>`)}
    </ul>
  </div>
</section>`;
}

function videos() {
  const v = home.videos;
  const cards = v.itens.length
    ? v.itens.map((reel) => html`
      <li class="reel">
        <a class="reel__capa" href="${attr(reel.url)}" target="_blank" rel="noopener" data-evento="video">
          <img src="${attr(reel.capa)}" alt="${attr(reel.cliente ? `Reel: ${reel.cliente}` : 'Reel gravado pela Orca')}" width="360" height="640" loading="lazy" decoding="async">
          <span class="reel__play">${icone('play')}</span>
          ${reel.cliente ? html`<span class="reel__legenda">${reel.cliente}</span>` : ''}
        </a>
      </li>`)
    : Array.from({ length: v.vagas }, (_, i) => html`
      <li class="reel reel--vago">
        <div class="reel__capa">
          <span class="reel__play">${icone('play')}</span>
          <span class="reel__legenda">${`Reel ${i + 1}: [[PREENCHER: link]]`}</span>
        </div>
      </li>`);
  return html`
<section class="secao" aria-labelledby="videos-titulo">
  <div class="container">
    <header class="cabeca-secao">
      <h2 id="videos-titulo" class="titulo-secao">${v.titulo}</h2>
      <p class="sub-secao">${v.subtitulo}</p>
    </header>
  </div>
  <div class="reels-rolagem">
    <ul class="reels container" role="list">${cards}</ul>
  </div>
  <div class="container">
    <a class="botao botao--secundario reels__mais" href="${attr(v.botao.href)}" target="_blank" rel="noopener">${icone('instagram')}<span>${v.botao.texto}</span></a>
  </div>
</section>`;
}

function comoFunciona() {
  const c = home.comoFunciona;
  return html`
<section class="secao secao--suave" id="como-funciona" aria-labelledby="como-titulo">
  <div class="container">
    <h2 id="como-titulo" class="titulo-secao cabeca-secao">${c.titulo}</h2>
    <ol class="passos" role="list">
      ${c.passos.map((passo, i) => html`
      <li class="passo">
        <span class="passo__numero" aria-hidden="true">${i + 1}</span>
        <h3 class="passo__titulo">${passo.titulo}</h3>
        <p>${passo.texto}</p>
      </li>`)}
    </ol>
    <div class="como__acao">
      ${botaoDiagnostico({ posicao: 'como-funciona', classe: 'botao botao--primario' })}
      <p class="nota-icone">${icone('relogio')}<span>${c.nota}</span></p>
    </div>
  </div>
</section>`;
}

// Ilustração da loja B2B (decorativa, sem dados reais).
function mockLoja() {
  const produto = (largura, qtd) => html`
      <li><span class="mock__img"></span><span class="mock__linhas"><i style="width:${largura}%"></i><i></i></span><span class="mock__qtd"><b>−</b><em>${qtd}</em><b>+</b></span></li>`;
  return html`
  <div class="mock" aria-hidden="true">
    <div class="mock__janela"><span></span><span></span><span></span></div>
    <ul class="mock__produtos">${produto(82, 12)}${produto(64, 6)}${produto(74, 24)}</ul>
    <div class="mock__minimo"><span>Falta pouco para o pedido mínimo</span><span class="mock__barra"><i></i></span></div>
    <span class="mock__enviar">${icone('whatsapp')}Enviar pedido pelo WhatsApp</span>
  </div>`;
}

function demo() {
  const d = home.demo;
  const url = site.lojaDemo.url;
  const botao = url
    ? html`<a class="botao botao--primario" href="${attr(url)}" target="_blank" rel="noopener" data-evento="loja-demo" data-posicao="home">${d.botao}${icone('externo')}</a>`
    : html`<span class="botao botao--primario botao--inativo" aria-disabled="true">${d.botao}</span><mark class="pendente" data-tipo="preencher">URL da loja demo</mark>`;
  return html`
<section class="secao" aria-labelledby="demo-titulo">
  <div class="container demo">
    <div class="demo__texto">
      <p class="etiqueta">${d.etiqueta}</p>
      <h2 id="demo-titulo" class="titulo-secao">${d.titulo}</h2>
      <p class="sub-secao">${d.texto}</p>
      <div class="botoes">${botao}</div>
      <p class="demo__nota">${d.nota}</p>
    </div>
    <div class="demo__arte">${mockLoja()}</div>
  </div>
  ${caso()}
</section>`;
}

function caso() {
  const c = home.caso;
  if (!c.ativo) return '';
  return html`
  <div class="container">
    <article class="caso" aria-labelledby="caso-titulo">
      <p class="etiqueta">Caso</p>
      <h2 id="caso-titulo" class="titulo-secao">${c.titulo}</h2>
      <p>${c.antes}</p>
      <p>${c.feito}</p>
      ${c.prints.length ? html`<div class="caso__prints">${c.prints.map((p) => html`<img src="${attr(p.src)}" alt="${attr(p.alt)}" loading="lazy" decoding="async">`)}</div>` : ''}
      ${c.botao.href ? html`<a class="link-seta" href="${attr(c.botao.href)}" target="_blank" rel="noopener">${c.botao.texto}${icone('externo')}</a>` : ''}
    </article>
  </div>`;
}

function segmentos() {
  if (!segmentosAtivos.length) return '';
  return html`
<section class="secao secao--colada" aria-label="Páginas por segmento">
  <div class="container segmentos ${segmentosAtivos.length > 1 ? 'segmentos--grade' : ''}">
    ${segmentosAtivos.map((s) => html`
    <div class="segmento">
      <div>
        <h2 class="segmento__titulo">${s.chamadaHome.titulo}</h2>
        <p>${s.chamadaHome.texto}</p>
      </div>
      <a class="botao botao--primario" href="/${s.slug}">${s.chamadaHome.botao}${icone('seta')}</a>
    </div>`)}
  </div>
</section>`;
}

function quemSomos() {
  const q = home.quemSomos;
  return html`
<section class="secao secao--suave" id="quem-somos" aria-labelledby="quem-titulo">
  <div class="container">
    <header class="cabeca-secao">
      <h2 id="quem-titulo" class="titulo-secao">${q.titulo}</h2>
      <p class="sub-secao">${q.intro}</p>
    </header>
    <div class="grade grade--2">
      ${q.pessoas.map((p) => html`
      <article class="pessoa">
        <div class="pessoa__foto">
          ${p.foto
            ? html`<img src="${attr(p.foto)}" alt="${attr(p.nome)}" width="640" height="480" loading="lazy" decoding="async">`
            : html`<span class="pessoa__iniciais" aria-hidden="true">${p.iniciais}</span><mark class="pendente" data-tipo="preencher">foto</mark>`}
        </div>
        <div class="pessoa__texto">
          <h3 class="pessoa__nome">${p.nome}</h3>
          <p class="pessoa__papel">${p.papel}</p>
          <p>${p.bio}</p>
        </div>
      </article>`)}
    </div>
    ${q.porQueOrca ? html`<p class="porque-orca">${svgMarca('orca-simbolo.svg', 'porque-orca__simbolo')}<span>${q.porQueOrca}</span></p>` : ''}
  </div>
</section>`;
}

function faq() {
  const f = home.faq;
  return html`
<section class="secao" id="duvidas" aria-labelledby="faq-titulo">
  <div class="container faq">
    <h2 id="faq-titulo" class="titulo-secao">${f.titulo}</h2>
    <div class="faq__lista">
      ${f.perguntas.map((item) => html`
      <details class="faq__item">
        <summary><span>${item.pergunta}</span>${icone('mais', 'icone faq__icone')}</summary>
        <div class="faq__resposta"><p>${item.resposta}</p></div>
      </details>`)}
    </div>
  </div>
</section>`;
}

function final() {
  const f = home.final;
  return html`
<section class="secao secao--escura final" aria-labelledby="final-titulo">
  <div class="container final__conteudo">
    ${svgMarca('orca-simbolo-branco.svg', 'final__simbolo')}
    <h2 id="final-titulo" class="titulo-secao">${f.titulo}</h2>
    <p class="final__texto">${f.texto}</p>
    <div class="botoes botoes--centro">
      ${botaoDiagnostico({ posicao: 'final', classe: 'botao botao--primario' })}
      ${botaoWhatsApp({ posicao: 'final', classe: 'botao botao--secundario' })}
    </div>
  </div>
</section>`;
}

export function renderHome() {
  return pagina({
    seo: home.seo,
    caminho: '/',
    corpo: [topo(), dores(), servicos(), equipe(), videos(), comoFunciona(), demo(), segmentos(), quemSomos(), faq(), final()],
  });
}
