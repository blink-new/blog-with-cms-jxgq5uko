export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  category: Category;
  tags: string[];
  featuredImage?: string;
  publishedAt: Date;
  updatedAt: Date;
  isPublished: boolean;
  isFeatured: boolean;
  readTime: number; // in minutes
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color: string;
  count: number;
}

export interface BlogStats {
  totalPosts: number;
  totalCategories: number;
  totalTags: number;
  recentPosts: number;
}