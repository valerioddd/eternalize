export default function ImageGrid({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mt-8">
      {images.map((img, idx) => (
        <div 
          key={idx} 
          className="aspect-square overflow-hidden rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <img 
            src={img.url} 
            alt={img.alt || `Memorial photo ${idx + 1}`} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      ))}
    </div>
  );
}
