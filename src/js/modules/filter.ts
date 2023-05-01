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

    interface ITab {
        btnSelector: string,
        contentSelector?: string
    }

    const tabs: Array<ITab> = [
        {
            btnSelector: '.all', 
            contentSelector: '.all'
        },

        {
            btnSelector: '.girl', 
            contentSelector: '.girl'
        }, 

        {
            btnSelector: '.lovers', 
            contentSelector: '.lovers'
        },

        {
            btnSelector: '.chef',
            contentSelector: '.chef'
        }, 

        {
            btnSelector: '.guy', 
            contentSelector: '.guy'
        }, 

        {
            btnSelector: '.grandmother'
        }, 

        {
            btnSelector: '.granddad'
        }
    ];

    const showFilter = (btnSelector: string, contentSelector?: string): void => {
        menu.querySelector(btnSelector)?.addEventListener('click', () => {

            if(contentSelector) {
             typeFilter(wrapper.querySelectorAll(contentSelector));
            } else {
                typeFilter();
            }
        })
    };

    tabs.forEach((tab) => {
        showFilter(tab.btnSelector, tab.contentSelector);
    })

    showFilter('.all', '.all');
    showFilter('.girl', '.girl');
    showFilter('.lovers', '.lovers');
    showFilter('.chef', '.chef');
    showFilter('.guy', '.guy');
    showFilter('.grandmother');
    showFilter('.granddad');

    menu.addEventListener('click', (e) => {
        const target: any = e.target;
        if(target?.tagName === 'LI') {
            items.forEach((item:HTMLElement) => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};