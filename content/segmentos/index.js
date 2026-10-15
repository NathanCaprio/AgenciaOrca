// Lista de segmentos. Para criar um segmento novo, crie o arquivo e importe aqui.

import distribuidoras from './distribuidoras-e-atacados.js';

export const segmentos = [distribuidoras];
export const segmentosAtivos = segmentos.filter((s) => s.ativo);
