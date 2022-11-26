import { Size } from "../enum/size.enum";
import { ProductInCart } from "../interface/products-in-cart.interface";

export class CartService {
    private products = new Map<string, ProductInCart>();
    private totalPrice: number = 0;

    constructor() {}

    public addProduct(productToAdd: ProductInCart) {
        const productId = productToAdd.product.id;
        const productSize = productToAdd.size;
        const customId = productId + productSize;

        if (this.products.has(customId)) {
            this.products.get(customId).quantity += 1;
        } else {
            this.products.set(customId, productToAdd);
        }
    }

    public removeProduct(product : string) {
        if (this.products.get(product).quantity > 1) {
            this.products.get(product).quantity -= 1;
        }else{
            this.products.delete(product);
        }
    }

    public clearProducts() {
        this.products.clear();
    }

    public getAllProducts() {
        return Array.from(this.products.values());
    }

    public getTotalPrice() {
        return this.totalPrice;
    }

    public calculatePriceIva() {
        for (const productOnCart of this.products.values()) {
            const product = productOnCart.product;
            productOnCart.priceIva =
                product.price * product.iva + product.price;
        }
    }

    public calculateSubtotal() {
        for (const productOnCart of this.products.values()) {
            productOnCart.subTotal =
                productOnCart.priceIva * Size[productOnCart.size];
            productOnCart.subTotal *= productOnCart.quantity;
        }
    }

    public calculateTotalPrice() {
        this.totalPrice = 0;
        for (const productOnCart of this.products.values()) {
            this.totalPrice += productOnCart.subTotal;
        }
    }

    public calculatePrices() {
        this.calculatePriceIva();
        this.calculateSubtotal();
        this.calculateTotalPrice();
    }
}
