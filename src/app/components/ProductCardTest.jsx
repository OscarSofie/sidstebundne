"use client";

import { useCartStore } from "../store/cartStore";

const ProductCardTest = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="p-4 border rounded">
      <h2>{product.title}</h2>
      <p>{product.price} kr</p>
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
