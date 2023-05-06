export const drop = () => {
    const fileInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });
    });

    const highlight = (item:HTMLElement|null) => {
        if(!item) {
            return;
        }
        
        const closest: HTMLElement|null = item.closest('.file_upload');
        if(!closest) {
            return;
        }
        closest.style.border = "5px solid yellow";
    };

    const unhighlight = (item:HTMLElement|null) => {
        if(!item) {
            return;
        }
        
        const closest: HTMLElement|null = item.closest('.file_upload');
        if(!closest) {
            return;
        }
        closest.style.border = "none";
    };

    ['dragenter', 'dragover'].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, () => highlight(input));
        });
    });

    ['dragleave', 'drop'].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, () => unhighlight(input));
        });
    });

    fileInputs.forEach((input) => {
        input.addEventListener('drop', (e) => {
            if (!e.dataTransfer) {
                return;
            }

            input.files = e.dataTransfer.files;
            const [fileName, fileExt]: string[] = input.files![0].name.split('.');
            const dots: string = fileName.length > 20 ? '...' : '.';

            const name: string = fileName.substring(0, 21) + dots + fileExt;
            input.previousElementSibling!.textContent = name;
        });
    });
};