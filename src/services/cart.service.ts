import { Size } from "../enum/size.enum";
import { ProductInCart } from "../interface/products-in-cart.interface";

export class CartService {
    private products = new Map<string, ProductInCart>();
    private totalPrice: number = 0;

    constructor() {}

    addProduct(productToAdd: ProductInCart) {
        const productId = productToAdd.product.id;
        const productSize = productToAdd.size;
        const customId = productId + productSize;

        if (this.products.has(customId)) {
            this.products.get(customId).quantity += 1;
        } else {
            this.products.set(customId, productToAdd);
        }
    }

    removeProduct(product) {
        if (this.products.get(product).quantity > 1) {
            this.products.get(product).quantity -= 1;
        }else{
            this.products.delete(product);
        }
    }

    clearProducts() {
        this.products.clear();
    }

    getAllProducts() {
        return Array.from(this.products.values());
    }

    getTotalPrice() {
        return this.totalPrice;
    }

    calculatePriceIva() {
        for (const productOnCart of this.products.values()) {
            const product = productOnCart.product;
            productOnCart.priceIva =
                product.price * product.iva + product.price;
        }
    }

    calculateSubtotal() {
        for (const productOnCart of this.products.values()) {
            productOnCart.subTotal =
                productOnCart.priceIva * Size[productOnCart.size];
            productOnCart.subTotal *= productOnCart.quantity;
        }
    }
    calculateTotalPrice() {
        this.totalPrice = 0;
        for (const productOnCart of this.products.values()) {
            this.totalPrice += productOnCart.subTotal;
        }
    }

    calculatePrices() {
        this.calculatePriceIva();
        this.calculateSubtotal();
        this.calculateTotalPrice();
    }
}
