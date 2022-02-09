const botaoMenu = document.querySelector('.cabecalho-menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', function() {
    menu.classList.toggle('menu-lateral-ativo')
})