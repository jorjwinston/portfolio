export enum Section {
  SPLASH = 'splash',
  ABOUT = 'about',
  WORKS = 'works',
  CONTACT = 'contact'
}

export interface ServiceItem {
  id: string;
  name: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  type: string;
  year: string;
  imageUrl?: string;
  isPlaceholder?: boolean;
  aspectClass?: string;
  widthClass?: string;
}

export interface ContactForm {
  name: string;
  connection: string;
  vision: string;
}
