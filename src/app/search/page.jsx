import ProductCardTest from "../components/ProductCardTest";

async function getSearchResults(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await res.json();
  return data.products;
}

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || ""; 
  const products = await getSearchResults(query); 

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Søgeresultat for: "{query}"
      </h1>

      {products.length === 0 ? (
        <p>Ingen produkter fundet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCardTest key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
  