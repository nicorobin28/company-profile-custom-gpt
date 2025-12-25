import React, { Suspense, lazy } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Hero from "../components/Hero"; // Load Hero instantly for LCP
import SEO from "../components/SEO";

// Lazy load below-the-fold content
const Product = lazy(() => import("../components/Product"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Faq = lazy(() => import("../components/Faq"));


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <SEO 
        title="Home" 
        description="Pekerjakan AI Worker untuk meningkatkan produktivitas bisnis Anda. Solusi cerdas, hemat biaya, dan efisien."
      />
      <main>
        <Hero />
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><LoadingScreen /></div>}>
          <Product />
          <AboutUs />
          <Testimonials />
          <Faq/>
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
