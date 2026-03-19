export const mockMemorials = [
  {
    id: 'eternal-001',
    name: 'Maria Rossi',
    birthDate: '1945-06-15',
    deathDate: '2023-12-01',
    biography: 'Maria è stata un\'insegnante appassionata per 40 anni. Amava la letteratura italiana e la musica classica. Ha lasciato due figli e quattro nipoti che la ricordano con amore immenso.',
    images: [
      { id: '1', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500', alt: 'Maria giovane' },
      { id: '2', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500', alt: 'Maria in famiglia' },
      { id: '3', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500', alt: 'Maria ricordo' },
    ],
    qrCode: 'https://qrcode.com/eternal-001',
    createdAt: '2023-12-10',
    owner: {
      name: 'Giovanni Rossi',
      email: 'giovanni@example.com',
      phone: '+39 320 1234567',
    },
    status: 'published',
  },
];

export const mockCurrentUser = {
  id: 'user-001',
  name: 'Giovanni Rossi',
  email: 'giovanni@example.com',
  phone: '+39 320 1234567',
  isAuthenticated: false,
};

export const mockFormData = {
  personal: {
    firstName: '',
    lastName: '',
    birthDate: '',
    deathDate: '',
  },
  biography: {
    text: '',
    category: '',
  },
  photos: [],
  ownership: false,
};