import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  X, 
  Clock, 
  Target, 
  ListChecks, 
  ArrowLeft, 
  ArrowRight,
  Users, 
  UserRound,
  CalendarCheck,
  Zap,
  Sparkles,
  PartyPopper,
  Quote,
  CheckCircle2,
  ArrowUpRight,
  Linkedin,
  Mail as MailIcon
} from 'lucide-react';
import { COLORS, MINISTRIES, MinistryDetail } from '../constants';

const Services = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<MinistryDetail | null>(null);

  // Scroll to top when a ministry is selected to simulate a new page load
  useEffect(() => {
    if (selectedMinistry) {
      window.scrollTo(0, 0);
    }
  }, [selectedMinistry]);

  const openDetail = (m: MinistryDetail) => {
    setSelectedMinistry(m);
  };

  const closeDetail = () => {
    setSelectedMinistry(null);
  };

  if (selectedMinistry) {
    return (
      <div className="min-h-screen bg-white fade-in">
        {/* Floating Back Button - Better mobile placement */}
        <button 
          onClick={closeDetail}
          className="fixed top-24 md:top-28 left-4 md:left-12 z-[60] flex items-center gap-2 md:gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-white text-gray-900 rounded-full font-black shadow-2xl border border-gray-100 hover:bg-tag-red hover:text-white transition-all group active:scale-95 text-xs md:text-sm"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden xs:inline">HUDUMA ZOTE</span>
          <span className="xs:hidden">RUDI</span>
        </button>

        {/* Small Hero Header for Ministry - Resized to match other pages */}
        <section className="relative py-28 md:py-40 flex items-center justify-center overflow-hidden bg-deep-charcoal" style={{ backgroundColor: COLORS.DEEP_CHARCOAL }}>
          <div className="absolute inset-0 z-0">
            <img 
              src={`https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1600`} 
              className="w-full h-full object-cover opacity-30 grayscale"
              alt={selectedMinistry.name}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
            <div className="absolute inset-0 gradient-mesh opacity-20 mix-blend-overlay"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center pt-8 md:pt-10">
             <div className="inline-flex items-center gap-3 px-5 py-2 bg-tag-yellow text-gray-900 rounded-full mb-6 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] shadow-xl" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
                {selectedMinistry.icon}
                IDARA YA {selectedMinistry.name.split(' ').pop()}
             </div>
             <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl leading-none">
               {selectedMinistry.name}
             </h1>
             <p className="text-base md:text-2xl text-white/70 max-w-2xl mx-auto font-medium leading-tight">
               Huduma inayolenga {selectedMinistry.desc.toLowerCase()}
             </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="relative z-10 -mt-10 md:-mt-16 pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-[40px] md:rounded-[80px] shadow-2xl p-6 md:p-20 border border-gray-50">
              
              {/* Top Stats Grid - Better Mobile Stacking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
                   <div className="w-16 h-16 bg-tag-red/10 rounded-2xl flex items-center justify-center text-tag-red mb-4 group-hover:scale-110 transition-transform shadow-inner" style={{ color: COLORS.TAG_RED }}>
                      <Clock size={32} />
                   </div>
                   <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">Ratiba ya Ibada</h4>
                   <p className="text-lg md:text-2xl font-black text-gray-900 leading-tight">{selectedMinistry.schedule}</p>
                </div>
                <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
                   <div className="w-16 h-16 bg-tag-yellow/10 rounded-2xl flex items-center justify-center text-tag-yellow mb-4 group-hover:scale-110 transition-transform shadow-inner" style={{ color: COLORS.TAG_YELLOW }}>
                      <Users size={32} />
                   </div>
                   <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">Walengwa Wetu</h4>
                   <p className="text-lg md:text-2xl font-black text-gray-900 leading-tight">{selectedMinistry.ages}</p>
                </div>
                <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group sm:col-span-2 lg:col-span-1">
                   <div className="w-16 h-16 bg-tag-red/10 rounded-2xl flex items-center justify-center text-tag-red mb-4 group-hover:scale-110 transition-transform shadow-inner" style={{ color: COLORS.TAG_RED }}>
                      <Zap size={32} />
                   </div>
                   <h4 className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">Wanachama</h4>
                   <p className="text-lg md:text-2xl font-black text-gray-900 leading-tight">{selectedMinistry.memberCount}</p>
                </div>
              </div>

              {/* Mission & Image Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-28 items-center">
                 <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-tag-red/5 rounded-full" style={{ color: COLORS.TAG_RED }}>
                       <Target size={24} />
                       <span className="font-black text-xs uppercase tracking-[0.2em]">Dhamira na Maono</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">
                      Tunatengeneza <span className="text-tag-red" style={{ color: COLORS.TAG_RED }}>Mazingira Bora</span> ya Kiroho.
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">
                      {selectedMinistry.longDesc}
                    </p>
                    <div className="p-8 md:p-12 bg-gray-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                       <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 opacity-20" />
                       <p className="text-lg md:text-2xl italic font-bold leading-relaxed relative z-10">
                         "Kwa maana sisi tu kazi yake, tuliumbwa katika Kristo Yesu, tutende matendo mema..."
                       </p>
                       <p className="text-tag-yellow font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mt-6" style={{ color: COLORS.TAG_YELLOW }}>— Efeso 2:10</p>
                    </div>
                 </div>
                 <div className="lg:col-span-5 max-w-sm mx-auto lg:max-w-none">
                    <div className="relative">
                      <div className="aspect-[3/4] rounded-[48px] overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 border-8 border-white">
                         <img src={`https://picsum.photos/seed/${selectedMinistry.id}/800/1200`} className="w-full h-full object-cover" alt="Ministry" />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-tag-yellow rounded-full flex items-center justify-center text-gray-900 animate-spin-slow shadow-2xl" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
                         <Sparkles size={40} />
                      </div>
                    </div>
                 </div>
              </div>

              {/* Leadership Visual Cards */}
              <div className="mb-20 md:mb-28">
                 <div className="text-center mb-12">
                    <span className="text-tag-red font-black text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: COLORS.TAG_RED }}>UONGOZI WA IDARA</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-none">Viongozi Wanaotuongoza</h2>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {selectedMinistry.leaders.map((leader, i) => (
                      <div key={i} className="group relative bg-white p-5 rounded-[40px] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                         <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-inner bg-gray-50">
                            <img 
                              src={`https://picsum.photos/seed/${leader.name.replace(/\s/g, '')}/500/625`} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                              alt={leader.name} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-tag-red/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </div>
                         <div className="px-2 pb-2 text-center">
                            <h4 className="text-xl font-black text-gray-900 leading-tight mb-1 group-hover:text-tag-red transition-colors">{leader.name}</h4>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{leader.role}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Bottom CTA */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-[48px] md:rounded-[80px] p-10 md:p-24 text-center text-white shadow-2xl group">
                 <div className="absolute inset-0 gradient-mesh opacity-20"></div>
                 <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                      Jiunge na <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Huduma Leo!</span>
                    </h2>
                    <p className="text-base md:text-xl text-white/70 mb-12 leading-relaxed font-medium">
                      Haijalishi una uzoefu gani, tunao nafasi kwa ajili ya karama yako. Anza safari yako ya utumishi sasa kwa kumuadhimisha Mungu.
                    </p>
                    <button className="w-full sm:w-auto px-10 py-5 bg-tag-red text-white rounded-[32px] font-black text-lg flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 transition-all group mx-auto" style={{ backgroundColor: COLORS.TAG_RED }}>
                      TUMA OMBI SASA <ArrowUpRight size={24} />
                    </button>
                 </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      {/* Main Grid Header - Consistent with others */}
      <section className="bg-tag-yellow text-gray-900 py-24 md:py-40 relative overflow-hidden" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
         <div className="absolute inset-0 gradient-mesh opacity-30"></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
           <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">Huduma Zetu</h1>
           <p className="text-base md:text-2xl max-w-3xl mx-auto text-gray-800/80 leading-relaxed font-medium px-4">
             Kuna nafasi kwa kila mtu katika familia ya Filadelfia. Gundua jinsi unavyoweza kuhudumiwa na kuhudumu kupitia idara zetu.
           </p>
         </div>
      </section>

      {/* Ministry Grid Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {MINISTRIES.map((m) => (
            <div 
              key={m.id} 
              className="bg-white border border-gray-100 p-8 md:p-10 rounded-[40px] md:rounded-[48px] shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden cursor-pointer" 
              onClick={() => openDetail(m)}
            >
               <div className="absolute top-0 right-0 w-24 h-24 bg-tag-red/5 rounded-bl-[80px] -mr-4 -mt-4 transition-all group-hover:bg-tag-red/10 group-hover:w-32 group-hover:h-32"></div>
               <div className="w-16 h-16 bg-tag-red/10 rounded-2xl flex items-center justify-center text-tag-red mb-8 group-hover:rotate-6 group-hover:scale-110 transition-all shadow-inner" style={{ color: COLORS.TAG_RED }}>
                 {m.icon}
               </div>
               <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">{m.name}</h3>
               <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base font-medium line-clamp-3">
                 {m.desc} Tunatengeneza mazingira ya upendo kwa kila mshiriki kukua kiroho na kupokea baraka za neno.
               </p>
               <button 
                className="mt-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-tag-red transition-all duration-300 shadow-lg active:scale-95" 
               >
                 ANGALIA ZAIDI <ArrowRight size={16} />
               </button>
            </div>
          ))}
        </div>
      </section>
      <div className="py-12"></div>
    </div>
  );
};

export default Services;