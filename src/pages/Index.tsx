
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import FeaturedPost from '@/components/FeaturedPost';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import { posts, categories } from '@/lib/data';

const Index = () => {
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);
  const popularPosts = [...posts].sort(() => 0.5 - Math.random()).slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-background/30 z-0"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  Discover insightful stories and ideas that matter
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  A modern platform for bloggers, thinkers, and creators to share their perspectives with the world.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/blog">
                      Explore Blog
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">
                      About Us
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-slide-up [animation-delay:300ms]">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
                    alt="Person writing at a desk with coffee" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full mb-2">Featured</span>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Why Thoughtful Writing Matters</h3>
                    <p className="text-white/80">The impact of clear expression in a noisy world</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-xl bg-secondary"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Post Section */}
        <section className="py-16 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Featured Post</h2>
              <Button asChild variant="ghost" className="group">
                <Link to="/blog" className="inline-flex items-center gap-1">
                  View all posts
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <FeaturedPost post={featuredPost} className="animate-fade-in" />
          </div>
        </section>
        
        {/* Recent Posts Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
              <Button asChild variant="ghost" className="group">
                <Link to="/blog" className="inline-flex items-center gap-1">
                  View all posts
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Explore Categories</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.slice(0, 8).map((category, index) => (
                <Link 
                  key={category.name}
                  to={`/blog`}
                  className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:border-primary/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium group-hover:text-primary transition-colors">{category.name}</h3>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Articles about {category.name.toLowerCase()}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Posts Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Popular Posts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPosts.map((post, index) => (
                <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Newsletter />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
