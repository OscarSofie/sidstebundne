import Link from "next/link";
import ProductCardTest from "./components/ProductCardTest";
import Image from "next/image";
import Header from "./components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Alt hvad du mangler – ét sted!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Se alle produkter inden for elektronik, skønhed, bolig og
          meget mere.
        </p>
        <Link
          href="/products"
          className="bg-black text-white font-semibold hover:bg-sky-800 transition px-6 py-3 rounded-3xl text-lg"
        >
          Gå til produkter
        </Link>
      </section>
    </div>
  );
}
