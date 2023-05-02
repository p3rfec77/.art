export const showPic = (blocksSelector: string) => {
    const blocks = document.querySelectorAll(blocksSelector); 

    blocks.forEach((block: any, i) => {

        block.addEventListener('mouseenter', () => {
            block.querySelectorAll('p:not(.sizes-hit)').forEach((p:any) => {
                p.style.display = 'none';
            })

            const pic = block.querySelector('img');
            pic?.setAttribute('src', `./src/assets/img/sizes-${i+1}-1.png`);
        });

        block.addEventListener('mouseleave', () => {
            block.querySelectorAll('p').forEach((p:any) => {
                p.style.display = 'block';
            })

            const pic = block.querySelector('img');
            pic?.setAttribute('src', `./src/assets/img/sizes-${i+1}.png`);
        });
    });
};