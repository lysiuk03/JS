
const url = 'https://dummyjson.com/products?limit=10';

async function getDataFromServer(url) {
    let response = await fetch(url);

    console.log("Status:", response.status);

    const data = await response.json();

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
                        <a href="product_details.html?id=${i.id}" class="btn btn-primary">Details</a>
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
    const url = 'https://dummyjson.com/products?limit=10';
    let response = await fetch(url);

    if (response.status !== 200) {
        console.error('Failed to fetch data');
        return;
    }

    const data = await response.json();

    const sortedProducts = data.products.sort((a, b) => {
        return a.price - b.price;
    });

    const productsList = document.getElementById('products_list');

    productsList.innerHTML = '';

    for (const product of sortedProducts) {
        productsList.innerHTML +=
            `<div class="col">
            <div class="card border-primary mb-3 h-100" style="max-width: 20rem;">
                <img src="${product.thumbnail}" class="card-img-top product-image" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">
                        Price: ${product.price} $<br>
                        Rating: ${product.rating}<br>
                        Brand: ${product.brand}</p>
                    <a href="product_details.html?id=${product.id}" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`;
    }
}