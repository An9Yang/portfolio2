import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { X } from 'lucide-react';
import { blogData } from '@/lib/blog-data';
import { usePinnedTitle } from '@/hooks/usePinnedTitle';
import { SiteFooter } from '@/components/site-footer';

type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/#projects" },
  { label: "Services", to: "/#services" },
  { label: "About us", to: "/#about" },
  { label: "Blog", to: "/#blog" },
  { label: "Contact", to: "/contact" },
];

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [menuOpen, setMenuOpen] = useState(false);
  const contentPinned = usePinnedTitle(10);

  const post = id ? blogData[id] : null;

  // Scroll to top when blog ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderMenuContent = (variant: "desktop" | "mobile") => {
    const isMobile = variant === "mobile";

    return (
      <div
        className={`h-full flex flex-col justify-between ${
          isMobile ? "p-8 md:p-16" : "p-12 md:p-16"
        }`}
      >
        <nav className={`${isMobile ? "space-y-4 pt-16" : "space-y-6 pt-8"}`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                isMobile ? "text-[2.5rem]" : "text-[3rem] md:text-[4rem]"
              } font-normal text-black leading-tight hover:opacity-60 transition-opacity`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className={
            isMobile
              ? "space-y-4 mt-12 border-t border-black/10 pt-6"
              : "border-t border-black/10 pt-8 space-y-6"
          }
        >
          <div className={isMobile ? "space-y-4" : "grid grid-cols-2 gap-8"}>
            <div>
              <p className="text-black text-sm md:text-base font-normal">
                +001 313 759 968 345
              </p>
            </div>
            <div>
              <p className="text-black text-sm md:text-base font-normal">
                12273 Dream Avenue,
              </p>
              <p className="text-black text-sm md:text-base font-normal">
                New York, United State
              </p>
            </div>
          </div>
          <div>
            <p className="text-black text-sm md:text-base font-normal">
              martinrobart@gmail.com
            </p>
          </div>
        </div>
      </div>
    );
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Blog Post Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm">
        <div className="section-wrap flex items-center justify-between py-6 md:py-8">
          <Link to="/" className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold tracking-tight text-black">Martin.R</h1>
            <span className="text-sm text-black/60 font-light">@2025</span>
          </Link>

          {/* Desktop Menu */}
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
              {renderMenuContent("desktop")}
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Mobile Menu */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden absolute top-6 right-6 z-30 p-2">
            <div className="w-5 h-0.5 bg-black mb-1"></div>
            <div className="w-5 h-0.5 bg-black mb-1"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-white p-0 border-none">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 z-50 p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-black" />
          </button>
          {renderMenuContent("mobile")}
        </SheetContent>
      </Sheet>

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 bg-paper">
        <div className="section-wrap">
          <div className="max-w-[880px]">
            {/* Category & Meta */}
            <div className="flex items-center gap-6 text-sm text-black/60 mb-8">
              <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium uppercase tracking-wider">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 2v4M17 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" strokeWidth="1.4"/>
                </svg>
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.4"/>
                  <path d="M12 6v6l4 2" strokeWidth="1.4"/>
                </svg>
                {post.readMin} minute read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.1] tracking-tight text-black mb-8">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 mb-12">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="text-sm font-medium text-black">{post.author.name}</div>
                <div className="text-xs text-black/60">{post.author.role}</div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="card-image ratio-16x9 img-hover-scale">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="section-wrap">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left - Article Meta */}
            <div ref={contentPinned.containerRef} className="sticky-col">
              <div ref={contentPinned.titleRef} style={contentPinned.style} className="eyebrow">
                I ARTICLE
              </div>
            </div>

            {/* Right - Content */}
            <div className="content-col">
              <div className="max-w-[68ch]">
                {/* Introduction */}
                <p className="text-xl md:text-2xl font-normal leading-[1.6] text-black/80 mb-16">
                  {post.content.intro}
                </p>

                {/* Content Sections */}
                {post.content.sections.map((section, index) => (
                  <div key={index} className="mb-16">
                    {section.heading && (
                      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
                        {section.heading}
                      </h2>
                    )}
                    <div className="space-y-6">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-base md:text-lg leading-[1.8] text-black/75">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.image && (
                      <div className="card-image ratio-16x9 img-hover-scale mt-8">
                        <img
                          src={section.image}
                          alt={section.heading || 'Content image'}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative bg-paper py-16 md:py-24">
        <div className="section-wrap">
          <h2 className="text-sm font-medium tracking-widest text-black mb-12">
            I RELATED ARTICLES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-[920px]">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="block group"
              >
                <div className="card-image ratio-4x3 img-hover-scale mb-3">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[12px] text-black/60 flex items-center gap-4 mb-1">
                  <span className="inline-flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 2v4M17 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" strokeWidth="1.4"/>
                    </svg>
                    {relatedPost.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="1.4"/>
                      <path d="M12 6v6l4 2" strokeWidth="1.4"/>
                    </svg>
                    {relatedPost.readMin} minute read
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold leading-snug max-w-[30ch] text-black group-hover:opacity-70 transition-opacity">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white py-12">
        <div className="section-wrap">
          <SiteFooter navLinks={navItems.map((item) => ({ label: item.label, href: item.to }))} />
        </div>
      </footer>
    </div>
  );
}
