"use client";
import { useState, useEffect } from "react";
import CartIcon from "../components/CartIcon";
import ProductCardTest from "../components/ProductCardTest";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1); //start på side 1
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (page) => {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`
    );
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <main>
      <CartIcon />
      <h1>Produkter</h1>

      {loading ? (
        <p>Indlæser produkter...</p>
      ) : (
        <div>
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCardTest key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
            >
              Forrige
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Næste
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;
