import React from 'react';
import { Shield, Target, Eye, Users, Church } from 'lucide-react';
import { COLORS } from '../constants';

const About = () => {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden bg-crushed-red" style={{ backgroundColor: COLORS.CRUSHED_RED }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-mesh opacity-90"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-5 md:mb-6 text-tag-yellow border border-white/20" style={{ color: COLORS.TAG_YELLOW }}>
            <Church size={16} />
            <span className="font-black text-[9px] md:text-xs uppercase tracking-[0.2em]">Filadelfia Christian Centre</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-5 tracking-tighter uppercase drop-shadow-2xl">
            Kuhusu <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Sisi</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Tunajenga kizazi chenye hofu ya Mungu, tukiwa chini ya mwavuli wa Tanzania Assemblies of God (TAG).
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-12 md:py-24 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div>
          <span className="text-tag-red font-black text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.TAG_RED }}>HISTORIA YETU</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">Safari ya Imani Goba-Tegeta(A)</h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed font-medium">
            Filadelfia Christian Centre ilianza kama kundi dogo la maombi. Kwa neema ya Mungu, kanisa limekua na kuwa kitovu cha mabadiliko ya kiroho na kijamii katika eneo letu la Goba-Tegeta(A).
          </p>
          <p className="text-base md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
            Kama sehemu ya TAG, tunaendeleza maono ya uamsho na uinjilisti, tukihakikisha kila kona ya jamii yetu inaguswa na upendo wa Kristo chini ya uongozi mahiri wa mchungaji wetu.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-10">
            <div>
              <h4 className="text-4xl md:text-5xl font-black text-tag-red mb-2" style={{ color: COLORS.TAG_RED }}>25+</h4>
              <p className="font-black text-gray-500 uppercase text-[10px] tracking-[0.2em]">Miaka ya Huduma</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-black text-tag-yellow mb-2" style={{ color: COLORS.TAG_YELLOW }}>1,500+</h4>
              <p className="font-black text-gray-500 uppercase text-[10px] tracking-[0.2em]">Wanachama Hai</p>
            </div>
          </div>
        </div>
        <div className="relative">
           <div className="aspect-square bg-white/50 backdrop-blur-sm rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl border-4 md:border-8 border-white/50">
              <img 
                src="/images/pastor-neema.jpg" 
                alt="Pastor Neema Stanley Mndasha" 
                className="w-full h-full object-cover object-top"
              />
           </div>
           <div className="hidden md:block absolute -bottom-10 -left-10 bg-tag-red p-10 rounded-[40px] shadow-2xl text-white max-w-[280px]" style={{ backgroundColor: COLORS.TAG_RED }}>
              <Shield size={48} className="mb-4 text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }} />
              <h3 className="text-xl font-black mb-2">Imara Katika Kristo</h3>
              <p className="text-sm opacity-90 font-medium">Tunasimama juu ya msingi wa neno la Mungu usiotikisika tukiwa na uongozi thabiti.</p>
           </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-12 md:py-24 bg-white/40 backdrop-blur-sm border-y border-white/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[32px] md:rounded-[45px] shadow-xl border-t-8 border-tag-red" style={{ borderTopColor: COLORS.TAG_RED }}>
               <Target size={48} className="text-tag-red mb-8" style={{ color: COLORS.TAG_RED }} />
               <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900 tracking-tighter">Maono Yetu</h3>
               <p className="text-lg text-gray-600 leading-relaxed font-medium">
                 Kuwa kanisa la kielelezo linaloleta uamsho wa kweli, tukiandaa waumini kuwa na ushawishi wa kiungu katika sekta zote za maisha.
               </p>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[32px] md:rounded-[45px] shadow-xl border-t-8 border-tag-yellow" style={{ borderTopColor: COLORS.TAG_YELLOW }}>
               <Eye size={48} className="text-tag-yellow mb-8" style={{ color: COLORS.TAG_YELLOW }} />
               <h3 className="text-3xl md:text-4xl font-black mb-6 text-gray-900 tracking-tighter">Dhamira Yetu</h3>
               <p className="text-lg text-gray-600 leading-relaxed font-medium">
                 Kuhubiri injili, kufundisha neno, na kutoa huduma za kijamii zinazoakisi tabia na upendo wa Yesu Kristo kwa mataifa yote.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 md:py-24 container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-tag-red font-bold tracking-widest uppercase mb-4 block" style={{ color: COLORS.TAG_RED }}>VIONGOZI WETU</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">Wachungaji na Watumishi</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { 
              name: "Pastor Neema Stanley Mndasha", 
              role: "Mchungaji Kiongozi", 
              img: "/images/pastor-neema.jpg" 
            },
            { 
              name: "Pastor Stanley Mndasha", 
              role: "Mchungaji Msaidizi", 
              img: `https://picsum.photos/seed/leader-stanley/400/400` 
            },
            { 
              name: "Dora Ntimizi", 
              role: "Katibu wa Kanisa", 
              img: `https://picsum.photos/seed/leader-dora/400/400` 
            }
          ].map((leader, i) => (
            <div key={i} className="group text-center">
              <div className="aspect-square rounded-[32px] overflow-hidden mb-6 relative shadow-lg group-hover:shadow-2xl border-4 border-transparent group-hover:border-tag-red transition-all duration-300">
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/leader${i}/400/400`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tag-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8" style={{ backgroundColor: `rgba(227, 30, 36, 0.4)` }}>
                   <div className="flex gap-4">
                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-tag-red cursor-pointer"><Users size={18} /></div>
                   </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
              <p className="text-tag-red font-bold text-xs uppercase tracking-widest" style={{ color: COLORS.TAG_RED }}>{leader.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
