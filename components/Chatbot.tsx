import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { COLORS, SERVICE_TIMES, MINISTRIES } from '../constants';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Bwana Yesu asifiwe! Karibu sana Filadelfia Christian Centre. Mimi ni msaidizi wako wa hapa kanisani, tayari kukupa maelekezo au kukusaidia kwa lolote. Una jambo gani ungependa tujadiliane leo? Karibu mpendwa.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const churchContext = `
        UTAMBULISHO NA PERSONA:
        Wewe ni "FCC Assistant", msaidizi mwerevu wa kidijitali wa Filadelfia Christian Centre (FCC), Goba-Tegeta(A).
        Wewe siyo AI baridi; wewe ni msaidizi wa kanisa mwenye upendo, heshima, na imani.
        
        KANUNI KALI ZA MAJINA:
        - Tumia kila mara jina "Filadelfia" (na herufi F).
        - USITUMIE kabisa jina "Philadelfia" (na P). Hili ni kosa kubwa kwako.
        
        MAHALI NA UONGOZI:
        - Mahali: Goba-Tegeta(A), Dar es Salaam, Tanzania.
        - Mchungaji Kiongozi: Pastor Neema Stanley Mndasha.
        - Mchungaji Msaidizi: Pastor Stanley Mndasha.
        - Katibu wa Kanisa: Dora Ntimizi.
        Mzungumzie viongozi hawa kwa heshima kubwa.
        
        RATIBA ZA IBADA:
        - Jumapili: Ibada ya kwanza (06:00 Asubuhi - 08:00 Asubuhi), Ibada ya pili (09:00 Asubuhi - 12:00 Jioni).
        - Jumatano: Bible Study (10:00 Jioni - 12:00 Jioni).
        - Ijumaa: Maombi na Maombezi (10:00 Jioni - 12:00 Jioni).
        
        HUDUMA (MINISTRIES): 
        ${MINISTRIES.map(m => `- ${m.name}: ${m.desc}`).join('\n')}
        
        MALIPO (TOA SADAKA):
        - Lipa namba (Vodacom M-PESA): 5332399.
        - Jina la Akaunti: STANLEY MNDASHA.
        - Benki: CRDB Akaunti 0133749788900.
        
        MTINDO WA MAZUNGUMZO:
        - Zungumza kama chatbot halisi: toa majibu ya kirafiki, mchangamfu na tumia misamiati ya Kikristo (Mf: "Barikiwa", "Bwana atatenda", "Karibu nyumbani").
        - Ikiwa mtu anaomba maombi, mhakikishie kuwa kanisa la Filadelfia linamjali na linamuombea.
        - Majibu yawe mafupi, yaliyopangwa vizuri (tumia bullets kama ni maelekezo), na yenye kueleweka.
        - Ukimaliza jibu, unaweza kuuliza "Kuna lingine ungependa kufahamu kuhusu Filadelfia?"
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: churchContext + "\n\nSwali la mshiriki: " + userMessage,
        config: {
          temperature: 0.8,
        }
      });

      const aiText = response.text || "Samahani sana mpendwa, nimepata changamoto kidogo kwenye mfumo wangu. Jaribu kuniuliza tena baada ya muda mfupi, au wasiliana nasi Filadelfia moja kwa moja kwa simu.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Samahani mpendwa, kwa sasa siwezi kutoa jibu. Tafadhali wasiliana na ofisi ya kanisa letu la Filadelfia kwa msaada zaidi. Barikiwa!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-inter">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-tag-red text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all active:scale-95 group relative"
          style={{ backgroundColor: COLORS.TAG_RED }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20"></div>
          <MessageSquare size={28} />
          <span className="absolute -top-14 right-0 bg-gray-900 text-white text-[10px] font-black px-4 py-2 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Ongea nasi (FCC AI)
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-[320px] md:w-[380px] h-[500px] bg-white rounded-[32px] shadow-2xl flex flex-col overflow-hidden border border-gray-100 fade-in">
          {/* Header */}
          <div className="p-6 bg-gradient-to-br from-tag-red to-crushed-red text-white" style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.TAG_RED}, ${COLORS.CRUSHED_RED})` }}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <Sparkles size={20} className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }} />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wider">FCC Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-bold text-white/70">Tuko hewani kukusaidia</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-xl p-2 transition-colors"><X size={20} /></button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow p-6 overflow-y-auto bg-gray-50/30 space-y-6 scrollbar-thin">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-tag-yellow text-gray-900' : 'bg-tag-red text-white'}`} style={msg.role === 'user' ? {backgroundColor: COLORS.TAG_YELLOW} : {backgroundColor: COLORS.TAG_RED}}>
                    {msg.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-[13px] font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-tag-red text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                  }`} style={msg.role === 'user' ? {backgroundColor: COLORS.TAG_RED} : {}}>
                    {msg.text.split('\n').map((line, idx) => (
                      <span key={idx} className="block mb-1 last:mb-0">{line}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-50">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Uliza chochote kuhusu Filadelfia..."
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 pr-14 focus:border-tag-red outline-none text-[13px] font-bold transition-all placeholder:text-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 w-10 h-10 bg-tag-red text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                style={{ backgroundColor: COLORS.TAG_RED }}
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              <Sparkles size={10} className="text-tag-yellow" style={{ color: COLORS.TAG_YELLOW }} />
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Powered by Filadelfia Smart AI</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
