import { mockMemorials, mockFormData } from './mockData.js';

// Simula delay API
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const memorialService = {
  // Get single memorial by ID
  async getMemorialById(memorialId) {
    await delay();
    const memorial = mockMemorials.find(m => m.id === memorialId);
    if (!memorial) {
      throw new Error('Memorial not found');
    }
    return memorial;
  },

  // Get all memorials
  async getAllMemorials() {
    await delay();
    return mockMemorials;
  },

  // Create new memorial
  async createMemorial(data) {
    await delay(1000);
    const newMemorial = {
      id: `eternal-${Date.now()}`,
      ...data,
      createdAt: new Date().toISOString(),
      status: 'draft',
      qrCode: `https://qrcode.com/eternal-${Date.now()}`,
    };
    mockMemorials.push(newMemorial);
    return newMemorial;
  },

  // Update memorial
  async updateMemorial(memorialId, data) {
    await delay(1000);
    const index = mockMemorials.findIndex(m => m.id === memorialId);
    if (index === -1) throw new Error('Memorial not found');
    mockMemorials[index] = { ...mockMemorials[index], ...data };
    return mockMemorials[index];
  },

  // Publish memorial
  async publishMemorial(memorialId) {
    await delay(1000);
    return this.updateMemorial(memorialId, { status: 'published' });
  },

  // Generate QR code
  async generateQRCode(memorialId) {
    await delay(500);
    return {
      qrCode: `https://qrcode.com/${memorialId}`,
      memorialUrl: `${window.location.origin}/p/${memorialId}`,
    };
  },

  // Upload image (mock - save to localStorage + URL.createObjectURL)
  async uploadImage(file) {
    await delay(800);
    const objectUrl = URL.createObjectURL(file);
    return {
      id: `img-${Date.now()}`,
      src: objectUrl,
      name: file.name,
      size: file.size,
    };
  },
};