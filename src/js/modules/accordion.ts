export const accordion = (headersSelector: string, contentSelector: string) => {
    const headers: NodeListOf<HTMLElement> = document.querySelectorAll(headersSelector);
    const content: NodeListOf<HTMLElement> = document.querySelectorAll(contentSelector);

    content.forEach((block:HTMLElement) => {
        block.style.display = 'none';
    });  

    headers.forEach((header, i) => {
        header.addEventListener('click', (e) => {
            const target  = e.target as Node;
            if(target === header || target.parentNode === header) {
                headers.forEach((header) => {
                    header.classList.remove('ui-accordion-header-active');
                });
                header.classList.add('ui-accordion-header-active');

                content.forEach((block:HTMLElement) => {
                    block.style.display = 'none';
                    block.classList.add('animated', 'fadeInDown');
                }); 
                content[i].style.display = 'block';
            }
        });
    });
};