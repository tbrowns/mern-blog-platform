export const posts = [
  {
    id: '1',
    title: 'The Evolution of Minimalist Design in Modern Web Development',
    excerpt: 'Explore how minimalist design principles have evolved and their impact on modern web development practices.',
    content: `
      <p>Minimalist design has come a long way since its inception. What began as a countercultural art movement in the mid-20th century has transformed into one of the most dominant aesthetic philosophies in digital design.</p>
      
      <p>The roots of minimalism can be traced back to the post-World War II artistic movements, particularly in architecture and visual arts. Designers like Dieter Rams established principles that would later influence digital design: clarity, simplicity, and focusing on what's truly essential.</p>
      
      <h2>The Rise of Digital Minimalism</h2>
      
      <p>As the web evolved from its cluttered beginnings, designers began to recognize that less visual noise could mean better user experiences. Apple's design language, heavily influenced by Rams' principles, helped mainstream minimalist design in digital products.</p>
      
      <p>Key characteristics of minimalist web design include:</p>
      <ul>
        <li>Clean, uncluttered layouts with ample white space</li>
        <li>Limited color palettes, often with a single accent color</li>
        <li>Typography as a central design element</li>
        <li>Removal of unnecessary decorative elements</li>
        <li>Intuitive, simplified navigation</li>
      </ul>
      
      <h2>Function Over Form</h2>
      
      <p>The philosophy behind minimalist design is not merely aesthetic; it's functional. By removing visual distractions, designers can guide users' attention to what matters most. This approach supports better usability and accessibility.</p>
      
      <p>Modern frameworks and design systems have embraced minimalist principles. Material Design and Apple's Human Interface Guidelines both emphasize clarity and purpose in their components, making it easier for developers to create clean, focused interfaces.</p>
      
      <h2>The Future of Minimalism</h2>
      
      <p>As we move forward, minimalism continues to evolve. The latest trends show a softer approach, incorporating subtle textures, gradients, and microinteractions that add personality without compromising simplicity.</p>
      
      <p>Minimalism in web development today is about finding the perfect balance: creating designs that are visually appealing yet supremely functional, distinctive yet universally accessible.</p>
      
      <p>By embracing these principles, developers can create experiences that not only look beautiful but truly enhance how users interact with digital products.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1074&auto=format&fit=crop',
    category: 'Design',
    publishedAt: 'May 14, 2023',
    readTime: '6 min read',
    author: {
      name: 'Alex Mitchell',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Building Performant Frontend Applications with React',
    excerpt: 'Learn advanced techniques for optimizing React applications to deliver lightning-fast user experiences.',
    content: `
      <p>Performance optimization is a critical aspect of frontend development, especially as web applications grow in complexity. React, despite its efficiency, isn't immune to performance challenges.</p>
      
      <p>This article explores advanced techniques to ensure your React applications remain fast and responsive, even as they scale.</p>
      
      <h2>Component Optimization</h2>
      
      <p>The foundation of React performance lies in its component model. To maximize efficiency:</p>
      
      <ul>
        <li><strong>Implement memoization:</strong> Use React.memo for functional components and PureComponent for class components to prevent unnecessary re-renders.</li>
        <li><strong>Leverage useCallback and useMemo:</strong> These hooks help maintain referential equality between renders for functions and computed values.</li>
        <li><strong>Virtualize long lists:</strong> Libraries like react-window or react-virtualized can dramatically improve the rendering of large data sets.</li>
      </ul>
      
      <h2>State Management Considerations</h2>
      
      <p>How you manage state significantly impacts performance:</p>
      
      <ul>
        <li><strong>Organize state logically:</strong> Keep state as local as possible, and lift it up only when necessary.</li>
        <li><strong>Consider state management libraries:</strong> For complex applications, libraries like Redux, Zustand, or Jotai can help with efficient state updates.</li>
        <li><strong>Use the Context API judiciously:</strong> While convenient, Context can trigger widespread re-renders if not carefully implemented.</li>
      </ul>
      
      <h2>Code Splitting and Lazy Loading</h2>
      
      <p>Modern React applications benefit greatly from these Webpack-enabled techniques:</p>
      
      <ul>
        <li><strong>Split by routes:</strong> Load components only when needed using React.lazy and Suspense.</li>
        <li><strong>Component-level splitting:</strong> Apply code-splitting to large components or feature sets.</li>
        <li><strong>Prefetch critical paths:</strong> Anticipate user navigation to provide a seamless experience.</li>
      </ul>
      
      <h2>Build Optimization</h2>
      
      <p>The final frontier of React performance involves optimizing the build process:</p>
      
      <ul>
        <li><strong>Tree shaking:</strong> Ensure unused code is eliminated from the final bundle.</li>
        <li><strong>Modern bundlers:</strong> Consider Vite, Turbopack, or other modern alternatives to traditional webpack setups.</li>
        <li><strong>Progressive enhancement:</strong> Deliver a core experience quickly, then enhance as resources load.</li>
      </ul>
      
      <p>By implementing these strategies, you can ensure your React applications remain performant as they grow in complexity. Remember that performance optimization is not a one-time effort but an ongoing process that should be integrated into your development workflow.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop',
    category: 'Development',
    publishedAt: 'April 22, 2023',
    readTime: '8 min read',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop'
    }
  },
  {
    id: '3',
    title: 'The Rise of AI-Assisted Design Tools',
    excerpt: 'Discover how artificial intelligence is revolutionizing the design process and empowering creators.',
    content: `
      <p>The integration of artificial intelligence into design tools represents one of the most significant shifts in creative workflows in decades. This technological evolution is not merely augmenting existing capabilities—it's fundamentally transforming how designers conceptualize and execute their work.</p>
      
      <h2>Generative Design Capabilities</h2>
      
      <p>Modern AI-assisted design tools are revolutionizing the creative process through:</p>
      
      <ul>
        <li><strong>Content generation:</strong> AI can now create custom illustrations, generate unique typography, or develop color schemes based on simple text prompts.</li>
        <li><strong>Pattern recognition:</strong> Machine learning algorithms can identify design trends and suggest refinements or alternatives.</li>
        <li><strong>Style transfer:</strong> Designers can apply the aesthetic of one design to another, maintaining brand consistency while exploring new creative directions.</li>
      </ul>
      
      <h2>Workflow Enhancement</h2>
      
      <p>Beyond creation, AI is streamlining the design process itself:</p>
      
      <ul>
        <li><strong>Automated asset preparation:</strong> Tasks like image resizing, background removal, and format conversion happen with minimal human intervention.</li>
        <li><strong>Intelligent layout suggestions:</strong> AI can analyze content and propose optimal arrangements based on design principles and user behavior data.</li>
        <li><strong>Accessibility checking:</strong> Advanced tools can identify potential accessibility issues and suggest improvements automatically.</li>
      </ul>
      
      <h2>The Human-AI Collaboration Model</h2>
      
      <p>The most effective implementation of AI in design isn't about replacement—it's about partnership:</p>
      
      <ul>
        <li><strong>Ideation acceleration:</strong> AI can rapidly generate variations, allowing designers to explore more possibilities in less time.</li>
        <li><strong>Technical barrier reduction:</strong> Creative professionals can focus more on conceptual aspects as AI handles technical execution.</li>
        <li><strong>Personalized learning:</strong> AI systems can adapt to individual designers' preferences and working styles over time.</li>
      </ul>
      
      <h2>Looking Forward</h2>
      
      <p>As we look to the future, several trends are emerging:</p>
      
      <ul>
        <li><strong>Context-aware design:</strong> AI systems that understand cultural, historical, and brand contexts to deliver more relevant suggestions.</li>
        <li><strong>Multi-modal interfaces:</strong> Voice, gesture, and even thought-based inputs may supplement traditional design interactions.</li>
        <li><strong>Ethical AI design:</strong> Growing emphasis on transparency, fairness, and diversity in AI training data to avoid perpetuating biases.</li>
      </ul>
      
      <p>The integration of AI into design tools represents not an endpoint but a new beginning—a fundamental shift in how we approach creative problem-solving. By embracing these tools as partners rather than replacements, designers can unlock unprecedented levels of creativity and efficiency.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1170&auto=format&fit=crop',
    category: 'Technology',
    publishedAt: 'March 18, 2023',
    readTime: '7 min read',
    author: {
      name: 'David Kumar',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop'
    }
  },
  {
    id: '4',
    title: 'Accessibility First: Designing Inclusive Web Experiences',
    excerpt: 'Why prioritizing accessibility is not just the right thing to do but also leads to better experiences for all users.',
    coverImage: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1074&auto=format&fit=crop',
    category: 'Accessibility',
    publishedAt: 'February 5, 2023',
    readTime: '5 min read',
    author: {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop'
    }
  },
  {
    id: '5',
    title: 'The Future of Web Animation: Beyond CSS Transitions',
    excerpt: "Exploring advanced animation techniques that push the boundaries of what's possible on the web.",
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1170&auto=format&fit=crop',
    category: 'Animation',
    publishedAt: 'January 19, 2023',
    readTime: '6 min read',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop'
    }
  },
  {
    id: '6',
    title: 'TypeScript Best Practices for Large Scale Applications',
    excerpt: 'Strategies and patterns for maintaining scalable TypeScript codebases as your project grows.',
    coverImage: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=1074&auto=format&fit=crop',
    category: 'Development',
    publishedAt: 'December 10, 2022',
    readTime: '9 min read',
    author: {
      name: 'James Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1587&auto=format&fit=crop'
    }
  }
];

export const categories = [
  { name: 'Design', count: 12 },
  { name: 'Development', count: 24 },
  { name: 'Technology', count: 18 },
  { name: 'Accessibility', count: 8 },
  { name: 'Animation', count: 10 },
  { name: 'UX', count: 15 },
  { name: 'Performance', count: 9 },
];

export const popularTags = [
  'React', 'TypeScript', 'CSS', 'Design Systems', 'UI/UX', 
  'Performance', 'Animation', 'Accessibility', 'JavaScript',
  'Frontend', 'Web Development', 'Mobile', 'Responsive'
];
