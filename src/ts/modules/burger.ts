export const burger = (burgerSelector: string, menuSelector: string): void => {
    const burger: HTMLElement|null = document.querySelector(burgerSelector);
    const menu: HTMLElement|null = document.querySelector(menuSelector);
    if(!burger || !menu) {
        return;
    }

    menu.style.display = 'none';

    burger?.addEventListener('click', (e) => {
        const target = e.target as Node;
        const tabletWidth: number = 993;
         if (target === burger || target.parentNode === burger) {
             menu.style.display = (menu.style.display === 'none' && window.screen.availWidth < tabletWidth) ? 'block' : 'none';
        }
    });

    window.addEventListener('resize', () => {
        const BREAKPOINT: number = 992;
        if(window.screen.availWidth >= BREAKPOINT) {
            menu.style.display = 'none';
        }
    });
};