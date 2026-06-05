export interface Portfolio {
  id: string;
  title_id: string;
  title_en: string;
  category_id: string;
  category_en: string;
  image: string;
  desc_id: string;
  desc_en: string;
  client?: string | null;
  year?: string | null;
  tech?: string | null;
  challenge_id?: string | null;
  challenge_en?: string | null;
  solution_id?: string | null;
  solution_en?: string | null;
  results_id?: string | null;
  results_en?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface Faq {
  id: string;
  question_id: string;
  question_en: string;
  answer_id: string;
  answer_en: string;
  order: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
