export const scrolling = (upSelector: string): void => {
    const upElems = document.querySelectorAll(upSelector);
    upElems.forEach((upElem) => {

    window.addEventListener('scroll', () => {
        const BREAKPOINT: number = 1650;
        if(document.documentElement.scrollTop > BREAKPOINT) {
            upElem?.classList.add('animated', 'fadeIn');
        } else {
            upElem?.classList.remove('fadeIn');
        }
    });

    const element: HTMLElement = document.documentElement;
    const body: HTMLElement = document.body;

    const calcScroll = () => {
        upElem?.addEventListener('click', (e) => {
            const target = e.target as HTMLAnchorElement;
            console.log(1);

            const scrollTop: number = Math.round(body.scrollTop || element.scrollTop);
            if (target.hash !== '') {
                e?.preventDefault();

                let hashElement: HTMLElement|null = document.querySelector(target.hash);
                let hashElementTop: number = 0;

                while(hashElement?.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent as HTMLElement;
                }

                hashElementTop = Math.round(hashElementTop);

                smoothScroll({
                    from: scrollTop,
                    to: hashElementTop,
                    hash: target.hash
                });
            }
        });
    };

    interface IScroll {
        from: number,
        to: number,
        hash: string
    }

    const smoothScroll = ({from, to, hash}: IScroll) => {
        const timeInterval = 1;
        let prevScrollTop: number;
        let speed: number;

        speed = to > from ? 30: -30;

        const move = setInterval(() => {
            const scrollTop: number = Math.round(body.scrollTop || element.scrollTop);

            if(
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    }

    calcScroll();

})
};