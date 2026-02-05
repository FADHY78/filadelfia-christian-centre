
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Navigation } from 'lucide-react';
import { COLORS, SERVICE_TIMES } from '../constants';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Dynamic Hero Section - Consistent with Services/About */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-crushed-red" style={{ backgroundColor: COLORS.CRUSHED_RED }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-mesh opacity-90"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
           <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 text-tag-yellow border border-white/20" style={{ color: COLORS.TAG_YELLOW }}>
              <Navigation size={20} />
              <span className="font-black text-xs uppercase tracking-[0.2em]">Sisi Tuko Hapa Kwa Ajili Yako</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
             Wasiliana <span className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Nasi</span>
           </h1>
           <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
             Tunapatikana Goba-Tegeta(A). Karibu tushiriki baraka za Bwana pamoja.
           </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Form Section */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[56px] shadow-2xl border border-gray-100">
            <div className="mb-12">
               <span className="text-tag-red font-black text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: COLORS.TAG_RED }}>TUANDIKIE</span>
               <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Tuma Ombi la Maombi au Ujumbe</h2>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Jina Kamili</label>
                  <input type="text" className="w-full bg-gray-50 border-2 border-gray-100 rounded-[24px] py-4 px-8 focus:border-tag-red outline-none transition-all font-bold" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Namba ya Simu</label>
                  <input type="tel" className="w-full bg-gray-50 border-2 border-gray-100 rounded-[24px] py-4 px-8 focus:border-tag-red outline-none transition-all font-bold" placeholder="+255 000 000 000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Mada ya Ujumbe</label>
                <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-[24px] py-4 px-8 focus:border-tag-red outline-none transition-all font-bold appearance-none">
                  <option>Ombi la Maombi</option>
                  <option>Ushuhuda</option>
                  <option>Ratiba ya Ibada</option>
                  <option>Ushauri wa Kiroho</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Ujumbe/Ombi lako</label>
                <textarea rows={5} className="w-full bg-gray-50 border-2 border-gray-100 rounded-[32px] py-5 px-8 focus:border-tag-red outline-none transition-all font-bold resize-none" placeholder="Andika hapa..."></textarea>
              </div>
              <button className="w-full bg-tag-red text-white py-6 rounded-[32px] font-black text-xl shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4" style={{ backgroundColor: COLORS.TAG_RED }}>
                TUMA UJUMBE SASA <Send size={24} />
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Info Cards */}
            <div className="bg-gray-900 rounded-[48px] p-10 text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 gradient-mesh opacity-10"></div>
               <div className="relative z-10 space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-tag-red/20 rounded-2xl flex items-center justify-center text-tag-red shrink-0" style={{ color: COLORS.TAG_RED }}>
                       <MapPin size={28} />
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-tag-yellow uppercase tracking-widest mb-2" style={{ color: COLORS.TAG_YELLOW }}>MAHALI TULIPO</h4>
                       <p className="text-xl font-bold leading-tight">Goba-Tegeta(A),<br />Dar es Salaam, Tanzania.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-tag-yellow/20 rounded-2xl flex items-center justify-center text-tag-yellow shrink-0" style={{ color: COLORS.TAG_YELLOW }}>
                       <Phone size={28} />
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-tag-red uppercase tracking-widest mb-2" style={{ color: COLORS.TAG_RED }}>PIGA SIMU</h4>
                       <p className="text-xl font-bold">+255 758 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shrink-0">
                       <Mail size={28} />
                    </div>
                    <div>
                       <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">BARUA PEPE</h4>
                       <p className="text-xl font-bold">info@filadelfiachurch.org</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Service Times Card */}
            <div className="bg-tag-yellow p-10 rounded-[48px] shadow-xl text-gray-900" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
               <div className="flex items-center gap-3 mb-8">
                 <Calendar size={28} className="text-gray-900" />
                 <h3 className="text-2xl font-black tracking-tight uppercase">Ratiba za Ibada</h3>
               </div>
               <div className="space-y-6">
                 {SERVICE_TIMES.map((service, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-gray-900/10 pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="font-black text-sm uppercase tracking-tighter">{service.day}</p>
                        <p className="text-[10px] font-bold text-gray-700">{service.service}</p>
                      </div>
                      <p className="font-black text-sm text-tag-red" style={{ color: COLORS.TAG_RED }}>{service.time}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* Mini Map */}
            <div className="h-72 rounded-[48px] overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all cursor-pointer border-8 border-white">
              <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.23123456789!2d39.182345!3d-6.745678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c490000000000%3A0x0000000000000000!2sGoba%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1698240000000!5m2!1sen!2stz" 
                 width="100%" height="100%" style={{ border:0 }} loading="lazy" 
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12"></div>
    </div>
  );
};

export default Contact;
