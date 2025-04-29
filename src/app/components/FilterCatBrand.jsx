"use client";

const FilterCatBrand = ({
  selectedCategory,
  selectedBrand,
  categories,
  brands,
}) => {
  const updateURL = (key, value) => {
    const url = new URL(window.location);
    if (value) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
    if (key === "category") url.searchParams.delete("brand");
    url.searchParams.delete("page");
    window.location.href = url.toString();
  };

  return (
    <form className="flex flex-wrap gap-4 justify-center sm:justify-start mb-10">
      <select
        name="category"
        value={selectedCategory}
        onChange={(e) => updateURL("category", e.target.value)}
        className="border p-2 rounded shadow-sm"
      >
        <option value="">Alle kategorier</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        name="brand"
        value={selectedBrand}
        onChange={(e) => updateURL("brand", e.target.value)}
        className="border p-2 rounded shadow-sm"
      >
        <option value="">Alle brands</option>
        {brands.map((brand, idx) => (
          <option key={idx} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </form>
  );
};

export default FilterCatBrand;
