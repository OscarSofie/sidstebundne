"use client";

import { useCartStore } from "../store/cartStore";

const AddToCartButton = ({ product, className = "" }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      className={`bg-black text-white font-semibold px-4 py-2 rounded-3xl mt-2 hover:bg-sky-800 transition ${className}`}
    >
      Læg i kurven
    </button>
  );
};

export default AddToCartButton;
