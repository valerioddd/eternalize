import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MemorialProvider } from './context/memorialContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PublicMemorialPage } from './pages/PublicMemorialPage';

// Placeholder pages for now
const HomePage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="font-serif text-5xl font-bold text-eternal-900 mb-4">Eternal Link</h1>
      <p className="text-eternal-700 mb-8">Crea un memoriale digitale eterno</p>
      <button className="px-6 py-3 bg-eternal-600 text-white rounded-lg hover:bg-eternal-700 transition">
        Crea Memoriale
      </button>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <MemorialProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/p/:memorialId" element={<PublicMemorialPage />} />
              {/* Future routes */}
              {/* <Route path="/create" element={<CreateWizard />} /> */}
              {/* <Route path="/checkout" element={<Checkout />} /> */}
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </MemorialProvider>
    </BrowserRouter>
  );
}

export default App;