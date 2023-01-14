export interface ArticleItems {
  id: number;
  imageUrl: string;
  name: string;
  summary: string;
  title: string;
  publishedAt: string;
  events?: [];
  featured?: boolean;
  launches?: [];
  newsSite?: string;
  updatedAt?: string;
}
