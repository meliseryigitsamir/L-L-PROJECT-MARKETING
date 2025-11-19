import React, { useState, useMemo } from 'react';
import { FALLACIES } from './constants';
import FallacyCard from './components/FallacyCard';
import StatsChart from './components/StatsChart';
import { ContextType, CategoryType } from './types';
import { Search, BrainCircuit, LayoutGrid, User, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeContext, setActiveContext] = useState<ContextType | 'ALL'>('ALL');
  const [activeCategory, setActiveCategory] = useState<CategoryType | 'ALL'>('ALL');

  const filteredFallacies = useMemo(() => {
    return FALLACIES.filter((fallacy) => {
      const matchesSearch = 
        fallacy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (fallacy.latinName && fallacy.latinName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        fallacy.mechanism.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesContext = activeContext === 'ALL' || fallacy.context === activeContext;
      const matchesCategory = activeCategory === 'ALL' || fallacy.category === activeCategory;

      return matchesSearch && matchesContext && matchesCategory;
    });
  }, [searchTerm, activeContext, activeCategory]);

  return (
    <div className="min-h-[100dvh] bg-slate-900 text-slate-100 font-sans selection:bg-amber-500/30">
      
      {/* Hero Section */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-500 rounded-lg shadow-lg shadow-amber-500/20">
                <BrainCircuit className="text-slate-900" size={32} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-100 tracking-tight">
                  Aklın Kırk Haramisi
                </h1>
                <p className="text-slate-400 text-sm font-medium">
                  Safsatalar ve Savunma Sanatı Kataloğu
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-slate-500" size={20} />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                placeholder="Safsata adı, Latince ismi veya açıklama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar: Filters & Stats */}
          <aside className="lg:col-span-1 space-y-6">
            
            {/* Context Filter */}
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-lg">
              <h2 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Bağlam Filtresi</h2>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveContext('ALL')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeContext === 'ALL' ? 'bg-amber-500 text-slate-900 font-bold shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:bg-slate-700'}`}
                >
                  <LayoutGrid size={18} />
                  Tümü
                </button>
                <button 
                  onClick={() => setActiveContext(ContextType.BUSINESS)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeContext === ContextType.BUSINESS ? 'bg-cyan-500 text-slate-900 font-bold shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:bg-slate-700'}`}
                >
                  <Briefcase size={18} />
                  İş Dünyası & Liderlik
                </button>
                <button 
                  onClick={() => setActiveContext(ContextType.SOCIAL)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeContext === ContextType.SOCIAL ? 'bg-emerald-500 text-slate-900 font-bold shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:bg-slate-700'}`}
                >
                  <User size={18} />
                  Kişisel & Sosyal
                </button>
              </div>
            </div>

            {/* Stats Chart */}
            <StatsChart data={filteredFallacies} />

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
              <h3 className="font-serif font-bold text-lg mb-2 text-slate-200">Rehberin Notu</h3>
              <p className="text-slate-400 text-sm italic leading-relaxed">
                "Safsatalar, düşünsel zafiyetler değil, retorik silahlardır. Bu katalogda yalnızca hataları tanımayı değil, onlara karşı entelektüel savunma hattı kurmayı hedefliyoruz."
              </p>
            </div>

          </aside>

          {/* Right Content: Fallacy List */}
          <section className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-slate-100">
                {activeContext === 'ALL' ? 'Tüm Safsatalar' : activeContext}
                <span className="ml-3 text-sm font-sans font-normal text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
                  {filteredFallacies.length} Kayıt
                </span>
              </h2>
            </div>

            {filteredFallacies.length > 0 ? (
              <div className="space-y-4">
                {filteredFallacies.map((fallacy) => (
                  <FallacyCard key={fallacy.id} fallacy={fallacy} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 bg-slate-800/50 rounded-xl border border-dashed border-slate-700">
                <div className="p-4 bg-slate-800 rounded-full mb-4">
                  <Search className="text-slate-600" size={32} />
                </div>
                <p className="text-slate-400 font-medium">Aradığınız kriterlere uygun safsata bulunamadı.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setActiveContext('ALL');}}
                  className="mt-4 text-amber-500 hover:text-amber-400 text-sm font-bold"
                >
                  Filtreleri Temizle
                </button>
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;