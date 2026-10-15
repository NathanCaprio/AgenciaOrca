// Textos da home. Aprovados na etapa 1 (docs/etapa-1-mapa-e-textos.md).
// Marcadores [[PREENCHER]] e [[CONFIRMAR]]: veja content/site.js.

import site from './site.js';

const prazoResposta = site.diagnostico.prazoResposta;
const prazoVideo = site.diagnostico.prazoVideo ?? '[[PREENCHER: prazo do vídeo]]';

export default {
  seo: {
    titulo: 'Agência Orca | Site, loja, vídeo e anúncios em Porto Alegre',
    descricao: 'Loja virtual, vídeo e anúncios no Google e na Meta feitos pela mesma equipe. Peça um diagnóstico gratuito. Porto Alegre/RS, atendimento para todo o Brasil.',
  },

  // Troque a letra para usar outra versão do topo.
  topo: {
    versaoAtiva: 'B',
    versoes: {
      A: {
        titulo: 'Sua empresa vendendo online: loja, vídeo e anúncios feitos pela mesma equipe.',
        subtitulo: 'A gente monta seu site ou sua loja virtual, grava os vídeos e cuida dos anúncios no Google e no Instagram. Você fala com uma equipe só, pelo WhatsApp.',
      },
      B: {
        titulo: 'Do anúncio ao cliente no seu WhatsApp, com uma equipe só.',
        subtitulo: 'O anúncio aparece para quem procura o que você vende. O vídeo mostra por que escolher você. O site leva a pessoa direto para o seu WhatsApp. A gente faz as três partes.',
      },
      C: {
        titulo: 'Loja, vídeo e anúncio sem contratar três empresas.',
        subtitulo: 'Somos uma dupla de Porto Alegre: um faz o site, a loja e os anúncios; o outro grava os vídeos. Você fala direto com quem faz, pelo WhatsApp.',
      },
    },
    notaDiagnostico: 'Diagnóstico gratuito: um vídeo analisando seu site, seu perfil no Google e os anúncios dos seus concorrentes. Sem compromisso.',
  },

  dores: {
    titulo: 'Alguma dessas é a sua?',
    itens: [
      {
        icone: 'conversa',
        titulo: 'Você vende pelo WhatsApp e se perde nos pedidos.',
        texto: 'Áudio, foto, lista pela metade. Alguém digita tudo de novo, erra a quantidade, e o pedido de ontem some no meio da conversa.',
      },
      {
        icone: 'site',
        titulo: 'Você tem site, mas ninguém visita.',
        texto: 'Ele não aparece no Google, não tem botão de WhatsApp ou não diz por que comprar de você.',
      },
      {
        icone: 'dinheiro',
        titulo: 'Você paga anúncio e não vê cliente.',
        texto: 'O dinheiro sai todo mês, mas ninguém sabe dizer quantas pessoas chamaram ou compraram por causa dele.',
      },
    ],
    fecho: 'Dá para resolver as três. E sem contratar três empresas diferentes.',
  },

  servicos: {
    titulo: 'O que a gente faz',
    subtitulo: 'Dá para contratar uma parte só ou as três juntas.',
    blocos: [
      {
        icone: 'loja',
        titulo: 'Sites e lojas virtuais',
        chamada: 'Para ser encontrado e receber pedidos.',
        itens: [
          { texto: 'Site ou loja feitos primeiro para o celular.' },
          { texto: 'Pronto para vender pelo WhatsApp: botão em todas as páginas e pedido que chega montado.' },
          { texto: 'Especialidade: loja B2B para atacado na Tray.', explica: 'B2B: venda de empresa para empresa.' },
          { texto: 'Estrutura para o Google entender o seu site.', explica: 'SEO: ajustes para aparecer nas buscas.' },
          { texto: 'Medição desde o primeiro dia, para saber de onde vem cada visita.' },
        ],
        link: { texto: 'Tem distribuidora ou atacado? Veja a loja B2B', href: '/distribuidoras-e-atacados' },
      },
      {
        icone: 'video',
        titulo: 'Vídeo',
        chamada: 'Para mostrar o que você vende do jeito que é.',
        // CONFIRMAR com o João: roteiro e edição estão inclusos?
        itens: [
          { texto: 'Reels para o Instagram.', explica: 'Reels: vídeos verticais curtos.' },
          { texto: 'Vídeo institucional: quem é a sua empresa e por que confiar nela.' },
          { texto: 'Vídeos de produto para a loja, o catálogo e os anúncios.' },
          { texto: 'Gravado com celular, com qualidade profissional, no seu dia a dia, sem montar estúdio.' },
          { texto: 'Feito pelo João Rossoni, da Rossoni Films.' },
        ],
      },
      {
        icone: 'anuncio',
        titulo: 'Anúncios no Google e na Meta',
        chamada: 'Para quem já procura o que você vende.',
        itens: [
          { texto: 'Google: para quem pesquisa o seu produto ou serviço.' },
          { texto: 'Meta: Instagram e Facebook, para quem tem o perfil de quem compra de você.' },
          { texto: 'Remarketing: anúncio para quem já visitou sua loja.' },
          { texto: 'Medição configurada antes de gastar o primeiro real: Google Analytics, Pixel da Meta e conversões.', explica: 'Conversão: a ação que importa, como chamar no WhatsApp ou enviar um pedido.' },
          { texto: 'Relatório mensal sem tecniquês: quanto foi investido, quantas pessoas chamaram e o que vamos ajustar.' },
          { texto: 'A verba dos anúncios é paga direto ao Google e à Meta, no cartão da sua empresa. [[CONFIRMAR]]' },
        ],
      },
    ],
  },

  plano: {
    titulo: 'Ou as três partes juntas, num plano mensal',
    nome: 'Plano Orca [[CONFIRMAR: nome]]',
    descricao: 'Site ou loja com ajustes todo mês, vídeos novos e anúncios rodando com medição. Um relatório por mês e uma equipe para chamar quando precisar.',
    inclui: [
      'Ajustes e melhorias no site ou na loja [[PREENCHER: limite por mês, se houver]]',
      '[[PREENCHER: quantidade]] vídeos por mês',
      'Gestão dos anúncios no Google e na Meta',
      'Relatório mensal explicado em português claro',
    ],
    condicoes: [
      'Contrato mínimo de 3 meses. Depois, mês a mês.',
      'Preço fechado na proposta, depois do diagnóstico.',
    ],
  },

  equipe: {
    titulo: 'Por que uma equipe só?',
    itens: [
      {
        icone: 'escudo',
        titulo: 'Ninguém empurra o problema para o outro.',
        texto: 'Se a venda não vem, não existe “a culpa é do site” ou “é do anúncio”. As duas partes são nossas. A gente resolve.',
      },
      {
        icone: 'encaixe',
        titulo: 'Tudo é feito para funcionar junto.',
        texto: 'O vídeo é gravado pensando no anúncio. O anúncio leva para uma página pronta para receber a visita. E a loja já manda o pedido para o seu WhatsApp.',
      },
      {
        icone: 'pessoas',
        titulo: 'Você fala com quem faz.',
        texto: 'Sem atendente no meio. Você fala direto com o Nathan e com o João.',
      },
    ],
  },

  videos: {
    titulo: 'Vídeos gravados com celular',
    subtitulo: 'Reels, institucionais e vídeos de produto feitos pelo João, da Rossoni Films. Toque para assistir.',
    // De 3 a 6 Reels: { url: 'https://www.instagram.com/reel/...', capa: '/assets/img/reel-1.webp', cliente: 'Nome (se autorizado)' }
    itens: [],
    vagas: 4,
    botao: { texto: `Ver mais no @${site.instagram.video}`, href: `https://www.instagram.com/${site.instagram.video}/` },
  },

  comoFunciona: {
    titulo: 'Como funciona',
    passos: [
      { titulo: 'Diagnóstico gratuito', texto: 'Você preenche um formulário curto. A gente grava um vídeo analisando seu site, seu Google Meu Negócio e os anúncios dos seus concorrentes, e manda pelo WhatsApp.' },
      { titulo: 'Proposta', texto: 'Você recebe o que fazer primeiro, o prazo e o preço fechado. Se não fizer sentido, tudo bem: o diagnóstico continua seu.' },
      { titulo: 'Implantação', texto: 'A gente monta o site ou a loja, grava os vídeos e configura a medição e os anúncios. Você aprova antes de ir ao ar.' },
      { titulo: 'Acompanhamento mensal', texto: 'Todo mês, um relatório simples: quanto foi investido, quantas pessoas chamaram e o que muda no mês seguinte.' },
    ],
    nota: `Primeira resposta em até ${prazoResposta}.`,
  },

  demo: {
    etiqueta: 'Loja B2B de demonstração',
    titulo: 'Teste uma loja B2B funcionando',
    texto: 'Montamos uma loja de atacado com produtos fictícios. Mude as quantidades, veja a barra de pedido mínimo e veja como o pedido sai pronto para o WhatsApp.',
    // CONFIRMAR: o botão de WhatsApp da demo manda para o número da Orca?
    botao: 'Abrir a loja de demonstração',
    nota: 'Produtos e preços fictícios. Nenhum pedido é cobrado.',
  },

  // Desligado até a autorização do Atacado Polvo. Resultados só com números medidos.
  caso: {
    ativo: false,
    titulo: 'Atacado Polvo: loja B2B na Tray',
    antes: 'Antes: [[PREENCHER: como os pedidos chegavam, em uma frase]].',
    feito: 'O que a gente fez: loja B2B na Tray com quantidade no cartão do produto, barra de pedido mínimo, pedido enviado pelo WhatsApp e barra de compra fixa no celular. [[CONFIRMAR: quais recursos estão nessa loja; teve vídeo ou anúncio?]]',
    prints: [], // { src: '/assets/img/polvo-1.webp', alt: 'Lista de produtos com quantidade no cartão' }
    botao: { texto: 'Ver a loja do Atacado Polvo', href: null },
  },

  quemSomos: {
    titulo: 'Quem faz a Orca',
    intro: 'Somos dois, em Porto Alegre. Você fala direto com quem faz o trabalho.',
    pessoas: [
      {
        nome: 'Nathan Caprio',
        papel: 'Sites, lojas virtuais e anúncios',
        bio: 'Monta sites e lojas virtuais e cuida dos anúncios no Google e na Meta. Especialista em lojas B2B para atacado na Tray. [[PREENCHER: uma frase sua]]',
        foto: null, // '/assets/img/nathan.webp'
        iniciais: 'NC',
      },
      {
        nome: 'João Rossoni',
        papel: 'Vídeo',
        bio: `Grava vídeo profissional com celular: Reels, institucionais e vídeos de produto. É da Rossoni Films (@${site.instagram.video}). [[PREENCHER: uma frase dele]]`,
        foto: null, // '/assets/img/joao.webp'
        iniciais: 'JR',
      },
    ],
    porQueOrca: 'Por que Orca? Orcas trabalham em grupo, e cada uma sabe o seu papel. A gente também.',
  },

  faq: {
    titulo: 'Perguntas que todo mundo faz',
    perguntas: [
      {
        pergunta: 'Já vendo pelo WhatsApp. Por que eu precisaria de site ou loja?',
        resposta: 'Você continua vendendo pelo WhatsApp. O site só organiza o caminho até ele: quem ainda não te conhece tem onde te achar, entende o que você faz e chega na conversa sabendo o que quer. Se você vende produto, a loja vai além: o cliente monta o pedido sozinho e ele chega pronto no seu WhatsApp. Menos digitação e menos erro.',
      },
      {
        pergunta: 'Isso não é caro?',
        resposta: 'Depende do que a sua empresa precisa. Por isso o preço vem na proposta, fechado, antes de começar. Sem cobrança surpresa. Dá para começar por uma parte só, como a loja, e somar o resto depois. E o diagnóstico é gratuito: você vê o que precisa antes de decidir.',
      },
      {
        pergunta: 'Meu sobrinho faz site.',
        resposta: 'Que bom ter quem ajude. A diferença está no que vem junto: medição para saber de onde vem cada cliente, loja pronta para receber pedido no WhatsApp, vídeo e anúncio pensados juntos, e alguém para responder quando algo der errado. Se quiser, o diagnóstico avalia o que já existe, e você decide com calma.',
      },
      {
        pergunta: 'Já tentei e não deu certo.',
        resposta: 'Normalmente o problema está em um destes pontos: anúncio sem medição (ninguém sabe o que funcionou), site que não leva para o WhatsApp, ou cada parte feita por alguém diferente. O diagnóstico mostra o que aconteceu no seu caso antes de você gastar de novo.',
      },
      {
        pergunta: 'Tem fidelidade?',
        resposta: 'No plano mensal, o contrato mínimo é de 3 meses. É o tempo de montar, medir e ajustar os anúncios com dados reais. Depois, segue mês a mês. [[PREENCHER: aviso prévio para cancelar]] Site, loja e vídeo avulsos são contratados por projeto. [[CONFIRMAR]]',
      },
      {
        pergunta: 'Vocês garantem resultado?',
        resposta: 'Não. Resultado de anúncio depende do seu produto, do preço, da concorrência e do atendimento. Desconfie de quem garante. O nosso compromisso é medir e te mostrar, todo mês, o que está funcionando e o que vai mudar.',
      },
      {
        pergunta: 'O site, a loja e as contas ficam no meu nome?',
        resposta: 'Sim. Domínio, loja e contas de anúncio ficam no nome da sua empresa. Se um dia você sair, leva tudo. [[CONFIRMAR]]',
      },
      {
        pergunta: 'Vocês atendem fora de Porto Alegre?',
        resposta: 'Sim. Site, loja e anúncios são feitos online, para todo o Brasil. [[CONFIRMAR: e a gravação de vídeo fora de Porto Alegre?]]',
      },
    ],
  },

  final: {
    titulo: 'Quer saber o que melhorar primeiro?',
    texto: `Peça o diagnóstico gratuito. Em até ${prazoResposta} a gente responde no WhatsApp, e o vídeo com a análise do seu site, do seu Google e dos seus concorrentes chega em até ${prazoVideo}. Sem compromisso.`,
  },
};
