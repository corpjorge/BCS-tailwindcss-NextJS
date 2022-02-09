import Navbar from "../components/Navbars/Navbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Footer from "../components/Footers/Footer.js";
import Header from "../components/Headers/Header";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 md:px-10 bg-gray ">
        <Navbar />
        <Header />
        <div className="px-4 md:px-10 mx-auto w-full m-24">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
