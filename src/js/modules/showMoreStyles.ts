export const showMoreStyles = (triggerSelector: string, cardsSelector: string): void => {
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll(cardsSelector);
    const trigger = document.querySelector(triggerSelector) as HTMLButtonElement;

    cards.forEach((card) => {
        card.classList.add('animated', 'fadeIn');
    });

    trigger.addEventListener ('click', () => {
        cards.forEach((card: HTMLElement) => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        })

        trigger.remove();
    });
};