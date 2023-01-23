import Head from "next/head";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import "../styles/globals.css";

// import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-start gap-x-2 py-[40px] px-[25px]">
        <LeftSidebar />
        <Component {...pageProps} />
        <RightSidebar />
      </div>
    </>
  );
}
export default MyApp;
