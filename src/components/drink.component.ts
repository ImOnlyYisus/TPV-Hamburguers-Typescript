import { Drink } from "../models/drink.model";

type DrinkTemplate = (drink : Drink) => string;
export const drinkTemplate : DrinkTemplate  = ({url,name,price,sugar,id}) => {
    return `
<figure class="${sugar ? "" : "sugar"}" data-id=${id}>
${sugar ? "":`<img src="../assets/images/sugar.png" alt="sugar" class="sugar-img">`}
<div class="product-header">
    <div class="product-header-image">
        <img src="${url}" alt="Drink">
        <p>${price}€</p>
    </div>
    <div class="product-header-description">
        <h2>${name}</h2>
    </div>
</div>
<div class="product-body">
    <div class="product-body-actions">
        <div class="sizes">
            <input type="radio" name="size-${id}" data-size="S" id="sizeS">
            <label for="sizeS">Small</label>

            <input type="radio" name="size-${id}" data-size="M" id="sizeM">
            <label for="sizeM">Medium</label>

            <input type="radio" name="size-${id}" id="sizeB" data-size="B" checked>
            <label for="sizeB">Big</label>
        </div>
        <span id="buyButton">Buy one</span>
    </div>
</div>
</figure>
`;
};
