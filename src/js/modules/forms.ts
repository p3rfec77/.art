const forms = (): void => {
    const allForms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form');
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
    const uploads: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]');

    interface Message {
        loading: string,
        success: string,
        failure: string,
        spinner: string,
        ok: string,
        fail: string
    }
    const message: Message = {
        loading: 'загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'src/assets/img/spinner.gif',
        ok: 'src/assets/img/ok.png',
        fail: 'src/assets/img/fail.png'
    };

    const postData = async (url: string, data: any): Promise<string> => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        return await response.text();
    }

    const clearInputs = (): void => {
        inputs.forEach((input: HTMLInputElement) => {
            input.value = '';
        });

        uploads.forEach((upload:HTMLInputElement) => {
            upload.previousElementSibling!.textContent = 'файл не выбран';
        });
    }

    uploads.forEach((upload: HTMLInputElement) => {
        upload.addEventListener('input', () => {
            const [fileName, fileExt]: string[] = upload.files![0].name.split('.');
            const dots: string = fileName.length > 20 ? '...' : '.';

            const name: string = fileName.substring(0, 21) + dots + fileExt;
            upload.previousElementSibling!.textContent = name;
        });
    });

    allForms.forEach((form: HTMLFormElement) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div') as HTMLDivElement;
            statusMessage.classList.add('status');

            const formParent = form.parentNode as HTMLElement; 
            formParent.appendChild(statusMessage);
            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 300);

            const statusImg = document.createElement('img') as HTMLImageElement;
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            const textMessage = document.createElement('div') as HTMLElement;
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);
            const data:{[key: string]: any} = {};
            formData.forEach((value, key) => data[key] = value);

            postData('https://simple-server-cumz.onrender.com/api/data', data)
                .then(() => {
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 5000);
                })
        });
    });
};

export default forms;