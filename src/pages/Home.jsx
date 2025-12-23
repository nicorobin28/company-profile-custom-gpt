import React, { Suspense, lazy } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const Hero = lazy(() => import('../components/Hero'));
const Product = lazy(() => import('../components/Product'));
const Testimonials = lazy(() => import('../components/Testimonials'));

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <main>
        <Suspense fallback={<LoadingScreen />}>
          <Hero />
          <Product />
          <Testimonials />
        </Suspense>

      </main>
      {/* <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5 mt-0 bg-black/20">
        <p>&copy; 2025 AI Worker Company. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
