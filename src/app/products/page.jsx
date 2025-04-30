// src/app/products/page.jsx
import ProductCardTest from "../components/ProductCardTest";
import FilterCatBrand from "../components/FilterCatBrand"; 
import PageShift from "../components/PageShift";
import { getProducts } from "../api/products";

export default async function ProductsPage({ searchParams }) {
  const products = await getProducts();

  const selectedCategory = searchParams?.category || "";
  const selectedBrand = searchParams?.brand || "";
  const page = Number(searchParams?.page) || 1;
  const itemsPerPage = 20;

  let filtered = [...products];
  if (selectedCategory) {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }
  if (selectedBrand) {
    filtered = filtered.filter((p) => p.brand === selectedBrand);
  }

  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [
    ...new Set(
      products
        .filter((p) => !selectedCategory || p.category === selectedCategory)
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
      <h1 className="text-4xl font-bold mb-8 mt-4 text-center sm:text-left">
        {selectedCategory ? `Kategori: ${selectedCategory}` : "Alle produkter"}
      </h1>

      <FilterCatBrand
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
        categories={categories}
        brands={brands}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {currentPageProducts.map((product) => (
          <div key={product.id} className="hover:shadow-lg rounded-xl p-4">
            <ProductCardTest product={product} />
          </div>
        ))}
      </div>

      <PageShift page={page} totalPages={totalPages} />
    </main>
  );
}
