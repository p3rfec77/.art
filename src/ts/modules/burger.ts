export const burger = (burgerSelector: string, menuSelector: string): void => {
    const burger: HTMLElement|null = document.querySelector(burgerSelector);
    const menu: HTMLElement|null = document.querySelector(menuSelector);
    if(!burger || !menu) {
        return;
    }

    menu.style.display = 'none';

    burger?.addEventListener('click', (e) => {
        const target = e.target as Node;
         if (target === burger || target.parentNode === burger) {
             (menu.style.display === 'none' && window.screen.availWidth < 993) ? menu.style.display = 'block' : menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992) {
            menu.style.display = 'none';
        }
    });
};