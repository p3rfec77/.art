export const filter = (): void => {
    const menu: HTMLElement|null = document.querySelector('.portfolio-menu');
    const wrapper: HTMLElement|null = document.querySelector('.portfolio-wrapper');
    const no: HTMLElement|null = document.querySelector('.portfolio-no');

    if (!no || !wrapper || !menu) {
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

    interface ITab {
        btn: string,
        content?: string
    }

    const tabs: ITab[] = [
        { btn: '.all', content: '.all'},
        { btn: '.girl', content: '.girl'}, 
        { btn: '.lovers', content: '.lovers'},
        { btn: '.chef', content: '.chef'}, 
        { btn: '.guy', content: '.guy'},
        { btn: '.grandmother'}, 
        { btn: '.granddad'}
    ];

    const showFilter = (btn: string, content?: string): void => {
        menu.querySelector(btn)?.addEventListener('click', () => {

            content ? typeFilter(wrapper.querySelectorAll(content)) : typeFilter();
            
        });
    };

    tabs.forEach((tab) => {
        showFilter(tab.btn, tab.content);
    })

    menu.addEventListener('click', (e) => {
        const target: any = e.target;
        if(target?.tagName === 'LI') {
            items.forEach((item:HTMLElement) => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};