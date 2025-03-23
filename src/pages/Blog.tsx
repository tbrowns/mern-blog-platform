
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import PostGrid from '@/components/PostGrid';
import Newsletter from '@/components/Newsletter';
import { posts, categories, popularTags } from '@/lib/data';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const filteredPosts = posts.filter(post => {
    if (activeCategory && post.category !== activeCategory) return false;
    if (activeTag && !post.title.includes(activeTag)) return false;
    return true;
  });
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveTag(null);
  };
  
  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
    setActiveCategory(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="animate-fade-in">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest articles and insights on technology, design, and web development.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            <div className="lg:w-3/4">
              <div className="mb-8">
                {activeCategory && (
                  <div className="mb-6 animate-fade-in">
                    <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-lg bg-secondary/50">
                      <span>Category:</span>
                      <Badge variant="secondary" className="text-sm font-medium">
                        {activeCategory}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setActiveCategory(null)}
                        className="h-auto p-1"
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                )}
                
                {activeTag && (
                  <div className="mb-6 animate-fade-in">
                    <div className="inline-flex items-center gap-2 border px-4 py-2 rounded-lg bg-secondary/50">
                      <span>Tag:</span>
                      <Badge variant="secondary" className="text-sm font-medium">
                        {activeTag}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setActiveTag(null)}
                        className="h-auto p-1"
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                )}
                
                {filteredPosts.length ? (
                  <PostGrid posts={filteredPosts} columns={2} />
                ) : (
                  <div className="text-center py-12 border rounded-lg bg-secondary/30">
                    <p className="text-muted-foreground mb-4">No posts found with the selected filters.</p>
                    <Button variant="outline" onClick={() => { setActiveCategory(null); setActiveTag(null); }}>
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="font-medium mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category.name}>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-muted-foreground hover:text-foreground",
                            activeCategory === category.name && "bg-secondary text-foreground"
                          )}
                          onClick={() => handleCategoryClick(category.name)}
                        >
                          {category.name}
                          <span className="ml-auto text-xs">{category.count}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant={activeTag === tag ? "default" : "secondary"}
                        className="cursor-pointer"
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Newsletter />
        </div>
      </main>
    </div>
  );
};

export default Blog;
