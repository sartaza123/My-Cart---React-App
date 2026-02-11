import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Search() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  const searchQuery = useSelector((state) => state.search.query);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10">Error loading data</p>;

  // ✅ data is already an array
  const filteredProducts =
    data?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    ) || [];

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6 text-[#1b1f3b]">
        Search Results for "{searchQuery}"
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
