import { Post, Category } from '../types/blog';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Technology',
    slug: 'technology',
    description: 'Latest trends in tech and software development',
    color: '#3B82F6',
    count: 12
  },
  {
    id: '2',
    name: 'Design',
    slug: 'design',
    description: 'UI/UX design insights and best practices',
    color: '#8B5CF6',
    count: 8
  },
  {
    id: '3',
    name: 'Business',
    slug: 'business',
    description: 'Entrepreneurship and business strategy',
    color: '#10B981',
    count: 6
  },
  {
    id: '4',
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Personal development and life tips',
    color: '#F59E0B',
    count: 4
  }
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of AI in Web Development',
    content: `# The Future of AI in Web Development

Artificial Intelligence is rapidly transforming the landscape of web development, bringing unprecedented capabilities and efficiencies to developers worldwide.

## Revolutionary Changes

AI-powered tools are now capable of:
- Generating code from natural language descriptions
- Automatically optimizing performance bottlenecks
- Creating responsive designs from simple sketches
- Testing applications with intelligent automation

## Impact on Developers

The integration of AI in development workflows is creating new opportunities for developers to focus on higher-level problem solving while AI handles repetitive tasks.

## Looking Ahead

As we move forward, the collaboration between human creativity and AI efficiency will define the next era of web development innovation.`,
    excerpt: 'Explore how artificial intelligence is revolutionizing web development and what it means for developers in 2024.',
    slug: 'future-of-ai-web-development',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332d85c?w=100&h=100&fit=crop&crop=face',
      bio: 'Full-stack developer and AI enthusiast'
    },
    category: categories[0],
    tags: ['AI', 'Web Development', 'Future Tech'],
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    isPublished: true,
    isFeatured: true,
    readTime: 8
  },
  {
    id: '2',
    title: 'Mastering Modern CSS Grid Layouts',
    content: `# Mastering Modern CSS Grid Layouts

CSS Grid has become the cornerstone of modern web layout design, offering unprecedented control over complex layouts.

## Grid Fundamentals

Understanding the core concepts:
- Grid containers and items
- Grid lines and tracks
- Grid areas and templates

## Advanced Techniques

Modern grid patterns that every developer should know:
- Responsive grid systems
- Asymmetrical layouts
- Dynamic content sizing

## Browser Support

CSS Grid now has excellent browser support, making it safe for production use across all modern browsers.`,
    excerpt: 'A comprehensive guide to CSS Grid layouts with practical examples and modern techniques.',
    slug: 'mastering-css-grid-layouts',
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      bio: 'CSS expert and design system architect'
    },
    category: categories[1],
    tags: ['CSS', 'Grid', 'Layout', 'Frontend'],
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    publishedAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12'),
    isPublished: true,
    isFeatured: false,
    readTime: 12
  },
  {
    id: '3',
    title: 'Building Scalable SaaS Applications',
    content: `# Building Scalable SaaS Applications

Creating a successful SaaS application requires careful planning of architecture, user experience, and business model.

## Architecture Patterns

Key architectural decisions for scalability:
- Microservices vs monolith
- Database sharding strategies
- Caching layers and CDN usage

## User Experience Design

SaaS UX considerations:
- Onboarding flow optimization
- Feature discovery and adoption
- Performance monitoring

## Business Model Integration

Technical considerations for different pricing models and how they affect system design.`,
    excerpt: 'Learn the essential patterns and practices for building SaaS applications that scale.',
    slug: 'building-scalable-saas-applications',
    author: {
      name: 'Michael Park',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face',
      bio: 'SaaS architect and startup advisor'
    },
    category: categories[2],
    tags: ['SaaS', 'Architecture', 'Scalability'],
    featuredImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    publishedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    isPublished: true,
    isFeatured: true,
    readTime: 15
  },
  {
    id: '4',
    title: 'The Art of Work-Life Balance in Tech',
    content: `# The Art of Work-Life Balance in Tech

Maintaining a healthy work-life balance in the fast-paced tech industry requires intentional strategies and boundaries.

## Setting Boundaries

Effective boundary-setting techniques:
- Clear communication about availability
- Dedicated workspace setup
- Technology usage limits

## Productivity Systems

Systems that actually work for developers:
- Time-boxing techniques
- Energy management over time management
- Sustainable coding practices

## Mental Health

Addressing burnout and maintaining mental wellness in high-pressure environments.`,
    excerpt: 'Practical strategies for maintaining work-life balance while pursuing a successful tech career.',
    slug: 'work-life-balance-in-tech',
    author: {
      name: 'Emma Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      bio: 'Tech lead and wellness advocate'
    },
    category: categories[3],
    tags: ['Work-Life Balance', 'Productivity', 'Mental Health'],
    featuredImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    publishedAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08'),
    isPublished: true,
    isFeatured: false,
    readTime: 10
  },
  {
    id: '5',
    title: 'React Performance Optimization Techniques',
    content: `# React Performance Optimization Techniques

Optimizing React applications requires understanding the framework's rendering behavior and implementing targeted improvements.

## Core Optimization Strategies

Essential techniques every React developer should know:
- Memoization with React.memo and useMemo
- Code splitting and lazy loading
- Virtual scrolling for large lists

## Advanced Patterns

Beyond the basics:
- Concurrent features and Suspense
- Server-side rendering optimization
- Bundle analysis and tree shaking

## Measuring Performance

Tools and techniques for identifying performance bottlenecks before they become problems.`,
    excerpt: 'Deep dive into React performance optimization with practical examples and modern techniques.',
    slug: 'react-performance-optimization',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      bio: 'React core contributor and performance expert'
    },
    category: categories[0],
    tags: ['React', 'Performance', 'Optimization'],
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    publishedAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    isPublished: true,
    isFeatured: false,
    readTime: 14
  }
];