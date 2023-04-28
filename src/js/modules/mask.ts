const mask = (selector: string): void => {

    const setCursorPosition = (pos: number, elem: any) => {
        elem.focus();

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            const range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    const inputs = document.querySelectorAll(selector);

        const matrix = '+7 (___) ___ __ __';
        let i: number = 0;
        const def = matrix.replace(/\D/g, '');

    inputs.forEach((input) => {

        input.addEventListener('input', (e: any) => {

            let val: string = e.ta.value.replace(/\D/g, '');
    
            if (def.length >= val.length) {
                val = def;
            }
    
            e.target.value = matrix.replace(/./g, (a) => {
                return /\d/.test(a) && i < val.length ? val.charAt(i++) : i <= val.length ? '' : a;
            });
        });


        input.addEventListener('focus', (e: any) => {
          setCursorPosition(e.target.value.length, input);
        });

        input.addEventListener('blur', (e: any) => {
            if (e.target.value.length == 2) {
                e.taget.value = '';
            }
        });
    });
};

export default mask;