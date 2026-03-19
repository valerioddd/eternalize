import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Loader } from 'lucide-react';
import QRCode from 'qrcode.react';
import { memorialService } from '../services/memorialService';
import { ImageGrid } from '../components/ImageGrid';

export const PublicMemorialPage = () => {
  const { memorialId } = useParams();
  const [memorial, setMemorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const loadMemorial = async () => {
      try {
        setLoading(true);
        const data = await memorialService.getMemorialById(memorialId);
        setMemorial(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMemorial();
  }, [memorialId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-eternal-50 to-white">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-eternal-600 mx-auto mb-4" />
          <p className="text-eternal-700 font-serif">Caricando il memoriale...</p>
        </div>
      </div>
    );
  }

  if (error || !memorial) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-eternal-50 to-white">
        <div className="text-center">
          <p className="text-red-600 font-serif text-lg">⚠️ {error || 'Memoriale non trovato'}</p>
        </div>
      </div>
    );
  }

  const calculateAge = (birthDate, deathDate) => {
    const birth = new Date(birthDate);
    const death = new Date(deathDate);
    return death.getFullYear() - birth.getFullYear();
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };

  const age = calculateAge(memorial.birthDate, memorial.deathDate);

  return (
    <div className="min-h-screen bg-gradient-to-b from-eternal-50 via-white to-eternal-100">
      {/* Hero Section */}
      <div className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <Heart className="w-12 h-12 mx-auto text-rose-500 fill-rose-500 opacity-60" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-eternal-900 mb-2">
            {memorial.name}
          </h1>

          <p className="text-eternal-600 font-serif text-lg md:text-xl">
            <span className="font-bold">{formatDate(memorial.birthDate)}</span>
            <span className="mx-3">—</span>
            <span className="font-bold">{formatDate(memorial.deathDate)}</span>
          </p>

          <p className="text-eternal-700 text-sm md:text-base mt-2">
            {age} anni
          </p>
        </div>

        {/* Image Gallery */}
        {memorial.images && memorial.images.length > 0 && (
          <div className="mb-12">
            <ImageGrid images={memorial.images} />
          </div>
        )}

        {/* Biography Section */}
        <div className="prose prose-lg max-w-none mb-12 bg-white rounded-lg p-8 shadow-sm border border-eternal-200">
          <p className="font-serif text-eternal-900 leading-relaxed whitespace-pre-wrap text-center md:text-left">
            {memorial.biography}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => setShowQR(!showQR)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-eternal-600 text-white rounded-lg hover:bg-eternal-700 transition font-medium"
          >
            <span>QR Code</span>
          </button>

          <button
            onClick={() => {
              navigator.share({
                title: memorial.name,
                text: `Visita il memoriale di ${memorial.name}`,
                url: window.location.href,
              }).catch(() => {
                alert('Link copiato negli appunti');
                navigator.clipboard.writeText(window.location.href);
              });
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-eternal-600 text-eternal-600 rounded-lg hover:bg-eternal-50 transition font-medium"
          >
            <Share2 className="w-5 h-5" />
            <span>Condividi</span>
          </button>
        </div>

        {/* QR Code Modal */}
        {showQR && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-2xl">
              <h3 className="font-serif text-xl font-bold text-eternal-900 mb-6">
                Scansiona il QR Code
              </h3>
              <div className="bg-white p-4 rounded-lg border-2 border-eternal-200 mx-auto w-fit">
                <QRCode
                  value={window.location.href}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-eternal-600 text-sm mt-6 font-serif">
                Condividi questo QR code per far scoprire questo memoriale
              </p>
              <button
                onClick={() => setShowQR(false)}
                className="mt-6 px-4 py-2 bg-eternal-600 text-white rounded-lg hover:bg-eternal-700 transition font-medium w-full"
              >
                Chiudi
              </button>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center pt-12 border-t border-eternal-200">
          <p className="text-eternal-600 text-sm font-serif">
            💝 Questo memoriale digitale è stato creato con amore usando <span className="font-bold">Eternal Link</span>
          </p>
        </div>
      </div>
    </div>
  );
};