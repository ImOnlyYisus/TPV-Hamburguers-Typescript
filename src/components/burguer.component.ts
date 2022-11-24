import { Ingredient } from "../interface/ingredient.interface";
import { Hamburguer } from "../models/hamburguer.model";

type HamburguerTemplate = (hamburguer : Hamburguer) => string;
export const hamburguerTemplate : HamburguerTemplate  = ({url,name,price,ingredients,gluten,id}) => {
    return `
<figure class="${gluten ? "" : "gluten"}" data-id=${id}>
${gluten ? "":`<img src="../assets/images/gluten.png" alt="gluten" class="gluten-img">`}
<div class="product-header">
    <div class="product-header-image">
        <img src="${url}" alt="Hambuguer">
        <p>${price}€</p>
    </div>
    <div class="product-header-description">
        <h2>${name}</h2>
    </div>
</div>
<div class="product-body">
    <p>${ingredientTemplate(ingredients)}</p>
    <div class="product-body-actions">
        <div class="sizes">
            <input type="radio" name="size-${id}" id="sizeS">
            <label for="sizeS">Small</label>

            <input type="radio" name="size-${id}" id="sizeM">
            <label for="sizeM">Medium</label>

            <input type="radio" name="size-${id}" id="sizeB" checked>
            <label for="sizeB">Big</label>
        </div>
        <span id="buyButton">Buy one</span>
    </div>
</div>
</figure>
`;
};

const ingredientTemplate = (ingredients : Ingredient[]) => {
    const template= ingredients.map(ingredient => {
        return ingredient.name;
    });

    return template;
}
