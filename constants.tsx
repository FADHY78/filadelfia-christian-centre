
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
  scripture: {
    text: string;
    reference: string;
  };
}

export const MINISTRIES: MinistryDetail[] = [
  { 
    id: 'children', 
    name: 'Huduma ya Watoto', 
    icon: <Star className="w-6 h-6" />, 
    desc: 'Kulea watoto katika maadili ya Kikristo tangu umri mdogo.',
    longDesc: 'Huduma ya Watoto (Sunday School) ni kipaumbele chetu kubwa. Tunatambua kuwa watoto ni kanisa la leo na la kesho. Tunatumia mbinu za kisasa kufundisha neno la Mungu kwa njia ya michezo, nyimbo, na hadithi za Biblia ili kujenga msingi imara wa kiroho na kimaadili.',
    schedule: 'Jumamosi',
    ages: 'Miaka 3 - 12',
    memberCount: '50+',
    leaders: [
      { name: 'Odeta Kalindile', role: 'Mkurugenzi wa Watoto' }
    ],
    activities: ['Mafundisho ya Biblia', 'Mazoezi ya Kwaya ya Watoto', 'Michezo ya Kikristo', 'Safari za Mafunzo (Field Trips)', 'Mashindano ya Kukariri Aya'],
    scripture: {
      text: 'Fundisha mtoto njia ile aipasayo, hata atakapozeeka hataiacha.',
      reference: 'Mithali 22:6'
    }
  },
  { 
    id: 'youth', 
    name: 'Huduma ya Vijana', 
    icon: <Zap className="w-6 h-6" />, 
    desc: 'Kuwaandaa vijana kwa mustakabali wa kiroho na kimaisha.',
    longDesc: 'Tunajenga vijana wenye nguvu, maono, na uadilifu (NYPC). Huduma hii inalenga kuwasaidia vijana kukabiliana na changamoto za kisasa kama utandawazi na mmomonyoko wa maadili huku wakibaki imara katika imani na kukuza vipaji vyao kwa ajili ya ufalme wa Mungu.',
    schedule: 'Jumanne',
    ages: 'Miaka 13 - 35',
    memberCount: '40+',
    leaders: [
      { name: 'Jaston Dogoda', role: 'Mwenyekiti wa Vijana' }
    ],
    activities: ['Semina za Kujitambua', 'Majadiliano ya Wazi (Talk Shows)', 'Michezo na Burudani', 'Maombi na Kufunga kwa Vijana', 'Ujasiriamali'],
    scripture: {
      text: 'Mtu asidharau ujana wako; bali uwe mfano kwa waumini katika kuzungumza, katika mwenendo, katika upendo, katika imani, katika usafi.',
      reference: '1 Timotheo 4:12'
    }
  },
  { 
    id: 'women', 
    name: 'Huduma ya Wanawake', 
    icon: <Heart className="w-6 h-6" />, 
    desc: 'Umoja na nguvu kwa wanawake wa imani katika kusaidiana.',
    longDesc: 'Wanawake wa Filadelfia (WWK) ni nguzo muhimu ya maombi na huduma. Huduma hii inawaleta pamoja wanawake wote kwa ajili ya kuombeana, kusaidiana kiuchumi kupitia vikundi vya kijamii, na kulea familia zao katika njia ya Bwana kwa hekima na upendo.',
    schedule: 'Alhamisi',
    ages: 'Akina Mama wote',
    memberCount: '30+',
    leaders: [
      { name: 'Margeth Senzige', role: 'Mwenyekiti WWK' }
    ],
    activities: ['Maombi ya WWK', 'Mafunzo ya Ujasiriamali', 'Huduma kwa Wajane na Mayatima', 'Semina za Ndoa na Malezi', 'Kujitegemea'],
    scripture: {
      text: 'Mwanamke mwenye hekima huijenga nyumba yake, bali mpumbavu huiangusha kwa mikono yake.',
      reference: 'Mithali 14:1'
    }
  },
  { 
    id: 'men', 
    name: 'Huduma ya Wanaume', 
    icon: <ShieldCheck className="w-6 h-6" />, 
    desc: 'Uongozi na uwajibikaji kwa wanaume katika familia na kanisa.',
    longDesc: 'Wanaume (CPD) wanahimizwa kuwa viongozi wa kiroho and walinzi wa nyumba zao. Huduma hii inawajenga wanaume kuwa na nidhamu ya kiroho, uaminifu katika kazi, na msimamo thabiti katika neno la Mungu huku wakishirikiana katika ujenzi wa kanisa.',
    schedule: 'Jumamosi',
    ages: 'Akina Baba wote',
    memberCount: '10+',
    leaders: [
      { name: 'Michel Mhagama', role: 'Mwenyekiti CPD' }
    ],
    activities: ['Kifungua kinywa cha Wanaume', 'Mafunzo ya Uongozi wa Familia', 'Michezo (Football & Jogging)', 'Huduma ya Utumishi', 'Uwekezaji'],
    scripture: {
      text: 'Lakini mimi na nyumba yangu tutamtumikia Bwana.',
      reference: 'Yoshua 24:15'
    }
  },
  { 
    id: 'worship', 
    name: 'Muziki na Ibada', 
    icon: <Music className="w-6 h-6" />, 
    desc: 'Kuinua sifa na kuabudu kwa Roho na kweli.',
    longDesc: 'Timu ya Sifa na Kuabudu (Praise & Worship) inaongoza kanisa kuingia katika uwepo wa Mungu. Tunazingatia ubora wa muziki, ufundi wa ala, na maandalizi ya kiroho (consecration) ili kuhakikisha kila ibada inakuwa na nguvu na mguso wa kiungu kwa waumini.',
    schedule: 'Jumamosi',
    ages: 'Wenye karama ya muziki',
    memberCount: '30+ Waimbaji',
    leaders: [
      { name: 'Jeremia Isaya', role: 'Mkurugenzi' }
    ],
    activities: ['Mazoezi ya Sauti', 'Mafunzo ya Ala (Piano/Guitars)', 'Kesha la Sifa', 'Kurekodi Nyimbo', 'Semina za Ibada'],
    scripture: {
      text: 'Mwimbieni Bwana wimbo mpya, mwimbieni Bwana, dunia yote. Mwimbieni Bwana, mbarikini jina lake.',
      reference: 'Zaburi 96:1-2'
    }
  },
  { 
    id: 'missions', 
    name: 'Uinjilisti na Misheni', 
    icon: <Globe className="w-6 h-6" />, 
    desc: 'Kuhubiri neno kwa mataifa yote kama agizo kuu.',
    longDesc: 'Hii ndio moyo wa kanisa letu. Hatujifungii ndani ya kuta nne; tunatoka nje kuwafikia watu wasiomjua Kristo kupitia mikutano ya hadhara, uinjilisti wa nyumba kwa nyumba, na huduma za kijamii (hospitalini na magerezani) ili kuleta ukombozi kwa kila mwanadamu.',
    schedule: 'Itakayopangwa na viongozi',
    ages: 'Wote wenye shauku ya roho',
    memberCount: '5+',
    leaders: [
      { name: 'Safina Daniel', role: 'Mkuu wa Idara' }
    ],
    activities: ['Mikutano ya Hadhara', 'Uinjilisti wa Mashuleni', 'Kupanda Makanisa Mapya', 'Huduma za Magerezani', 'Usambazaji wa Trakti'],
    scripture: {
      text: 'Kwa maana sisi hatuwezi kusema yale ambayo hatuyaona wala hayakusikia.',
      reference: 'Matendo 4:20'
    }
  },
  { 
    id: 'discipleship', 
    name: 'Uanafunzi na Maandiko', 
    icon: <Users className="w-6 h-6" />, 
    desc: 'Kujenga imani imara na kukua kiroho kupitia mafundisho ya kina.',
    longDesc: 'Huduma ya Uanafunzi na Maandiko inalenga kujenga waumini wenye msingi thabiti wa neno la Mungu. Tunatoa mafundisho ya kina ya Biblia, maendeleo ya kibinafsi, na uongozaji wa kiroho ili kuwasaidia waumini kukua na kuwa wanafunzi wa kweli wa Kristo wanaofanana na mfano wake.',
    schedule: 'Jumapili',
    ages: 'Waumini wote',
    memberCount: 'Waumini wote',
    leaders: [
      { name: 'John Mchosa', role: 'Mkuu wa Idara' }
    ],
    activities: ['Mafundisho ya Biblia', 'Ushauri wa Kibinafsi', 'Vikundi vya Kujifunza', 'Maendeleo ya Uongozi', 'Maombi ya Makundi'],
    scripture: {
      text: 'Kwa maana sisi tu kazi yake, tuliumbwa katika Kristo Yesu, tutende matendo mema, ambayo tokea awali Mungu aliyatengeneza ili tuenende nayo.',
      reference: 'Efeso 2:10'
    }
  },
];

export const SERVICE_TIMES = [
  { day: 'Jumapili', time: '06:00 AM - 08:00 AM', service: 'Ibada ya Kwanza' },
  { day: 'Jumapili', time: '09:00 AM - 12:00 PM', service: 'Ibada ya Pili' },
  { day: 'Jumatano', time: '10:00 Jioni - 12:00 Jioni', service: 'Bible Study' },
  { day: 'Ijumaa', time: '10:00 Jioni - 12:00 Jioni', service: 'Maombi na Maombezi' },
];
