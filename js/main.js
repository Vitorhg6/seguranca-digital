(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var header = document.querySelector('.site-header');
  var nav = header ? header.querySelector('nav') : null;
  if (!header || !nav) { return; }

  nav.id = 'menu-principal';

  var botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'menu-toggle';
  botao.textContent = 'Menu';
  botao.setAttribute('aria-controls', 'menu-principal');
  botao.setAttribute('aria-expanded', 'false');
  header.insertBefore(botao, nav);

  function alternar(abrir) {
    nav.classList.toggle('aberto', abrir);
    botao.setAttribute('aria-expanded', String(abrir));
  }

  botao.addEventListener('click', function () {
    alternar(!nav.classList.contains('aberto'));
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && nav.classList.contains('aberto')) {
      alternar(false);
      botao.focus();
    }
  });
})();