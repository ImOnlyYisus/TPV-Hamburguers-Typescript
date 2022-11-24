export class Drink{
    public id : string;
    public name : string;
    public price : number;
    public iva : number;
    public sugar : boolean;
    public url : string;

    constructor(id : string, name : string, price : number, iva : number, sugar : boolean, url : string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.iva = iva;
        this.sugar = sugar;
        this.url = url;
    }
}