import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const ImageGrid = ({ images = [], onImageClick = null, editable = false, onRemove = null }) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [showLightbox, setShowLightbox] = React.useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="w-full bg-eternal-50 rounded-lg border border-dashed border-eternal-300 py-12 flex items-center justify-center">
        <p className="text-eternal-600 text-center">Nessuna foto caricata</p>
      </div>
    );
  }

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      {/* Main Display */}
      <div className="space-y-4">
        {/* Featured Image */}
        <div className="relative bg-eternal-100 rounded-lg overflow-hidden aspect-video md:aspect-square">
          <img
            src={images[selectedImageIndex]?.src}
            alt={images[selectedImageIndex]?.alt || 'Foto memoria'}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setShowLightbox(true)}
          />

          {/* Remove Button (Editable Mode) */}
          {editable && onRemove && (
            <button
              onClick={() => onRemove(images[selectedImageIndex]?.id)}
              className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/40 text-white rounded-full text-xs font-medium">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                  index === selectedImageIndex
                    ? 'border-eternal-600 shadow-lg'
                    : 'border-eternal-200 hover:border-eternal-400'
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {showLightbox && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-black/40 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex]?.src}
              alt={images[selectedImageIndex]?.alt || 'Full view'}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};