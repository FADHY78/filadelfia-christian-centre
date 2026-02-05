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
      <div className="min-h-screen bg-[#f8f9fa] fade-in">
        {/* Floating Back Button */}
        <button 
          onClick={closeDetail}
          className="fixed top-24 md:top-28 left-4 md:left-12 z-[60] flex items-center gap-2 md:gap-3 px-6 py-3 bg-white text-gray-900 rounded-full font-black shadow-2xl border border-gray-100 hover:bg-tag-red hover:text-white transition-all group active:scale-95 text-xs md:text-sm"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>HUDUMA ZOTE</span>
        </button>

        {/* Dynamic Header Section */}
        <section className="relative py-32 flex items-center justify-center overflow-hidden bg-deep-charcoal" style={{ backgroundColor: COLORS.DEEP_CHARCOAL }}>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 gradient-mesh opacity-90"></div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
             <div className="inline-flex items-center gap-3 px-5 py-2 bg-tag-yellow/20 backdrop-blur-md text-tag-yellow rounded-full mb-8 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] border border-tag-yellow/30" style={{ color: COLORS.TAG_YELLOW }}>
                {React.cloneElement(selectedMinistry.icon as React.ReactElement, { size: 16 })}
                IDARA YA {selectedMinistry.name.split(' ').pop()}
             </div>
             <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl leading-none uppercase">
               {selectedMinistry.name}
             </h1>
             <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
               Huduma inayolenga {selectedMinistry.desc.toLowerCase()}
             </p>
          </div>
        </section>

        {/* Content Body - Floating Container */}
        <section className="relative z-10 -mt-12 md:-mt-20 pb-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-[48px] md:rounded-[80px] shadow-3xl p-8 md:p-24 border border-white/50">
              
              {/* Quick Info Dashboard */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 md:mb-32">
                {[
                  { label: 'Ratiba ya Ibada', value: selectedMinistry.schedule, icon: <Clock size={32} />, color: 'tag-red' },
                  { label: 'Walengwa Wetu', value: selectedMinistry.ages, icon: <Users size={32} />, color: 'tag-yellow' },
                  { label: 'Wanachama', value: selectedMinistry.memberCount, icon: <Zap size={32} />, color: 'tag-red' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-10 bg-[#f8f9fa] rounded-[48px] border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 transform group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner ${stat.color === 'tag-red' ? 'bg-tag-red/10 text-tag-red' : 'bg-tag-yellow/10 text-tag-yellow'}`} style={stat.color === 'tag-red' ? { color: COLORS.TAG_RED } : { color: COLORS.TAG_YELLOW }}>
                      {stat.icon}
                    </div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4">{stat.label}</h4>
                    <p className="text-xl md:text-2xl font-black text-gray-900 leading-tight">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Mission Statement Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 md:mb-40 items-center">
                 <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-tag-red/5 rounded-full" style={{ color: COLORS.TAG_RED }}>
                       <Target size={24} />
                       <span className="font-black text-xs uppercase tracking-[0.3em]">Dhamira na Maono</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1]">
                      Tunatengeneza <span className="text-tag-red" style={{ color: COLORS.TAG_RED }}>Mazingira Bora</span> ya Kiroho.
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">
                      {selectedMinistry.longDesc}
                    </p>
                    
                    {/* Scripture Card */}
                    <div className="p-10 md:p-14 bg-gray-900 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
                       <div className="absolute inset-0 gradient-mesh opacity-10"></div>
                       <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 opacity-20" />
                       <p className="text-lg md:text-2xl italic font-bold leading-relaxed relative z-10">
                         "Kwa maana sisi tu kazi yake, tuliumbwa katika Kristo Yesu, tutende matendo mema, ambayo tokea awali Mungu aliyatengeneza ili tuenende nayo."
                       </p>
                       <p className="text-tag-yellow font-black text-xs md:text-sm uppercase tracking-[0.4em] mt-8 relative z-10" style={{ color: COLORS.TAG_YELLOW }}>— Efeso 2:10</p>
                    </div>
                 </div>
                 
                 <div className="lg:col-span-5 relative">
                    <div className="relative z-10">
                      <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-3xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 border-[12px] border-white">
                         <img src={`https://picsum.photos/seed/${selectedMinistry.id}/800/1000`} className="w-full h-full object-cover" alt="Ministry" />
                      </div>
                      <div className="absolute -bottom-8 -right-8 w-28 h-28 md:w-36 md:h-36 bg-tag-yellow rounded-full flex items-center justify-center text-gray-900 animate-spin-slow shadow-3xl border-8 border-white" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
                         <Sparkles size={48} />
                      </div>
                    </div>
                    {/* Decorative Background Element */}
                    <div className="absolute -top-10 -left-10 w-full h-full bg-tag-red/5 rounded-[60px] -z-10 transform lg:-rotate-2"></div>
                 </div>
              </div>

              {/* Leadership Gallery */}
              <div className="mb-24 md:mb-40">
                 <div className="text-center mb-16">
                    <span className="text-tag-red font-black text-[10px] md:text-xs tracking-[0.4em] uppercase block mb-4" style={{ color: COLORS.TAG_RED }}>UONGOZI WA IDARA</span>
                    <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">Viongozi Wanaotuongoza</h2>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {selectedMinistry.leaders.map((leader, i) => (
                      <div key={i} className="group relative bg-white p-4 rounded-[48px] border border-gray-100 shadow-xl hover:shadow-3xl transition-all duration-500 text-center">
                         <div className="relative aspect-square rounded-[40px] overflow-hidden mb-6 shadow-2xl bg-gray-50">
                            <img 
                              src={`https://picsum.photos/seed/${leader.name.replace(/\s/g, '')}/500/500`} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                              alt={leader.name} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-tag-red/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </div>
                         <div className="pb-4">
                            <h4 className="text-xl font-black text-gray-900 mb-1 group-hover:text-tag-red transition-colors">{leader.name}</h4>
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{leader.role}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Join CTA Section */}
              <div className="relative overflow-hidden bg-gray-900 rounded-[56px] md:rounded-[80px] p-12 md:p-28 text-center text-white shadow-3xl group">
                 <div className="absolute inset-0 gradient-mesh opacity-30"></div>
                 <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 backdrop-blur-md border border-white/10">
                       <PartyPopper size={40} className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }} />
                    </div>
                    <h2 className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                      Jiunge na <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Huduma Leo!</span>
                    </h2>
                    <p className="text-base md:text-xl text-white/70 mb-12 leading-relaxed font-medium">
                      Haijalishi una uzoefu gani, tunao nafasi kwa ajili ya karama yako. Anza safari yako ya utumishi sasa kwa kumuadhimisha Mungu.
                    </p>
                    <button className="w-full sm:w-auto px-12 py-6 bg-tag-red text-white rounded-full font-black text-lg flex items-center justify-center gap-4 shadow-2xl hover:bg-white hover:text-tag-red transition-all group mx-auto" style={{ backgroundColor: COLORS.TAG_RED }}>
                      TUMA OMBI SASA <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
    <div className="pt-20 md:pt-24 min-h-screen bg-[#f8f9fa]">
      {/* Main Grid Header - Consistent with others */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-deep-charcoal" style={{ backgroundColor: COLORS.DEEP_CHARCOAL }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-mesh opacity-90"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20 shadow-xl">
              <Sparkles size={18} className="text-tag-yellow animate-pulse" style={{ color: COLORS.TAG_YELLOW }} />
              <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em]">Jamii Inayotumika</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none drop-shadow-2xl">
             Huduma <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Zetu</span>
           </h1>
           <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed px-4">
             Gundua idara na huduma mbalimbali zinazojenga mwili wa Kristo na kusaidia jamii yetu.
           </p>
        </div>
      </section>

      {/* Ministry Grid Section */}
      <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6 relative z-10 -mt-10 md:-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {MINISTRIES.map((m) => (
            <div 
              key={m.id} 
              className="group bg-white rounded-[48px] p-8 md:p-12 shadow-xl hover:shadow-3xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row gap-8 items-center cursor-pointer relative overflow-hidden" 
              onClick={() => openDetail(m)}
            >
               <div className="absolute -top-12 -right-12 w-48 h-48 bg-tag-red/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
               <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tag-yellow/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

               <div className="relative shrink-0">
                 <div className="w-24 h-24 md:w-32 md:h-32 bg-tag-red/10 rounded-3xl flex items-center justify-center text-tag-red shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ color: COLORS.TAG_RED }}>
                   {React.cloneElement(m.icon as React.ReactElement, { size: 48 })}
                 </div>
                 <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-tag-yellow rounded-full flex items-center justify-center text-gray-900 shadow-lg border-4 border-white" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
                   <ArrowUpRight size={18} />
                 </div>
               </div>

               <div className="relative text-center md:text-left flex-grow space-y-4">
                 <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight group-hover:text-tag-red transition-colors">{m.name}</h3>
                 <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed line-clamp-2">
                   {m.desc}
                 </p>
                 <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 text-tag-red font-black text-[10px] uppercase tracking-widest" style={{ color: COLORS.TAG_RED }}>
                       <Clock size={12} /> {m.schedule.split(':')[0]}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-black text-[10px] uppercase tracking-widest">
                       <Users size={12} /> {m.memberCount}
                    </div>
                 </div>
               </div>
            </div>
          ))}
        </div>

        {/* Motivational Quote */}
        <div className="mt-24 text-center max-w-3xl mx-auto px-6">
           <div className="w-16 h-1 bg-tag-red mx-auto mb-10 rounded-full" style={{ backgroundColor: COLORS.TAG_RED }}></div>
           <p className="text-gray-400 font-black italic text-lg md:text-2xl leading-relaxed mb-6">
             "Lakini ninyi ni mzao mteule, ukuhani wa kifalme, taifa takatifu, watu wa milki ya Mungu, mpate kuzitangaza fadhili zake Yeye aliyewaita mtoke gizani mkaingie katika nuru yake ya ajabu."
           </p>
           <span className="text-tag-red font-black text-xs md:text-sm uppercase tracking-widest" style={{ color: COLORS.TAG_RED }}>— 1 Petro 2:9</span>
        </div>
      </section>
      <div className="pb-24"></div>
    </div>
  );
};

export default Services;