import Image from "next/image";
import AddToCartButton from "../../components/AddToCart";



const Singleview = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Billede */}
        <div className="w-full h-96 relative">
        <img className="" src={product.thumbnail} alt="" />
        </div>

        {/* Produktinfo */}
        <div className="flex flex-col gap-4">
          <h3 className="text-pink-500 text-sm font-semibold uppercase">{product.brand}</h3>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-bold mt-2">{product.price} kr.</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </main>
  );
};

export default Singleview;
