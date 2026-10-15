// Servidor do site da Agência Orca.
// As páginas são montadas uma vez, na inicialização, a partir dos arquivos de content/.
import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'node:url';
import { renderHome } from './render/home.js';

const raiz = (caminho) => fileURLToPath(new URL(`../${caminho}`, import.meta.url));
const PORTA = Number(process.env.PORT) || 3000;

const paginas = new Map([
  ['/', renderHome()],
]);

const app = express();
app.disable('x-powered-by');
app.use(compression());

app.use('/assets', express.static(raiz('public/assets'), { maxAge: '1y', immutable: true, index: false }));
app.get('/favicon.svg', (req, res) => {
  res.set('Cache-Control', 'public, max-age=604800').type('image/svg+xml').sendFile(raiz('marca/favicon.svg'));
});

app.get(/.*/, (req, res, next) => {
  const html = paginas.get(req.path);
  if (!html) return next();
  res.set('Cache-Control', 'no-cache').type('html').send(html);
});

// Página de erro provisória; a definitiva vem na etapa 3.
app.use((req, res) => {
  res.status(404).type('html').send('<!doctype html><meta charset="utf-8"><title>Página não encontrada</title><p style="font:18px system-ui;padding:40px">Esta página ainda não existe. <a href="/">Voltar para a home</a></p>');
});

app.listen(PORTA, () => {
  const pendencias = [...paginas.values()].reduce((total, html) => total + (html.match(/class="pendente"/g) || []).length, 0);
  console.log(`Site da Orca em http://localhost:${PORTA}`);
  if (pendencias) console.log(`Atenção: ${pendencias} pendência(s) [PREENCHER/CONFIRMAR] nas páginas. Rode "npm run pendencias".`);
});
