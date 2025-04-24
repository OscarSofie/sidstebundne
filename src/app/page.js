import Link from "next/link";
import ProductCardTest from "./components/ProductCardTest";

export default function Home() {
  return (
    <main>
      <Link href="/products">Se alle produkter</Link>
    </main>
  );
}
