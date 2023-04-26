import closeAllModals from "./closeAllModals";

const modals = (): void => {
    
    interface Modal {
        triggersSelector: string,
        modalSelector: string,
        closeSelector: string,
        destroy?: boolean
    }

    let btnPressed:boolean = false;

    const bindModal = ({triggersSelector, modalSelector, closeSelector, destroy = false}: Modal): void => {
        const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector) as HTMLDivElement;
        const close = document.querySelector(closeSelector) as HTMLButtonElement;
        const windows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        const addAnimation = (): void => {
            windows.forEach((window:HTMLElement) => {
                window.classList.add('animated', 'fadeIn');
            });
        };

        addAnimation();

        triggers.forEach((trigger: HTMLElement) => {

            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (destroy) {
                   trigger.remove(); 
                }

                btnPressed = true;
        
            closeAllModals();
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";  
                document.body.style.marginRight = `${scroll}px`; 
            }) 
        })

        const closeModals = (): void => {
            closeAllModals();
            document.body.style.marginRight = `0px`; 
        };

        close.addEventListener('click', () =>  closeModals());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModals();
            }
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModals();
            }
        })
        
    }

    const showModalByTime = (selector: string, time: number) => {
        setTimeout(() => {
            let display: boolean = true;

            document.querySelectorAll('[data-modal]').forEach(modal => {
                if(getComputedStyle(modal).display !== 'none') {
                    display = false;
                };
            });
            
            if (display) {
                const getModal = document.querySelector(selector) as HTMLElement;
                getModal.style.display = "block";
                document.body.style.overflow = "hidden";

                const scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`; 
            }

        }, time * 1000);
    }

    const calcScroll = ():number => {
        const block = document.createElement('div');
        block.style.width = '50px';
        block.style.height = '50px';
        block.style.overflowY = 'scroll';
        block.style.visibility = 'hidden';

        document.body.append(block);
        const scrollWidth = block.offsetWidth - block.clientWidth;
        block.remove();

        return scrollWidth;
    }

    const openByScroll = (selector: string): void => {
        document.addEventListener('scroll', () => {
            if (!btnPressed && (Math.round(window.scrollY) + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                const gift = document.querySelector(selector) as HTMLElement;
                gift.click();   
            }
        });
    };

    bindModal({
        triggersSelector:'.button-design', 
        modalSelector:'.popup-design',
        closeSelector:'.popup-design .popup-close',
    });

    bindModal({
        triggersSelector:'.button-consultation', 
        modalSelector:'.popup-consultation', 
        closeSelector:'.popup-consultation .popup-close'
    });

    bindModal({
        triggersSelector:'.fixed-gift', 
        modalSelector:'.popup-gift', 
        closeSelector:'.popup-gift .popup-close',
        destroy: true
    });

    openByScroll('.fixed-gift');

    showModalByTime('.popup-consultation', 10);
};

export default modals;