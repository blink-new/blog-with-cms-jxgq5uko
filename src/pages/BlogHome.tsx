import { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts, categories } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Clock, Calendar, ArrowRight, Sparkles, TrendingUp, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function BlogHome() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredPosts = posts.filter(post => post.isFeatured && post.isPublished);
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category.slug === selectedCategory && post.isPublished)
    : posts.filter(post => post.isPublished);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg animate-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-white/90 text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Welcome to the future of content
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 animate-slide-up">
              <span className="block">Think.</span>
              <span className="block gradient-text">Create.</span>
              <span className="block">Inspire.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto text-balance animate-fade-in" style={{animationDelay: '0.3s'}}>
              Where brilliant minds share groundbreaking ideas. 
              Discover stories that shape the future of technology, design, and innovation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-4 text-lg rounded-full">
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore Stories
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-full">
                <Star className="w-5 h-5 mr-2" />
                Featured Articles
              </Button>
            </div>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{animationDelay: '0.9s'}}>
              {categories.map(category => (
                <Badge 
                  key={category.id}
                  className={`px-6 py-3 text-sm font-medium rounded-full cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.slug 
                      ? 'bg-white text-black shadow-lg' 
                      : 'glass-effect text-white/90 hover:bg-white/20'
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category.slug ? null : category.slug)}
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Featured Posts */}
        {!selectedCategory && featuredPosts.length > 0 && (
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Featured</span> Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Handpicked articles that are shaping conversations and driving innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <Card key={post.id} className={`group overflow-hidden border-0 shadow-xl card-hover bg-gradient-to-br ${
                  index === 0 
                    ? 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20' 
                    : 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20'
                }`}>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/90 text-black font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4 space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <Badge 
                        style={{ backgroundColor: post.category.color }} 
                        className="text-white font-medium px-3 py-1"
                      >
                        {post.category.name}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {post.publishedAt.toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readTime} min read
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold group-hover:gradient-text transition-all duration-300">
                      <Link to={`/post/${post.slug}`} className="text-balance">
                        {post.title}
                      </Link>
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 line-clamp-3 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 ring-2 ring-white shadow-lg">
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback className="font-semibold">{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{post.author.name}</div>
                          <div className="text-sm text-muted-foreground">{post.author.bio}</div>
                        </div>
                      </div>
                      <Link to={`/post/${post.slug}`}>
                        <Button className="rounded-full group/btn bg-black text-white hover:bg-black/90">
                          Read Story
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {selectedCategory ? (
                  <>
                    <span className="gradient-text">{categories.find(c => c.slug === selectedCategory)?.name}</span> Stories
                  </>
                ) : (
                  <>Latest <span className="gradient-text">Stories</span></>
                )}
              </h2>
              <p className="text-lg text-muted-foreground">
                {selectedCategory 
                  ? `Exploring the world of ${categories.find(c => c.slug === selectedCategory)?.name.toLowerCase()}`
                  : 'Fresh perspectives and cutting-edge insights'
                }
              </p>
            </div>
            {selectedCategory && (
              <Button variant="outline" onClick={() => setSelectedCategory(null)} className="rounded-full">
                Show All Stories
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(selectedCategory ? 0 : featuredPosts.length).map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-lg card-hover bg-card/50 backdrop-blur-sm">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                <CardHeader className="pb-3 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Badge 
                      style={{ backgroundColor: post.category.color }} 
                      className="text-white text-xs font-medium px-2 py-1"
                    >
                      {post.category.name}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}m
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300 line-clamp-2">
                    <Link to={`/post/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback className="text-xs font-medium">{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{post.author.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {post.publishedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}