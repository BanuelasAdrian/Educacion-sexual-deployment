const btnMenu = document.querySelector('#menu_bar')

// Events Listeners
document.addEventListener('DOMContentLoaded', ()=> {
    document.addEventListener('scroll', scrollTopParallax);
    btnMenu.addEventListener('click', slide);
})


// Anima la pagina principal con un parallax
function scrollTopParallax() {
    const divTextos = document.querySelector('#titulo');
    const parallax = document.querySelector('#parallax');
    let scrollTop = window.scrollY;
    divTextos.style.transform = 'translateY('+ scrollTop * -0.5 +'px)';
    parallax.style.transform = 'translateY('+ scrollTop * -0.5 +'px)';
}

// Anima mi menu de navegacion
function slide(e) {
    e.preventDefault();
    const menu = document.querySelector('#menu');
    menu.classList.toggle('active');
}