import { Ingredient } from "../interface/ingredient.interface";
import { Hamburguer } from "../models/hamburguer.model";

type HamburguerTemplate = (hamburguer : Hamburguer) => string;
export const hamburguerTemplate : HamburguerTemplate  = ({url,name,price,ingredients,gluten,id,vegetarian}) => {
    return `
<figure class="${gluten ? "" : "gluten"} ${vegetarian ? "vegetarian" : ""}" data-id=${id}>
${gluten ? "":`<img src="../assets/images/gluten.png" alt="gluten" class="gluten-img">`}
${vegetarian ? `<img src="../assets/images/vegetarian.png" alt="vegetarian" class="vegetarian-img">` : ""}
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

const ingredientTemplate = (ingredients : Ingredient[]) => {
    const template= ingredients.map(ingredient => {
        return ingredient.name;
    });

    return template;
}
