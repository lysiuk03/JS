const addBtn = document.querySelector('#add-btn');

const brandInput = document.querySelector('#brandInput');
const modelInput = document.querySelector('#modelInput');
const priceInput = document.querySelector('#priceInput');
const fuelTypeInput = document.querySelector('#fuelTypeInput');
const dateInput = document.querySelector('#dateInput');

const tableBody = document.querySelector('#car-table tbody');

const clearBtn = document.querySelector('#clear-btn');

const searchInput = document.querySelector('#searchInput');

addBtn.onclick = (e) => {

    const brand = brandInput.value;
    const model = modelInput.value;
    const price = priceInput.value;
    const fuelType = fuelTypeInput.value;
    const date = dateInput.value;

    if (!brand || !model || !price || !fuelType || !date) {
        alert('Please enter all required fields!');
        return;
    }

    const car = new Car(brand, model, price, fuelType, date);

    tableBody.innerHTML += `<tr>
        <th scope="row">${car.id}</th>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.price}$</td>
        <td>${car.fuelType}</td>
        <td>${car.date}</td>
    </tr>`;
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
}

class Car {
    static count = 1;
    constructor(brand, model, price,fuelType,date) {
        this.id = Car.count++;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.fuelType=fuelType;
        this.date=date;
    }
}

function filterCars() {
    const searchQuery = searchInput.value.toLowerCase();
    const cars = document.querySelectorAll('#car-table tbody tr');

    cars.forEach((car) => {
        const carBrand = car.querySelector('td:nth-child(2)').textContent.toLowerCase();

        if (carBrand.includes(searchQuery) || searchQuery === '') {
            car.style.display = 'table-row';
        } else {
            car.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', filterCars);