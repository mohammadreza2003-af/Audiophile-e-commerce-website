import Hero from "./Hero";
import Information from "./Information";
import Products from "./Products";
import SomeProducts from "./SomeProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products share={false} />
      <SomeProducts />
      <Information share={false} />
    </div>
  );
};

export default Home;
