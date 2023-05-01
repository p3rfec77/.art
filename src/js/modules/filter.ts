export const filter = (): void => {
    const menu: HTMLElement|null = document.querySelector('.portfolio-menu');
    if (!menu) {
        console.log('you miss menu');
        return;
    } 

    const wrapper: HTMLElement|null = document.querySelector('.portfolio-wrapper');
    if (!wrapper) {
        console.log('you miss wrapper');
        return;
    }

    const no: HTMLElement|null = document.querySelector('.portfolio-no');
    if (!no) {
        console.log('you miss no');
        return;
    }

    const items: NodeListOf<HTMLLIElement> = menu.querySelectorAll('li');
    const markAll: NodeListOf<HTMLLIElement> = wrapper.querySelectorAll('.all');
 
    const typeFilter = (markType?: NodeListOf<HTMLElement>): void => {
        markAll.forEach((mark: HTMLElement) => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(markType) {
            markType.forEach((mark: HTMLElement) => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    const showFilter = (btnSelector: string, contentSelector?: string|undefined): void => {
        menu.querySelector(btnSelector)?.addEventListener('click', () => {

            if(contentSelector) {
             typeFilter(wrapper.querySelectorAll(contentSelector));
            } else {
                typeFilter();
            }
        })
    };

    showFilter('.all', '.all');
    showFilter('.girl', '.girl');
    showFilter('.lovers', '.lovers');
    showFilter('.chef', '.chef');
    showFilter('.guy', '.guy');
    showFilter('.grandmother');
    showFilter('.granddad');

    menu.addEventListener('click', (e) => {
        const target: any = e.target;
        if(target && target.tagName === 'LI') {
            items.forEach((item:HTMLElement) => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};