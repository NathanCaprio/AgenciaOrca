// Dados gerais da Agência Orca, usados em todas as páginas.
//
// Marcadores nos textos:
//   [[PREENCHER: o que falta]]  dado que ainda não chegou
//   [[CONFIRMAR]] ou [[CONFIRMAR: nota]]  frase escrita a partir de uma suposição
// Eles aparecem destacados em amarelo no site e são listados por `npm run pendencias`.
// Nenhum deles pode ir para o ar.

export default {
  nome: 'Agência Orca',
  dominio: 'https://somosorca.com.br',
  cidade: 'Porto Alegre/RS',
  atendimento: 'Atendimento online para todo o Brasil',
  descricaoCurta: 'Site, loja virtual, vídeo e anúncios para pequenas e médias empresas.',

  whatsapp: {
    // Só dígitos, com 55 e DDD. Ex.: '5551999999999'
    numero: null,
    mensagens: {
      padrao: 'Oi! Vim pelo site da Orca e quero entender como vocês podem ajudar minha empresa.',
      atacado: 'Oi! Tenho uma distribuidora/atacado e quero saber mais sobre a loja B2B.',
      obrigado: 'Oi! Acabei de pedir o diagnóstico gratuito pelo site.',
    },
  },

  email: null,
  cnpj: null,

  instagram: {
    orca: 'agenciaorca',
    video: 'rossonifilms',
  },

  diagnostico: {
    caminho: '/diagnostico-gratuito',
    prazoResposta: '24 h úteis',
    prazoVideo: null, // ex.: '3 dias úteis'
  },

  lojaDemo: {
    url: null,
  },
};
