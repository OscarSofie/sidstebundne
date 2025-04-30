import ProductCardTest from "../components/ProductCardTest";
import FilterCatBrand from "../components/FilterCatBrand";
import PageShift from "../components/PageShift";
import { getProducts } from "../api/products";

export default async function ProductsPage({ searchParams }) {
  const query = searchParams.q ? searchParams.q.toLowerCase() : "";
  const selectedCategory = searchParams.category ? searchParams.category : "";
  const selectedBrand = searchParams.brand ? searchParams.brand : "";
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const itemsPerPage = 20;

  const allProducts = await getProducts();

  const filteredProducts = allProducts.filter((product) => {
    const matchSearch =
      query === "" ||
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    const matchCategory =
      selectedCategory === "" || product.category === selectedCategory;

    const matchBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    return matchSearch && matchCategory && matchBrand;
  });


  const allCategories = [];
  allProducts.forEach((product) => {
    if (!allCategories.includes(product.category)) {
      allCategories.push(product.category);
    }
  });


  const brandProducts = selectedCategory
    ? allProducts.filter((p) => p.category === selectedCategory)
    : allProducts;

  const allBrands = [];
  brandProducts.forEach((product) => {
    if (!allBrands.includes(product.brand)) {
      allBrands.push(product.brand);
    }
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <main className="mx-4 md:mx-8 sm:mx-6 px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 mt-4 text-center sm:text-left">
        {query
          ? `Search results for: "${query}"`
          : selectedCategory
          ? `Category: ${selectedCategory}`
          : "All products"}
      </h1>

      <FilterCatBrand
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
        categories={allCategories}
        brands={allBrands}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="hover:shadow-lg rounded-xl p-4">
            <ProductCardTest product={product} />
          </div>
        ))}
      </div>

      <PageShift page={page} totalPages={totalPages} />
    </main>
  );
}
