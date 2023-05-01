export const filter = (): void => {
    const menu: HTMLElement|null = document.querySelector('.portfolio-menu');
    const wrapper: HTMLElement|null = document.querySelector('.portfolio-wrapper');
    const no: HTMLElement|null = document.querySelector('.portfolio-no');
    const items: NodeListOf<HTMLLIElement> = menu!.querySelectorAll('li');
    const markAll: NodeListOf<HTMLLIElement> = wrapper!.querySelectorAll('.all');
 
    const typeFilter = (markType?: NodeListOf<HTMLElement>): void => {
        markAll.forEach((mark: HTMLElement) => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no!.style.display = 'none';
        no!.classList.remove('animated', 'fadeIn');

        if(markType) {
            markType.forEach((mark: HTMLElement) => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no!.style.display = 'block';
            no!.classList.add('animated', 'fadeIn');
        }
    };

    const showFilter = (btnSelector: string, contentSelector?: string|undefined): void => {
        menu!.querySelector(btnSelector)!.addEventListener('click', () => {

            if(contentSelector) {
             typeFilter(wrapper!.querySelectorAll(contentSelector!));
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

    menu!.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if(target && target.tagName === 'LI') {
            items.forEach((item:HTMLElement) => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};