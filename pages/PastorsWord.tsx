import React from 'react';
import { Quote, Heart, BookOpen, Anchor, ShieldCheck, CheckCircle2, ArrowRight, Home as HomeIcon, ArrowLeft } from 'lucide-react';
import { COLORS } from '../constants';
import { useNavigate } from 'react-router-dom';

const PastorsWord = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      title: "Upendo wa Kweli",
      desc: "Tunapendana kama Kristo alivyotupenda, bila ubaguzi wala masharti.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Nguvu ya Neno",
      desc: "Biblia ndiyo mwongozo wetu mkuu katika kila hatua ya maisha yetu.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Maisha ya Maombi",
      desc: "Tunaamini katika mawasiliano ya moja kwa moja na Mungu kupitia maombi.",
      icon: <Anchor className="w-8 h-8" />
    },
    {
      title: "Uadilifu",
      desc: "Tunasisitiza kuishi maisha matakatifu na ya uaminifu mbele za Mungu na wanadamu.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  const doctrines = [
    "Maandiko Matakatifu ni Neno la Mungu lililopuliziwa.",
    "Mungu mmoja wa kweli aliyedhihirika katika nafsi tatu (Utatu).",
    "Uungu wa Bwana Yesu Kristo na kazi yake ya ukombozi msalabani.",
    "Wokovu wa mwanadamu kwa njia ya imani katika Kristo.",
    "Ubatizo wa Roho Mtakatifu na karama zake.",
    "Utakaso na kuishi maisha ya utengano na dhambi.",
    "Kanisa na Agizo Kuu la uinjilisti."
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#f8f9fa]">
      {/* Dynamic Back to Home Navigation Button */}
      <div className="container mx-auto px-6 pt-4 md:pt-8 md:absolute md:top-28 md:left-12 z-[60]">
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center justify-center gap-3 px-5 py-3 bg-white text-tag-red rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.15em] shadow-xl hover:bg-tag-red hover:text-white transition-all border-2 border-tag-red active:scale-95 mb-6 md:mb-0"
          style={{ borderColor: COLORS.TAG_RED }}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Rudi Nyumbani
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden bg-crushed-red" style={{ backgroundColor: COLORS.CRUSHED_RED }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-mesh opacity-90"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-5 tracking-tighter uppercase drop-shadow-2xl">
            Neno la <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Mchungaji</span>
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-medium px-4">
            Karibu katika moyo wa Filadelfia Christian Centre.
          </p>
        </div>
      </section>

      {/* Pastor's Message Section */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-[28px] md:rounded-[48px] overflow-hidden shadow-2xl border-4 md:border-8 border-white/50 bg-white/50 backdrop-blur-sm sticky top-28">
              <img 
                src="/images/pastor-neema.jpg" 
                alt="Pastor Neema Stanley Mndasha" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Pastor Neema S. Mndasha</h3>
                <p className="text-tag-yellow font-bold text-[10px] md:text-xs uppercase tracking-widest" style={{ color: COLORS.TAG_YELLOW }}>Mchungaji Kiongozi</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-tag-red/10 text-tag-red rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest" style={{ color: COLORS.TAG_RED, backgroundColor: `${COLORS.TAG_RED}15` }}>
              UJUMBE WA KARIBU
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">
              Mungu amekuandaa <br className="hidden sm:block" /> kwa ajili ya <span className="text-tag-red" style={{ color: COLORS.TAG_RED }}>Ukuu.</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                "Bwana Yesu asifiwe mpendwa. Ni furaha yangu kubwa kukukaribisha Filadelfia Christian Centre (FCC). Sisi ni familia inayojengwa na upendo wa Kristo na nguvu ya Roho Mtakatifu."
              </p>
              <p>
                Maono yetu hapa Goba-Tegeta(A) ni kukuandaa wewe kuwa mshindi katika kila nyanja ya maisha yako. Hatufundishi dini tu, bali tunajenga uhusiano hai na Mungu ambaye anaweza kubadilisha historia ya maisha yako.
              </p>
              <p>
                Kama mchungaji wako, natamani kukuona ukikua katika imani, ukigundua karama zako, na ukizitumia kumtumikia Mungu na jamii yako. Filadelfia ni mahali pa uponyaji, urejesho, na amani.
              </p>
              <p className="font-bold text-gray-900 italic">
                "Karibu tushiriki baraka za Bwana pamoja. Hakuna jambo gumu la kumshinda Mungu!"
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
               <div className="flex items-center gap-4">
                  <div className="w-12 md:w-16 h-1 bg-tag-red" style={{ backgroundColor: COLORS.TAG_RED }}></div>
                  <p className="font-black text-gray-900 uppercase tracking-widest text-[10px] md:text-base">Pastor Neema Stanley Mndasha</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Better Mobile Grid */}
      <section className="py-16 md:py-24 bg-gray-50 rounded-[32px] md:rounded-[100px] mx-4 md:mx-10 mb-16 md:mb-24 px-4 md:px-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-tag-red font-black text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-3" style={{ color: COLORS.TAG_RED }}>MAADILI YETU</span>
            <h2 className="text-2xl md:text-6xl font-black text-gray-900 tracking-tighter">Tunachoishi na Kukiamini</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((val, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[28px] md:rounded-[48px] shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-tag-red/10 rounded-2xl flex items-center justify-center text-tag-red mb-6 md:mb-8 group-hover:bg-tag-red group-hover:text-white transition-all shadow-inner" style={{ color: COLORS.TAG_RED }}>
                  {React.cloneElement(val.icon as React.ReactElement, { className: "w-6 h-6 md:w-8 md:h-8" })}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4 tracking-tight">{val.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctrines Section - Responsive Overlay and Content */}
      <section className="py-12 md:py-24 container mx-auto px-6">
         <div className="bg-deep-charcoal rounded-[32px] md:rounded-[56px] p-8 md:p-24 text-white relative overflow-hidden" style={{ backgroundColor: COLORS.DEEP_CHARCOAL }}>
            <div className="absolute inset-0 gradient-mesh opacity-20"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
               <div className="text-center lg:text-left">
                  <h2 className="text-2xl md:text-6xl font-black mb-6 tracking-tighter leading-none">Misingi ya <br className="hidden sm:block" /><span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Imani Yetu</span></h2>
                  <p className="text-sm md:text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                     Kama kanisa la Tanzania Assemblies of God (TAG), tunashikilia misingi mikuu ya imani ya Kikristo iliyojengwa juu ya neno la Mungu ambalo halibadiliki.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button 
                      onClick={() => navigate('/give')}
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-tag-red text-white rounded-full font-black text-sm hover:scale-105 transition-all shadow-2xl" 
                      style={{ backgroundColor: COLORS.TAG_RED }}
                    >
                      SAIDIA HUDUMA <ArrowRight size={18} />
                    </button>
                    <button 
                      onClick={() => navigate('/')}
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-black text-sm hover:scale-105 transition-all shadow-2xl" 
                    >
                      NYUMBANI <HomeIcon size={18} />
                    </button>
                  </div>
               </div>
               <div className="space-y-3">
                  {doctrines.map((doc, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                       <CheckCircle2 size={20} className="text-tag-yellow shrink-0 mt-0.5" style={{ color: COLORS.TAG_YELLOW }} />
                       <p className="text-[12px] md:text-base font-bold text-gray-200 leading-tight">{doc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <div className="py-12"></div>
    </div>
  );
};

export default PastorsWord;