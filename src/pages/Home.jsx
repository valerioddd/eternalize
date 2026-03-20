import { Link } from 'react-router-dom';
import { ShieldCheck, Users, QrCode } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20 max-w-5xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-4 leading-tight">
            Preserve Their <br/>
            <span className="text-brand-green italic font-bold">Legacy</span> Forever
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            Eternalize keeps the memories of your loved ones alive through digital memorials accessible via physical markers. A scan away from a lifetime of stories.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Link to="/wizard" className="bg-brand-green text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors shadow-md">
              Create a Memorial
            </Link>
            <Link to="/p/123" className="bg-white text-brand-green border border-brand-green font-medium px-6 py-3 rounded-lg hover:bg-brand-light transition-colors">
              See Demo
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md mx-auto">
          <div className="aspect-square bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=800" alt="Legacy" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex flex-col items-center justify-center p-4">
                <QrCode size={80} className="text-white mb-2" />
                <p className="text-white text-xs text-center font-medium">Scan to experience a legacy profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-light py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 text-sm mb-1 font-medium">Memorials Created</p>
            <div className="flex items-end justify-center gap-2">
              <h3 className="text-3xl font-bold text-brand-dark">50,000+</h3>
              <p className="text-brand-green text-sm flex items-center justify-center font-bold mb-1">↑ 12%</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 text-sm mb-1 font-medium">Photos Shared</p>
            <div className="flex items-end justify-center gap-2">
              <h3 className="text-3xl font-bold text-brand-dark">2.5M+</h3>
              <p className="text-brand-green text-sm flex items-center justify-center font-bold mb-1">↑ 28%</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 text-sm mb-1 font-medium">Global Community</p>
            <div className="flex items-end justify-center gap-2">
              <h3 className="text-3xl font-bold text-brand-dark">120+</h3>
              <p className="text-brand-green text-sm flex items-center justify-center font-bold mb-1">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eternalize */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl font-serif text-brand-dark mb-4 font-bold">Why Eternalize?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">We bridge the gap between physical resting places and digital memories with elegant, lasting solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-left border border-gray-100">
            <div className="w-12 h-12 bg-brand-light text-brand-green flex items-center justify-center rounded-xl mb-6">
              <QrCode size={24} />
            </div>
            <h3 className="text-lg font-bold text-brand-dark mb-2">Instant Access</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Simply scan the weather-resistant QR code to view a rich media gallery and life story.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-left border border-gray-100">
            <div className="w-12 h-12 bg-brand-light text-brand-green flex items-center justify-center rounded-xl mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-brand-dark mb-2">Secure Hosting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Your data is encrypted and preserved for future generations using permanent cloud storage.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-left border border-gray-100">
            <div className="w-12 h-12 bg-brand-light text-brand-green flex items-center justify-center rounded-xl mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold text-brand-dark mb-2">Collaborative Tributes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Invite family and friends to share photos, videos, and heartfelt stories in a moderated space.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
