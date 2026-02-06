import { useFetch } from "../hooks/useFetch";

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  console.log(data);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>Product List</h2>
    </>
  );
}

export default ProductList;
