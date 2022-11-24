import { cartProductTemplate } from "../components/cart-product.component";
import { Hamburguer } from "../models/hamburguer.model";

export class CartView{
    private cartProducts = document.querySelector("#cartProducts");
    private totalPrice = document.querySelector("#totalPrice");
    private checkout = document.querySelector("#checkout");

    constructor(){}

    displayCart(product : Hamburguer){
        const cardProductObject = {...product,size:"Big",count:"1",realPrice:"1"};
        this.cartProducts.innerHTML += cartProductTemplate(cardProductObject);
    }

    bindCheckoutButton(){
        this.checkout.addEventListener("click", () => {
            this.cartProducts.innerHTML = "";
        });
    }

}