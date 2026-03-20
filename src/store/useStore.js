import { create } from 'zustand';

export const useStore = create((set) => ({
  memorialDraft: {
    fullName: '',
    birthDate: '',
    deathDate: '',
    biography: '',
    photos: [],
    agreedToTerms: false
  },
  setMemorialDraft: (data) => set((state) => ({ 
    memorialDraft: { ...state.memorialDraft, ...data } 
  })),
  resetDraft: () => set({
    memorialDraft: {
      fullName: '',
      birthDate: '',
      deathDate: '',
      biography: '',
      photos: [],
      agreedToTerms: false
    }
  })
}));
