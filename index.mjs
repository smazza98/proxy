import {State} from "./state.mjs";

const $root = document.querySelector("#root");

const memory = new State({
    products: [
        {
            id: 1,
            title: "Panettone",
            price: 20
        },
        {
            id: 2,
            title: "Pandoro",
            price: 25
        },
        {
            id: 3,
            title: "Torrone",
            price: 40
        }
    ]
}, (newState) => {
   
}); 

const renderPage = () => {
    const html = memory.state.products.map((product) => {
        return `
        <div>
           <span>${product.title} - ${product.price}€</span>
        </div>
        ` 
    }).join("");
    $root.innerHTML = html;
}

renderPage();


