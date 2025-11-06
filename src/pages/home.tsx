/**
 * Martin.R Portfolio - Main Home Page
 * 
 * This component recreates the sophisticated personal portfolio design
 * with precise typography, spatial relationships, and visual hierarchy.
 * The layout features:
 * - Left: Hero text section with name and introduction
 * - Center: Portrait upload area (supports transparent PNG images)
 * - Right: Location and role information  
 * - Bottom: Large "Digital Designer" title
 * 
 * Key design elements:
 * - Multiple font sizes creating visual impact
 * - Warm brown background (#A0845C approximately) 
 * - White text for high contrast
 * - Precise positioning and spacing
 * - Clean, minimal navigation
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePinnedTitle } from "@/hooks/usePinnedTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { X } from "lucide-react";
import { FooterSection } from "@/components/footer-section";
import { projectList } from "@/lib/projects-data";

type NavItem = {
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/#services" },
  { label: "About us", to: "/#about" },
  { label: "Blog", to: "/#blog" },
  { label: "Contact", to: "/#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutPinned = usePinnedTitle(10);
  const projectsPinned = usePinnedTitle(10);
  const servicesPinned = usePinnedTitle(10);
  const clientsPinned = usePinnedTitle(10);
  const reviewsPinned = usePinnedTitle(10);
  const faqPinned = usePinnedTitle(10);
  const blogPinned = usePinnedTitle(10);

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

  const projects = projectList;

  const services: Array<{ icon: React.ReactNode; title: string; desc: string }> = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-black">
          <circle cx="7" cy="7" r="2" />
          <circle cx="17" cy="7" r="2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      title: 'Brand Design',
      desc:
        'Crafting visually stunning, user-centered websites tailored to your brand and business goals.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black">
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeWidth="1.6" />
          <path d="M7 8h10" strokeWidth="1.6" />
          <path d="M7 12h6" strokeWidth="1.6" />
        </svg>
      ),
      title: 'Web Development',
      desc:
        'Robust front-end engineering with clean architecture, performance and accessibility in mind.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black">
          <path d="M4 14v6h4V14H4zM10 10v10h4V10h-4zM16 6v14h4V6h-4z" strokeWidth="1.6" />
        </svg>
      ),
      title: 'Motion Design',
      desc:
        'Narrative motion systems and micro-interactions that elevate product personality.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black">
          <path d="M4 12l4 4 12-12" strokeWidth="1.8" />
        </svg>
      ),
      title: 'Digital Marketing',
      desc:
        'Campaigns and content that connect brand voice with measurable growth.',
    },
  ];

  const clients: Array<{ idx: string; company: string; industry: string; year: string }> = [
    { idx: '01', company: 'NestFlow', industry: 'Finance', year: '2025' },
    { idx: '02', company: 'Eleganza', industry: 'Real Estate', year: '2025' },
    { idx: '03', company: 'ZestyBite', industry: 'SaaS', year: '2024' },
    { idx: '04', company: 'VitalFit', industry: 'Health & Wellness', year: '2023' },
    { idx: '05', company: 'CozyNest', industry: 'Education', year: '2022' },
    { idx: '06', company: 'Energetix', industry: 'Food & Beverage', year: '2021' },
    { idx: '07', company: 'DigiMinds', industry: 'E-commerce', year: '2020' },
    { idx: '08', company: 'UrbanEdge', industry: 'Tech', year: '2019' },
  ];

  const reviews: Array<{
    title: string;
    quote: string;
    person: string;
    role: string;
    avatar: string;
    image: string;
  }> = [
    {
      title: 'A strategic partner for our business growth',
      quote:
        "Martin's creativity and attention to detail are unmatched. He turned our vision into a reality, delivering a project that exceeded all expectations.",
      person: 'Faye Paucek',
      role: 'Configuration Representative',
      avatar: 'https://i.pravatar.cc/80?img=12',
      image: 'https://images.unsplash.com/photo-1613553513307-9ff3b1f20731?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Elevated Our Brand Beyond Expectations',
      quote:
        'Working alongside Martin has been an inspiring experience. His ability to problem-solve and innovate under tight deadlines is truly remarkable.',
      person: 'Shelly Larkin',
      role: 'Marketing Executive',
      avatar: 'https://i.pravatar.cc/80?img=32',
      image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Professional, Creative, and Results-Driven',
      quote:
        "Martin's expertise in web design is second to none. His work consistently sets a new standard for excellence in the field.",
      person: 'Clyde Vandervort',
      role: 'Optimization Executive',
      avatar: 'https://i.pravatar.cc/80?img=57',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Beyond Just Design—A Complete Experience',
      quote:
        'Martin helped us launch our startup with clarity and speed. Blending technical expertise with creative thinking gave us an edge in a competitive market.',
      person: 'Cory Satterfield',
      role: 'Program Director',
      avatar: 'https://i.pravatar.cc/80?img=5',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'What information do you need to get started?',
      a: 'A short brief, goals, brand assets (logo, colors, fonts), timelines, and any references you love. We will clarify scope and deliverables together.',
    },
    {
      q: 'What do you charge for your services?',
      a: 'Pricing depends on scope and complexity. I provide a clear proposal with phases and milestones after a quick discovery call.',
    },
    {
      q: 'Can you work within our brand guidelines?',
      a: 'Absolutely. I adapt to existing systems while proposing thoughtful improvements that strengthen consistency and usability.',
    },
    {
      q: 'Do you offer ongoing support after project completion?',
      a: 'Yes, I can provide maintenance retainers and iteration sprints to keep the product evolving after launch.',
    },
    {
      q: 'How do we get started?',
      a: 'Send a short intro and your ideal timeline. We schedule a call, align on scope, and kick off with a structured plan.',
    },
  ];

  const blogPosts: Array<{
    title: string;
    date: string;
    readMin: number;
    image: string;
  }> = [
    {
      title: '5 design principles that elevate your projects',
      date: 'June 18, 2025',
      readMin: 10,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Lessons learned from my most challenging project',
      date: 'June 18, 2025',
      readMin: 2,
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'How storytelling enhances your design and branding',
      date: 'June 18, 2025',
      readMin: 8,
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Essential tools every creative professional should use',
      date: 'June 18, 2025',
      readMin: 5,
      image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1400&q=80',
    },
  ];

  // portrait is static now; upload removed

  const DEFAULT_PORTRAIT = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" fill="white"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="white"/></svg>';

  return (
    <div id="home" className="min-h-screen bg-warm-brown text-white font-sans relative overflow-hidden">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold tracking-tight">Martin.R</h1>
            <span className="text-sm text-white/70 font-light">@2025</span>
          </div>
          
          {/* Menu Button - Desktop */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="hidden md:block text-right group">
                <div className="space-y-2">
                  <div className="text-sm font-medium tracking-wide">Menu</div>
                  <div className="space-y-1 text-xs text-white/90 font-light">
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

      {/* Main Content */}
      <main className="relative min-h-screen flex items-center">
        {/* Left Section - Hero Text */}
        <div className="absolute left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-10 md:z-10">
          <div className="space-y-1 md:space-y-2">
            <div className="text-intro opacity-90">Hey there, I'm</div>
            <h2 className="text-hero-xl leading-none">
              <div>Martin</div>
              <div>Robart</div>
            </h2>
          </div>
        </div>

        {/* Center Section - Portrait Area (No Container) */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="relative portrait-container flex items-center justify-center">
            {/* Portrait Image - Static, non-interactive */}
            <img
              src="https://static.step1.dev/4cfd7d4f5bcb49913cb3b89b805a76f9"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = DEFAULT_PORTRAIT; }}
              alt="Portrait"
              className="max-w-full max-h-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)]"
              style={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', width: 'auto' }}
            />
          </div>
        </div>

        {/* Right Section - Info */}
        <div className="absolute right-6 md:right-12 lg:right-16 top-1/2 -translate-y-8 z-10 hidden md:block">
          <div className="text-right space-y-16">
            {/* Location */}
            <div className="space-y-1">
              <div className="text-base font-medium tracking-tight border-l-2 border-white/30 pl-4">Based in NYC</div>
              <div className="text-sm text-white/80 font-light pl-4">United State</div>
            </div>
            
            {/* Role */}
            <div className="space-y-1">
              <div className="text-base font-medium tracking-tight border-l-2 border-white/30 pl-4">Art director and</div>
              <div className="text-base font-medium tracking-tight pl-4">No-code Developer</div>
            </div>
          </div>
        </div>

        {/* Mobile Info Section */}
        <div className="md:hidden absolute bottom-32 left-6 right-6 z-10">
          <div className="text-center space-y-6">
            {/* Location */}
            <div className="space-y-0.5">
              <div className="text-base font-medium tracking-tight">Based in NYC, United State</div>
            </div>
            
            {/* Role */}
            <div className="space-y-0.5">
              <div className="text-base font-medium tracking-tight">Art director and No-code Developer</div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Large Title */}
        <div className="absolute bottom-12 md:bottom-16 left-6 md:left-12 lg:left-16 right-6 md:right-12 lg:right-16">
          <h3 className="text-hero-lg font-black tracking-tight text-center md:text-left opacity-95">
            Digital Designer
          </h3>
        </div>
      </main>

      {/* Decorative Element - Bottom Right */}
      <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
      </div>

      {/* Mobile Menu Button */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden absolute top-6 right-6 z-30 p-2">
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white mb-1"></div>
            <div className="w-5 h-0.5 bg-white"></div>
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

      {/* About Me Section */}
      <section id="about" className="relative bg-paper min-h-[120vh] md:min-h-[110vh]">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left - Section Title (JS Pinned) */}
            <div ref={aboutPinned.containerRef} className="sticky-col">
              <div ref={aboutPinned.titleRef} style={aboutPinned.style} className="eyebrow">
                I ABOUT ME
              </div>
            </div>

            {/* Right - Content */}
            <div className="content-col">
              {/* Description */}
              <p className="text-[1.6rem] md:text-[1.9rem] lg:text-[2.1rem] font-normal leading-[1.35] tracking-[-0.01em] text-black mb-12 lg:mb-16 max-w-[54ch]">
                A passionate designer, developer, and problem-solver dedicated to crafting meaningful digital experiences. With 10 years of experience in the creative industry, I specialize in blending aesthetics with functionality to create designs that are not only visually stunning but also user-friendly and impactful.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-x-12 lg:gap-x-16 max-w-[720px]">
                <div>
                  <div className="text-5xl lg:text-6xl font-semibold mb-1.5 leading-none text-black">09+</div>
                  <div className="text-[13px] text-black/70 font-normal leading-snug">Years of experience</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-semibold mb-1.5 leading-none text-black">40+</div>
                  <div className="text-[13px] text-black/70 font-normal leading-snug">Satisfied clients</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-semibold mb-1.5 leading-none text-black">80+</div>
                  <div className="text-[13px] text-black/70 font-normal leading-snug">Projects delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section id="projects" className="relative bg-paper text-black">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left - Section Title (JS Pinned) */}
            <div ref={projectsPinned.containerRef} className="sticky-col">
              <div ref={projectsPinned.titleRef} style={projectsPinned.style} className="eyebrow">
                I SELECTED PROJECTS
              </div>
            </div>

            {/* Right - Content */}
            <div className="content-col">
              <div className="max-w-[920px] space-y-16">
                {projects.map((p, idx) => (
                  <Link key={idx} to={`/projects/${p.id}`} className="block group">
                    {/* Image or Placeholder */}
                    <div className="card-image ratio-16x9 img-hover-scale">
                      {p.image ? (
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {/* 简洁的占位图标 */}
                          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/15">
                            <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
                            <circle cx="8" cy="10" r="2" strokeWidth="1.5" />
                            <path d="M21 17l-5.5-5.5a1 1 0 0 0-1.4 0L7 18" strokeWidth="1.5" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Meta row: title left, tags right */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-base md:text-lg font-medium text-black group-hover:opacity-70 transition-opacity">{p.title}</div>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs text-black/70">
                            {t}
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

      {/* Explore Services Section */}
      <section id="services" className="relative bg-paper">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left title */}
            <div ref={servicesPinned.containerRef} className="sticky-col">
              <div ref={servicesPinned.titleRef} style={servicesPinned.style} className="eyebrow">
                I EXPLORE SERVICES
              </div>
            </div>

            {/* Right grid */}
            <div className="content-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.map((s, i) => (
                  <div key={i} className="pb-8 border-b border-black/10">
                    <div className="mb-3">{s.icon}</div>
                    <div className="text-lg md:text-xl font-semibold text-black mb-2">{s.title}</div>
                    <p className="text-sm text-black/70 leading-relaxed max-w-[48ch]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Clients Section */}
      <section className="relative bg-paper">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left title */}
            <div ref={clientsPinned.containerRef} className="sticky-col">
              <div ref={clientsPinned.titleRef} style={clientsPinned.style} className="eyebrow">
                I LATEST CLIENTS
              </div>
            </div>

            {/* Right table */}
            <div className="content-col">
              <div className="max-w-[920px]">
                {/* Header */}
                <div className="grid grid-cols-12 text-xs text-black/60 mb-3">
                  <div className="col-span-2">#</div>
                  <div className="col-span-4">Company Name</div>
                  <div className="col-span-4">Industry</div>
                  <div className="col-span-2 text-right">Year</div>
                </div>
                <div className="divide-y divide-black/10">
                  {clients.map((c) => (
                    <div key={c.idx} className="grid grid-cols-12 py-3 items-center">
                      <div className="col-span-2 text-black/80 text-sm">{c.idx}</div>
                      <div className="col-span-4 text-black text-sm md:text-base">{c.company}</div>
                      <div className="col-span-4 text-black/80 text-sm">{c.industry}</div>
                      <div className="col-span-2 text-right text-black/80 text-sm">{c.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Reviews Section */}
      <section className="relative bg-paper">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left title */}
            <div ref={reviewsPinned.containerRef} className="sticky-col">
              <div ref={reviewsPinned.titleRef} style={reviewsPinned.style} className="eyebrow">
                I CLIENTS REVIEWS
              </div>
            </div>

            {/* Right list */}
            <div className="content-col">
              <div className="max-w-[920px] space-y-10">
                {reviews.map((r, i) => (
                  <div key={i} className="grid grid-cols-12 gap-6 md:gap-8 items-start">
                    {/* image */}
                    <div className="col-span-12 md:col-span-5">
                      <div className="aspect-[4/3] bg-gray-200/60 overflow-hidden">
                        <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    {/* text */}
                    <div className="col-span-12 md:col-span-7">
                      <div className="text-lg md:text-xl font-semibold text-black mb-2 leading-snug">
                        {r.title}
                      </div>
                      <p className="text-sm text-black/75 leading-relaxed mb-5 max-w-[56ch]">“{r.quote}”</p>
                      <div className="flex items-center gap-3">
                        <img src={r.avatar} alt={r.person} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <div className="text-sm font-medium text-black">{r.person}</div>
                          <div className="text-xs text-black/60">{r.role}</div>
                        </div>
                      </div>
                    </div>
                    {/* divider under each row */}
                    <div className="col-span-12 pt-6">
                      <div className="h-px w-full bg-black/10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-paper">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left title */}
            <div ref={faqPinned.containerRef} className="sticky-col">
              <div ref={faqPinned.titleRef} style={faqPinned.style} className="eyebrow">
                I FREQUENTLY ASKED QUESTION
              </div>
            </div>

            {/* Right accordion */}
            <div className="content-col">
              <div className="max-w-[920px]">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((f, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-base md:text-lg font-semibold text-black">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-black/75 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Articles Section */}
      <section id="blog" className="relative bg-[#F5F5F0]">
        <div className="section-wrap section-pad">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left title */}
            <div ref={blogPinned.containerRef} className="sticky-col">
              <div ref={blogPinned.titleRef} style={blogPinned.style} className="eyebrow">
                I BLOG & ARTICLES
              </div>
            </div>

            {/* Right grid of posts */}
            <div className="content-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                {blogPosts.map((post, i) => (
                  <article key={i} className="group">
                    <div className="card-image ratio-4x3 img-hover-scale mb-3">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[12px] text-black/60 flex items-center gap-4 mb-1">
                      <span className="inline-flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 2v4M17 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" strokeWidth="1.4"/></svg>
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="1.4"/><path d="M12 6v6l4 2" strokeWidth="1.4"/></svg>
                        {post.readMin} minute read
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold leading-snug max-w-[30ch] text-black">{post.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <div id="contact">
        <FooterSection
          navLinks={navItems.map((item) => ({ label: item.label, href: item.to }))}
        />
      </div>
    </div>
  );
}
