<<<<<<< HEAD
import ProductList from "../components/ProductList";
=======
import { useEffect, useState } from "react";
import { getAllProducts } from "../utils/productApi";
>>>>>>> 0389a4f2b9fcb9670b00111cc1ebeed5d4552169

function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProducts().then(setProduct).catch(console.error);
  }, []);
  console.log(product);
  return (
    <>
      <ProductList />
    </>
  );
}
export default Home;
