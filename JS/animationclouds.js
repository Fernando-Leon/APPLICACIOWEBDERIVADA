const displayClouds = document.getElementById('maximun');

const functionRandoms = (max, min) => { return Math.floor(Math.random() * (max - min) + min); }

const addCloud = () => {
    let cloud = document.createElement("img");
    let time = functionRandoms(20, 10); 
    cloud.src = '../src/imgs/cloud.png';
    cloud.classList.add('cloud');
    cloud.style.position = `absolute`;
    cloud.style.width = `200px`;
    cloud.style.top = `${Math.random() * 180}%`;
    cloud.style.zIndex = `-1`;
    let ancho = cloud.clientWidth;
    if (Math.floor(Math.random() * 2) === 0) {
        cloud.style.animation = `animateCloudLeft ${time}s`;
        cloud.style.left = `${-ancho}px`;
    } else {
        cloud.style.right = `${-ancho}px`;
        cloud.style.animation = `animateCloudRight ${time}s`;
    }
    displayClouds.appendChild(cloud);
    setTimeout(() => {
        displayClouds.removeChild(cloud);
    }, `${time * 1000}`);
}

setInterval(()=> { addCloud(); }, 3000);
setInterval(()=> { addCloud(); }, 3000);
