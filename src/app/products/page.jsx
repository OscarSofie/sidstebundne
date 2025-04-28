"use client";

import { useEffect, useState } from "react";
import ProductCardTest from "../components/ProductCardTest";
import CartIcon from "../components/CartIcon";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
  });
  const [page, setPage] = useState(1);

  const itemsPerPage = 20;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
        setPage(1);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);

    let filteredProducts = products;

    if (updatedFilters.category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === updatedFilters.category
      );
    }

    if (updatedFilters.brand) {
      filteredProducts = filteredProducts.filter(
        (p) => p.brand === updatedFilters.brand
      );
    }

    setFiltered(filteredProducts);
    setPage(1); // reset til side 1 ved ny filtrering
  };

  const uniqueCategories = [...new Set(products.map((p) => p.category))];
  const uniqueBrands = [
    ...new Set(
      products
        .filter((p) => !filters.category || p.category === filters.category)
        .map((p) => p.brand)
    ),
  ];

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentPageProducts = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <main className="mx-auto px-4 py-8">
      <CartIcon />
      <h1 className="text-3xl font-bold mb-4">
        {filters.category ? `Kategori: ${filters.category}` : "Alle produkter"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <select
          name="category"
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="">Alle kategorier</option>
          {uniqueCategories.map((cat, index) => (
            <option key={`${cat}-${index}`} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          name="brand"
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="">Alle brands</option>
          {uniqueBrands.map((brand, index) => (
            <option key={`${brand}-${index}`} value={brand}>
              {brand}
            </option>
          ))}
          
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPageProducts.map((product) => (
          <ProductCardTest key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Forrige
        </button>
        <span className="px-4 py-2">
          Side {page} af {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Næste
        </button>
      </div>
    </main>
  );
};

export default Products;
