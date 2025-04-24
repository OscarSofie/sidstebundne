
import ProductCard from '../components/ProductCard';

const Products = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const products = data.products;

  return (
    <main>
      <h1 >Produkter</h1>
      <div >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;
