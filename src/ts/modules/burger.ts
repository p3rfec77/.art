export const burger = (burgerSelector: string, menuSelector: string): void => {
    const burger: HTMLElement|null = document.querySelector(burgerSelector);
    const menu: HTMLElement|null = document.querySelector(menuSelector);
    if(!burger || !menu) {
        return;
    }

    menu.style.display = 'none';

    const tabletWidth: number = 993;

    burger?.addEventListener('click', (e) => {
        const target = e.target as Node;
         if (target === burger || target.parentNode === burger) {
             menu.style.display = (menu.style.display === 'none' &&  window.innerWidth < tabletWidth) ? 'block' : 'none';
        }
    });

    window.addEventListener('resize', () => {
        if( window.innerWidth >= tabletWidth) {
            menu.style.display = 'none';
        }
    });
};