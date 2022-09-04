export const getEsistenceProduct = (cart, product) => {
    return (cart.some((item) => item.id === product.id))
}