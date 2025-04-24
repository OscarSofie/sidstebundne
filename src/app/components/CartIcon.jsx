"use client";

import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { useCartStore } from "../store/cartStore";

const CartIcon = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="relative inline-block">
      <TiShoppingCart size={28} className="text-black mt-2" />
      {totalItems > 0 && (
        <span className="mt-2 absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
