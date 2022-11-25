import { cartProductTemplate } from "../components/cart-product.component";
import { ProductInCart } from "../interface/products-in-cart.interface";

export class CartView{
    private cartProducts = document.querySelector("#cartProducts");
    private totalPrice = document.querySelector("#totalPrice");
    private checkout = document.querySelector("#checkout");
    private removeProducts : NodeListOf<HTMLElement> = document.querySelectorAll("#removeProduct");

    displayCart(products : ProductInCart[]){
        this.cartProducts.innerHTML = "";
        products.forEach(product => this.cartProducts.innerHTML += cartProductTemplate(product)); 
    }

    bindRemoveProduct(removeToProduct){
        this.removeProducts = document.querySelectorAll("#removeProduct");

        for(const removeProduct of this.removeProducts){
            removeProduct.addEventListener("click", () => {
                const idProduct = removeProduct.getAttribute("data-id");
                removeToProduct(idProduct);
            });
        }
    }

    displayTotalPrice(total : number){
        this.totalPrice.innerHTML=`${total.toFixed(2)}€`
    }

    bindCheckoutButton(clearProducts){
        this.checkout.addEventListener("click", () => {
            this.cartProducts.innerHTML = "";
            clearProducts();
        });
    }


}