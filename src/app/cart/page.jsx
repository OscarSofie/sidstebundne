"use client";

import Link from "next/link";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [clearState, setClearState] = useState(0);

  const handleClearCartClick = () => {
    setClearState((state) => (state === 1 ? 0 : 1));
  };

  const handleJa = () => {
    clearCart();
    setClearState(0);
  };

  const handleNej = () => {
    setClearState(0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Din kurv:</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Kurven er tom</p>
      ) : (
        <div className="flex flex-col gap-6 relative">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border-b pb-4"
            >
              <Link
                href={`/products/${item.id}`}
                className="text-blue-500 hover:underline"
              >
                <img
                  className="w-28 h-28 object-cover rounded-md"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </Link>

              <div className="flex-1">
                <Link href={`/products/${item.id}`}>
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="text-gray-500">
                    {item.quantity} x {item.price} kr
                  </p>
                </Link>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer mt-2 hover:underline"
                >
                  Slet
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleClearCartClick}
            className=" cursor-pointer bg-red-700 text-white font-semibold px-4 py-2 rounded-3xl hover:bg-red-800 transition inline-block w-fit mx-auto"
          >
            Tøm kurven
          </button>

          {clearState === 1 && (
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl border border-gray-300 shadow-lg p-4  w-64 z-10">
              <p className="text-center mb-4 font-medium">
                Er du sikker på, at du vil tømme kurven?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleJa}
                  className="bg-red-700 text-white px-3 py-1 rounded-3xl hover:bg-red-800 transition"
                >
                  Ja
                </button>
                <button
                  onClick={handleNej}
                  className="bg-gray-300 text-gray-800 px-3 py-1 rounded-3xl hover:bg-gray-400 transition"
                >
                  Nej
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
