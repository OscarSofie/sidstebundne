"use client";

import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Din kurv:</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Kurven er tom</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div 
              key={item.id}
              className="flex items-center gap-6 border-b pb-4"
            >
              <img
                className="w-28 h-28 object-cover rounded-md"
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="flex-1">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-500">{item.quantity} x {item.price} kr</p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Fjern fra kurven
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
