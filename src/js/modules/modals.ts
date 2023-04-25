const modals = (): void => {
    
    interface Modal {
        triggersSelector: string,
        modalSelector: string,
        closeSelector: string,
        closeClickOverlay?: boolean
    }
    const bindModal = ({triggersSelector, modalSelector, closeSelector, closeClickOverlay = true}: Modal): void => {
        const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector) as HTMLDivElement;
        const close = document.querySelector(closeSelector) as HTMLButtonElement;
        const windows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        const closeAllModals = (): void => {
            windows.forEach((window: HTMLElement) => {
                window.style.display = 'none';
            })
            document.body.style.overflow = "";
        };

        triggers.forEach((trigger: HTMLElement) => {

            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
        
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
            if (e.target === modal && closeClickOverlay) {
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

    showModalByTime('.popup-consultation', 10);
};

export default modals;