import CartIcon from "../components/CartIcon";
import ProductCard from "../components/ProductCard";
import ProductCardTest from "../components/ProductCardTest";

const Products = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  return (
    <main>
      <CartIcon></CartIcon>
      <h1>Produkter</h1>
      <div>
        {products.map((product) => (
          <ProductCardTest key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;
