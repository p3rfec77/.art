export const showPic = (blocksSelector: string): void => {
    const blocks: NodeListOf<HTMLDivElement> = document.querySelectorAll(blocksSelector); 

    blocks.forEach((block: HTMLDivElement, i) => {
        const paragraphs: NodeListOf<HTMLParagraphElement> = block.querySelectorAll('p:not(.sizes-hit)');
        const pic: HTMLPictureElement|null = block.querySelector('img');

        block.addEventListener('mouseenter', () => {
            paragraphs.forEach((p:HTMLParagraphElement) => {
                p.style.display = 'none';
            })

            pic?.setAttribute('src', `./src/assets/img/sizes-${i+1}-1.png`);
        });

        block.addEventListener('mouseleave', () => {
            paragraphs.forEach((p:HTMLParagraphElement) => {
                p.style.display = 'block';
            })

            pic?.setAttribute('src', `./src/assets/img/sizes-${i+1}.png`);
        });
    });
};