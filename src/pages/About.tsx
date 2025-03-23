
import { Separator } from '@/components/ui/separator';
import Newsletter from '@/components/Newsletter';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="animate-fade-in">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">About BlogSphere</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A place where ideas take shape and stories come to life.
            </p>
          </div>
          
          <div className="my-10 overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
              alt="Person writing at a desk with coffee" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              BlogSphere was born from a simple belief: that thoughtful writing can change how we see the world. 
              Founded in 2023, we've built a space where ideas can breathe and conversations can start.
            </p>
            
            <p>
              We cover a range of topics centered on technology, design, and culture. Our writers are passionate 
              experts and curious explorers who take complex subjects and make them accessible without 
              sacrificing depth or nuance.
            </p>
            
            <h2>Our Philosophy</h2>
            
            <p>
              We believe in content that respects your intelligence and your time. No clickbait, no 
              superficial takes—just thoughtful perspectives that add something meaningful to the conversation.
            </p>
            
            <p>
              Every piece we publish aims to do at least one of three things: inform, inspire, or challenge. 
              If it doesn't meet at least one of these criteria, it doesn't make the cut.
            </p>
            
            <h2>Our Team</h2>
            
            <p>
              We're a small team of writers, editors, and designers who are united by our love of great content 
              and beautiful design. We come from diverse backgrounds but share a commitment to quality and integrity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto max-w-[200px]">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop" 
                  alt="Sarah Johnson" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold">Sarah Johnson</h3>
              <p className="text-muted-foreground">Founder & Editor</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto max-w-[200px]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop" 
                  alt="David Kumar" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold">David Kumar</h3>
              <p className="text-muted-foreground">Tech Editor</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto max-w-[200px]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" 
                  alt="Emma Wilson" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold">Emma Wilson</h3>
              <p className="text-muted-foreground">Design Lead</p>
            </div>
          </div>
          
          <Separator className="my-12" />
          
          <Newsletter />
        </div>
      </main>
    </div>
  );
};

export default About;
