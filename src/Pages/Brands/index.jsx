import { useParams } from "react-router-dom";

const BrandPage = () => {
  const { brands } = useParams();

  return (
    <main className="pt-0">
      <h1 className="text-3xl font-bold">
        {brands ? brands.replace(/-/g, " ") : "All Brands"}
      </h1>

     
    </main>
  );
};

export default BrandPage;
