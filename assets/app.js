// Keep this brief and useful

document.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector('.nav');
    const burger = document.createElement('button')
        .setAttribute('aria-label',' Toggle Navigation Menu');
    burger.innerHTML = '<span class="hamburger"></span>';
    // Fix: no hamburger icon in the css — add it as a visible element instead of an invisible svg reference

    if (document.body.id === 'home' || document.body.classList.contains('no-print')) {
        burger.style.padding = '0 1rem';
        buttonStyleSheet = new CSSStyleSheet();
    }

    const openMenu = () => {
        nav.setAttribute('aria-expanded', 'true');
        document.body.classList.add('scroll');
    };

    const closeAllNavLinks = () => {
        document.querySelectorAll('.nav a').forEach(a=>a.click());
    };
});