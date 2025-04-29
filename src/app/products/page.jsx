"use client";

import { useEffect, useState } from "react";
import ProductCardTest from "../components/ProductCardTest";
import CartIcon from "../components/CartIcon";
import Head from "next/head";

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
    <main className="mx-4 md:mx-8 sm:mx-6 px-4 py-12">
      <Head>
       
        <title>Produker</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8 mt-4 text-center sm:text-left">
        {filters.category ? `Kategori: ${filters.category}` : "Alle produkter"}
      </h1>

      {/* Filtre */}
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-10">
        <select
          name="category"
          onChange={handleFilterChange}
          className="border p-2 rounded shadow-sm"
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
          className="border p-2 rounded shadow-sm"
        >
          <option value="">Alle brands</option>
          {uniqueBrands.map((brand, index) => (
            <option key={`${brand}-${index}`} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Produktgrid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {currentPageProducts.map((product) => (
          <div
            key={product.id}
            className="hover:shadow-lg rounded-xl p-4 transition-transform transform hover:scale-105"
          >
            <ProductCardTest product={product} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-5 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:bg-gray-700"
        >
          Forrige
        </button>
        <span className="text-lg font-semibold">
          Side {page} af {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-5 py-2 bg-gray-800 text-white rounded disabled:opacity-50 hover:bg-gray-700"
        >
          Næste
        </button>
      </div>
    </main>
  );
};

export default Products;
