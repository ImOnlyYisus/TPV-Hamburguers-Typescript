import { hamburguerTemplate } from "../components/burguer.component";
import { drinkTemplate } from "../components/drink.component";
import { Drink } from "../models/drink.model";
import { Hamburguer } from "../models/hamburguer.model";

export class ProductsView{
    private products : HTMLDivElement = document.querySelector("#products");
    private productsId =[];
    private buyButtons : NodeListOf<HTMLButtonElement>;
    private actualSize : string;

    public getActualSize(){
        return this.actualSize;
    }

    public displayHambuguers(hamburguers : Hamburguer[]){
        hamburguers.forEach(hamburguer => {
            this.products.innerHTML += hamburguerTemplate(hamburguer);

            this.productsId= [...this.productsId,(hamburguer.id)];
        });        
    }

    public displayDrinks(drinks : Drink[]){
        drinks.forEach(drink => {
            this.products.innerHTML += drinkTemplate(drink);

            this.productsId= [...this.productsId,(drink.id)];
        });
    }

    public loadBuyButtons(){
        this.buyButtons = document.querySelectorAll("#buyButton");
    }

    public bindBuyButton(buyOneProduct : (idProduct : string) => void){
        for (const button of this.buyButtons) {
            button.addEventListener("click", () => {
                const $figure = button.parentElement.parentElement.parentElement;
                const productId =$figure.getAttribute("data-id");
                this.actualSize = button.parentElement.querySelector("input:checked").getAttribute("data-size");
                buyOneProduct(productId);
            });
        }
    }
}