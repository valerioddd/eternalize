import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PublicMemorial from './pages/PublicMemorial';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import Wizard from './pages/Wizard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/p/:id" element={<PublicMemorial />} />
            <Route path="/wizard" element={<Wizard />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
