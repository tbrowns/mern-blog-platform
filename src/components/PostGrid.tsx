
import PostCard from '@/components/PostCard';
import { cn } from '@/lib/utils';

interface PostGridProps {
  posts: Array<{
    id: string;
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    publishedAt: string;
    readTime: string;
  }>;
  className?: string;
  columns?: 2 | 3 | 4;
}

const PostGrid = ({ posts, className, columns = 3 }: PostGridProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid grid-cols-1 gap-6', gridCols[columns], className)}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
