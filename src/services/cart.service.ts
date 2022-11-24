import { Drink } from "../models/drink.model";
import { Hamburguer } from "../models/hamburguer.model";

export class CartService{
    private hamburguers : Hamburguer[] = [];
    private drinks : Drink[] = [];
    private totalPrice = 0;

    constructor(){}

    buy = (hamburguer : Hamburguer)=>{
        console.log(hamburguer);
    }
}