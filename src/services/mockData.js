export const mockMemorials = {
  '123': {
    id: '123',
    name: 'Alessandro Verdi',
    birthDate: '12 Maggio 1945',
    deathDate: '24 Ottobre 2023',
    location: 'Siena, Toscana',
    mainImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=800',
    quote: 'La gentilezza è l\'unica eredità che non svanisce mai.',
    biography: `Alessandro Verdi è nato in una piccola comunità rurale nel cuore della Toscana. Fin da giovane ha dimostrato una curiosità insaziabile per la natura e la meccanica, passioni che lo avrebbero guidato per tutta la vita. Dopo gli studi, ha dedicato oltre quarant'anni alla professione di architetto paesaggista, trasformando giardini dimenticati in oasi di pace per centinaia di famiglie.\n\nOltre al successo professionale, Alessandro era noto per il suo impegno nel volontariato locale e per la sua collezione di libri antichi. Chi lo ha conosciuto ricorda il suo sorriso calmo e la capacità di ascoltare senza mai giudicare. Ha vissuto una vita piena, circondato dall'affetto della moglie Elena e dei figli Marco e Giulia, ai quali ha trasmesso l'amore per il bello e per l'onestà.\n\nQuesta pagina è dedicata alla sua memoria, un luogo dove amici e parenti possono ritrovarsi per celebrare l'uomo straordinario che è stato.`,
    gallery: [
      { url: 'https://images.unsplash.com/photo-1506744626753-1fa44df31c78?auto=format&fit=crop&q=80&w=800', alt: 'Paesaggio' },
      { url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800', alt: 'Cornice' },
      { url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800', alt: 'Famiglia' },
      { url: 'https://images.unsplash.com/photo-1490243108174-897dbdb2ab15?auto=format&fit=crop&q=80&w=800', alt: 'Fiori' },
      { url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800', alt: 'Libro' },
      { url: 'https://images.unsplash.com/photo-1470071131384-001b85755536?auto=format&fit=crop&q=80&w=800', alt: 'Mare' },
      { url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800', alt: 'Campagna' },
      { url: 'https://images.unsplash.com/photo-1490750967868-88cb4aca8fba?auto=format&fit=crop&q=80&w=800', alt: 'Fiore Rosa' }
    ],
    thoughts: [
      { text: 'Un vero gentiluomo d\'altri tempi. Il suo contributo al parco cittadino resterà per sempre.', author: 'Roberto M.' },
      { text: 'Porterò sempre con me i suoi consigli sulla cura dei bonsai. Grazie di tutto, Alessandro.', author: 'Chiara F.' }
    ],
    totalThoughts: 42
  }
};

export const fetchMemorial = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMemorials[id] || null);
    }, 500);
  });
};
