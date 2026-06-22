export interface Portfolio {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string | null;
  year?: string | null;
  tech?: string | null;
  challenge?: string | null;
  solution?: string | null;
  results?: string | null;
  link: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  order: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  category: string;
  status: 'draft' | 'published';
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
