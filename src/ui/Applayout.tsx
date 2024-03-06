import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Applayout = () => {
  return (
    <div className="w-full overflow-hidden font-Manrope">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
};

export default Applayout;
