import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { X } from 'lucide-react';
import { FooterSection } from '@/components/footer-section';

// Project data - in real app this would come from API/database
const projectsData: Record<string, any> = {
  'boldstream': {
    title: 'CoreVision',
    heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
    services: 'Website Design',
    industry: 'Software',
    year: '2025',
    website: 'www.boldstream.com',
    overview: {
      text: 'Discharge of stitching even the fully which be to not rome; Alone, the of go. Of years, mental as shown down stiff copy of he countries are emphasis called attribute head because of understand sight as it long labour, would anyone paint, approach thoroughly, to example',
      secondText: 'Period, to his millions she to the vices the of you bread at he satisfaction dressing irregular harmonic years human my lie looked from aged was by which plot however up that while person, week the star different fur I to for it whose aside, right his honour; Have arduous would films so at power decisions, a and each dense, the it secure dissolute you a elucidates gradually and the then, and employed hand. Was a seemed for far only an links by checks, writer of, even that a peacefully absolutely was abandon gradually it his into to be that.',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80'
    },
    scopeOfWork: {
      intro: 'Outline the services provided, such as strategy, design, development, branding, or marketing Example:',
      items: [
        {
          title: 'Website design and development:',
          description: 'Firstly, you might ask what is Hubstaff? Well, Hubstaff is like your all-in-one timekeeping wizard, designed to bring order to the chaos.'
        },
        {
          title: 'E-commerce integration:',
          description: 'The classes and uneasiness, his ticking service, what something it bear extended had sooner sort.'
        }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80'
    },
    relatedProjects: [
      {
        id: 'innovatex',
        title: 'InnovateX',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
        tags: ['Web design', 'Motion', 'Development']
      },
      {
        id: 'aether-chair',
        title: 'Aether Chair',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80',
        tags: ['Product', '3D', 'Exploration']
      }
    ]
  },
  'innovatex': {
    title: 'InnovateX',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    services: 'Web Design',
    industry: 'Tech',
    year: '2024',
    website: 'www.innovatex.com',
    overview: {
      text: 'InnovateX represents the cutting edge of modern web design, combining innovative UI patterns with seamless user experiences. This project pushed the boundaries of what\'s possible with web technologies.',
      secondText: 'Through careful attention to detail and a focus on performance, we created a digital experience that not only looks beautiful but performs exceptionally well across all devices and platforms.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80'
    },
    scopeOfWork: {
      intro: 'Comprehensive design and development services:',
      items: [
        {
          title: 'UI/UX Design:',
          description: 'Created a modern, intuitive interface that guides users effortlessly through complex workflows.'
        },
        {
          title: 'Motion Design:',
          description: 'Implemented sophisticated animations and micro-interactions that enhance the user experience.'
        }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80'
    },
    relatedProjects: [
      {
        id: 'boldstream',
        title: 'CoreVision',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
        tags: ['Marketing', 'Web design', 'Development']
      },
      {
        id: 'aether-chair',
        title: 'Aether Chair',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80',
        tags: ['Product', '3D', 'Exploration']
      }
    ]
  },
  'aether-chair': {
    title: 'Aether Chair',
    heroImage: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80',
    services: 'Product Design',
    industry: 'Furniture',
    year: '2024',
    website: 'www.aetherchair.com',
    overview: {
      text: 'Aether Chair is a stunning example of modern furniture design meeting digital visualization. This project showcases our ability to create photorealistic 3D renders and immersive product experiences.',
      secondText: 'By combining traditional design principles with cutting-edge 3D technology, we created a product presentation that elevates the viewing experience and helps customers visualize the product in their space.',
      image: 'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1600&q=80'
    },
    scopeOfWork: {
      intro: '3D visualization and product design services:',
      items: [
        {
          title: '3D Modeling & Rendering:',
          description: 'Created photorealistic 3D models and renders that showcase every detail of the product design.'
        },
        {
          title: 'Interactive Exploration:',
          description: 'Developed an interactive 3D viewer allowing customers to explore the product from every angle.'
        }
      ],
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80'
    },
    relatedProjects: [
      {
        id: 'boldstream',
        title: 'CoreVision',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
        tags: ['Marketing', 'Web design', 'Development']
      },
      {
        id: 'innovatex',
        title: 'InnovateX',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
        tags: ['Web design', 'Motion', 'Development']
      }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [menuOpen, setMenuOpen] = useState(false);

  const project = id ? projectsData[id] : null;

  // Scroll to top when project ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const navItems = [
    { label: 'Home', to: '/#home' },
    { label: 'Projects', to: '/#projects' },
    { label: 'Services', to: '/#services' },
    { label: 'About us', to: '/#about' },
    { label: 'Blog', to: '/#blog' },
    { label: 'Contact', to: '/#contact' },
  ];

  const renderMenuContent = (variant: 'desktop' | 'mobile') => (
    <div className={`h-full flex flex-col justify-between ${variant === 'mobile' ? 'p-8 md:p-16' : 'p-12 md:p-16'}`}>
      <nav className={`${variant === 'mobile' ? 'space-y-4 pt-16' : 'space-y-6 pt-8'}`}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`block ${variant === 'mobile' ? 'text-[2.5rem]' : 'text-[3rem] md:text-[4rem]'} font-normal text-black leading-tight hover:opacity-60 transition-opacity`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className={`${variant === 'mobile' ? 'space-y-4 mt-12 border-t border-black/10 pt-6' : 'border-t border-black/10 pt-8 space-y-6'}`}>
        <div className={`${variant === 'mobile' ? 'space-y-4' : 'grid grid-cols-2 gap-8'}`}>
          <div>
            <p className="text-black text-sm md:text-base font-normal">+001 313 759 968 345</p>
          </div>
          <div>
            <p className="text-black text-sm md:text-base font-normal">12273 Dream Avenue,</p>
            <p className="text-black text-sm md:text-base font-normal">New York, United State</p>
          </div>
        </div>
        <div>
          <p className="text-black text-sm md:text-base font-normal">martinrobart@gmail.com</p>
        </div>
      </div>
    </div>
  );

  if (!project) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Project Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="section-wrap flex items-center justify-between py-6 md:py-8">
          <Link to="/" className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold tracking-tight text-black">Martin.R</h1>
            <span className="text-sm text-black/60 font-light">@2025</span>
          </Link>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="hidden md:block text-right group">
                <div className="space-y-2">
                  <div className="text-sm font-medium tracking-wide text-black">Menu</div>
                  <div className="space-y-1 text-xs text-black/70 font-light">
                    <div className="tracking-wide">Brand Design</div>
                    <div className="tracking-wide">Web Development</div>
                    <div className="tracking-wide">Motion Design</div>
                    <div className="tracking-wide">Digital Marketing</div>
                  </div>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full md:w-[500px] bg-white p-0 border-none">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 z-50 p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-black" />
              </button>
              {renderMenuContent('desktop')}
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden absolute top-6 right-6 z-30 p-2">
            <div className="w-5 h-0.5 bg-black mb-1" />
            <div className="w-5 h-0.5 bg-black mb-1" />
            <div className="w-5 h-0.5 bg-black" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-white p-0 border-none">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 z-50 p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-black" />
          </button>
          {renderMenuContent('mobile')}
        </SheetContent>
      </Sheet>

      <section className="relative pt-[160px] pb-16 md:pb-24">
        <div className="section-wrap">
          <h1 className="text-[clamp(4.5rem,11vw,10.5rem)] font-black leading-[0.82] tracking-tight text-black">
            {project.title}
          </h1>
          <div className="card-image ratio-16x9 img-hover-scale mt-12">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-wrap pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-y-10 gap-x-16 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Services:', value: project.services },
              { label: 'Industry:', value: project.industry },
              { label: 'Year:', value: project.year },
              { label: 'Live Website:', value: project.website },
            ].map((item) => (
              <div key={item.label} className="space-y-3 border-b border-black/10 pb-6">
                <div className="text-sm md:text-[0.95rem] tracking-[0.08em] uppercase text-black/50">
                  {item.label}
                </div>
                <div className="text-[1.75rem] md:text-[2.1rem] font-medium text-black leading-tight tracking-tight">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            <div className="sticky-col">
              <span className="eyebrow text-black/70">I PROJECT OVERVIEW</span>
            </div>
            <div className="content-col">
              <h2 className="text-[clamp(2.8rem,5.4vw,4.2rem)] font-bold leading-tight text-black mb-8">
                Project Overview
              </h2>
              <div className="max-w-[64ch] space-y-6 text-lg leading-[1.9] text-black/70">
                <p>{project.overview.text}</p>
                <p>{project.overview.secondText}</p>
              </div>
              <div className="card-image ratio-16x9 img-hover-scale mt-12">
                <img
                  src={project.overview.image}
                  alt="Project detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            <div className="sticky-col">
              <span className="eyebrow text-black/70">I SCOPE OF WORK</span>
            </div>
            <div className="content-col">
              <h2 className="text-[clamp(2.8rem,5.4vw,4.2rem)] font-bold leading-tight text-black mb-8">
                Scope of Work
              </h2>
              <p className="max-w-[64ch] text-lg leading-[1.9] text-black/70">
                {project.scopeOfWork.intro}
              </p>
              <ul className="mt-10 space-y-6 text-lg leading-[1.85] text-black/75">
                {project.scopeOfWork.items.map((item: any, index: number) => (
                  <li key={index}>
                    <span className="font-semibold text-black">{item.title}</span> {item.description}
                  </li>
                ))}
              </ul>
              <div className="card-image ratio-16x9 img-hover-scale mt-12">
                <img
                  src={project.scopeOfWork.image}
                  alt="Scope of work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            <div className="sticky-col">
              <span className="eyebrow text-black/70">I RELATED PROJECTS</span>
            </div>
            <div className="content-col">
              <div className="max-w-[920px] space-y-16">
                {project.relatedProjects.map((relatedProject: any) => (
                  <Link key={relatedProject.id} to={`/projects/${relatedProject.id}`} className="block group">
                    <div className="card-image ratio-16x9 img-hover-scale">
                      {relatedProject.image ? (
                        <img
                          src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg
                          width="56"
                          height="56"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="text-black/15"
                        >
                          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
                          <circle cx="8" cy="10" r="2" strokeWidth="1.5" />
                          <path d="M21 17l-5.5-5.5a1 1 0 0 0-1.4 0L7 18" strokeWidth="1.5" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-base md:text-lg font-medium text-black group-hover:opacity-70 transition-opacity">
                      {relatedProject.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {relatedProject.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs text-black/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection navLinks={navItems.map((item) => ({ label: item.label, href: item.to }))} />
    </div>
  );
}
