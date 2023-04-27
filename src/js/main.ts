import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";

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

    mask('[name="phone"]');
})