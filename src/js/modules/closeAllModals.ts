const closeAllModals = (): void => {
    const windows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]');
    windows.forEach((window: HTMLElement) => {
        window.style.display = 'none';
    })
    document.body.style.overflow = "";
};

export default closeAllModals