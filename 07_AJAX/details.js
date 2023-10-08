
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    return productId;
}

async function getDetails(url) {
    const productId = getProductIdFromURL();

    let response = await fetch(url);

    console.log("Status:", response.status);

    const data = await response.json();

    console.log(data);
    
    for (const i of data.products) {
        if (i.id == productId) {
            for (const imageSrc of i.images) {
                images_col.innerHTML +=
                `<div class="carousel-item">
                <img src="${imageSrc}" class="d-block big-image mx-auto" alt="...">
            </div>`;
            }
            title.innerHTML+=i.title;
            description.innerHTML+=i.description;
            price.innerHTML+=i.price;
            discount.innerHTML+=i.discountPercentage;
            rating.innerHTML+=i.rating;
            if (i.stock<50)
            {
                stock.innerHTML+=`<span style="color: red;">&bull;</span> `;
            }
            else
            {
                stock.innerHTML+=`<span style="color: green;">&bull;</span> `;
            }
            stock.innerHTML+=i.stock;
            brand.innerHTML+=i.brand;
            category.innerHTML+=i.category;
           
        }
    }
    images_col.firstElementChild.classList.add("active");
}

const url = 'https://dummyjson.com/products?limit=10';

getDetails(url);


