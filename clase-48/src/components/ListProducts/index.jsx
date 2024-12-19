import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardProduct } from "../CardProducts";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    setProducts(response.data);
  };

  const handleSearch = (event) => setSearch(event.target.value);
  const handleMaxPrice = (event) => setMaxPrice(event.target.value);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        {/* Input de Busqueda */}
        <label htmlFor="title">Buscar: </label>
        <input type="text" name="title" id="title" onChange={handleSearch} />

        {/* Input de Precio Maximo */}
        <label htmlFor="maxPrice">Precio Maximo: </label>
        <input
          type="text"
          name="maxPrice"
          id="maxPrice"
          onChange={handleMaxPrice}
        />
      </div>

      <div className="cardContainer">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .filter((product) => (maxPrice ? product.price <= maxPrice : true))
          .map((product) => (
            <CardProduct
              category={product.category}
              descrition={product.descrition}
              image={product.image}
              price={product.price}
              title={product.title}
              key={product.id}
            />
          ))}
      </div>
    </>
  );
};
