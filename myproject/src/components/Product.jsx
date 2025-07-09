const Product = () => {
    const products = ["Labtop", "Phone", "Modem", "Computer"]
    const productList = products.map((product) => (<h3>{product}</h3>))
    return(
        <>
            {productList}
        </>
    )
}
export default Product