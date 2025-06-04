import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';

// Pages
import BlogHome from './pages/BlogHome';
import PostDetail from './pages/PostDetail';
import CategoryPage from './pages/CategoryPage';
import AdminDashboard from './pages/AdminDashboard';
import PostEditor from './pages/PostEditor';

// Layout
import BlogLayout from './components/layout/BlogLayout';
import AdminLayout from './components/layout/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Blog Routes */}
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<BlogHome />} />
          <Route path="post/:slug" element={<PostDetail />} />
          <Route path="category/:slug" element={<CategoryPage />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="posts/new" element={<PostEditor />} />
          <Route path="posts/edit/:id" element={<PostEditor />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;