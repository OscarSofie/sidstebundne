"use client";

import Link from "next/link";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import { useCartStore } from "../store/cartStore";
import { useState } from "react";

const CartIcon = () => {
  const cart = useCartStore((state) => state.cart);
  const [showPreview, setShowPreview] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <Link href="/cart" className="relative inline-block w-7">
        <TiShoppingCart size={28} className="text-black " />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>

      {showPreview && cart.length > 0 && (
        <div className="absolute right-0 mt-0.5 w-72 bg-white shadow-lg border border-gray-300  rounded-2xl p-3 z-50">
          <p className="font-semibold mb-2">Din kurv:</p>
          <ul className="text-sm max-h-60 overflow-y-auto space-y-1">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span className="flex ">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={350}
                    height={350}
                    className="object-cover rounded-xl mb-4 w-20 "
                  />
                  {item.title}
                </span>
                <span>{item.quantity} stk</span>
              </li>
            ))}
          </ul>
          <Link
            href="/cart"
            className="mt-3 block text-center text-sm text-blue-600 hover:underline"
          >
            Gå til kurv
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
