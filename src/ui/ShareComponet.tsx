import Information from "./Information";
import Products from "./Products";

const ShareComponet = () => {
  return (
    <div className="w-full">
      <Products share={true} />
      <Information share={true} />
    </div>
  );
};

export default ShareComponet;
