interface Slide {
    slidesSelector: string,
    dir: string,
    prev: string,
    next: string
}

const sliders = ({slidesSelector, dir, prev, next}: Slide): void => {
    let slideIndex: number = 1;

    const slides: NodeListOf<HTMLElement> = document.querySelectorAll(slidesSelector);

    const showSlides = (i: number): void => {
        if (i > slides.length) {
            slideIndex = 1;
        }

        if (i < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((slide: HTMLElement) => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';
    };
    showSlides(slideIndex);

    const changeSlides = (n: number): void => {
        showSlides(slideIndex += n);
    };

    try {
        const prevBtn = document.querySelector(prev) as HTMLButtonElement;
        const nextBtn = document.querySelector(next) as HTMLButtonElement; 

        prevBtn.addEventListener('click', () => {
            changeSlides(-1);
            slides[slideIndex - 1].classList.remove('slideInLeft');
            slides[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });


    } catch (e) {};

    let paused: number;

    const activateAnimation = (): void => {

        if (dir === 'vertical') {
            paused = setInterval(() => {
                changeSlides(1);
                slides[slideIndex - 1].classList.add('slideInDown');
            }, 5000);
        } else {
            paused = setInterval(() => {
                changeSlides(1);
                slides[slideIndex - 1].classList.remove('slideInRight');
                slides[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    };

    activateAnimation();

    slides[0].parentNode?.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slides[0].parentNode?.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;