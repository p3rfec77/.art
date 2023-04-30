import { getResource } from "./services/request";

export const showMoreStyles = (triggerSelector: string, wrapperSelector: string): void => {
    const trigger = document.querySelector(triggerSelector) as HTMLButtonElement;

    interface Card {
        src: string,
        title: string,
        link: string
    }

    const createCards = (response: Array<Card>) => {
        response.forEach((item: Card) => {
            const card = document.createElement('div');
            card.classList.add('animated', 'fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                    <div class=styles-block>
					    <img src=${item.src} alt = "style">
				        <h4>${item.title}</h4>
						<a href="${item.link}">Подробнее</a>
				    </div>
            `;

            document.querySelector(wrapperSelector)!.appendChild(card);
        });
    };

    trigger.addEventListener('click', () => {
        getResource( './src/assets/db.json')
        .then((res: any) => createCards(res.styles))
        .catch(err => console.error('error'));

        trigger.remove();
    });
    
};