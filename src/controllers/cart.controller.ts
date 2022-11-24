import { Hamburguer } from "../models/hamburguer.model";
import { CartService } from "../services/cart.service";
import { ProductsService } from "../services/products.service";
import { CartView } from "../views/cart.view";
import { ProductsView } from "../views/products.view";

export class CartController{
    constructor(private readonly cartView : CartView, private readonly cartService : CartService, private readonly prodcutsView : ProductsView,private readonly productsService : ProductsService){
        prodcutsView.bindBuyButton(this.handlerBuyHamburguer);

        this.cartView.bindCheckoutButton();
    }

    handlerBuyHamburguer = (productId : string) =>{
        const hamburguer : Hamburguer= this.productsService.getHamburguerById(productId);
        this.cartService.buy(hamburguer);
        this.cartView.displayCart(hamburguer);
    }
}