export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=100", {
    next: { revalidate: 3600 }, 
  });
  const data = await res.json();
  return data.products;
}

export async function getSearchResults(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await res.json();
  return data.products;
}
