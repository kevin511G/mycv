export interface Publication {
  id: string;
  year: string;
  journal: string;
  title: string;
  authors: string;
  highlight?: string;
  image?: string;
  styleColor?: 'primary' | 'purple' | 'red' | 'green'; // For the top featured cards
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  type: 'work' | 'education';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  mainImage: string;
  subImages?: { src: string; label: string }[];
  video?: string;
  layout: 'left' | 'right' | 'center';
}

export interface Honor {
  id: string;
  title: string;
  subtitle: string;
  meta: string;
  iconClass: string;
  iconColorClass: string;
  image: string; // Path to certificate
}

export interface ImageModalData {
  isOpen: boolean;
  src: string;
  title: string;
}