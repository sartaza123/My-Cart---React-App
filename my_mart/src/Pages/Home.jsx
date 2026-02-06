import { useEffect, useState } from "react";
import { getAllProducts } from "../utils/productApi";

function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProducts().then(setProduct).catch(console.error);
  }, []);
  console.log(product);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
export default Home;
