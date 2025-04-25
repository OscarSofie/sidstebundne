import Link from 'next/link';
import Image from 'next/image';
import BrandBanner from './components/brandBanner/BrandBanner';

export default function Home() {
  return (
    <main>
      <div>
        <Image
          src="/img/makeup-bg.jpg"
          alt="Makeup baggrund"
          fill
          className="object-cover z-0 "
          priority
        />
        <div className="absolute top-1/2 left-10 z-10">
        <Link
          href="/products"
          className="bg-black text-white hover:text-pink-500 px-6 py-3 text-4xl"
        >
          Produkter
        </Link>
        <Link href="/products/beauty" className="bg-black text-white hover:text-pink-500 px-6 py-3 text-4xl">Beauty</Link>
        </div>
      </div>
        <BrandBanner />
    </main>

  );
}