import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SiteFooter } from '@/components/site-footer';
import { X } from 'lucide-react';
import { usePinnedTitle } from '@/hooks/usePinnedTitle';

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

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/martinrobart' },
  { label: 'X (Twitter)', href: 'https://twitter.com/martinrobart' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/martinrobart' },
  { label: 'Dribbble', href: 'https://dribbble.com/martinrobart' },
];

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const contactPinned = usePinnedTitle(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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

  return (
    <div className="min-h-screen bg-paper text-black font-sans">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm">
        <div className="section-wrap flex items-center justify-between py-6 md:py-8">
          {/* Logo */}
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
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="section-wrap">
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-none tracking-tight text-black mb-6">
            Let's Work
            <br />
            Together
          </h1>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-[60ch]">
            Have a project in mind? Let's discuss how we can bring your vision to life.
            Fill out the form below or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="section-wrap">
          <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
            {/* Left - Contact Info */}
            <div ref={contactPinned.containerRef} className="sticky-col">
              <div ref={contactPinned.titleRef} style={contactPinned.style} className="eyebrow">
                I CONTACT INFO
              </div>
              <div className="mt-10 space-y-10">
                {/* Contact Details */}
                <div className="space-y-6 text-sm text-black">
                  <div>
                    <div className="text-xs text-black/50 mb-2 uppercase tracking-wider">Phone</div>
                    <a href="tel:+0013137599683455" className="text-base font-medium hover:opacity-70 transition-opacity">
                      +001 313 759 968 345
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-black/50 mb-2 uppercase tracking-wider">Email</div>
                    <a href="mailto:martinrobart@gmail.com" className="text-base font-medium hover:opacity-70 transition-opacity">
                      martinrobart@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-black/50 mb-2 uppercase tracking-wider">Location</div>
                    <div className="text-black/70 leading-relaxed">
                      12273 Dream Avenue,<br />
                      New York, United State
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <div className="text-xs text-black/50 mb-4 uppercase tracking-wider">Follow Me</div>
                  <div className="flex flex-col gap-3 text-sm">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:opacity-70 transition-opacity"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="content-col">
              <form onSubmit={handleSubmit} className="max-w-[720px] space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-black">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white border-black/20 focus:border-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-black">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white border-black/20 focus:border-black"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-black">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-white border-black/20 focus:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-black">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={8}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white border-black/20 focus:border-black resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full md:w-auto px-12">
                  Send Message →
                </button>
              </form>

              {/* Alternative Contact Methods */}
              <div className="mt-16 pt-16 border-t border-black/10">
                <h3 className="text-2xl font-semibold text-black mb-6">Prefer to schedule a call?</h3>
                <p className="text-base text-black/70 mb-6 leading-relaxed">
                  Book a free 30-minute consultation to discuss your project needs and goals.
                </p>
                <a
                  href="https://calendly.com/martinrobart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline inline-block"
                >
                  Schedule a Call →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-paper-2 py-12">
        <div className="section-wrap">
          <SiteFooter navLinks={navItems.map((item) => ({ label: item.label, href: item.to }))} />
        </div>
      </footer>
    </div>
  );
}
