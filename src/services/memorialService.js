// src/services/memorialService.js

const mockDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class MemorialService {
    async getMemorialById(id) {
        await mockDelay(1000); // simulate delay
        return { id, name: 'Sample Memorial' };
    }

    async getAllMemorials() {
        await mockDelay(1000); // simulate delay
        return [{ id: 1, name: 'Memorial One' }, { id: 2, name: 'Memorial Two' }];
    }

    async createMemorial(data) {
        await mockDelay(1000); // simulate delay
        return { id: 3, ...data };
    }

    async updateMemorial(id, data) {
        await mockDelay(1000); // simulate delay
        return { id, ...data };
    }

    async publishMemorial(id) {
        await mockDelay(1000); // simulate delay
        return { id, published: true };
    }

    async generateQRCode(data) {
        await mockDelay(1000); // simulate delay
        return { data, qrCodeUrl: 'http://example.com/qrcode' };
    }

    async uploadImage(image) {
        await mockDelay(1000); // simulate delay
        return { imageUrl: 'http://example.com/image' };
    }
}

module.exports = new MemorialService();