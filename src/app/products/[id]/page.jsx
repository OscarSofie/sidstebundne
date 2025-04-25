import Image from "next/image";

const Singleview = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h3>{product.brand}</h3>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Singleview;
