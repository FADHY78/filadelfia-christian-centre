import React from 'react';
import { 
  PlayCircle, 
  Heart, 
  ArrowRight, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Zap, 
  Star 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../constants';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-90"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center pt-28 md:pt-32 pb-20">
          <div className="fade-in max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-[1.1] drop-shadow-2xl uppercase">
              FILADELFIA <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>CHRISTIAN CENTRE</span>
            </h1>
            <h2 className="text-[10px] md:text-xl font-black text-tag-yellow mb-8 md:mb-10 tracking-[0.15em] md:tracking-[0.2em] uppercase drop-shadow-lg" style={{ color: COLORS.TAG_YELLOW }}>
              UPENDO & NGUVU
            </h2>
            <p className="text-sm md:text-lg text-white/90 max-w-lg mx-auto mb-10 leading-relaxed font-medium px-2">
              Tukijenga jamii yenye imani, matumaini, na mabadiliko ya kweli kupitia neno la Kristo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-2 sm:px-0">
              <button 
                onClick={() => navigate('/live')}
                className="w-full sm:w-auto px-7 py-3.5 bg-tag-red text-white rounded-full font-black text-sm md:text-base flex items-center justify-center gap-3 hover:bg-white hover:text-tag-red transition-all shadow-xl active:scale-95" 
                style={{ backgroundColor: COLORS.TAG_RED }}
              >
                TAZAMA LIVE <PlayCircle size={20} />
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-black text-sm md:text-base flex items-center justify-center gap-3 hover:bg-white/20 transition-all active:scale-95"
              >
                HUDUMA ZETU <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar - Responsive Arrangement */}
      <section className="relative z-20 px-4 -mt-8 md:-mt-12 mb-8">
        <div className="container mx-auto max-w-5xl bg-white/90 backdrop-blur-md rounded-[24px] md:rounded-[40px] shadow-2xl overflow-hidden border border-white/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-5 md:p-6 flex items-center gap-4 group hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-tag-red/10 rounded-xl text-tag-red shrink-0" style={{ color: COLORS.TAG_RED }}>
                <Clock size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-black text-xs md:text-sm text-gray-900">Muda wa Ibada</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">06:00 - 08:00 AM & 09:00 - 12:00 PM</p>
              </div>
            </div>
            <div className="p-5 md:p-6 flex items-center gap-4 group hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-tag-yellow/10 rounded-xl text-tag-yellow shrink-0" style={{ color: COLORS.TAG_YELLOW }}>
                <MapPin size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-black text-xs md:text-sm text-gray-900">Mahali Tulipo</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Goba-Tegeta(A), DSM</p>
              </div>
            </div>
            <div className="p-5 md:p-6 flex items-center gap-4 group hover:bg-gray-50 transition-colors sm:col-span-2 md:col-span-1">
              <div className="p-3 bg-black/5 rounded-xl text-black shrink-0">
                <Heart size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-black text-xs md:text-sm text-gray-900">Toa Sadaka</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Lipa namba 5332399</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor's Welcome */}
      <section className="py-12 md:py-24 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1 max-w-sm mx-auto lg:max-w-none">
          <div className="aspect-[4/5] rounded-[28px] md:rounded-[48px] overflow-hidden shadow-2xl relative z-10 border-4 border-white/50">
            <img 
              src="/images/pastor-neema.jpg" 
              alt="Pastor Neema Stanley Mndasha" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          <div className="absolute -bottom-3 -right-3 md:-bottom-8 md:-right-8 w-full h-full border-[6px] md:border-[16px] border-tag-yellow/10 rounded-[28px] md:rounded-[48px] -z-10"></div>
        </div>
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <span className="text-tag-red font-black text-[10px] tracking-[0.3em] uppercase mb-4 block" style={{ color: COLORS.TAG_RED }}>KARIBU NYUMBANI</span>
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">Familia Inayokupenda na Kukujali</h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed font-medium">
            "Filadelfia Christian Centre ni mahali ambapo upendo wa Mungu unadhihirishwa kwa vitendo. Karibu tushiriki baraka za Bwana pamoja katika umoja na upendo wa Kristo."
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:block gap-4 mb-10 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-tag-red rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg" style={{ backgroundColor: COLORS.TAG_RED }}><Zap size={16} /></div>
              <span className="font-black text-gray-800 text-xs md:text-sm">Mafundisho ya Biblia Yenye Uzima</span>
            </div>
            <div className="flex items-center gap-3 mt-0 lg:mt-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-tag-yellow rounded-lg md:rounded-xl flex items-center justify-center text-gray-900 shrink-0 shadow-lg" style={{ backgroundColor: COLORS.TAG_YELLOW }}><Star size={16} /></div>
              <span className="font-black text-gray-800 text-xs md:text-sm">Ibada Yenye Nguvu za Roho</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
             <div className="text-center sm:text-left border-l-4 border-tag-red pl-6 py-1" style={{ borderLeftColor: COLORS.TAG_RED }}>
               <h4 className="font-black text-sm md:text-lg text-gray-900 uppercase tracking-tighter leading-none">Pastor Neema Stanley Mndasha</h4>
               <p className="text-tag-red text-[9px] font-black uppercase tracking-widest mt-1" style={{ color: COLORS.TAG_RED }}>Mchungaji Kiongozi</p>
             </div>
             <button 
                onClick={() => navigate('/pastors-word')}
                className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 bg-tag-red text-white rounded-full font-black text-xs shadow-lg hover:shadow-2xl transition-all" 
                style={{ backgroundColor: COLORS.TAG_RED }}
             >
               SOMA ZAIDI <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-12 md:py-24 bg-white/50 backdrop-blur-sm rounded-[32px] md:rounded-[80px] mx-4 md:mx-6 mb-12 border border-white/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6">
            <div className="text-center md:text-left">
              <span className="text-tag-red font-black text-xs tracking-[0.3em] uppercase mb-2 block" style={{ color: COLORS.TAG_RED }}>MAKTABA</span>
              <h2 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter">Neno la Leo</h2>
            </div>
            <button 
              onClick={() => navigate('/sermons')}
              className="group flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-gray-900 hover:text-tag-red py-3 px-6 bg-white rounded-full shadow-sm"
            >
              Tazama Yote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100">
                <div className="relative aspect-video overflow-hidden">
                  <img src={`https://picsum.photos/seed/sermon${i}/600/400`} alt="Sermon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-tag-red shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                       <PlayCircle size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 group-hover:text-tag-red line-clamp-2 transition-colors">Nguvu ya Maombi katika Majaribu ya Maisha</h3>
                  <div className="flex items-center justify-between text-[9px] text-gray-400 pt-5 border-t border-gray-100 uppercase tracking-widest font-black">
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-tag-red rounded-full"></div> Pastor Neema Mndasha</span>
                    <span>Oct 24, 2023</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Give CTA - Responsive Padding and Sizing */}
      <section className="py-12 md:py-20 relative overflow-hidden rounded-[24px] md:rounded-[60px] mx-4 md:mx-10 mb-12">
        <div className="absolute inset-0 bg-tag-red z-0" style={{ backgroundColor: COLORS.TAG_RED }}></div>
        <div className="absolute inset-0 gradient-mesh opacity-40 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
              <Heart size={28} className="text-tag-yellow fill-current" style={{ color: COLORS.TAG_YELLOW }} />
            </div>
            <h2 className="text-2xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">Ukarimu Wako Unabariki Wengi</h2>
            <p className="text-sm md:text-lg text-white/80 mb-8 leading-relaxed font-medium px-2">
              Sadaka na zaka zako zinatuwezesha kueneza injili na kusaidia wenye uhitaji. Kila mchango ni mbegu ya mabadiliko.
            </p>
            <button 
              onClick={() => navigate('/give')}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-4 bg-tag-yellow text-gray-900 rounded-full font-black text-base md:text-lg hover:bg-white hover:text-tag-red transition-all shadow-2xl active:scale-95"
              style={{ backgroundColor: COLORS.TAG_YELLOW }}
            >
              TOA SADAKA SASA <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;