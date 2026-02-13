import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import { MainLayout } from "./components/Layout";

// Pages
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUs";
import GalleryPage from "./Pages/Gallery";
import FAQs from "./Pages/FAQs";
import { ScrollUp } from "./components/UI";
import ProductsPage from "./Pages/Product";
import BlogPage from "./Pages/Blog";
import ContactUsPage from "./Pages/ConactUs";
import BlogDetail from "./components/Blog/BlogDetailsSection";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy";

// PRODUCT CATEGORY PAGES
import Cookware from "./Pages/Product/Cookware";
import Bakeware from "./Pages/Product/Bakeware";
import ElectricalAppliance from "./Pages/Product/ElectricalAppliance";
import SpecialtyCoatings from "./Pages/Product/SpecialtyCoatings";
import UVCoatings from "./Pages/Product/UVCoatings";
import IndustrialCoatings from "./Pages/Product/IndustrialCoatings";
import SoftTouchCoatings from "./Pages/Product/SoftTouchCoatings";
import CookwareExterior from "./Pages/Product/CookwareExterior";
import BottleCoatings from "./Pages/Product/BottleCoatings";
import Plastic from "./Pages/Product/Plastic";
import WoodSpcPvcPmma from "./Pages/Product/WoodSpcPvcPmma";
import Metal from "./Pages/Product/Metal";
import SpecialityCoatings from "./Pages/Product/SpecialityCoatings";

// BRAND PAGES
import BrandPage from "./Pages/Brands";
import ProtectixPlus from "./Pages/Brands/ProtectixPlus";
import Shieldon from "./Pages/Brands/Shieldon";
import ShieldonPlus from "./Pages/Brands/ShieldonPlus";
import Ceragreen from "./Pages/Brands/Ceragreen";
import Protectix from "./Pages/Brands/Protectix";
import STONSHILD from "./Pages/Brands/stonshild";
import Ceratough from "./Pages/Brands/Ceratough";
import Protectixone from "./Pages/Brands/Protectixone";
import PfaPowder from "./Pages/Brands/PfaPowder";


function App() {
  return (
    <BrowserRouter>
      <ScrollUp />

      <Routes>
        <Route path="/" element={<MainLayout />}>

          {/* HOME */}
          <Route index element={<Home />} />

          {/* ABOUT */}
          <Route path="about" element={<AboutUsPage />} />

          {/* PRODUCTS */}
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path="cookware" element={<Cookware />} />
            <Route path="bakeware" element={<Bakeware />} />
            <Route path="electrical-appliance" element={<ElectricalAppliance />} />
            <Route path="specialty-coatings" element={<SpecialtyCoatings />} />
            <Route path="uv-coatings" element={<UVCoatings />} />
            <Route path="industrial-coatings" element={<IndustrialCoatings />} />
            <Route path="soft-touch-coatings" element={<SoftTouchCoatings />} />
            <Route path="cookware-exterior" element={<CookwareExterior />} />
            <Route path="bottle-coatings" element={<BottleCoatings />} />
            <Route path="plastic" element={<Plastic />} />
            <Route path="wood-spc-pvc-pmma" element={<WoodSpcPvcPmma />} />
            <Route path="metal" element={<Metal />} />
            <Route path="speciality-coatings" element={<SpecialityCoatings />} />

          </Route>

          {/* BRANDS */}
          <Route path="brands">
            <Route index element={<BrandPage />} />
            <Route path="protectix" element={<Protectix />} />
            <Route path="protectix-plus" element={<ProtectixPlus />} />
            <Route path="shieldon" element={<Shieldon />} />
            <Route path="shieldon-plus" element={<ShieldonPlus />} />
            <Route path="ceragreen" element={<Ceragreen />} />
            <Route path="stonshild" element={<STONSHILD />} />
            <Route path="ceratough" element={<Ceratough />} />
            <Route path="protectixone" element={<Protectixone />} />
            <Route path="pfapowder" element={<PfaPowder />} />
          </Route>

          {/* OTHER PAGES */}
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
