import { Drink } from "../models/drink.model";
import { Hamburguer } from "../models/hamburguer.model";

export interface ProductInCart {
    product: Hamburguer | Drink;
    size: string;
    quantity: number;
    priceIva: number;
    subTotal: number;
}