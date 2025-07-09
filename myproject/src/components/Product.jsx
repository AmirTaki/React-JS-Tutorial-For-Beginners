const Product = () => {
    // PRODUCTS
    const products = [
        {id : 1, name : 'Labtop', price : 500},
        {id : 2, name : 'Phone', price : 200},
        {id : 3, name : 'Modem', price : 50},
        {id : 4, name : 'Labtop', price : 900},
    ]

    const ProductList = products.map((product) => 
        (<h3 key = {product.id}>{product.name} : $ {product.price}</h3>))
    // FRIUTS 
    const fruits = ["Apple", "Mango", "Banana"]
    const FruitsList = fruits.map((fruit, index) => (<h3 key = {index}>{fruit}</h3>))
    return(
        <>
        {ProductList}
        <hr />
        {FruitsList}
        </>
    )
}
export default Product