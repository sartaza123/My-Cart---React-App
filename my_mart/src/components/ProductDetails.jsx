import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Details() {
  const { id } = useParams();

  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10">Error: {error}</p>;

  const details = data.find((detail) => String(detail.id) === id);

  console.log(details);
  console.log(id);
  return (
    <>
      <h1>{details.title}</h1>
    </>
  );
}
export default Details;
