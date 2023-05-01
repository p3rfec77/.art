import { modals, sliders, forms, showMoreStyles, calc, filter } from "./modules";

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

    showMoreStyles('.button-styles', '#styles .row');

    calc({
        size: '#size',
        material: '#material',
        options: '#options',
        promocode: '.promocode',
        result: '.calc-price'
    });

    filter();
})