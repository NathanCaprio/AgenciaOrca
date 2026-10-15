// Agência Orca · comportamento do site (sem dependências)
(() => {
  // Menu do celular
  const botao = document.querySelector('.cabecalho__abrir');
  const menu = document.getElementById('menu');
  if (botao && menu) {
    const definir = (aberto) => {
      botao.setAttribute('aria-expanded', String(aberto));
      menu.classList.toggle('aberto', aberto);
    };
    botao.addEventListener('click', () => definir(botao.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) definir(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') { definir(false); botao.focus(); }
    });
  }
})();
