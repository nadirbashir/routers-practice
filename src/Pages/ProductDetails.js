import { useParams } from "react-router-dom";
export const ProductDetails = () => {
    const params = useParams();
    console.log(params.productId);
  return (
    <section>
      <h2>Product Details</h2>
      <h4>{params.productId}</h4>
    </section>
  );
};
