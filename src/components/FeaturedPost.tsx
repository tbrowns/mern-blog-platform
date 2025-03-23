
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    publishedAt: string;
    readTime: string;
  };
  className?: string;
}

const FeaturedPost = ({ post, className }: FeaturedPostProps) => {
  return (
    <div className={cn('group relative overflow-hidden rounded-xl border bg-card', className)}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      <div className="relative p-6 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-medium">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{post.publishedAt} · {post.readTime}</span>
        </div>
        
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          <Link to={`/blog/${post.id}`} className="hover:underline underline-offset-4">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        
        <Button asChild variant="ghost" className="group px-0">
          <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 font-medium">
            Read article
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedPost;
