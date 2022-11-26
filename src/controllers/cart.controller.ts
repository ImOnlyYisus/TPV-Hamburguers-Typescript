import { ProductInCart } from "../interface/products-in-cart.interface";
import { CartService } from "../services/cart.service";
import { ProductsService } from "../services/products.service";
import { CartView } from "../views/cart.view";
import { ProductsView } from "../views/products.view";

export class CartController{
    constructor(private readonly cartView : CartView, private readonly cartService : CartService, private readonly productsService : ProductsService, private readonly productsView : ProductsView){
        this.productsView.bindBuyButton(this.handlerBuy)
        
        
        this.cartView.bindCheckoutButton(this.handlerCheckout);
    }

    private handlerBuy = (idProduct : string)=>{
        const product = this.productsService.getProductById(idProduct);
        const productToAdd : ProductInCart = {
            product:product,
            size: this.productsView.getActualSize(),
            quantity: 1,
            priceIva: 0,
            subTotal: 0
        }
        this.cartService.addProduct(productToAdd);
        this.updateCart();     
    }

    private handlerCheckout = ()=>{
        this.cartService.clearProducts();
        this.updateCart();
    }

    private updateCart(){
        this.cartService.calculatePrices();
        this.cartView.displayCart(this.cartService.getAllProducts());
        this.cartView.displayTotalPrice(this.cartService.getTotalPrice());
        this.cartView.bindRemoveProduct(this.handlerRemoveProduct); 
    }

    private handlerRemoveProduct = (idProduct : string)=>{
        this.cartService.removeProduct(idProduct);
        this.updateCart();
    }



}