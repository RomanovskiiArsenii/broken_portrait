const setContainerHeight = (() => {
    const setHeight = () => {
        const container = document.getElementById('images_container');
        const image = document.getElementById('first_image');
        container.style.height = `${image.offsetHeight}px`;
    };

    return setHeight;
})();

window.addEventListener('load', setContainerHeight);
window.addEventListener('resize', setContainerHeight);
