"use client";

import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div>
      <h2>Din kurv:</h2>
      {cart.length === 0 ? (
        <p>Kurven er tom</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <img className="w-28" src={item.images} alt={item.title} />
            {item.quantity} x {item.title}
            <div>{item.price} Kr</div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Fjern fra kurven
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
