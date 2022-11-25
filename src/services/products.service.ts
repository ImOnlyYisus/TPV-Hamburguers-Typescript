import data from '../assets/mock/data.json';
import { Drink } from '../models/drink.model';
import { Hamburguer } from '../models/hamburguer.model';

export class ProductsService {
    private hamburguers : Hamburguer[] = [];
    private drinks : Drink[] = [];

    constructor(){
        this.mappingHamburguers();
        this.mappingDrinks();
    }

    mappingHamburguers(){
        const products = data.products;
        this.hamburguers= products.hamburguers.map(burguer => {
            return new Hamburguer(burguer.id, burguer.name,burguer.price,burguer.iva,burguer.ingredients,burguer.image,burguer.vegetarian,burguer.gluten);
        });
    }

    mappingDrinks(){
        const products = data.products;
        this.drinks= products.drinks.map(drink => {
            return new Drink(drink.id, drink.name,drink.price,drink.iva,drink.sugar,drink.image);
        });
    };

    getHamburguers(){
        return this.hamburguers;
    }

    getDrinks(){
        return this.drinks;
    }

    /* getHamburguerById(idHamburguer : string) : Hamburguer{
        return this.hamburguers.find(({ id }) => id = idHamburguer);
    } */

    getProductById(idProduct : string){
        const hamburguer : Hamburguer= this.hamburguers.find(({ id }) => id === idProduct);
        if(!hamburguer){
            const drink : Drink= this.drinks.find(({ id }) => id === idProduct);
            return drink; 
        }
        
        return hamburguer;
    }

    

}