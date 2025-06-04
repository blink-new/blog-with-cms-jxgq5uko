import { Link } from 'react-router-dom';
import { posts, categories } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  FileText, 
  Plus, 
  Eye, 
  Edit, 
  Calendar,
  TrendingUp,
  Users,
  Tag
} from 'lucide-react';

export default function AdminDashboard() {
  const publishedPosts = posts.filter(p => p.isPublished);
  // const draftPosts = posts.filter(p => !p.isPublished);
  const totalViews = publishedPosts.length * 1200; // Mock view count
  const totalAuthors = [...new Set(posts.map(p => p.author.name))].length;

  const stats = [
    {
      title: 'Total Posts',
      value: posts.length,
      change: '+12%',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Published',
      value: publishedPosts.length,
      change: '+8%',
      icon: Eye,
      color: 'text-green-600'
    },
    {
      title: 'Total Views',
      value: totalViews.toLocaleString(),
      change: '+23%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Authors',
      value: totalAuthors,
      change: '0%',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your blog content and view analytics</p>
        </div>
        <Link to="/admin/posts/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Posts */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Recent Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {posts.slice(0, 5).map(post => (
                <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-1">{post.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <Badge 
                        style={{ backgroundColor: post.category.color }} 
                        className="text-white text-xs"
                      >
                        {post.category.name}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishedAt.toLocaleDateString()}
                      </span>
                      <Badge variant={post.isPublished ? 'default' : 'secondary'}>
                        {post.isPublished ? 'Published' : 'Draft'}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to={`/post/${post.slug}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to={`/admin/posts/edit/${post.id}`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Categories & Quick Actions */}
        <div className="space-y-6">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories.map(category => (
                <div key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <Badge variant="secondary">{category.count}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/admin/posts/new" className="block">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Plus className="w-4 h-4" />
                  Create New Post
                </Button>
              </Link>
              <Link to="/" className="block">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Eye className="w-4 h-4" />
                  View Blog
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}