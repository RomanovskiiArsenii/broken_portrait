const setSizes = (() => {
    const container = document.getElementById('images_container');
    const image = document.getElementById('first_image');
    const sizes = { small: '25vw', large: '80vw' };
    let rootStyles;

    const setContainerHeight = () => {
        container.style.height = `${image.offsetHeight}px`;
    };

    const setScreenCoeff = () => {
        document.documentElement.style.setProperty('--coeff', sizes.small);
        rootStyles = getComputedStyle(document.documentElement);
    };

    const changeScreenCoeff = () => {
        const screenCoeff = rootStyles.getPropertyValue('--coeff').trim();

        if (screenCoeff === sizes.small) {
            document.documentElement.style.setProperty('--coeff', sizes.large);
            setContainerHeight();
            console.log('coeff = 80vw');
        } else {
            document.documentElement.style.setProperty('--coeff', sizes.small);
            setContainerHeight();
            console.log('coeff = 40vw');
        }
    };

    return {
        setContainerHeight: setContainerHeight,
        setScreenCoeff: setScreenCoeff,
        changeScreenCoeff: changeScreenCoeff,
    };
})();

const container = document.getElementById('images_container');

window.addEventListener('load', setSizes.setScreenCoeff);
window.addEventListener('load', setSizes.setContainerHeight);
window.addEventListener('resize', setSizes.setContainerHeight);
window.addEventListener('click', setSizes.changeScreenCoeff);
