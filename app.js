const container = document.querySelector(".container");
const h2 = document.querySelector("h2");

let counterNumber = 100;
let counterNumberTwo = 0;

const counter = () => {
  counterNumber--;
  counterNumberTwo++;
  container.style.filter = `blur(${counterNumber}px)`;
  h2.innerText = `${counterNumberTwo}%`;

  if (counterNumber == 0) {
    const stopInterval = clearInterval(startInterval);
    h2.classList.add("opacityH2");
  }
  console.log(counterNumber);
};
const startInterval = setInterval(counter, 30);
