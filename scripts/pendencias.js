// Lista o que falta antes de publicar: marcadores [[PREENCHER]] / [[CONFIRMAR]] e dados vazios.
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import site from '../content/site.js';
import home from '../content/home.js';

const raiz = fileURLToPath(new URL('..', import.meta.url));
const MARCADOR = /\[\[(PREENCHER|CONFIRMAR)(?::\s*([^\]]*))?\]\]/g;

const arquivos = (pasta) => readdirSync(pasta, { withFileTypes: true }).flatMap((item) =>
  item.isDirectory() ? arquivos(join(pasta, item.name)) : item.name.endsWith('.js') ? [join(pasta, item.name)] : []);

let total = 0;
for (const arquivo of arquivos(join(raiz, 'content'))) {
  readFileSync(arquivo, 'utf8').split('\n').forEach((linha, i) => {
    if (linha.trim().startsWith('//')) return; // comentários explicam os marcadores
    for (const m of linha.matchAll(MARCADOR)) {
      total++;
      console.log(`${relative(raiz, arquivo)}:${i + 1}  ${m[1]}${m[2] ? `: ${m[2]}` : ''}`);
    }
  });
}

const vazios = {
  'whatsapp.numero': site.whatsapp.numero,
  email: site.email,
  cnpj: site.cnpj,
  'diagnostico.prazoVideo': site.diagnostico.prazoVideo,
  'lojaDemo.url': site.lojaDemo.url,
};
home.quemSomos.pessoas.forEach((p) => { vazios[`foto de ${p.nome} (content/home.js)`] = p.foto; });
vazios['Reels (content/home.js, videos.itens)'] = home.videos.itens.length;

for (const [campo, valor] of Object.entries(vazios)) {
  if (!valor) { total++; console.log(`dado vazio: ${campo}`); }
}

console.log(total ? `\n${total} pendência(s). Nada disso pode ir para o ar.` : 'Nenhuma pendência.');
process.exitCode = total ? 1 : 0;
