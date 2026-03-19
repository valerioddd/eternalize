import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Header = () => {
  const location = useLocation();
  const isMemorialPage = location.pathname.startsWith('/p/');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-eternal-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-serif font-bold text-eternal-900 hover:text-eternal-700 transition"
          >
            <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
            <span>Eternal Link</span>
          </Link>

          <div className="flex items-center gap-4">
            {!isMemorialPage && (
              <>
                <Link 
                  to="/" 
                  className="text-sm text-eternal-700 hover:text-eternal-900 font-medium transition"
                >
                  Home
                </Link>
                <Link 
                  to="/create" 
                  className="px-4 py-2 bg-eternal-600 text-white rounded-lg hover:bg-eternal-700 transition font-medium"
                >
                  Crea Memoriale
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};