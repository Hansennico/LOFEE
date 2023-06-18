const product = [
    {
        id: 0,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 1',
        price: 24000,
    },
    {
        id: 1,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 2',
        price: 24000,
    },
    {
        id: 2,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 3',
        price: 24000,
    },
    {
        id: 3,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 4',
        price: 24000,
    },
    {
        id: 4,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 5',
        price: 24000,
    },
    {
        id: 5,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 6',
        price: 24000,
    },
    {
        id: 6,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 7',
        price: 24000,
    },
    {
        id: 7,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 8',
        price: 24000,
    },
    {
        id: 8,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 9',
        price: 24000,
    },
    {
        id: 9,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 10',
        price: 24000,
    },
    {
        id: 10,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 11',
        price: 24000,
    },
    {
        id: 11,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 12',
        price: 24000,
    },
    {
        id: 12,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 13',
        price: 24000,
    },
    {
        id: 13,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 14',
        price: 24000,
    },
    {
        id: 14,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 15',
        price: 24000,
    },
    {
        id: 15,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 16',
        price: 24000,
    },
    {
        id: 16,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 17',
        price: 24000,
    },
    {
        id: 17,
        image: 'asset/coldbrew.jpg',
        title: 'Cold Brew 18',
        price: 24000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('container').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='card'>
            <div class='img-box'>
                <img class='card-img' src=${image}></img>
            </div>
        <div class='bottom'>
        <h3>${title}</h3>
        <p>Rp. ${price},-</p>`+
        "<button class ='cart-btn' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rp. "+0+",-";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp. "+total+",-";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <h3 style='font-size:15px;'>${title}</h3>
                <p class='cart-price' style='font-size: 15px;'>Rp. ${price},-</p>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}