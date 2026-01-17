import React from "react";
import { Header } from "./";
import { Footer } from "../UI";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </div>

      {/* Main Content with padding to avoid overlap */}
      <main className="flex-grow w-full flex justify-center pt-[40px]  md:pt-[100px]"> 
        <div className="w-full">
        {/* <div className="w-full max-w-[1440px]"> */}
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
