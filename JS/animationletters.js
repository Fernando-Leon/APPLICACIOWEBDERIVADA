const letters = ['M', 'A', 'T', 'H', 'K', 'I', 'D'];
const arrayColors = ['#000000', '#058AC6', '#F2CD00', '#D8ADC4', '#07622D', '#8b633e', '#2e2f4e'];
let currentIndex = 0;

function changeColor() {
  letters.forEach((letter, index) => {
    const elem = document.getElementById(`sp${letter}`);
    elem.style.color = arrayColors[(currentIndex + index) % arrayColors.length];
  });
  currentIndex = (currentIndex + 1) % arrayColors.length;
}

setInterval(changeColor, 1000);


function changeColor() {
    letters.forEach((letter, index) => {
      const elem = document.getElementById(`sp${letter}`);
      elem.classList.add('color-transition');
      elem.style.color = arrayColors[(currentIndex + index) % arrayColors.length];
    });
    currentIndex = (currentIndex + 1) % arrayColors.length;
    setTimeout(() => {
      letters.forEach((letter) => {
        const elem = document.getElementById(`sp${letter}`);
        elem.classList.remove('color-transition');
    });
  }, 500);
}
  