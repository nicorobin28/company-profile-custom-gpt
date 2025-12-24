import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
