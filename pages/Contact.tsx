
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Navigation, CheckCircle2, User, MessageSquare } from 'lucide-react';
import { COLORS, SERVICE_TIMES } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Ombi la Maombi',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', subject: 'Ombi la Maombi', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#f8f9fa]">
      {/* Dynamic Hero Section - Consistent with Services/About */}
      <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden bg-crushed-red" style={{ backgroundColor: COLORS.CRUSHED_RED }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-mesh opacity-90"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 text-tag-yellow border border-white/20" style={{ color: COLORS.TAG_YELLOW }}>
              <Navigation size={20} />
              <span className="font-black text-xs uppercase tracking-[0.2em]">Sisi Tuko Hapa Kwa Ajili Yako</span>
           </div>
           <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-5 tracking-tighter uppercase drop-shadow-2xl">
             Wasiliana <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Nasi</span>
           </h1>
           <p className="text-base sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed px-4">
             Tunapatikana Goba-Tegeta(A). Karibu tushiriki baraka za Bwana pamoja.
           </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Contact Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 md:p-16 rounded-[48px] md:rounded-[64px] shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-tag-yellow/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-tag-red/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-12 text-center lg:text-left">
                   <span className="text-tag-red font-black text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: COLORS.TAG_RED }}>TUANDIKIE</span>
                   <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">Tuma Ombi la Maombi au <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Ujumbe</span></h2>
                   <p className="text-gray-500 font-medium mt-4">Tutawasiliana nawe hivi karibuni</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-3">Ujumbe Umepokelewa!</h3>
                    <p className="text-gray-600 font-medium text-lg">Asante kwa kuwasiliana nasi. Tutakurudishia jibu hivi karibuni.</p>
                  </div>
                ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-4 flex items-center gap-2">
                          <User size={14} /> Jina Kamili
                        </label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-gray-50 border-2 border-gray-100 rounded-[28px] py-5 px-8 focus:border-tag-red focus:bg-white outline-none transition-all font-bold text-gray-900 placeholder-gray-300 shadow-inner" 
                          placeholder="Jina lako kamili..." 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-4 flex items-center gap-2">
                          <Phone size={14} /> Namba ya Simu
                        </label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-gray-50 border-2 border-gray-100 rounded-[28px] py-5 px-8 focus:border-tag-red focus:bg-white outline-none transition-all font-bold text-gray-900 placeholder-gray-300 shadow-inner" 
                          placeholder="+255 xxx xxx xxx" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-4 flex items-center gap-2">
                        <MessageSquare size={14} /> Mada ya Ujumbe
                      </label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-[28px] py-5 px-8 focus:border-tag-red focus:bg-white outline-none transition-all font-bold text-gray-900 appearance-none shadow-inner cursor-pointer"
                      >
                        <option>Ombi la Maombi</option>
                        <option>Ushuhuda</option>
                        <option>Ratiba ya Ibada</option>
                        <option>Ushauri wa Kiroho</option>
                        <option>Kujiunga na Kanisa</option>
                        <option>Maswali ya Jumla</option>
                      </select>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-4">Ujumbe/Ombi lako</label>
                      <textarea 
                        required
                        rows={6} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-[32px] py-6 px-8 focus:border-tag-red focus:bg-white outline-none transition-all font-bold text-gray-900 placeholder-gray-300 resize-none shadow-inner" 
                        placeholder="Andika ujumbe wako hapa..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-tag-red text-white py-7 rounded-[32px] font-black text-xl md:text-2xl shadow-2xl hover:shadow-3xl active:scale-[0.98] transition-all flex items-center justify-center gap-4 group" 
                      style={{ backgroundColor: COLORS.TAG_RED }}
                    >
                      TUMA UJUMBE SASA 
                      <Send size={28} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Location Card */}
              <div className="bg-gradient-to-br from-tag-red to-red-900 rounded-[40px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${COLORS.TAG_RED} 0%, #1e293b 100%)` }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12"></div>
                
                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <MapPin size={32} className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }} />
                  </div>
                  <div>
                     <h4 className="text-xs font-black text-tag-yellow uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.TAG_YELLOW }}>MAHALI TULIPO</h4>
                     <p className="text-xl md:text-2xl font-black leading-tight mb-2">Goba-Tegeta(A)</p>
                     <p className="text-base font-bold opacity-90 mb-3">Dar es Salaam, Tanzania</p>
                     <p className="text-sm font-black text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>+255 675 347 474</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-tag-yellow to-yellow-600 rounded-[40px] p-8 md:p-10 text-gray-900 shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${COLORS.TAG_YELLOW} 0%, #ca8a04 100%)` }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-16 h-16 bg-black/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                     <Phone size={32} className="text-gray-900" />
                  </div>
                  <div>
                     <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.3em] mb-3">PIGA SIMU</h4>
                     <div className="space-y-1.5">
                       <p className="text-lg md:text-xl font-black">+255 784 536 416</p>
                       <p className="text-lg md:text-xl font-black">+255 785 484 812</p>
                       <p className="text-lg md:text-xl font-black">+255 675 347 474</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tag-red/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-16 h-16 bg-tag-red/10 rounded-2xl flex items-center justify-center text-tag-red shrink-0 group-hover:scale-110 transition-transform" style={{ color: COLORS.TAG_RED }}>
                     <Mail size={32} />
                  </div>
                  <div>
                     <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-3">BARUA PEPE</h4>
                     <p className="text-xl md:text-2xl font-black text-gray-900 break-all">tagfiladelfia@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Times Card */}
            <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-tag-yellow/10 rounded-full blur-2xl"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                   <div className="w-14 h-14 bg-tag-red/10 rounded-2xl flex items-center justify-center text-tag-red" style={{ color: COLORS.TAG_RED }}>
                     <Calendar size={28} />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Ratiba za Ibada</h3>
                 </div>
                 <div className="space-y-5">
                   {SERVICE_TIMES.map((service, i) => (
                     <div key={i} className="flex justify-between items-start gap-4 p-4 bg-gray-50 rounded-[24px] hover:bg-gray-100 transition-colors">
                        <div className="flex-grow">
                          <p className="font-black text-base text-gray-900 uppercase tracking-tight">{service.day}</p>
                          <p className="text-xs font-bold text-gray-500 mt-1">{service.service}</p>
                        </div>
                        <p className="font-black text-sm text-tag-red whitespace-nowrap" style={{ color: COLORS.TAG_RED }}>{service.time}</p>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Mini Map */}
            <div className="h-64 md:h-80 rounded-[40px] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer border-8 border-white">
              <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.23123456789!2d39.182345!3d-6.745678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c490000000000%3A0x0000000000000000!2sGoba%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1698240000000!5m2!1sen!2stz" 
                 width="100%" height="100%" style={{ border:0 }} loading="lazy" 
              ></iframe>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className="py-16"></div>
    </div>
  );
};

export default Contact;
