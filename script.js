'use strict';

const carList = document.getElementById('cars');
const selectedCar = document.getElementById('selectedCar');

function setCar(value) {
  if (car === '') {
    selectedCar.innerHTML = `Тачка ${car.brand} ${car.model}<br>Цена: ${car.price}`;
  } else {
    selectedCar.textContent = carList.value;
  }
}

setCar();

const getData = async (url) => {
  try {
    const response = await fetch('./cars.json');
    if (!response.ok) {
      const errorMessage =
        `status: ${response.status}` +
        `${response.statusText ? ', statusText:' + response.statusText : ''}`;
      throw new Error(errorMessage);
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

getData('./cars.json').then(({ cars }) => {
  cars.forEach((car, index) => {
    carList.insertAdjacentHTML(
      'beforeEnd',
      `<option value="${index}">${car.brand}</option>`
    );
  });
});

carList.addEventListener('input', (e) => {
  const car = cars.filter((car) => car.brand === e.target.value)[0];
  setCar(car);
});
