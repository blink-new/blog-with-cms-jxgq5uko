import { useParams, Link } from 'react-router-dom';
import { posts, categories } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryPosts = posts.filter(p => p.category.slug === slug && p.isPublished);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Category not found</h1>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Category Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <Badge 
              style={{ backgroundColor: category.color }} 
              className="text-white text-lg px-6 py-2 mb-6"
            >
              {category.name}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {category.name} Articles
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {category.description}
            </p>
            <div className="text-muted-foreground">
              {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''} published
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categoryPosts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No articles yet</h2>
            <p className="text-muted-foreground mb-8">
              There are no published articles in this category yet.
            </p>
            <Link to="/">
              <Button>Explore Other Categories</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}m read
                    </div>
                    <span>•</span>
                    <span>{post.publishedAt.toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                    <Link to={`/post/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback className="text-xs">{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{post.author.name}</span>
                    </div>
                    <Link to={`/post/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn p-0">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}