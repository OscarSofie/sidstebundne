
import Link from "next/link";
import ProductCardTest from "./components/ProductCardTest";
import Image from "next/image";
import Header from "./components/Header";


export default function Home() {
  return (

    <div>
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-pink-100 to-blue-100">
        <h1 className="text-5xl font-bold mb-4">Alt hvad du mangler – ét sted!</h1>
        <p className="text-lg text-gray-700 mb-8">Oplev tusindvis af produkter inden for elektronik, skønhed, bolig og meget mere.</p>
        <Link href="/products" className="bg-black text-white hover:bg-pink-600 transition px-6 py-3 rounded text-lg">
          Gå til produkter
        </Link>
      </section>
       
      </div>
   


  );
}
