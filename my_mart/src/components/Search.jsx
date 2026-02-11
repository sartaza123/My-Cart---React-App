import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Search() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const searchQuery = useSelector((state) => state.search.query);

  if (loading) return <p className="text-center py-10 text-sm">Loading...</p>;

  if (error)
    return (
      <p className="text-center py-10 text-sm text-red-500">
        Error loading data
      </p>
    );

  // Filter products based on search query
  const filteredProducts =
    data?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    ) || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Heading */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-[#1b1f3b]">
        Search Results for{" "}
        <span className="text-[#cf722b]">"{searchQuery}"</span>
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-sm sm:text-base">No products found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
