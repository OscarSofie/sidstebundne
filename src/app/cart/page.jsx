"use client";

import Link from "next/link";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [clearState, setClearState] = useState(0);

  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

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
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={350}
                  height={350}
                  className="object-cover rounded-xl mb-4 w-35 "
                />
              </Link>

              <div className="flex-1">
                <Link href={`/products/${item.id}`}>
                  <p>{item.brand}</p>
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="text-gray-500">
                    {item.quantity} x {item.price} kr
                  </p>
                </Link>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="cursor-pointer mt-2 hover:underline"
              >
                <IoCloseOutline className="size-9" />
              </button>
            </div>
          ))}

          <button
            onClick={handleClearCartClick}
            className=" cursor-pointer bg-red-700 text-white font-semibold px-4 py-2 rounded-3xl hover:bg-red-800 transition inline-block w-fit mx-auto"
          >
            Tøm kurven
          </button>

          {clearState === 1 && (
            <div className="absolute top-3/5 mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl border border-gray-300 shadow-lg p-4  w-64 z-10">
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

          <div className="bg-blue-100 p-4 rounded-2xl">
            <div className="flex justify-between p-1.5">
              <p className="font-semibold ">Subtotal: </p>
              <p>{total} kr</p>
            </div>
            <div className="flex justify-between p-1.5">
              <p className="font-semibold">Levering:</p>
              <p>0.00 kr</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold p-1.5">
              <p>Pris i alt:</p>
              <p>{total} kr</p>
            </div>
            <button className="bg-black rounded-3xl text-white font-semibold hover:bg-sky-800 px-4 py-2 cursor-pointer">
              Gå til betaling
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
