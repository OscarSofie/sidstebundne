"use client";

import { useCartStore } from "../store/cartStore";
import Link from "next/link";

const ProductCardTest = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="p-4 border rounded">
      <Link href={`/products/${product.id}`}>
        <img src={product.thumbnail} alt="" />
        <h3>{product.brand}</h3>
        <h2>{product.title}</h2>
        <p>{product.price} kr</p>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Læg i kurven
      </button>
    </div>
  );
};

export default ProductCardTest;
