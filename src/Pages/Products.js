import { Link } from "react-router-dom"

export const Products = () =>{
    return (
        <section>
            <h1>Products</h1>
            <Link to="/products/p1">Laptop</Link>
            <br />
            <Link to="/products/p2">Mobile Phone</Link>
            <br />
            <Link to="/products/p3">Table</Link>
        </section>
    )
}