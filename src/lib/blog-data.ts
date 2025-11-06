export type BlogPost = {
  id: string;
  title: string;
  date: string;
  readMin: number;
  image: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: {
    intro: string;
    sections: Array<{
      heading?: string;
      paragraphs: string[];
      image?: string;
    }>;
  };
  relatedPosts: Array<{
    id: string;
    title: string;
    image: string;
    date: string;
    readMin: number;
  }>;
};

export const blogData: Record<string, BlogPost> = {
  'design-principles': {
    id: 'design-principles',
    title: '5 design principles that elevate your projects',
    date: 'June 18, 2025',
    readMin: 10,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    category: 'Design',
    author: {
      name: 'Martin Robart',
      role: 'Digital Designer',
      avatar: 'https://static.step1.dev/4cfd7d4f5bcb49913cb3b89b805a76f9'
    },
    content: {
      intro: 'Design principles are the foundation of creating meaningful and effective digital experiences. These five core principles have guided my work for over a decade, helping transform complex ideas into elegant solutions.',
      sections: [
        {
          heading: '1. Simplicity is Sophistication',
          paragraphs: [
            'The best designs often appear effortless. By removing unnecessary elements and focusing on what truly matters, we create interfaces that users can navigate intuitively. Every element should serve a purpose.',
            'Simplicity doesn\'t mean boring or minimal for the sake of it. It means thoughtful reduction—keeping only what adds value to the user experience while maintaining visual interest through typography, spacing, and subtle details.'
          ],
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80'
        },
        {
          heading: '2. Hierarchy Creates Clarity',
          paragraphs: [
            'Visual hierarchy guides users through content in a natural flow. Through size, weight, color, and positioning, we can direct attention and make information easily scannable.',
            'A strong typographic scale combined with intentional spacing creates rhythm and makes even dense content feel approachable. Users should never feel lost or overwhelmed.'
          ]
        },
        {
          heading: '3. Consistency Builds Trust',
          paragraphs: [
            'Consistent patterns across an interface reduce cognitive load. When buttons, inputs, and interactions behave predictably, users can focus on their goals rather than learning the interface.',
            'This extends beyond visual consistency to interaction patterns, messaging tone, and even animation timing. A cohesive system feels polished and professional.'
          ],
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80'
        },
        {
          heading: '4. White Space is a Design Element',
          paragraphs: [
            'Empty space isn\'t wasted space—it\'s an active design element that provides breathing room and emphasis. Proper spacing can make the difference between a cramped interface and an elegant one.',
            'Strategic use of white space draws attention to important elements, improves readability, and creates a sense of luxury and sophistication.'
          ]
        },
        {
          heading: '5. Design for Real People',
          paragraphs: [
            'Beautiful design means nothing if it doesn\'t work for actual users. Accessibility, performance, and usability should be considered from day one, not added as an afterthought.',
            'Testing with real users, considering edge cases, and designing for different contexts ensures your work has lasting impact. Great design solves real problems elegantly.'
          ]
        }
      ]
    },
    relatedPosts: [
      {
        id: 'challenging-project',
        title: 'Lessons learned from my most challenging project',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
        date: 'June 18, 2025',
        readMin: 2
      },
      {
        id: 'storytelling',
        title: 'How storytelling enhances your design and branding',
        image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80',
        date: 'June 18, 2025',
        readMin: 8
      }
    ]
  },
  'challenging-project': {
    id: 'challenging-project',
    title: 'Lessons learned from my most challenging project',
    date: 'June 18, 2025',
    readMin: 2,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
    category: 'Experience',
    author: {
      name: 'Martin Robart',
      role: 'Digital Designer',
      avatar: 'https://static.step1.dev/4cfd7d4f5bcb49913cb3b89b805a76f9'
    },
    content: {
      intro: 'Every designer faces projects that push them beyond their comfort zone. This is the story of one such project and the invaluable lessons it taught me about resilience, communication, and growth.',
      sections: [
        {
          heading: 'The Challenge',
          paragraphs: [
            'The project seemed straightforward at first: redesign a complex enterprise platform used by thousands of employees daily. However, as we dove deeper, we uncovered layers of technical debt, conflicting stakeholder requirements, and tight deadlines.',
            'What made it particularly challenging was balancing the needs of power users who relied on advanced features with the desire to make the platform more accessible to new employees.'
          ]
        },
        {
          heading: 'What I Learned',
          paragraphs: [
            'Communication is everything. Regular check-ins with stakeholders, transparent discussion of constraints, and managing expectations early saved us from major conflicts later.',
            'Sometimes the best solution isn\'t the most elegant one—it\'s the one that actually ships. Knowing when to compromise on perfection for the sake of progress is a crucial skill.',
            'User research cannot be skipped. Our assumptions were wrong in several areas, and only by testing with real users did we discover the path forward.'
          ],
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80'
        }
      ]
    },
    relatedPosts: [
      {
        id: 'design-principles',
        title: '5 design principles that elevate your projects',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
        date: 'June 18, 2025',
        readMin: 10
      },
      {
        id: 'essential-tools',
        title: 'Essential tools every creative professional should use',
        image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1400&q=80',
        date: 'June 18, 2025',
        readMin: 5
      }
    ]
  },
  'storytelling': {
    id: 'storytelling',
    title: 'How storytelling enhances your design and branding',
    date: 'June 18, 2025',
    readMin: 8,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80',
    category: 'Branding',
    author: {
      name: 'Martin Robart',
      role: 'Digital Designer',
      avatar: 'https://static.step1.dev/4cfd7d4f5bcb49913cb3b89b805a76f9'
    },
    content: {
      intro: 'Every brand has a story to tell. The most successful brands don\'t just sell products or services—they create narratives that resonate with their audience on an emotional level.',
      sections: [
        {
          heading: 'Why Story Matters',
          paragraphs: [
            'In a crowded marketplace, facts and features aren\'t enough to stand out. Stories create emotional connections, making your brand memorable and relatable. People remember how you made them feel long after they\'ve forgotten your specifications.',
            'A compelling brand narrative gives customers a reason to choose you over competitors. It transforms transactions into relationships and customers into advocates.'
          ],
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80'
        },
        {
          heading: 'Applying Storytelling to Design',
          paragraphs: [
            'Visual storytelling uses imagery, typography, and layout to guide users through a narrative journey. Each screen or section should feel like a chapter that flows naturally into the next.',
            'Consider your user\'s journey: What do they need to know? How do they feel? What action should they take next? Design each touchpoint to advance this story.',
            'Even micro-interactions can tell a story. A loading animation, a hover effect, or a transition can communicate your brand\'s personality and values.'
          ]
        },
        {
          heading: 'Making It Authentic',
          paragraphs: [
            'The best brand stories are authentic. Don\'t fabricate a narrative that doesn\'t align with your actual values and mission. Users can sense inauthenticity, and it erodes trust.',
            'Start with your "why"—the genuine reason your brand exists beyond making money. Build your visual identity and messaging around this core truth.'
          ]
        }
      ]
    },
    relatedPosts: [
      {
        id: 'design-principles',
        title: '5 design principles that elevate your projects',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
        date: 'June 18, 2025',
        readMin: 10
      },
      {
        id: 'challenging-project',
        title: 'Lessons learned from my most challenging project',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
        date: 'June 18, 2025',
        readMin: 2
      }
    ]
  },
  'essential-tools': {
    id: 'essential-tools',
    title: 'Essential tools every creative professional should use',
    date: 'June 18, 2025',
    readMin: 5,
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1400&q=80',
    category: 'Tools',
    author: {
      name: 'Martin Robart',
      role: 'Digital Designer',
      avatar: 'https://static.step1.dev/4cfd7d4f5bcb49913cb3b89b805a76f9'
    },
    content: {
      intro: 'The right tools can dramatically improve your creative workflow. Here are the essential tools I use daily to design, develop, and deliver exceptional digital experiences.',
      sections: [
        {
          heading: 'Design Tools',
          paragraphs: [
            'Figma has become my primary design tool for its collaborative features and robust prototyping capabilities. The ability to work with developers and stakeholders in real-time has transformed our workflow.',
            'For more complex interactions and animations, I turn to Principle or ProtoPie. These tools bridge the gap between static designs and functional prototypes.'
          ]
        },
        {
          heading: 'Development Tools',
          paragraphs: [
            'VS Code remains the gold standard for code editing. With the right extensions, it becomes a powerful environment for everything from React development to CSS refinement.',
            'For version control and collaboration, GitHub is indispensable. Beyond just code storage, GitHub Actions have streamlined our deployment pipeline.'
          ],
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80'
        },
        {
          heading: 'Productivity & Organization',
          paragraphs: [
            'Notion serves as my second brain, organizing everything from project documentation to personal notes. Its flexibility allows me to create custom workflows that adapt to different project needs.',
            'Linear has revolutionized how I manage tasks and issues. Its keyboard-first design and clean interface make project management feel effortless rather than burdensome.'
          ]
        },
        {
          heading: 'Communication',
          paragraphs: [
            'Clear communication is as important as the work itself. Loom for async video updates, Slack for quick coordination, and Calendly for scheduling have all reduced friction in client relationships.',
            'The key is choosing tools that enhance rather than complicate your workflow. Start with the basics and add tools only when they solve a real problem.'
          ]
        }
      ]
    },
    relatedPosts: [
      {
        id: 'design-principles',
        title: '5 design principles that elevate your projects',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
        date: 'June 18, 2025',
        readMin: 10
      },
      {
        id: 'storytelling',
        title: 'How storytelling enhances your design and branding',
        image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80',
        date: 'June 18, 2025',
        readMin: 8
      }
    ]
  }
};

export const blogList = Object.values(blogData);
