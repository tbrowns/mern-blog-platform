
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PostCardProps {
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
  variant?: 'default' | 'compact';
}

const PostCard = ({ post, className, variant = 'default' }: PostCardProps) => {
  if (variant === 'compact') {
    return (
      <div className={cn('group flex gap-4 items-start p-4 rounded-lg hover:bg-secondary/50 transition-colors', className)}>
        <div className="relative aspect-square w-16 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
            <Link to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </h3>
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn('group overflow-hidden rounded-xl border bg-card transition-all hover:shadow-md', className)}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-medium">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        
        <h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{post.excerpt}</p>
        
        <div className="text-xs text-muted-foreground">
          {post.publishedAt}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
