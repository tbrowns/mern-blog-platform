
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import { posts } from '@/lib/data';
import { toast } from 'sonner';

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the post
    const foundPost = posts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category)
      const relatedPosts = posts
        .filter(p => p.id !== postId && p.category === foundPost.category)
        .slice(0, 3);
      
      setRelated(relatedPosts);
    }
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [postId]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="animate-pulse space-y-6 w-full max-w-3xl">
          <div className="h-8 bg-secondary rounded w-2/3 mx-auto"></div>
          <div className="h-4 bg-secondary rounded w-1/2 mx-auto"></div>
          <div className="h-64 bg-secondary rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-secondary rounded"></div>
            <div className="h-4 bg-secondary rounded"></div>
            <div className="h-4 bg-secondary rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-6">The post you are looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };
  
  const handleBookmark = () => {
    toast.success('Article saved to bookmarks!');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="animate-fade-in">
          <div className="mb-10">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Blog
            </Link>
          </div>
          
          <article>
            <header className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                {post.author && (
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{post.author.name}</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {post.author && post.author.avatar && (
                    <div className="relative w-10 h-10 overflow-hidden rounded-full">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  {post.author && (
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">Author</p>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleShare}
                    aria-label="Share article"
                  >
                    <Share2 size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleBookmark}
                    aria-label="Bookmark article"
                  >
                    <Bookmark size={16} />
                  </Button>
                </div>
              </div>
            </header>
            
            <div className="mb-8 rounded-xl overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full object-cover h-[400px]"
              />
            </div>
            
            <div 
              className="prose prose-lg prose-slate max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content || '<p>' + post.excerpt + '</p>' }}
            />
            
            <Separator className="my-12" />
            
            {related.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map(relatedPost => (
                    <PostCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}
            
            <Newsletter />
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
