
const url = 'https://dummyjson.com/products';

let pagination = {
    limit: 5,
    skip: 0,
    total: null,

    next() {
        this.skip += this.limit;
    }
};

function generagePages(model) {
    const count = Math.ceil(model.total / model.limit);
    pageList.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = `page-item`;

        const pageLink = document.createElement('a');
        pageLink.className = 'page-link';
        pageLink.href = '#';
        pageLink.textContent = i;


        pageLink.addEventListener('click', (event) => {
            event.preventDefault();
            goToPage(i);
        });

        if (i === Math.ceil((pagination.skip) / model.limit)) {
            pageItem.classList.add('active');
        }

        pageItem.appendChild(pageLink);
        pageList.appendChild(pageItem);
    }
}

const moreButton = document.getElementById('more_btn');
moreButton.addEventListener('click', () => {
    getDataFromServer(url);
});

async function getDataFromServer(url) {
    const urlWithParams = url += `?skip=${pagination.skip}&limit=${pagination.limit}`;
    let response = await fetch(urlWithParams);

    console.log("Status:", response.status);

    const data = await response.json();

    pagination.total = data.total;
    pagination.next();

    generagePages(pagination);

    console.log(data);


    for (const i of data.products) {
        products_list.innerHTML +=
            `<div class="col">
            <div class="card border-primary mb-3 h-100" style="max-width: 20rem;">
                <img src="${i.thumbnail}" class="card-img-top product-image"  alt="${i.title}">
                    <div class="card-body">
                        <h5 class="card-title">${i.title}</h5>
                        <p class="card-text">
                        Price: ${i.price} $<br>
                        Rating: ${i.rating}<br>
                        Brand: ${i.brand}</p>
                        <a href="product_details.html?id=${i.id}&skip=${pagination.skip}&limit=${pagination.limit}" class="btn btn-primary">Details</a>
                    </div>
            </div>
        </div>`;

    }
}

getDataFromServer(url);

const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', () => {
    sortProductsByPrice();
});

async function sortProductsByPrice() {
    const productElements = document.querySelectorAll('.card');

    const productsArray = Array.from(productElements);

    productsArray.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.card-text').textContent.match(/Price: (\d+(\.\d+)?) \$/)[1]);
        const priceB = parseFloat(b.querySelector('.card-text').textContent.match(/Price: (\d+(\.\d+)?) \$/)[1]);
        return priceA - priceB;
    });

    products_list.innerHTML = '';

    for (const product of productsArray) {
        products_list.appendChild(product);
    }
}

const selectElement = document.getElementById('exampleSelect');

selectElement.addEventListener('change', (event) => {
    const selectedLimit = parseInt(event.target.value);
    pagination.limit = selectedLimit;
    goToPage(1);
});

function goToPage(pageNumber) {
    products_list.innerHTML = '';
    pagination.skip = (pageNumber - 1) * pagination.limit;
    getDataFromServer(url);
}