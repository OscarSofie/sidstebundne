"use client";

import Link from "next/link";
import ProductCardTest from "./ProductCardTest";

export default function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <Link href={`/products/${product.id}`}>produkt</Link>
    </div>
  );
}
