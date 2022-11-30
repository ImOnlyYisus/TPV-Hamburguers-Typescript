import { Size } from "../enum/size.enum";
import { ProductInCart } from "../interface/products-in-cart.interface";

type cartProductTemplate = (cartProduct : ProductInCart) => string;

export const cartProductTemplate : cartProductTemplate = ({product,size,quantity,subTotal,priceIva}) => {
    return `
    <tr>
        <td>
            <i class="fa-sharp fa-solid fa-minus" data-id="${product.id}${size}" id="removeProduct"></i>
            <img width="50px" src="${product.url}"/>
            ${product.name}
        </td>
        <td>${size}</td>
        <td>${(product.price * Size[size]).toFixed(2)}€</td>
        <td>${(priceIva * Size[size]).toFixed(2)}€</td>
        <td>x${quantity}</td>
        <td>${subTotal.toFixed(2)}€</td>
    </tr>
    `;
}