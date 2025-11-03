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

import React, { useState, useRef } from 'react';
import { usePinnedTitle } from '@/hooks/usePinnedTitle';

export default function Home() {
  const [portraitImage, setPortraitImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const aboutPinned = usePinnedTitle(10);
  const projectsPinned = usePinnedTitle(10);
  const servicesPinned = usePinnedTitle(10);
  const clientsPinned = usePinnedTitle(10);
  
  // Projects data - images can be provided later; empty imageUrl will show a placeholder
  // Keep a compact list for now; will expand with user's assets
  const projects: Array<{ title: string; imageUrl?: string; tags: string[] }> = [
    {
      title: 'Boldstream',
      imageUrl:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80',
      tags: ['Marketing', 'Web design', 'Development'],
    },
    {
      title: 'InnovateX',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
      tags: ['Web design', 'Motion', 'Development'],
    },
    {
      title: 'Aether Chair',
      imageUrl:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
      tags: ['Product', '3D', 'Exploration'],
    },
  ];

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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPortraitImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-warm-brown text-white font-sans relative overflow-hidden">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold tracking-tight">Martin.R</h1>
            <span className="text-sm text-white/70 font-light">@2025</span>
          </div>
          
          {/* Menu */}
          <div className="hidden md:block">
            <div className="text-right space-y-2">
              <div className="text-sm font-medium tracking-wide">Menu</div>
              <div className="space-y-1 text-xs text-white/90 font-light">
                <div className="tracking-wide">Brand Design</div>
                <div className="tracking-wide">Web Development</div>
                <div className="tracking-wide">Motion Design</div>
                <div className="tracking-wide">Digital Marketing</div>
              </div>
            </div>
          </div>
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
          <div className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] xl:w-[32rem] xl:h-[36rem] flex items-center justify-center">
            {/* Portrait Image Area - Direct display without container */}
            <div 
              className="w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-80"
              onClick={handleImageClick}
            >
              {portraitImage ? (
                /* User uploaded portrait - displayed directly without container */
                <img 
                  src={portraitImage} 
                  alt="Martin Robart Portrait"
                  className="max-w-full max-h-full object-contain"
                  style={{ 
                    maxHeight: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    width: 'auto'
                  }}
                />
              ) : (
                /* Placeholder for portrait upload */
                <div className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white/20 tracking-[0.3em] text-center group-hover:text-white/30 transition-colors">
                  <div className="opacity-50 hover:opacity-70 transition-opacity">Upload</div>
                  <div className="text-2xl md:text-3xl lg:text-4xl mt-2 opacity-40 hover:opacity-60 transition-opacity">Portrait</div>
                  <div className="text-sm md:text-base mt-4 opacity-30 font-normal tracking-normal">
                    Click to add PNG image
                  </div>
                </div>
              )}
              
              {/* Hidden file input for image upload */}
              <input 
                ref={fileInputRef}
                type="file" 
                accept="image/png,image/jpg,image/jpeg,image/webp" 
                className="hidden" 
                onChange={handleImageUpload}
              />
            </div>
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
      <button className="md:hidden absolute top-6 right-6 z-30 p-2">
        <div className="w-5 h-0.5 bg-white mb-1"></div>
        <div className="w-5 h-0.5 bg-white mb-1"></div>
        <div className="w-5 h-0.5 bg-white"></div>
      </button>

      {/* About Me Section */}
      <section className="relative bg-[#F5F5F0] min-h-[120vh] md:min-h-[110vh]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10 pt-28 lg:pt-36 pb-12 lg:pb-16">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left - Section Title (JS Pinned) */}
            <div ref={aboutPinned.containerRef} className="relative col-span-2 -ml-2 md:-ml-3 lg:-ml-4">
              <div ref={aboutPinned.titleRef} style={aboutPinned.style} className="text-[11px] md:text-xs font-medium tracking-[0.18em] text-black uppercase leading-none">
                I ABOUT ME
              </div>
            </div>

            {/* Right - Content */}
            <div className="col-span-8 col-start-4">
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

      {/* Explore Services Section */}
      <section className="relative bg-[#F5F5F0]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10 pt-16 lg:pt-24 pb-12 lg:pb-16">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left title */}
            <div ref={servicesPinned.containerRef} className="relative col-span-2 -ml-2 md:-ml-3 lg:-ml-4">
              <div ref={servicesPinned.titleRef} style={servicesPinned.style} className="text-[11px] md:text-xs font-medium tracking-[0.18em] text-black uppercase leading-none">
                I EXPLORE SERVICES
              </div>
            </div>

            {/* Right grid */}
            <div className="col-span-8 col-start-4">
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
      <section className="relative bg-[#F5F5F0]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left title */}
            <div ref={clientsPinned.containerRef} className="relative col-span-2 -ml-2 md:-ml-3 lg:-ml-4">
              <div ref={clientsPinned.titleRef} style={clientsPinned.style} className="text-[11px] md:text-xs font-medium tracking-[0.18em] text-black uppercase leading-none">
                I LATEST CLIENTS
              </div>
            </div>

            {/* Right table */}
            <div className="col-span-8 col-start-4">
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

      {/* Selected Projects Section - placed immediately after About Me */}
      <section className="relative bg-[#F5F5F0]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-10 pt-8 lg:pt-10 pb-20 lg:pb-24">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left - Section Title (JS Pinned) */}
            <div ref={projectsPinned.containerRef} className="relative col-span-2 -ml-2 md:-ml-3 lg:-ml-4">
              <div ref={projectsPinned.titleRef} style={projectsPinned.style} className="text-[11px] md:text-xs font-medium tracking-[0.18em] text-black uppercase leading-none">
                I SELECTED PROJECTS
              </div>
            </div>

            {/* Right - Content */}
            <div className="col-span-8 col-start-4">
              <div className="max-w-[920px] space-y-16">
                {projects.map((p, idx) => (
                  <div key={idx}>
                    {/* Image or Placeholder */}
                    <div className="aspect-[16/9] bg-gray-200/60 overflow-hidden">
                      {p.imageUrl ? (
                        <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
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
                      <div className="text-base md:text-lg font-medium text-black">{p.title}</div>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs text-black/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}