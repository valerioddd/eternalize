import { useState } from 'react';
import { Pencil, ChevronRight, Plus, QrCode, Bold, Italic, List, Link as LinkIcon, Upload, Image as ImageIcon, User, FileText } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="max-w-3xl mx-auto animate-fade-in pb-20 pt-4">
      <h1 className="text-3xl font-serif text-brand-dark mb-6 font-bold">Your Memorials</h1>

      {/* List */}
      <div className="space-y-3 mb-6">
        <div className="bg-white border-l-4 border-brand-green rounded-r-xl shadow-sm p-4 flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Eleanor" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <h3 className="font-serif font-bold text-brand-dark text-lg md:text-xl">Eleanor Vance</h3>
              <p className="text-gray-500 text-sm">1942 — 2021</p>
            </div>
          </div>
          <Pencil size={20} className="text-brand-green" />
        </div>

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex items-center justify-between cursor-pointer hover:border-gray-200">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" alt="Arthur" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <h3 className="font-serif font-bold text-brand-dark text-lg md:text-xl">Arthur Miller</h3>
              <p className="text-gray-500 text-sm">1935 — 2023</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>

      <button className="w-full border-2 border-dashed border-brand-green/40 text-brand-green font-medium rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-brand-light transition-colors mb-8">
        <Plus size={20} /> Create New Memorial
      </button>

      {/* QR Block */}
      <div className="bg-brand-light rounded-xl p-6 mb-8 border border-brand-green/10">
        <div className="flex items-center gap-2 mb-2">
          <QrCode size={20} className="text-brand-green" />
          <h3 className="font-bold text-brand-dark">Digital QR Access</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">Generate a unique QR code for grave markers or service programs.</p>
        <button className="bg-brand-green text-white font-medium px-6 py-2 rounded-md hover:bg-emerald-600 transition-colors w-full sm:w-auto">
          Download Digital QR
        </button>
      </div>

      {/* Editor Panel */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="flex border-b border-gray-200">
          <button 
            className={`flex-1 py-3 text-sm font-bold border-b-2 ${activeTab === 'basic' ? 'border-brand-green text-brand-green' : 'border-transparent text-gray-500 hover:text-gray-700 font-medium'}`}
            onClick={() => setActiveTab('basic')}
          >
            Basic Info
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium border-b-2 ${activeTab === 'gallery' ? 'border-brand-green text-brand-green font-bold' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium border-b-2 ${activeTab === 'privacy' ? 'border-brand-green text-brand-green font-bold' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy
          </button>
        </div>

        {activeTab === 'basic' && (
          <div className="p-6">
            <h3 className="flex items-center gap-2 font-bold text-brand-dark mb-4">
              <User size={18} className="text-gray-400" /> General Information
            </h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-[11px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Full Name</label>
                <input type="text" defaultValue="Eleanor Rose Vance" className="w-full border border-gray-200 rounded-md p-2.5 text-brand-dark focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Birth Date</label>
                  <input type="date" defaultValue="1942-05-12" className="w-full border border-gray-200 rounded-md p-2.5 text-gray-700 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Death Date</label>
                  <input type="date" defaultValue="2021-11-28" className="w-full border border-gray-200 rounded-md p-2.5 text-gray-700 focus:ring-1 focus:ring-brand-green focus:border-brand-green outline-none" />
                </div>
              </div>
            </div>

            <h3 className="flex items-center gap-2 font-bold text-brand-dark mb-4">
              <FileText size={18} className="text-gray-400" /> Life Story
            </h3>
            
            <div className="border border-gray-200 rounded-md overflow-hidden mb-8">
              <div className="bg-gray-50 border-b border-gray-200 p-2 flex items-center gap-4">
                <Bold size={16} className="text-gray-600 cursor-pointer hover:text-brand-dark" />
                <Italic size={16} className="text-gray-600 cursor-pointer hover:text-brand-dark" />
                <List size={16} className="text-gray-600 cursor-pointer hover:text-brand-dark" />
                <LinkIcon size={16} className="text-gray-600 cursor-pointer hover:text-brand-dark" />
              </div>
              <textarea 
                className="w-full p-4 h-32 outline-none text-gray-700 resize-none text-[15px] leading-relaxed" 
                defaultValue="Eleanor was a beloved grandmother, retired teacher, and an avid gardener who spent her later years cultivating community gardens in her hometown..."
              ></textarea>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-2 font-bold text-brand-dark">
                <ImageIcon size={18} className="text-gray-400" /> Memory Gallery
              </h3>
              <span className="text-xs font-medium text-gray-500">8 / 20 photos</span>
            </div>
            
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors mb-4">
              <div className="bg-gray-100 p-3 rounded-full mb-2">
                <Upload size={20} className="text-gray-400" />
              </div>
              <p className="font-bold text-brand-dark text-sm">Drag & drop photos here</p>
              <p className="text-[11px] text-gray-400 uppercase tracking-wide mt-1">PNG, JPG up to 10MB each</p>
            </div>

            <div className="flex gap-3">
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=150" alt="Family" className="w-16 h-16 object-cover rounded-md border border-gray-200" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" alt="Eleanor" className="w-16 h-16 object-cover border-2 border-brand-green rounded-md shadow-sm p-0.5" />
              <div className="w-16 h-16 border border-brand-green/30 bg-brand-light flex items-center justify-center rounded-md cursor-pointer text-brand-green hover:bg-[#d1fae5] transition-colors">
                <Plus size={24} />
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-11 h-6 bg-brand-green rounded-full relative cursor-pointer shadow-inner">
              <div className="absolute right-1 top-[2px] bg-white w-5 h-5 rounded-full shadow-sm"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-brand-dark">Public Memorial</p>
              <p className="text-[11px] text-gray-500">Visible to anyone with the link or QR</p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-white border border-gray-200 text-brand-dark font-bold px-6 py-2.5 rounded-md hover:bg-gray-50 transition-colors text-sm">Discard</button>
            <button className="flex-1 md:flex-none bg-brand-green text-white font-bold px-6 py-2.5 rounded-md hover:bg-emerald-600 transition-colors shadow-sm text-sm">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
