let products = [
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    },
    {
        "name": "Cold Brew",
        "price": 24000,
        "image": "./asset/coldbrew.jpg"
    }
]

let container = document.querySelector(".container")
for (let i = 0; i < products.length; i++) {
    container.innerHTML += `
        <div class="card">
            <div class="card-text">
                <h3>${products[i].name}</h3>
                <img src="${products[i].image}" alt="" class="card-img">
                <p>Rp. ${products[i].price},-</p>
                <button type="button" onclick="" class="cart-btn">Add to cart !</button>
            </div>
        </div>
    `
}