"use client";

import { useCartStore } from "../store/cartStore";

const AddToCartButton = ({ product, className = "" }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      className={`bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-sky-600 transition ${className}`}
    >
      Læg i kurven
    </button>
  );
};

export default AddToCartButton;
