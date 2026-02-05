import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Landmark, 
  Smartphone, 
  ChevronRight, 
  Copy, 
  CheckCircle, 
  Coins, 
  Users, 
  Globe, 
  Sparkles,
  ArrowUpRight,
  Gift,
  Construction,
  MonitorPlay,
  HandHeart,
  TrendingUp,
  CreditCard,
  Send,
  Zap
} from 'lucide-react';
import { COLORS } from '../constants';

const Give = () => {
  const [amount, setAmount] = useState('');
  const [givingType, setGivingType] = useState('zaka');
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const presetAmounts = ['5000', '10000', '25000', '50000', '100000'];

  const impactAreas = [
    { 
      icon: <Globe size={32} />, 
      title: "Uenezaji wa Injili", 
      desc: "Kufikia mataifa na mitaa ambayo bado haijaguswa na neno la Mungu.",
      impact: "Watu 5,000+ wamefikwa mwaka huu",
      percentage: "35%" 
    },
    { 
      icon: <Users size={32} />, 
      title: "Huduma za Jamii", 
      desc: "Kusaidia wahitaji, mayatima, na wagonjwa katika jamii inayotuzunguka.",
      impact: "Familia 150+ zimesaidiwa kila mwezi",
      percentage: "25%" 
    },
    { 
      icon: <Sparkles size={32} />, 
      title: "Ujenzi wa Hekalu", 
      desc: "Kuboresha miundombinu yetu ili kutoa mazingira bora ya ibada.",
      impact: "Mradi wa Phase 2 umeanza",
      percentage: "40%" 
    },
  ];

  const currentProjects = [
    { 
      icon: <Construction />, 
      title: "Upanuzi wa Kanisa", 
      status: "Ujenzi wa Msingi", 
      target: "Waumini 2,000+",
      update: "Kuta zinaanza kupandishwa",
      description: "Ujenzi wa jengo jipya la kisasa la ibada na ofisi za uongozi kutosheleza idadi ya waumini inayokua."
    },
    { 
      icon: <MonitorPlay />, 
      title: "Mitambo ya Media", 
      status: "Ununuzi wa Vifaa", 
      target: "Watazamaji Live",
      update: "Kamera 2 tayari zimenunuliwa", 
      description: "Ufungaji wa mitambo ya kisasa ya kurusha ibada mubashara (Live Stream) na mifumo ya sauti ya hali ya juu."
    },
    { 
      icon: <HandHeart />, 
      title: "Mfuko wa Elimu", 
      status: "Ugawaji wa Msaada", 
      target: "Watoto 50+", 
      update: "Ada za muhula wa kwanza zimelipwa",
      description: "Kusaidia watoto wanaotoka katika mazingira magumu kupata mahitaji muhimu ya shule na ada za masomo."
    },
  ];

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-[#f8f9fa]">
      {/* Dynamic Hero Section */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 gradient-mesh opacity-90"></div>
            <div className="absolute inset-0 bg-black/40"></div>
         </div>
         <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-3 px-5 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-6 text-tag-yellow border border-white/20" style={{ color: COLORS.TAG_YELLOW }}>
              <Heart size={14} className="fill-current" />
              <span className="font-black text-[9px] uppercase tracking-[0.2em]">Ukarimu ni Ibada</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase drop-shadow-2xl">
             Kutoa <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Hubariki</span>
           </h1>
           <p className="text-base md:text-xl text-white/80 max-w-xl mx-auto font-medium leading-relaxed px-4">
             Jiunge nasi katika kueneza ufalme wa Mungu kupitia rasilimali alizokubariki nazo.
           </p>
         </div>
      </section>

      {/* Modern Payment Methods Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-tag-red/5 rounded-full mb-6 border border-tag-red/10">
              <Coins size={18} className="text-tag-red" style={{ color: COLORS.TAG_RED }} />
              <span className="text-tag-red font-black text-[10px] uppercase tracking-[0.3em]" style={{ color: COLORS.TAG_RED }}>Njia za Malipo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">
              Malipo <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Rahisi</span>
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Chagua njia inayokufaa zaidi kutoa sadaka yako kwa Mungu
            </p>
          </div>

          {/* Payment Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mobile Money Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-[40px] p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-tag-red/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tag-red to-red-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${COLORS.TAG_RED} 0%, #dc2626 100%)` }}>
                    <Smartphone size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">Lipa kwa Simu</h3>
                    <p className="text-sm text-gray-500 font-medium">Haraka na salama</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-black text-gray-700 uppercase tracking-wider">Namba ya Malipo</span>
                      <div className="flex gap-2">
                        <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                        <div className="w-6 h-4 bg-green-500 rounded-sm"></div>
                        <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-2xl border-2 border-dashed border-gray-200">
                      <span className="text-3xl font-black text-tag-red" style={{ color: COLORS.TAG_RED }}>5332399</span>
                      <button onClick={() => handleCopy('5332399', 'mobile')} className="p-3 bg-gray-100 hover:bg-tag-red hover:text-white rounded-xl transition-all group">
                        {copied === 'mobile' ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-tag-yellow/5 p-6 rounded-3xl border border-tag-yellow/20">
                    <h4 className="font-black text-gray-900 mb-3">Jina la Akaunti</h4>
                    <p className="font-black text-lg text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>STANLEY MNDASHA</p>
                    <p className="text-xs text-gray-500 mt-2">Hakikisha unaandika jina hili kwenye maelezo</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-blue-50 rounded-2xl">
                      <p className="text-xs font-black text-blue-600">M-PESA</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-2xl">
                      <p className="text-xs font-black text-green-600">TIGO PESA</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-2xl">
                      <p className="text-xs font-black text-red-600">AIRTEL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Transfer Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-[40px] p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-tag-yellow/10 to-transparent rounded-full transform -translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tag-yellow to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${COLORS.TAG_YELLOW} 0%, #ca8a04 100%)` }}>
                    <Landmark size={32} className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">Benki ya CRDB</h3>
                    <p className="text-sm text-gray-500 font-medium">Transfer moja kwa moja</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-black text-gray-700 uppercase tracking-wider">Namba ya Akaunti</span>
                      <div className="w-12 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-black">CRDB</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-2xl border-2 border-dashed border-gray-200">
                      <span className="text-2xl font-black text-gray-900">0133749788900</span>
                      <button onClick={() => handleCopy('0133749788900', 'bank')} className="p-3 bg-gray-100 hover:bg-tag-yellow hover:text-gray-900 rounded-xl transition-all">
                        {copied === 'bank' ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-tag-red/5 p-6 rounded-3xl border border-tag-red/20">
                    <h4 className="font-black text-gray-900 mb-3">Jina la Akaunti</h4>
                    <p className="font-black text-lg text-tag-red" style={{ color: COLORS.TAG_RED }}>STANLEY MNDASHA</p>
                    <p className="text-xs text-gray-500 mt-2">Tumia jina hili kwa maelezo ya transfer</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-green-50 rounded-2xl text-center">
                      <ShieldCheck size={24} className="text-green-600 mx-auto mb-2" />
                      <p className="text-xs font-black text-green-600">Salama 100%</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-2xl text-center">
                      <Globe size={24} className="text-blue-600 mx-auto mb-2" />
                      <p className="text-xs font-black text-blue-600">Kila Mahali</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* International Giving Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-tag-red to-red-600 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full transform -translate-x-16 translate-y-16"></div>
              
              <div className="relative z-10 text-center">
                <Sparkles size={48} className="mx-auto mb-6 text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }} />
                <h3 className="text-2xl md:text-4xl font-black mb-4">Kutoka Nje ya Tanzania?</h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Waumini wetu wa diaspora wanaweza kutoa sadaka kupitia njia za kimataifa
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[35px] shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-[35px] -translate-y-2 translate-x-2 group-hover:scale-110 transition-transform"></div>
                    <CreditCard size={32} className="text-blue-600 mb-6 relative z-10" />
                    <h4 className="font-black text-gray-900 text-xl mb-2 relative z-10">Visa & Master</h4>
                    <p className="text-sm text-gray-500 font-medium mb-4 relative z-10">Lipa kwa kadi yako ya benki popote ulipo duniani.</p>
                    <div className="flex gap-2 relative z-10">
                      <div className="w-8 h-5 bg-blue-800 rounded-sm"></div>
                      <div className="w-8 h-5 bg-orange-500 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[35px] shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-purple-50 rounded-bl-[35px] -translate-y-2 translate-x-2 group-hover:scale-110 transition-transform"></div>
                    <Send size={32} className="text-purple-600 mb-6 relative z-10" />
                    <h4 className="font-black text-gray-900 text-xl mb-2 relative z-10">Sendwave / WorldRemit</h4>
                    <p className="text-sm text-gray-500 font-medium mb-4 relative z-10">Njia rahisi kwa walio Diaspora kutuma sadaka moja kwa moja.</p>
                    <p className="text-xs font-black text-tag-red uppercase tracking-wider" style={{ color: COLORS.TAG_RED }}>+255 758 123 456</p>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[35px] shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-[35px] -translate-y-2 translate-x-2 group-hover:scale-110 transition-transform"></div>
                    <Globe size={32} className="text-indigo-600 mb-6 relative z-10" />
                    <h4 className="font-black text-gray-900 text-xl mb-2 relative z-10">PayPal & Wise</h4>
                    <p className="text-sm text-gray-500 font-medium mb-4 relative z-10">Huduma za malipo ya kidijitali za kimataifa kwa usalama.</p>
                    <p className="text-[11px] font-black text-gray-800 bg-gray-50 p-2 rounded-xl truncate">info@filadelfiachurch.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miradi ya Kanisa Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-tag-yellow/10 rounded-full mb-4 border border-tag-yellow/20">
                <Sparkles size={14} className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }} />
                <span className="text-tag-yellow font-black text-[10px] uppercase tracking-widest" style={{ color: COLORS.TAG_YELLOW }}>Matumizi ya Sadaka</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">
                Miradi <span className="text-tag-red" style={{ color: COLORS.TAG_RED }}>Inayoendelea</span>
              </h2>
            </div>
            <p className="text-gray-500 font-medium max-w-md bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              Sadaka zako zinawawezesha miradi hii muhimu katika kukuza ufalme wa Mungu na kuhakikisha huduma bora kwa jamii.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-[45px] shadow-xl border border-white/40 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-tag-red/5 rounded-2xl flex items-center justify-center mb-8 text-tag-red group-hover:bg-tag-red group-hover:text-white transition-all duration-300" style={{ color: COLORS.TAG_RED }}>
                    {React.cloneElement(project.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed text-sm font-medium">{project.description}</p>
                  
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-tag-red/10 text-tag-red rounded-full text-[10px] font-black uppercase tracking-widest border border-tag-red/20" style={{ color: COLORS.TAG_RED }}>
                        {project.status}
                      </span>
                      <span className="px-4 py-1.5 bg-tag-yellow/10 text-tag-yellow rounded-full text-[10px] font-black uppercase tracking-widest border border-tag-yellow/20" style={{ color: COLORS.TAG_YELLOW }}>
                        {project.target}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Zap size={10} className="text-tag-red" style={{ color: COLORS.TAG_RED }} />
                        Taarifa ya Sasa
                      </p>
                      <p className="text-sm font-black text-gray-900 leading-tight">
                        {project.update}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Giving Form */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">
                Ahadi ya <span className="text-tag-red" style={{ color: COLORS.TAG_RED }}>Haraka</span>
              </h2>
              <p className="text-gray-600">Jaza fomu hii kwa kutuma ahadi yako ya sadaka</p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-xl border border-white/50">
              <div className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <label className="block text-lg font-black text-gray-900 mb-4">Kiasi cha Sadaka</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {presetAmounts.map((amt) => (
                      <button 
                        key={amt} 
                        onClick={() => setAmount(amt)} 
                        className={`py-4 rounded-2xl font-black text-sm transition-all border-2 ${
                          amount === amt 
                            ? 'bg-tag-red border-tag-red text-white scale-105' 
                            : 'bg-white/50 backdrop-blur-sm border-white/20 text-gray-600 hover:border-tag-red hover:text-tag-red'
                        }`}
                        style={amount === amt ? { backgroundColor: COLORS.TAG_RED, borderColor: COLORS.TAG_RED } : {}}
                      >
                        TSh {parseInt(amt).toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    className="w-full bg-white/50 backdrop-blur-sm border-2 border-white/20 rounded-3xl py-6 px-8 focus:border-tag-red outline-none font-black text-2xl text-gray-900 placeholder-gray-400" 
                    placeholder="Weka kiasi kingine..." 
                  />
                </div>

                {/* Giving Type */}
                <div>
                  <label className="block text-lg font-black text-gray-900 mb-4">Aina ya Sadaka</label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'zaka', label: 'Zaka', desc: '10% ya kipato', icon: <HandHeart size={28} /> },
                      { id: 'sadaka', label: 'Sadaka', desc: 'Hiari ya moyo', icon: <Heart size={28} /> },
                      { id: 'misheni', label: 'Misheni', desc: 'Uenezaji wa injili', icon: <Globe size={28} /> },
                      { id: 'jengo', label: 'Jengo', desc: 'Ujenzi wa kanisa', icon: <Construction size={28} /> }
                    ].map((type) => (
                      <button 
                        key={type.id} 
                        onClick={() => setGivingType(type.id)} 
                        className={`p-6 rounded-3xl font-black text-left border-2 transition-all ${
                          givingType === type.id 
                            ? 'bg-tag-yellow border-tag-yellow text-gray-900 font-bold' 
                            : 'bg-white/50 backdrop-blur-sm border-white/20 text-gray-600 hover:border-tag-yellow'
                        }`}
                        style={givingType === type.id ? { backgroundColor: COLORS.TAG_YELLOW, borderColor: COLORS.TAG_YELLOW } : {}}
                      >
                        <div className={`mb-3 transition-colors ${givingType === type.id ? 'text-gray-900' : 'text-tag-red'}`} style={givingType !== type.id ? { color: COLORS.TAG_RED } : {}}>
                          {type.icon}
                        </div>
                        <div className="font-black text-lg">{type.label}</div>
                        <div className="text-xs opacity-80">{type.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-gradient-to-r from-tag-red to-red-600 text-white py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-3xl active:scale-95 transition-all flex items-center justify-center gap-4" style={{ background: `linear-gradient(90deg, ${COLORS.TAG_RED} 0%, #dc2626 100%)` }}>
                  <Heart size={24} className="fill-current" />
                  TUMA AHADI YANGU
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse Footer */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Sparkles size={48} className="mx-auto text-tag-yellow mb-6" style={{ color: COLORS.TAG_YELLOW }} />
              <blockquote className="text-xl md:text-3xl font-medium italic leading-relaxed mb-6">
                "Mpeni, nanyi mtapewa; kipimo kizuri, kimesongwa, kimesukumwa, kimefurika, mtapewa katika kifua chenu..."
              </blockquote>
              <cite className="text-tag-yellow font-black text-lg" style={{ color: COLORS.TAG_YELLOW }}>— Luka 6:38</cite>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-black mb-3">Mawasiliano</h4>
                <p className="opacity-80">+255 758 123 456</p>
                <p className="opacity-80">info@filadelfiachurch.org</p>
              </div>
              <div>
                <h4 className="font-black mb-3">Mahali</h4>
                <p className="opacity-80">Goba-Tegeta(A)</p>
                <p className="opacity-80">Dar es Salaam, Tanzania</p>
              </div>
              <div>
                <h4 className="font-black mb-3">Msaada</h4>
                <p className="opacity-80">Jumapili 06:00 - 13:00</p>
                <p className="opacity-80">support@filadelfiachurch.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Give;