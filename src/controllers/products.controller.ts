import { ProductsView } from "../views/products.view"
import { ProductsService } from "../services/products.service"
import { Hamburguer } from "../models/hamburguer.model";
import { Drink } from "../models/drink.model";

export class ProductsController{
    constructor(private readonly productsView : ProductsView, private readonly productsService : ProductsService){
        this.onHamburguerLoad(this.productsService.getHamburguers());    
        this.onDrinkLoad(this.productsService.getDrinks());

        this.productsView.loadBuyButtons();
    }

    onHamburguerLoad = (hamburguers : Hamburguer[]) =>{
        this.productsView.displayHambuguers(hamburguers);
    }

    onDrinkLoad = (drinks : Drink[]) =>{
        this.productsView.displayDrinks(drinks);
    }
    
    handlerBuy =(product)=>{

    }
    
    getAllHamburguers = ()=>{
        this.productsService.getHamburguers;
    }
}