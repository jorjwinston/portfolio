import { ServiceItem, Project } from './types';

export const services: ServiceItem[] = [
  {
    id: 'brand',
    name: 'BRAND IDENTITY',
    iconName: 'hexagon', 
  },
  {
    id: 'web',
    name: 'WEB DESIGN',
    iconName: 'globe',
  },
  {
    id: 'motion',
    name: 'MOTION GRAPHICS',
    iconName: 'video', 
  },
  {
    id: 'strategy',
    name: 'VISUAL STRATEGY',
    iconName: 'trending-up',
  },
];

export const projects: Project[] = [
  {
    id: 'exp-01',
    title: 'MR ROBOT // FSOCIETY',
    type: 'POSTER ENHANCEMENT',
    year: '2026',
    isPlaceholder: false,
    imageUrl: 'MR_ROBOT_POSTER_REMIX',
    widthClass: 'w-full md:w-[58%]',
    aspectClass: 'aspect-[0.76/1]',
  },
  {
    id: 'exp-02',
    title: 'TASHKENT TV TOWER // COSMIC VOID',
    type: 'ASTROPHOTOGRAPHY',
    year: '2024',
    isPlaceholder: false,
    imageUrl: 'TV_TOWER_COSMIC_VOID',
    widthClass: 'w-full md:w-[38%]',
    aspectClass: 'aspect-[1/1.3]',
  },
  {
    id: 'exp-03',
    title: 'ZONANI OXIRIDA // THE LAST ZONE',
    type: 'ESPORTS ART',
    year: '2025',
    isPlaceholder: false,
    imageUrl: 'ZONANI_OXIRIDA_BANNER',
    widthClass: 'w-full md:w-[38%]',
    aspectClass: 'aspect-[1/1]',
  },
  {
    id: 'ielts-center',
    title: 'MOCK IELTS | CEFR',
    subtitle: 'REGISTON O`QUV MARKAZI',
    type: 'POSTER CAMPAIGN',
    year: '2024',
    imageUrl: 'MOCK_IELTS_CUSTOM_RENDER',
    widthClass: 'w-full md:w-[58%]',
    aspectClass: 'aspect-[1.5/1]',
  },
  {
    id: 'cyber-ferrari',
    title: 'FERRARI F40 // CYBERPUNK',
    type: 'NEON RENDER',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    widthClass: 'w-full md:w-[45%]',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'uzbek-mosque',
    title: 'SAMARKAND PAPERCUT LAYERS',
    type: 'ILLUSTRATIVE STACK',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=800',
    widthClass: 'w-full md:w-[51%]',
    aspectClass: 'aspect-[1/1]',
  },
];
