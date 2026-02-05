
export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  audioUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  date: string;
  status: 'pending' | 'prayed';
}

export interface Testimony {
  id: string;
  author: string;
  content: string;
  role?: string;
}
