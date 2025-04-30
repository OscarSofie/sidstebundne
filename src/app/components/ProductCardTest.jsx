"use client";

import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "./AddToCart";

const ProductCardTest = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="rounded-2xl flex flex-col h-full text-black transition-transform duration-300 hover:scale-102 ">
      <Link href={`/products/${product.id}`} className="flex-grow">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={350}
          height={350}
          className="object-cover rounded-xl mb-4"
        />

        <h2 className=" text-xl font-bold  py-1">{product.title}</h2>
        <h3 className=" text-sm text-gray-500 ">{product.brand}</h3>
        <p className="">{product.price} kr</p>
      </Link>
      <div className="mt-4">
        <AddToCartButton className="mt-auto" product={product} />
      </div>
    </div>
  );
};

export default ProductCardTest;
