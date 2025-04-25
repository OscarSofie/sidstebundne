
import BrandBanner from "../components/BrandBanner";

const Products = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  return (
    <main>
      <BrandBanner products={products} />
    </main>
  );
};

export default Products;
