const card3D = () => {
    const wrapper = $('#form-input')[0];

    // Para Escritorio
    const { width, height } = wrapper.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    wrapper.addEventListener('mousemove', event => {
        wrapper.style.transition = 'none';
        const { offsetX, offsetY } = event;
        const rotationX = ((offsetX - halfWidth) / halfWidth) * 5;
        const rotationY = ((offsetY - halfHeight) / halfHeight) * 5;

        // Aplica la transformación solo al wrapper
        wrapper.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });

    wrapper.addEventListener('mouseleave', () => {
        wrapper.style.transition = 'transform .3s ease-in-out';
        wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });

    // Para dispositivos móviles
    window.addEventListener("deviceorientation", function (event) {
        const rotationX = Math.round(event.beta);
        const rotationY = Math.round(event.gamma);

        // Aplica la transformación solo al wrapper
        wrapper.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }, true);
}

card3D();
