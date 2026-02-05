
import React from 'react';
import { 
  Heart, 
  Users, 
  Music, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Star
} from 'lucide-react';

export const COLORS = {
  TAG_RED: '#1E3A8A',
  TAG_YELLOW: '#EAB308',
  CRUSHED_RED: '#172554',
  MUTED_YELLOW: '#A16207',
  DEEP_CHARCOAL: '#0F172A',
  WARM_GRAY: '#4B5563',
  WHITE: '#FFFFFF',
};

export interface Leader {
  name: string;
  role: string;
}

export interface MinistryDetail {
  id: string;
  name: string;
  icon: React.ReactNode;
  desc: string;
  longDesc: string;
  schedule: string;
  activities: string[];
  ages: string;
  leaders: Leader[];
  memberCount: string;
}

export const MINISTRIES: MinistryDetail[] = [
  { 
    id: 'children', 
    name: 'Huduma ya Watoto', 
    icon: <Star className="w-6 h-6" />, 
    desc: 'Kulea watoto katika maadili ya Kikristo tangu umri mdogo.',
    longDesc: 'Huduma ya Watoto (Sunday School) ni kipaumbele chetu kubwa. Tunatambua kuwa watoto ni kanisa la leo na la kesho. Tunatumia mbinu za kisasa kufundisha neno la Mungu kwa njia ya michezo, nyimbo, na hadithi za Biblia ili kujenga msingi imara wa kiroho na kimaadili.',
    schedule: 'Jumapili: 06:00 AM & 09:00 AM',
    ages: 'Miaka 3 - 12',
    memberCount: '250+ Watoto',
    leaders: [
      { name: 'Mama Sarah M.', role: 'Mkurugenzi wa Watoto' },
      { name: 'Mwl. Peter John', role: 'Mratibu wa Mafundisho' }
    ],
    activities: ['Mafundisho ya Biblia', 'Mazoezi ya Kwaya ya Watoto', 'Michezo ya Kikristo', 'Safari za Mafunzo (Field Trips)', 'Mashindano ya Kukariri Aya']
  },
  { 
    id: 'youth', 
    name: 'Huduma ya Vijana', 
    icon: <Zap className="w-6 h-6" />, 
    desc: 'Kuwaandaa vijana kwa mustakabali wa kiroho na kimaisha.',
    longDesc: 'Tunajenga vijana wenye nguvu, maono, na uadilifu (NYPC). Huduma hii inalenga kuwasaidia vijana kukabiliana na changamoto za kisasa kama utandawazi na mmomonyoko wa maadili huku wakibaki imara katika imani na kukuza vipaji vyao kwa ajili ya ufalme wa Mungu.',
    schedule: 'Jumamosi: Saa 10:00 Jioni',
    ages: 'Miaka 13 - 35',
    memberCount: '400+ Vijana',
    leaders: [
      { name: 'Bro. Emmanuel K.', role: 'Mwenyekiti wa Vijana' },
      { name: 'Sis. Neema S.', role: 'Katibu' }
    ],
    activities: ['Semina za Kujitambua', 'Majadiliano ya Wazi (Talk Shows)', 'Michezo na Burudani', 'Maombi na Kufunga kwa Vijana', 'Ujasiriamali']
  },
  { 
    id: 'women', 
    name: 'Huduma ya Wanawake', 
    icon: <Heart className="w-6 h-6" />, 
    desc: 'Umoja na nguvu kwa wanawake wa imani katika kusaidiana.',
    longDesc: 'Wanawake wa Filadelfia (WWK) ni nguzo muhimu ya maombi na huduma. Huduma hii inawaleta pamoja wanawake wote kwa ajili ya kuombeana, kusaidiana kiuchumi kupitia vikundi vya kijamii, na kulea familia zao katika njia ya Bwana kwa hekima na upendo.',
    schedule: 'Alhamisi: Saa 09:00 Alasiri',
    ages: 'Akina Mama wote',
    memberCount: '300+ Akina Mama',
    leaders: [
      { name: 'Mama Grace L.', role: 'Mwenyekiti WWK' },
      { name: 'Mama Anna P.', role: 'Mratibu wa Maombi' }
    ],
    activities: ['Maombi ya WWK', 'Mafunzo ya Ujasiriamali', 'Huduma kwa Wajane na Mayatima', 'Semina za Ndoa na Malezi', 'Kujitegemea']
  },
  { 
    id: 'men', 
    name: 'Huduma ya Wanaume', 
    icon: <ShieldCheck className="w-6 h-6" />, 
    desc: 'Uongozi na uwajibikaji kwa wanaume katika familia na kanisa.',
    longDesc: 'Wanaume (CPD) wanahimizwa kuwa viongozi wa kiroho and walinzi wa nyumba zao. Huduma hii inawajenga wanaume kuwa na nidhamu ya kiroho, uaminifu katika kazi, na msimamo thabiti katika neno la Mungu huku wakishirikiana katika ujenzi wa kanisa.',
    schedule: 'Jumamosi (Kila mwezi): 01:00 Asubuhi',
    ages: 'Akina Baba wote',
    memberCount: '200+ Akina Baba',
    leaders: [
      { name: 'Mzee Peter S.', role: 'Mwenyekiti CPD' },
      { name: 'Bro. David R.', role: 'Mratibu wa Miradi' }
    ],
    activities: ['Kifungua kinywa cha Wanaume', 'Mafunzo ya Uongozi wa Familia', 'Michezo (Football & Jogging)', 'Huduma ya Utumishi', 'Uwekezaji']
  },
  { 
    id: 'worship', 
    name: 'Muziki na Ibada', 
    icon: <Music className="w-6 h-6" />, 
    desc: 'Kuinua sifa na kuabudu kwa Roho na kweli.',
    longDesc: 'Timu ya Sifa na Kuabudu (Praise & Worship) inaongoza kanisa kuingia katika uwepo wa Mungu. Tunazingatia ubora wa muziki, ufundi wa ala, na maandalizi ya kiroho (consecration) ili kuhakikisha kila ibada inakuwa na nguvu na mguso wa kiungu kwa waumini.',
    schedule: 'Jumanne & Ijumaa: Saa 10:00 - 12:00 Jioni',
    ages: 'Wenye karama ya muziki',
    memberCount: '50+ Waimbaji',
    leaders: [
      { name: 'Bro. Silas M.', role: 'Mwalimu wa Sifa' },
      { name: 'Sis. Martha K.', role: 'Mratibu wa Ibada' }
    ],
    activities: ['Mazoezi ya Sauti', 'Mafunzo ya Ala (Piano/Guitars)', 'Kesha la Sifa', 'Kurekodi Nyimbo', 'Semina za Ibada']
  },
  { 
    id: 'missions', 
    name: 'Uinjilisti na Misheni', 
    icon: <Globe className="w-6 h-6" />, 
    desc: 'Kuhubiri neno kwa mataifa yote kama agizo kuu.',
    longDesc: 'Hii ndio moyo wa kanisa letu. Hatujifungii ndani ya kuta nne; tunatoka nje kuwafikia watu wasiomjua Kristo kupitia mikutano ya hadhara, uinjilisti wa nyumba kwa nyumba, na huduma za kijamii (hospitalini na magerezani) ili kuleta ukombozi kwa kila mwanadamu.',
    schedule: 'Jumamosi: Saa 02:00 Asubuhi',
    ages: 'Wote wenye shauku ya roho',
    memberCount: '100+ Wainjilisti',
    leaders: [
      { name: 'Mwinj. Joshua B.', role: 'Mkuu wa Idara' },
      { name: 'Ev. Mary C.', role: 'Mratibu wa Misheni' }
    ],
    activities: ['Mikutano ya Hadhara', 'Uinjilisti wa Mashuleni', 'Kupanda Makanisa Mapya', 'Huduma za Magerezani', 'Usambazaji wa Trakti']
  },
];

export const SERVICE_TIMES = [
  { day: 'Jumapili', time: '06:00 AM - 08:00 AM', service: 'Ibada ya Kwanza' },
  { day: 'Jumapili', time: '09:00 AM - 12:00 PM', service: 'Ibada ya Pili' },
  { day: 'Jumatano', time: '10:00 Jioni - 12:00 Jioni', service: 'Bible Study' },
  { day: 'Ijumaa', time: '10:00 Jioni - 12:00 Jioni', service: 'Maombi na Maombezi' },
];
