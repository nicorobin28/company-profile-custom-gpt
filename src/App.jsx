import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

const Home = lazy(() => import("./pages/Home"));
const Productcard = lazy(() => import("./pages/Productcard"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Productcard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        {/* FAQ tetap di bawah */}
        {/* <Faq /> */}
      </Suspense>
    </Router>
  );
}

export default App;
