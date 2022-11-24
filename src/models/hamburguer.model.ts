import { Ingredient } from "../interface/ingredient.interface";

export class Hamburguer{
    public id : string;
    public name : string;
    public price : number;
    public iva : number;
    public ingredients : Ingredient[];
    public url : string;
    public vegetarian : boolean;
    public gluten : boolean;

    constructor(id : string, name : string, price : number, iva : number, ingredients : Ingredient[], url : string, vegetarian : boolean, gluten : boolean){
        this.id = id;
        this.name = name;
        this.price = price;
        this.iva = iva;
        this.ingredients = ingredients;
        this.url = url;
        this.vegetarian = vegetarian;
        this.gluten = gluten;
    }
}