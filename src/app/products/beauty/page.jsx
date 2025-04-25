import ProductCard from "@/app/components/ProductCard";

const BeautyPage = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const allProducts = data.products;

  // Filtrér kun beauty-produkter
  const beautyProducts = allProducts.filter(
    (product) => product.category === "beauty"
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Beauty produkter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {beautyProducts.length > 0 ? (
          beautyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Ingen beauty-produkter fundet.</p>
        )}
      </div>
    </main>
  );
};

export default BeautyPage;
