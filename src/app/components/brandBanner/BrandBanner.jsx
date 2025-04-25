"use client";

const BrandBanner = ({ products = [] }) => {
  if (!products.length) {
    return <p className="text-center text-gray-500">Indlæser mærker...</p>;
  }

  const uniqueBrands = [...new Set(products.map((p) => p.brand).filter(Boolean))];

  // Duplikerer listen for en uendelig loop-effekt
  const repeatedBrands = [...uniqueBrands, ...uniqueBrands];

  return (
    <div className="overflow-hidden bg-balck py-4 shadow-inner">
      <div className="animate-marquee whitespace-nowrap flex gap-8 px-4">
        {repeatedBrands.map((brand, index) => (
          <span
            key={index}
            className="inline-block px-4 py-2 text-sm font-semibold bg-white border border-pink-300 rounded-full hover:bg-pink-100 cursor-pointer transition"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandBanner;
