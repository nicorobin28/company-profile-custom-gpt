import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

const Hero = lazy(() => import('./components/Hero'));
const Testimonials = lazy(() => import('./components/Testimonials'));

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Suspense fallback={<LoadingScreen />}>
          <Hero />
          {/* Placeholder for other sections to make it a full profile eventually */}
          <section id="product" className="min-h-[50vh] flex items-center justify-center border-t border-white/5 bg-white/5">
             <h2 className="text-3xl font-bold text-gray-500">Belom dibuat tod</h2>
          </section>
          <Testimonials />
        </Suspense>

      </main>
      {/* <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5 mt-0 bg-black/20">
        <p>&copy; 2025 AI Worker Company. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
