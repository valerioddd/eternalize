import { Flag, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate text-marble py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-sm opacity-80">
          <span>Realizzato con</span>
          <Heart size={14} className="text-gold" />
          <span>da Eternalize</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold transition-colors">Termini</a>
          <button 
            onClick={() => alert('Funzionalità Segnala in sviluppo')} 
            className="flex items-center gap-1.5 text-red-300 hover:text-red-400 transition-colors"
          >
            <Flag size={14} />
            <span>Segnala</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
