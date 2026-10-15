// Estrutura comum a todas as páginas: <head>, cabeçalho, rodapé e WhatsApp flutuante.
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import site from '../../content/site.js';
import { html, raw, attr } from './html.js';
import { icone, SIMBOLOS } from './icones.js';

const raiz = (caminho) => fileURLToPath(new URL(`../../${caminho}`, import.meta.url));
const CSS = readFileSync(raiz('src/estilos/site.css'), 'utf8');
// Versão no endereço do script: /assets fica em cache por 1 ano.
const VERSAO_JS = createHash('sha1').update(readFileSync(raiz('public/assets/site.js'))).digest('hex').slice(0, 8);

// SVG da pasta marca/ embutido na página (sem requisição extra), escondido de leitor de tela.
export function svgMarca(arquivo, classe) {
  const svg = readFileSync(raiz(`marca/${arquivo}`), 'utf8').trim();
  return raw(svg
    .replace(/\s(role|aria-label)="[^"]*"/g, '')
    .replace('<svg ', `<svg class="${classe}" aria-hidden="true" focusable="false" `));
}

export function linkWhatsApp(mensagem = site.whatsapp.mensagens.padrao) {
  const numero = site.whatsapp.numero ?? '';
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// data-evento e data-posicao alimentam a medição (etapa 4).
export function botaoWhatsApp({ texto = 'Falar no WhatsApp', posicao, mensagem, classe = 'botao botao--primario' }) {
  return html`<a class="${classe}" href="${attr(linkWhatsApp(mensagem))}" target="_blank" rel="noopener" data-evento="whatsapp" data-posicao="${posicao}">${icone('whatsapp')}<span>${texto}</span></a>`;
}

export function botaoDiagnostico({ texto = 'Quero meu diagnóstico gratuito', posicao, classe = 'botao botao--secundario' }) {
  return html`<a class="${classe}" href="${site.diagnostico.caminho}" data-evento="diagnostico" data-posicao="${posicao}">${texto}</a>`;
}

const MENU = [
  { texto: 'Serviços', href: '/#servicos' },
  { texto: 'Como funciona', href: '/#como-funciona' },
  { texto: 'Atacado', href: '/distribuidoras-e-atacados' },
  { texto: 'Quem somos', href: '/#quem-somos' },
  { texto: 'Dúvidas', href: '/#duvidas' },
];

function cabecalho(mensagem) {
  return html`
<header class="cabecalho">
  <div class="container cabecalho__barra">
    <a class="cabecalho__logo" href="/" aria-label="${site.nome}: página inicial">${svgMarca('orca-logo-horizontal.svg', 'logo')}</a>
    <nav class="menu" id="menu" aria-label="Principal">
      <ul>${MENU.map((item) => html`<li><a href="${item.href}">${item.texto}</a></li>`)}</ul>
    </nav>
    <a class="botao botao--primario botao--pequeno cabecalho__whatsapp" href="${attr(linkWhatsApp(mensagem))}" target="_blank" rel="noopener" data-evento="whatsapp" data-posicao="cabecalho">${icone('whatsapp')}<span class="so-celular">WhatsApp</span><span class="so-computador">Falar no WhatsApp</span></a>
    <button class="cabecalho__abrir" type="button" aria-expanded="false" aria-controls="menu">${icone('menu', 'icone icone--abrir')}${icone('fechar', 'icone icone--fechar')}<span class="sr-only">Menu</span></button>
  </div>
</header>`;
}

function rodape() {
  const p = (valor, nota) => valor ?? `[[PREENCHER: ${nota}]]`;
  const ano = new Date().getFullYear();
  return html`
<footer class="rodape">
  <div class="container rodape__grade">
    <div class="rodape__marca">
      <a href="/" aria-label="${site.nome}: página inicial">${svgMarca('orca-logo-horizontal-branco.svg', 'logo')}</a>
      <p>${site.descricaoCurta}</p>
      <p class="rodape__local">${icone('local')}<span>${site.cidade} · ${site.atendimento}</span></p>
    </div>
    <div>
      <h2 class="rodape__titulo">Contato</h2>
      <ul class="rodape__lista">
        <li><a href="${attr(linkWhatsApp())}" target="_blank" rel="noopener" data-evento="whatsapp" data-posicao="rodape">${icone('whatsapp')}<span>WhatsApp: ${p(site.whatsapp.numero, 'número')}</span></a></li>
        <li>${site.email ? html`<a href="mailto:${site.email}">${icone('email')}<span>${site.email}</span></a>` : html`<span>${icone('email')}<span>E-mail: ${p(null, 'e-mail')}</span></span>`}</li>
        <li><a href="https://www.instagram.com/${site.instagram.orca}/" target="_blank" rel="noopener">${icone('instagram')}<span>@${site.instagram.orca}</span></a></li>
        <li><a href="https://www.instagram.com/${site.instagram.video}/" target="_blank" rel="noopener">${icone('instagram')}<span>Vídeos: @${site.instagram.video}</span></a></li>
      </ul>
    </div>
    <div>
      <h2 class="rodape__titulo">Links</h2>
      <ul class="rodape__lista">
        <li><a href="${site.diagnostico.caminho}" data-evento="diagnostico" data-posicao="rodape">Diagnóstico gratuito</a></li>
        <li><a href="/distribuidoras-e-atacados">Distribuidoras e atacados</a></li>
        <li><a href="/politica-de-privacidade">Política de privacidade</a></li>
        <li><a href="/politica-de-privacidade#cookies">Preferências de cookies</a></li>
      </ul>
    </div>
  </div>
  <div class="container rodape__base">
    <p>© ${ano} ${site.nome}</p>
    <p>CNPJ: ${p(site.cnpj, 'CNPJ')}</p>
  </div>
</footer>`;
}

export function pagina({ seo, caminho = '/', mensagem = site.whatsapp.mensagens.padrao, corpo, classe = '' }) {
  return html`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${attr(seo.titulo)}</title>
<meta name="description" content="${attr(seo.descricao)}">
<meta name="theme-color" content="#FFFFFF">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/nunito-latin-var.woff2" as="font" type="font/woff2" crossorigin>
<style>${raw(CSS)}</style>
<script src="/assets/site.js?v=${VERSAO_JS}" defer></script>
</head>
<body class="${classe}" data-caminho="${caminho}">
${SIMBOLOS}
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
${cabecalho(mensagem)}
<main id="conteudo">
${corpo}
</main>
${rodape()}
<a class="whatsapp-flutuante" href="${attr(linkWhatsApp(mensagem))}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp" data-evento="whatsapp" data-posicao="flutuante">${icone('whatsapp')}</a>
</body>
</html>`.toString();
}
