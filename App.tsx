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
  ChevronRight,
  Heart,
  Home as HomeIcon,
  Info,
  HandHeart,
  BookOpen,
  Gift,
  Radio,
  MessageCircle,
  ArrowUpRight,
  Sparkles
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
    { name: 'Nyumbani', path: '/', icon: <HomeIcon size={20} /> },
    { name: 'Kuhusu', path: '/about', icon: <Info size={20} /> },
    { name: 'Huduma', path: '/services', icon: <HandHeart size={20} /> },
    { name: 'Mahubiri', path: '/sermons', icon: <BookOpen size={20} /> },
    { name: 'Kutoa', path: '/give', icon: <Gift size={20} /> },
    { name: 'Live', path: '/live', icon: <Radio size={20} /> },
    { name: 'Mawasiliano', path: '/contact', icon: <MessageCircle size={20} /> },
  ];

  const scrolledBg = 'bg-gradient-to-r from-[#172554] to-[#1E3A8A] shadow-2xl py-3';
  const transparentBg = 'bg-gradient-to-b from-black/60 to-transparent py-4 md:py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? scrolledBg : transparentBg}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white p-1 flex items-center justify-center rounded-xl md:rounded-2xl shadow-lg shadow-black/20 transform group-hover:rotate-12 transition-transform">
            <img src="/images/logo.jpg" alt="TAG Logo" className="w-full h-full object-contain rounded-lg" />
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
        <button 
          className="lg:hidden text-white w-11 h-11 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 active:scale-90 transition-all hover:bg-white/20 flex items-center justify-center relative" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`flex flex-col gap-[5px] w-5 items-center transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-5 translate-y-[7px] rotate-90' : 'w-5'}`}></span>
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-3.5 ml-auto'}`}></span>
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-5 -translate-y-[7px]' : 'w-5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Slide Panel */}
        <div className={`absolute top-0 right-0 w-[88%] max-w-[380px] h-full bg-[#0a1628] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-tag-red/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-tag-yellow/10 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="flex flex-col h-full relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center p-6 pb-4 border-b border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white p-1.5 rounded-xl flex items-center justify-center shadow-lg">
                  <img src="/images/logo.jpg" alt="TAG Logo" className="w-full h-full object-contain rounded-md" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-base text-white tracking-tighter leading-tight">FILADELFIA</span>
                  <span className="text-[8px] font-black text-tag-yellow uppercase tracking-[0.25em]" style={{ color: COLORS.TAG_YELLOW }}>Christian Centre • TAG</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl text-white/60 active:scale-90 transition-all hover:bg-white/10 flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow overflow-y-auto py-4 px-4">
              <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] px-3 mb-3">VINJARI</p>
              <div className="space-y-1">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group active:scale-[0.98] ${
                        isActive 
                          ? 'bg-white/10 border border-white/10' 
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isActive 
                          ? 'bg-tag-yellow text-gray-900 shadow-lg shadow-tag-yellow/20' 
                          : 'bg-white/5 text-white/40 group-hover:text-white/70 group-hover:bg-white/10'
                      }`} style={isActive ? { backgroundColor: COLORS.TAG_YELLOW } : {}}>
                        {link.icon}
                      </div>
                      <div className="flex-grow">
                        <span className={`font-black text-[15px] uppercase tracking-wide transition-colors ${
                          isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                        }`}>{link.name}</span>
                      </div>
                      {isActive && (
                        <div className="w-1.5 h-1.5 bg-tag-yellow rounded-full shadow-[0_0_8px_rgba(234,179,8,0.6)]" style={{ backgroundColor: COLORS.TAG_YELLOW }}></div>
                      )}
                      {!isActive && (
                        <ChevronRight size={14} className="text-white/15 group-hover:text-white/30 transition-colors" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="mt-6 px-1">
                <Link 
                  to="/give" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full bg-tag-yellow text-gray-900 py-4 rounded-2xl font-black text-sm text-center shadow-lg shadow-tag-yellow/10 active:scale-[0.97] transition-all flex items-center justify-center gap-2.5 uppercase tracking-wider group" 
                  style={{ backgroundColor: COLORS.TAG_YELLOW }}
                >
                  <Heart size={18} className="fill-current" />
                  TOA SADAKA
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-4 border-t border-white/5 space-y-5">
              {/* Social Links */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/8 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"><Facebook size={18} /></a>
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/8 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"><Youtube size={18} /></a>
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/8 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"><Instagram size={18} /></a>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-white/25 font-black uppercase tracking-[0.2em]">Goba-Tegeta(A)</p>
                  <p className="text-[9px] text-white/40 font-bold">Dar es Salaam, TZ</p>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <Sparkles size={10} className="text-tag-yellow/50" style={{ color: `${COLORS.TAG_YELLOW}80` }} />
                <p className="text-[8px] text-white/20 font-black uppercase tracking-[0.3em]">Tanzania Assemblies of God</p>
              </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 border-b border-white/5 pb-10">
          {/* Brand Column */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="w-12 h-12 bg-white p-2 rounded-2xl flex items-center justify-center shadow-2xl">
                <img src="/images/logo.jpg" alt="TAG Logo" className="w-full h-full object-contain" />
              </div>
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