  "use client";

  import { useCartStore } from "../store/cartStore";
  import Link from "next/link";
  import Image from "next/image";
  import AddToCartButton from "./AddToCart";

  const ProductCardTest = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);

    

    return (
      <div className="rounded-2xl  text-black transition-transform duration-300 hover:scale-102">
        <Link href={`/products/${product.id}`}>
          <img className="" src={product.thumbnail} alt="" />
      {/*   <Image 
              src={product.thumbnail} 
              alt={product.title} 
              fill
              className="object-cover rounded-xl"
            /> */}
        
          <h3 className=" text-xl font-bold">{product.brand}</h3>
          <h2 className=" text-sm text-gray-500 py-1">{product.title}</h2>
          <p className="">{product.price} kr</p>
        </Link>
    {/*     <button
          onClick={() => addToCart(product)}
          className=" bg-blue-400 text-white px-4 py-2 rounded mt-2"
          >
          Læg i kurven
        </button> */}
      <AddToCartButton product={product} />
      </div>
    );
  };

  export default ProductCardTest;
