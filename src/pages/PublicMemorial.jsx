import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMemorial } from '../services/mockData';
import ImageGrid from '../components/ImageGrid';
import { BookOpen, Image as ImageIcon, MessageCircleHeart, Heart } from 'lucide-react';

export default function PublicMemorial() {
  const { id } = useParams();
  const [memorial, setMemorial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemorial(id).then(data => {
      setMemorial(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-gray-200 rounded-xl"></div>
          <div className="h-6 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!memorial) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-serif text-brand-dark mb-4">Memoriale non trovato</h2>
        <p className="text-gray-600">Il memoriale che stai cercando non esiste o è stato rimosso.</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto animate-fade-in pb-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12 mt-8">
        {memorial.mainImage && (
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src={memorial.mainImage} 
                alt={memorial.name}
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-brand-green p-2 rounded-full text-white shadow-md">
              <Heart size={18} fill="currentColor" />
            </div>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-3 font-bold">{memorial.name}</h1>
        
        <div className="text-brand-green font-medium text-lg mb-4">
          {memorial.birthDate} – {memorial.deathDate}
        </div>
        
        {memorial.quote && (
          <p className="italic text-gray-500 font-serif text-lg">"{memorial.quote}"</p>
        )}
      </div>

      {/* Biography */}
      <section id="biografia" className="mb-14">
        <h2 className="flex items-center gap-2 text-2xl font-bold font-serif text-brand-dark mb-6 border-b border-gray-200 pb-2">
          <BookOpen size={20} className="text-brand-green" />
          La Sua Storia
        </h2>
        <div className="prose prose-slate prose-lg max-w-none text-left">
          {memorial.biography.split('\n').map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-gray-700 text-[15px] md:text-[16px] mb-4">{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="galleria" className="mb-14">
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
          <h2 className="flex items-center gap-2 text-2xl font-bold font-serif text-brand-dark">
            <ImageIcon size={20} className="text-brand-green" />
            Galleria Fotografica
          </h2>
          <span className="text-sm text-gray-500">{memorial.gallery.length} immagini condivise</span>
        </div>
        <ImageGrid images={memorial.gallery} />
      </section>

      {/* Thoughts & Memories */}
      <section id="ricordi" className="bg-brand-light rounded-2xl p-6 md:p-8">
        <h2 className="flex items-center gap-2 text-xl font-bold font-serif text-brand-dark mb-6">
          <MessageCircleHeart size={20} className="text-brand-green" />
          Pensieri e Ricordi
        </h2>
        <div className="space-y-6 mb-8">
          {memorial.thoughts.map((thought, i) => (
            <div key={i} className="border-l-2 border-brand-green pl-4">
              <p className="italic text-gray-700 text-sm md:text-base mb-2">"{thought.text}"</p>
              <p className="text-brand-green font-medium text-sm">— {thought.author}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-[#D1FAE5] text-brand-green font-medium px-6 py-2 rounded-md hover:bg-[#bbf7d0] transition-colors text-sm">
            Vedi tutti i {memorial.totalThoughts} pensieri
          </button>
        </div>
      </section>
    </article>
  );
}
