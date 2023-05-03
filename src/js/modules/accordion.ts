export const accordion = (headersSelector: string, contentSelector: string) => {
    const headers: NodeListOf<HTMLElement> = document.querySelectorAll(headersSelector);
    const content: NodeListOf<HTMLElement> = document.querySelectorAll(contentSelector);

    headers.forEach((header: HTMLElement, i: number) => {
        header.addEventListener('click', (e) => {
            const target  = e.target as Node;
            if(target === header || target.parentNode === header) {

                header.classList.toggle('ui-accordion-header-active');

                content[i].style.maxHeight ? content[i].style.maxHeight = '' : content[i].style.maxHeight = content[i].scrollHeight + 'px';
            }
        });
    });
};