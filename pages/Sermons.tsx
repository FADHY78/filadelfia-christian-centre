import React from 'react';
import { LibraryBig, Headphones, Search, Video, Clock, Bell, Share2, Youtube, Play } from 'lucide-react';
import { COLORS } from '../constants';

const Sermons = () => {
  const handleFeatureClick = (feature: string) => {
    alert(`Huduma ya ${feature} inakuja hivi karibuni! Endelea kutufuatilia.`);
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-deep-charcoal" style={{ backgroundColor: COLORS.DEEP_CHARCOAL }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-mesh opacity-30"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-tag-yellow text-gray-900 rounded-full mb-8 border border-white/20 shadow-xl" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
              <Headphones size={18} className="animate-pulse" />
              <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em]">Maktaba ya Kiroho</span>
           </div>
           <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl leading-none">
             Maktaba ya <span className="text-tag-red" style={{ color: COLORS.TAG_RED }}>Mahubiri</span>
           </h1>
           <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed px-4">
             Lishe ya kiroho na mafundisho ya neno la Mungu kwa ajili ya ukuaji wako wa kila siku.
           </p>
        </div>
      </section>

      {/* Main Content - Premium Coming Soon Card */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gray-900 rounded-[40px] md:rounded-[56px] p-8 md:p-24 text-center text-white shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 gradient-mesh opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-tag-red/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tag-yellow/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8 md:space-y-10">
              <div className="w-20 h-20 md:w-32 md:h-32 bg-white/5 rounded-[32px] md:rounded-[40px] flex items-center justify-center text-tag-yellow mx-auto border border-white/10 shadow-inner transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" style={{ color: COLORS.TAG_YELLOW }}>
                <LibraryBig size={48} strokeWidth={1.5} />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-none">
                  Hivi Karibuni <br />
                  <span className="text-tag-red uppercase text-xl md:text-4xl" style={{ color: COLORS.TAG_RED }}>Maktaba ya Kidijitali</span>
                </h2>
                <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2">
                  Tunatengeneza mfumo wa kisasa wa kuhifadhi mahubiri yote katika njia ya Video na Sauti (Audio) ili uweze kujifunza wakati wowote.
                </p>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-10 border-t border-white/5">
                <button 
                  onClick={() => handleFeatureClick('Video HD')}
                  className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 rounded-3xl border border-white/10 shadow-sm hover:shadow-xl hover:bg-tag-red hover:text-white transition-all group/item"
                >
                  <div className="w-12 h-12 bg-tag-red/10 rounded-2xl flex items-center justify-center text-tag-red group-hover/item:bg-white group-hover/item:text-tag-red transition-all" style={{ color: COLORS.TAG_RED }}>
                    <Video size={24} />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-gray-300 group-hover/item:text-white">Video HD</span>
                </button>

                <button 
                  onClick={() => handleFeatureClick('Audio')}
                  className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 rounded-3xl border border-white/10 shadow-sm hover:shadow-xl hover:bg-tag-yellow hover:text-gray-900 transition-all group/item"
                >
                  <div className="w-12 h-12 bg-tag-yellow/10 rounded-2xl flex items-center justify-center text-tag-yellow group-hover/item:bg-white group-hover/item:text-tag-yellow transition-all" style={{ color: COLORS.TAG_YELLOW }}>
                    <Headphones size={24} />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-gray-300 group-hover/item:text-gray-900">Sauti (Audio)</span>
                </button>

                <button 
                  onClick={() => handleFeatureClick('Utafutaji')}
                  className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 rounded-3xl border border-white/10 shadow-sm hover:shadow-xl hover:bg-white hover:text-gray-900 transition-all group/item"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover/item:bg-gray-900 transition-all">
                    <Search size={24} />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-gray-300 group-hover/item:text-gray-900">Tafuta Mada</span>
                </button>
              </div>

              <div className="pt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-tag-yellow mb-6" style={{ color: COLORS.TAG_YELLOW }}>Kaa Tayari kwaajili ya Uzinduzi</p>
                <div className="flex justify-center gap-3">
                   <div className="w-2 h-2 bg-tag-red rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-tag-yellow rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                   <div className="w-2 h-2 bg-tag-red rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center px-4">
             <p className="text-gray-400 font-bold italic text-base md:text-lg max-w-xl mx-auto leading-relaxed">
               "Neno lako ni taa ya miguu yangu, na mwanga wa njia yangu." 
               <span className="block not-italic text-[10px] md:text-xs mt-3 uppercase tracking-widest text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>— Zaburi 119:105</span>
             </p>
          </div>
        </div>
      </section>
      <div className="py-8"></div>
    </div>
  );
};

export default Sermons;