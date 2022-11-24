type cartProductTemplate = (cartProduct) => string;

export const cartProductTemplate : cartProductTemplate = ({name,price,iva,size,count,realPrice}) => {
    return `
    <tr>
        <td>${name}</td>
        <td>${size}</td>
        <td>${price}</td>
        <td>${iva}</td>
        <td>${count}</td>
        <td>${realPrice}</td>
    </tr>
    `;
}