export const showPic = (blocksSelector: string): void => {
    const blocks: NodeListOf<HTMLDivElement> = document.querySelectorAll(blocksSelector); 

    blocks.forEach((block: HTMLDivElement) => {
        const paragraphs: NodeListOf<HTMLParagraphElement> = block.querySelectorAll('p:not(.sizes-hit)');
        const pics: NodeListOf<HTMLPictureElement> = block.querySelectorAll('img');

        block.addEventListener('mouseenter', () => {
            paragraphs.forEach((p:HTMLParagraphElement) => {
                p.style.display = 'none';
            })

            pics[1].classList.add('animated', 'flipInY');
            pics[0].classList.remove('animated', 'flipInY');

            pics[0].style.display = 'none';
            pics[1].style.display = 'block'
        });

        block.addEventListener('mouseleave', () => {
            paragraphs.forEach((p:HTMLParagraphElement) => {
                p.style.display = 'block';
            })

            pics[1].classList.remove('animated', 'flipInY');
            pics[0].classList.add('animated', 'flipInY');

            pics[0].style.display = 'block';
            pics[1].style.display = 'none';
        });
    });
};