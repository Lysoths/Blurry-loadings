const container = document.querySelector(".container");
const h2 = document.querySelector("h2");

let counterNumber = 100;
let counterNumberTwo = 0;

const counter = () => {
  counterNumber--;
  counterNumberTwo++;
  container.style.filter = `blur(${counterNumber}px)`;
  h2.innerText = `${counterNumberTwo}%`;
  h2.style.opacity = `${counterNumber}%`;

  if (counterNumber == 0) {
    const stopInterval = clearInterval(startInterval);
  }
  console.log(counterNumber);
};
const startInterval = setInterval(counter, 30);
