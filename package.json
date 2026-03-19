import React, { useState } from 'react';
import { AlertTriangle, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const [showReport, setShowReport] = useState(false);

  const handleReport = () => {
    setShowReport(true);
    setTimeout(() => {
      alert('Segnalazione inviata. Grazie per aiutarci a mantenere Eternal Link sicura e rispettosa.');
      setShowReport(false);
    }, 500);
  };

  return (
    <footer className="bg-eternal-900 text-eternal-100 mt-16 pb-safe">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-white">Eternal Link</h3>
            <p className="text-sm leading-relaxed">
              Crea un memoriale digitale eterno per chi ami. Un luogo dove i ricordi vivono per sempre.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4 text-white">Link Utili</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-white transition">Domande Frequenti</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy & Termini</a></li>
              <li><a href="#" className="hover:text-white transition">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4 text-white">Contattaci</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@eternallink.it" className="hover:text-white transition">
                  info@eternallink.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+39123456789" className="hover:text-white transition">
                  +39 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Report Button */}
        <div className="border-t border-eternal-700 pt-8">
          <button
            onClick={handleReport}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-eternal-600 text-eternal-200 hover:bg-eternal-800 transition text-sm font-medium"
          >
            <AlertTriangle className="w-4 h-4" />
            Segnala Contenuto Inappropriato
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-eternal-700 mt-8 pt-8 text-center text-xs text-eternal-400">
          <p>&copy; {new Date().getFullYear()} Eternal Link. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};