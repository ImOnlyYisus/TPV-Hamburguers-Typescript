import { cartProductTemplate } from "../components/cart-product.component";
import { ProductInCart } from "../interface/products-in-cart.interface";

export class CartView{
    private cartProducts = document.querySelector("#cartProducts");
    private totalPrice = document.querySelector("#totalPrice");
    private checkout = document.querySelector("#checkout");
    private removeProducts : NodeListOf<HTMLElement> = document.querySelectorAll("#removeProduct");

    public displayCart(products : ProductInCart[]){
        this.cartProducts.innerHTML = "";
        products.forEach(product => this.cartProducts.innerHTML += cartProductTemplate(product)); 
    }

    public bindRemoveProduct(removeToProduct : (product : string) => void){
        this.removeProducts = document.querySelectorAll("#removeProduct");

        for(const removeProduct of this.removeProducts){
            removeProduct.addEventListener("click", () => {
                const idProduct = removeProduct.getAttribute("data-id");
                removeToProduct(idProduct);
            });
        }
    }

    public displayTotalPrice(total : number){
        this.totalPrice.innerHTML=`${total.toFixed(2)}€`
    }

    public bindCheckoutButton(clearProducts : () => void){
        this.checkout.addEventListener("click", () => {
            this.cartProducts.innerHTML = "";
            clearProducts();
        });
    }
}