const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector(".body");
const quantity = document.querySelector(".quantity");


openShopping.addEventListener("click", () => {
    body.classList.add("active")
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let prodcuts = [
    {
        id: 1,
        name: "Laptop Victus gaming",
        images: "21-c-1-victus-calhoun-16-80-w-lcd-mica-silver-nt-h-dcam-non-odd-win-10-core-set-front-right-copy.png",
        info: `
        <b>Procesador:</b> Intel Core i5-12500H <br>
        <b>Tarjeta de video:</b> NVIDIA GeForce RTX 3050<br>
        <b>Ram:</b> 8GB  DDR4<br>
        <b>Memoria:</b> SSD 512GB<br>
        `,
        price: 728
        ,
    },

    {
        id: 2,
        name: "HP 15-DW 15,6 Pulgadas",
        images: "HP Laptop 15-DW.png",
        info: `
        <b>Procesador:</b> AMD R5-5500U<br>
        <b>Ram:</b> 8GB  DDR4<br>
        <b>Memoria:</b> SSD 256GB<br>
        <b>Precio:</b> US$510
        `,
        price: 510

    },

    {
        id: 3,
        name: "HP Portátil Pavilion Gaming 15",
        images: "HP Pavilion Gaming 15 Laptop.avif",
        info:`
        <b>Procesador:</b> AMD RYZEN 5 4600H<br>
        <b>Tarjeta de video:</b> NVIDIA GeForce GTX 1650<br>
        <b>Ram:</b> 8GB  DDR4<br>
        <b>Memoria:</b> SSD 512GB<br>
        `,
        price: 1200

    },

    {
        id: 4,
        name: "MSI GF63",
        images: "Laptop-msi-gf63-2.webp",
        info:`
        <b>Procesador:</b> Intel Core i5-10300H <br>
        <b>Tarjeta de video:</b> NVIDIA GeForce GTX 1650<br>
        <b>Ram:</b> 8GB  DDR4<br>
        <b>Memoria:</b> SSD 256GB<br>     
        `,
        price: 893
    },

    {
        id: 5,
        name: "MSI GP68HX",
        images: "GP68HX.webp",
        info:`
        <b>Procesador:</b> Intel Core i9-13950HX <br>
        <b>Tarjeta de video:</b> NVIDIA GeForce RTX 4080<br>
        <b>Ram:</b> 16GB DDR5<br>
        <b>Memoria:</b> 1TB NVMe SSD<br>
        `,
        price: 2079

    },

    {
        id: 6,
        name: "MSI Portátil Pulse15",
        images: "CP-MSI-PULSE15B13VGK-648MX-8b0570.png",
        info:`
        <b>Procesador:</b> Intel Core i7-13620H<br>
        <b>Tarjeta de video:</b> NVIDIA GeForce RTX 4070<br>
        <b>Ram:</b> 32GB DDR5<br>
        <b>Memoria:</b> 1TB NVMe SSD<br>
        `,
        price: 1599

    }
]

let listCards = []

const initApp = () =>{
    prodcuts.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        
        newDiv.innerHTML = `


                <div class="cartas">
                <div class="img">
                    <img src="img/${value.images}">
                </div>

                <div class="informacion">
                    <h2>${value.name}</h2>
                    <p>${value.info}</p>
                <div class="price">${value.price.toLocaleString()}
                    <button onclick="addToCard"${key}>Comprar</button>
                </div>

        `
        list.appendChild(newDiv)
    })

}

initApp()

const addToCard = (key) =>{
    if(listCards[key]==null){
        listCard[key] = JSON.parse(JSON.stringify(prodcuts[key]));
        listCard[key].quantity = 1
    }
    reloadCard();
}
const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPride = 0;

    listCards.forEach((value, key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src ="img/${value.image}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${value.price.toLocalestring()}
                </div>

                <div>
                    <button style="background-color: #20419e" 
                    class="cardButton" onclick = "chanceQuantity(${key}, 
                    ${value.quantity - 1}))}">-</button>

                    <div class = "count">${count}</div>

                    <button style="background-color: #20419e" 
                    class="cardButton" onclick = "chanceQuantity(${key}, 
                    ${value.quantity + 1}))">+</button>
                </div>
            `
            listCard.appendChild(newDiv);
        }

        total.innerText = totalPrice.toLocalestring();
        quantity.innerText = count;
    })

}