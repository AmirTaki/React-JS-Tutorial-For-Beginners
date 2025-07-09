const Product = () => {
    const products = ["Labtop", "Phone", "Modem", "Computer", "Labtop"]
    const productList = products.map((product) => (<h3 key = {product}>{product}</h3>))
    return(
        <>
            {productList}
        </>
    )
}
export default Product