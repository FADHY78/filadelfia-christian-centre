import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Sermons from './pages/Sermons';
import Give from './pages/Give';
import Live from './pages/Live';
import Contact from './pages/Contact';
import PastorsWord from './pages/PastorsWord';
import Chatbot from './components/Chatbot';
import { COLORS } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nyumbani', path: '/' },
    { name: 'Kuhusu', path: '/about' },
    { name: 'Huduma', path: '/services' },
    { name: 'Mahubiri', path: '/sermons' },
    { name: 'Kutoa', path: '/give' },
    { name: 'Live', path: '/live' },
    { name: 'Mawasiliano', path: '/contact' },
  ];

  const scrolledBg = 'bg-gradient-to-r from-[#172554] to-[#1E3A8A] shadow-2xl py-3';
  const transparentBg = 'bg-gradient-to-b from-black/60 to-transparent py-4 md:py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? scrolledBg : transparentBg}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center rounded-xl md:rounded-2xl text-tag-red font-black text-base md:text-lg shadow-lg transform group-hover:rotate-12 transition-transform" style={{ color: COLORS.TAG_RED }}>
            FCC
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-lg md:text-xl leading-none tracking-tighter text-white`}>FILADELFIA</span>
            <span className={`text-[8px] md:text-[10px] font-black tracking-[0.2em] text-tag-yellow uppercase`} style={{ color: COLORS.TAG_YELLOW }}>Christian Centre</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`font-black text-xs uppercase tracking-widest transition-all duration-300 relative py-2 px-1 hover:text-tag-yellow ${location.pathname === link.path ? 'text-tag-yellow after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-tag-yellow' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/give" className="bg-tag-yellow text-gray-900 px-7 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg active:scale-95" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
            TOA SADAKA
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 active:scale-90 transition-transform" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-gradient-to-br from-[#172554] to-black z-[60] transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-tag-red font-black text-xl shadow-2xl" style={{ color: COLORS.TAG_RED }}>FCC</div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tighter">FILADELFIA</span>
                <span className="text-[10px] font-black text-tag-yellow uppercase tracking-widest" style={{ color: COLORS.TAG_YELLOW }}>Christian Centre</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-3 bg-white/10 rounded-2xl text-white active:scale-90 transition-transform"><X size={28} /></button>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black transition-all py-2 ${location.pathname === link.path ? 'text-tag-yellow translate-x-4' : 'text-white/40 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-white/5 flex flex-col items-center">
             <Link to="/give" onClick={() => setIsOpen(false)} className="w-full bg-tag-yellow text-gray-900 py-6 rounded-[32px] font-black text-xl mb-8 text-center shadow-2xl active:scale-95 transition-transform" style={{ backgroundColor: COLORS.TAG_YELLOW }}>
               TOA SADAKA
             </Link>
             <div className="flex space-x-8">
               <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:text-tag-yellow hover:bg-white/10 transition-all"><Facebook size={24} /></a>
               <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:text-tag-yellow hover:bg-white/10 transition-all"><Youtube size={24} /></a>
               <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:text-tag-yellow hover:bg-white/10 transition-all"><Instagram size={24} /></a>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const [verse] = useState({ text: "BWANA ndiye mchungaji wangu, sitapungukiwa na kitu.", ref: "Zaburi 23:1" });

  const mainPages = [
    { name: 'Nyumbani', path: '/' },
    { name: 'Kuhusu', path: '/about' },
    { name: 'Huduma', path: '/services' },
    { name: 'Mahubiri', path: '/sermons' },
    { name: 'Kutoa', path: '/give' },
    { name: 'Live', path: '/live' },
    { name: 'Mawasiliano', path: '/contact' },
  ];

  return (
    <footer className="bg-deep-charcoal text-white pt-10 pb-6 relative overflow-hidden" style={{ backgroundColor: COLORS.DEEP_CHARCOAL }}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-tag-red/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-10 border-b border-white/5 pb-10">
          {/* Brand Column */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-tag-red font-black text-lg shadow-2xl shadow-black/40" style={{ color: COLORS.TAG_RED }}>FCC</div>
              <div className="flex flex-col text-left">
                <span className="font-black text-xl tracking-tighter uppercase leading-none">FCC (TAG)</span>
                <span className="text-[9px] font-black tracking-[0.2em] text-tag-yellow uppercase" style={{ color: COLORS.TAG_YELLOW }}>Goba-Tegeta(A)</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-medium">
              Filadelfia Christian Centre ni kanisa la TAG linalojenga jamii ya waumini wenye nguvu na upendo wa Kristo. Tunamkaribisha kila mtu!
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {[Facebook, Youtube, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-tag-red hover:scale-110 transition-all group">
                  <Icon size={16} className="group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="text-center sm:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-6 text-tag-red" style={{ color: COLORS.TAG_RED }}>Vinjari</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-400 text-xs font-black uppercase tracking-widest">
              {mainPages.map((p) => (
                <Link key={p.path} to={p.path} className="hover:text-tag-yellow transition-colors">{p.name}</Link>
              ))}
            </div>
          </div>

          {/* Contacts Column */}
          <div className="text-center sm:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] mb-6 text-tag-red" style={{ color: COLORS.TAG_RED }}>Mawasiliano</h4>
            <ul className="space-y-4 text-gray-400 text-xs font-bold">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 justify-center sm:justify-start">
                <MapPin size={16} className="text-tag-red shrink-0" style={{ color: COLORS.TAG_RED }} />
                <span>Dar es Salaam, TZ</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 justify-center sm:justify-start">
                <Phone size={16} className="text-tag-red shrink-0" style={{ color: COLORS.TAG_RED }} />
                <span>+255 700 000 000</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3 justify-center sm:justify-start">
                <Mail size={16} className="text-tag-red shrink-0" style={{ color: COLORS.TAG_RED }} />
                <span className="break-all">info@fcc.or.tz</span>
              </li>
            </ul>
          </div>

          {/* Verse Column */}
          <div className="bg-white/5 p-8 rounded-[32px] border border-white/5 self-start text-center">
            <h4 className="font-black text-[9px] uppercase tracking-[0.4em] mb-4 text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }}>Neno la Leo</h4>
            <p className="italic text-gray-300 text-xs mb-3 leading-relaxed">"{verse.text}"</p>
            <p className="text-tag-red font-black text-[10px] uppercase tracking-widest" style={{ color: COLORS.TAG_RED }}>{verse.ref}</p>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[9px] font-black uppercase tracking-[0.3em]">
          <p className="text-center">&copy; {new Date().getFullYear()} Filadelfia Christian Centre (TAG). Haki Zote Zimehifadhiwa.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-inter selection:bg-tag-red selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/give" element={<Give />} />
            <Route path="/live" element={<Live />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pastors-word" element={<PastorsWord />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </HashRouter>
  );
};

export default App;