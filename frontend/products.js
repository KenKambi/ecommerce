let products = [];















//filter products
const filteredProducts = products.filter(product => 
    selectedCategory ? product.category === selectedCategory : true
);

//sort products
const sortedProducts = [...filteredProducts].sort((a, b) => 
    sortOption === "low-to-high" ? a.price - b.price : b.price - a.price
);

//search products
const searchedProducts = sortedProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
);
