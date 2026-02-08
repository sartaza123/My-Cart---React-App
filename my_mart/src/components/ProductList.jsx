import { useFetch } from "../hooks/useFetch";
import ProductCard from "./ProductCard";

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
