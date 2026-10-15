// Montagem de HTML com template strings.
// Todo valor interpolado é escapado, e os marcadores [[PREENCHER]] / [[CONFIRMAR]]
// viram um destaque amarelo. Use raw() só para HTML que o próprio código gerou.

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (valor) => String(valor).replace(/[&<>"']/g, (c) => ESCAPES[c]);

class Raw {
  constructor(valor) { this.valor = valor; }
  toString() { return this.valor; }
}
export const raw = (valor) => new Raw(String(valor));

export const MARCADOR = /\[\[(PREENCHER|CONFIRMAR)(?::\s*([^\]]*))?\]\]/g;

function marcarPendencias(textoEscapado) {
  return textoEscapado.replace(MARCADOR, (_, tipo, nota) => {
    const rotulo = tipo === 'PREENCHER' ? (nota || 'preencher') : `confirmar${nota ? `: ${nota}` : ''}`;
    return `<mark class="pendente" data-tipo="${tipo.toLowerCase()}">${rotulo}</mark>`;
  });
}

function converter(valor) {
  if (valor === null || valor === undefined || valor === false) return '';
  if (valor instanceof Raw) return valor.valor;
  if (Array.isArray(valor)) return valor.map(converter).join('');
  return marcarPendencias(esc(valor));
}

export function html(partes, ...valores) {
  let saida = partes[0];
  valores.forEach((valor, i) => { saida += converter(valor) + partes[i + 1]; });
  return raw(saida);
}

// Valor para atributos (href, alt...): escapa, sem destaque de pendência.
export const attr = (valor) => raw(esc(String(valor ?? '').replace(MARCADOR, '').trim()));

export const temPendencia = (valor) => typeof valor === 'string' && /\[\[(PREENCHER|CONFIRMAR)/.test(valor);
