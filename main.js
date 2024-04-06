const navSlide = () => {
    const burger = document.querySelector('.line');
    const nav = document.querySelector('.flexnav__ul');
    burger.addEventListener('click', () => {
        nav.classList.toggle('.show-menu');
    });
}
navSlide();