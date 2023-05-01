interface Calc {
    size: string,
    material: string,
    options: string,
    promocode: string,
    result: string
}

export const calc = ({size, material, options, promocode, result}: Calc): void => {
    const sizeBlock = document.querySelector(size) as HTMLSelectElement;
    const materialBlock = document.querySelector(material) as HTMLSelectElement;
    const optionsBlock = document.querySelector(options) as HTMLSelectElement;
    const promocodeBlock = document.querySelector(promocode) as HTMLInputElement;
    const resultBlock = document.querySelector(result) as HTMLElement;

    let sum: number = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value * +materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = (Math.round(sum * 0.7)).toString() + ' RUB';
        } else {
            resultBlock.textContent = sum.toString() + ' RUB';
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};