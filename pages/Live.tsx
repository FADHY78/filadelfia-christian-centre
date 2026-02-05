
import React from 'react';
import { MonitorPlay, Sparkles, Clock, Bell, Share2, Youtube, Facebook, Play } from 'lucide-react';
import { COLORS } from '../constants';

const Live = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section - Consistent with other pages */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-deep-charcoal" style={{ backgroundColor: COLORS.DEEP_CHARCOAL }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-mesh opacity-30"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-tag-red text-white rounded-full mb-8 border border-white/20 animate-pulse shadow-xl" style={{ backgroundColor: COLORS.TAG_RED }}>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              <span className="font-black text-xs uppercase tracking-[0.2em]">Live Stream</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
             Ibada <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Mubashara</span>
           </h1>
           <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
             Ungana nasi mtandaoni kutoka popote duniani na ushiriki baraka za Bwana.
           </p>
        </div>
      </section>

      {/* Main Content - Coming Soon Message */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gray-900 rounded-[56px] p-12 md:p-24 text-center text-white shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 gradient-mesh opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-tag-red/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tag-yellow/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-10">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-[40px] flex items-center justify-center text-tag-yellow mx-auto border border-white/10 shadow-inner transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700" style={{ color: COLORS.TAG_YELLOW }}>
                <MonitorPlay size={64} strokeWidth={1.5} />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                  Hivi Karibuni <br />
                  <span className="text-tag-red uppercase text-2xl md:text-4xl" style={{ color: COLORS.TAG_RED }}>Tunakuja Mubashara!</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                  Tunakamilisha maandalizi ya kiufundi ili kukuletea matangazo bora ya ibada zetu moja kwa moja (Live Stream) kupitia tovuti hii, YouTube, na Facebook.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                <div className="flex items-center justify-center gap-3 text-gray-400 group/item">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:bg-tag-red group-hover/item:text-white transition-all"><Clock size={20} /></div>
                  <span className="font-bold text-sm">Ratiba Kamili</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-400 group/item">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:bg-tag-yellow group-hover/item:text-black transition-all"><Bell size={20} /></div>
                  <span className="font-bold text-sm">Pokea Taarifa</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-400 group/item">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:bg-white group-hover/item:text-black transition-all"><Share2 size={20} /></div>
                  <span className="font-bold text-sm">Shiriki na Wengine</span>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-tag-yellow mb-8" style={{ color: COLORS.TAG_YELLOW }}>Tufuate kwenye Mitandao kwa updates</p>
                <div className="flex justify-center gap-6">
                  <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#FF0000] hover:scale-110 transition-all border border-white/10 group/btn">
                    <Youtube size={28} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all border border-white/10 group/btn">
                    <Facebook size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Message */}
          <div className="mt-16 text-center space-y-6">
             <div className="w-16 h-1 bg-tag-red mx-auto rounded-full" style={{ backgroundColor: COLORS.TAG_RED }}></div>
             <p className="text-gray-500 font-bold italic text-lg max-w-xl mx-auto">
               "Nendeni ulimwenguni mwote, mkaihubiri Injili kwa kila kiumbe." 
               <span className="block not-italic text-xs mt-2 uppercase tracking-widest text-tag-red" style={{ color: COLORS.TAG_RED }}>— Marko 16:15</span>
             </p>
          </div>
        </div>
      </section>

      <div className="py-12"></div>
    </div>
  );
};

export default Live;
