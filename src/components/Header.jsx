import { Link, useLocation } from 'react-router-dom';
import { Flower2 } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isPublicMemorial = location.pathname.startsWith('/p/');

  return (
    <header className="sticky top-0 z-50 bg-brand-gray/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-brand-dark hover:opacity-80 transition-opacity">
          <Flower2 size={24} className="text-brand-green" />
          <span className="font-serif text-xl font-bold tracking-tight">
            {isPublicMemorial ? 'Memoriale Digitale' : 'Eternalize'}
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {isPublicMemorial ? (
            <>
              <a href="#biografia" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">Biografia</a>
              <a href="#galleria" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">Galleria</a>
              <a href="#ricordi" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">Ricordi</a>
            </>
          ) : (
            <>
              <Link to="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">How it Works</Link>
              <Link to="/products" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">Products</Link>
              <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">Pricing</Link>
            </>
          )}
        </nav>

        <div className="flex items-center">
          <Link 
            to="/" 
            className="bg-brand-green text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors shadow-sm"
          >
            {isPublicMemorial ? 'Lascia un Fiore' : 'Get Started'}
          </Link>
        </div>
      </div>
    </header>
  );
}
