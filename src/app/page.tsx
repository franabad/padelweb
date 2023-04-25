import Navbar from "../components/client/navbar";
import "./globals.css";
import Image from "next/image";
import fondo from "/assets/fondo.jpg";

const Page = () => {
  return (
    <div
      className="bg-hero bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Page;
