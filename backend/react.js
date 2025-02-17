import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
}

export default Products;
