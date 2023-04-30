import { modals, sliders, forms } from "./modules";

window.addEventListener('DOMContentLoaded', () => {

    modals();
    sliders({
        slidesSelector: '.feedback-slider-item',
        dir: 'horizontal',
        prev: '.main-prev-btn',
        next: '.main-next-btn',
    });

    sliders({
        slidesSelector: '.main-slider-item',
        dir: 'vertical',
    });

    forms();
})