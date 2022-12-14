import {State} from "./state.mjs";

const $delete = document.querySelector("#delete");
const $add = document.querySelector("#add");
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
   return renderPage();
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

$add.addEventListener("click", () => {
    memory.state.products.push({
        id: 4,
        title: "Albero",
        price: 100
    },
    {
        id: 5,
        title: "Albero",
        price: 200
    })
})

$delete.addEventListener("click", () => {
    memory.state.products.splice(0, 1);
})



