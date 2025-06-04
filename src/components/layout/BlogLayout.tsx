import { Outlet } from 'react-router-dom';
import BlogNavbar from './BlogNavbar';
import BlogFooter from './BlogFooter';

export default function BlogLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BlogNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <BlogFooter />
    </div>
  );
}