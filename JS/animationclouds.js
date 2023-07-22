const displayClouds = document.getElementById('maximun');

const functionRandoms = (max, min) => { return Math.floor(Math.random() * (max - min) + min); } // Generate randoms numbers between two numbers

const addCloud = () => { //Generate a new icon
    let cloud = document.createElement("img");
    let time = functionRandoms(20, 10); // Generate a random time between two numbers, It will be the time that the animation of the icon will last
    cloud.src = '../src/imgs/cloud.png'; // We assign the address of a random icon
    cloud.style.top = `${Math.random() * 180}%`;
    cloud.classList.add('cloud');
    let ancho = cloud.clientWidth;
    if (Math.floor(Math.random() * 2) === 0) {
        cloud.style.animation = `animateCloudLeft ${time}s`;
        cloud.style.left = `${-ancho}px`;
    } else {
        cloud.style.right = `${-ancho}px`;
        cloud.style.animation = `animateCloudRight ${time}s`;
    }
    displayClouds.appendChild(cloud);
    setTimeout(() => { // Remove the icon after the allotted time in the animation
        displayClouds.removeChild(cloud);
    }, `${time * 1000}`); // The time it multiplies by 1000 for convert to miliseconds
}

setInterval(()=> { addCloud(); }, 3000);
setInterval(()=> { addCloud(); }, 3000);
