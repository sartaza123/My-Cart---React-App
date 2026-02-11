import { useFetch } from "../hooks/useFetch";
import ProductCard from "./ProductCard";

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-10">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
