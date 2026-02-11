import { useFetch } from "../hooks/useFetch";
import ProductCard from "./ProductCard";

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10">Error...</p>;

  return (
    // Responsive grid layout
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
