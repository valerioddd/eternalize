import React, { createContext, useContext, useState, useCallback } from 'react';

const MemorialContext = createContext();

export const MemorialProvider = ({ children }) => {
  const [currentMemorial, setCurrentMemorial] = useState(null);
  const [formData, setFormData] = useState({
    personal: {},
    biography: {},
    photos: [],
    ownership: false,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateFormData = useCallback((step, data) => {
    setFormData(prev => ({
      ...prev,
      [step]: { ...prev[step], ...data }
    }));
  }, []);

  const addPhoto = useCallback((photo) => {
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, photo]
    }));
  }, []);

  const removePhoto = useCallback((photoId) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter(p => p.id !== photoId)
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      personal: {},
      biography: {},
      photos: [],
      ownership: false,
    });
    setCurrentStep(1);
  }, []);

  const value = {
    currentMemorial,
    setCurrentMemorial,
    formData,
    updateFormData,
    addPhoto,
    removePhoto,
    resetForm,
    currentStep,
    setCurrentStep,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return (
    <MemorialContext.Provider value={value}>
      {children}
    </MemorialContext.Provider>
  );
};

export const useMemorial = () => {
  const context = useContext(MemorialContext);
  if (!context) {
    throw new Error('useMemorial must be used within MemorialProvider');
  }
  return context;
};