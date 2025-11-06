import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { X } from "lucide-react";
import { FooterSection } from "@/components/footer-section";
import { projectsData } from "@/lib/projects-data";

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

function renderMenuContent(
  setMenuOpen: (open: boolean) => void,
  variant: "desktop" | "mobile"
) {
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
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [menuOpen, setMenuOpen] = useState(false);

  const project = id ? projectsData[id] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Project Not Found
          </h1>
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
            <h1 className="text-xl font-semibold tracking-tight text-black">
              Martin.R
            </h1>
            <span className="text-sm text-black/60 font-light">@2025</span>
          </Link>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="hidden md:block text-right group">
                <div className="space-y-2">
                  <div className="text-sm font-medium tracking-wide text-black">
                    Menu
                  </div>
                  <div className="space-y-1 text-xs text-black/70 font-light">
                    <div className="tracking-wide">Brand Design</div>
                    <div className="tracking-wide">Web Development</div>
                    <div className="tracking-wide">Motion Design</div>
                    <div className="tracking-wide">Digital Marketing</div>
                  </div>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full md:w-[500px] bg-white p-0 border-none"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 z-50 p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-black" />
              </button>
              {renderMenuContent(setMenuOpen, "desktop")}
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
          {renderMenuContent(setMenuOpen, "mobile")}
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
              { label: "Services:", value: project.services },
              { label: "Industry:", value: project.industry },
              { label: "Year:", value: project.year },
              { label: "Live Website:", value: project.website },
            ].map((item) => (
              <div
                key={item.label}
                className="space-y-3 border-b border-black/10 pb-6"
              >
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
                {project.scopeOfWork.items.map((item, index) => (
                  <li key={index}>
                    <span className="font-semibold text-black">
                      {item.title}
                    </span>{" "}
                    {item.description}
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
                {project.relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.id}`}
                    className="block group"
                  >
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
                            <rect
                              x="3"
                              y="5"
                              width="18"
                              height="14"
                              rx="2"
                              strokeWidth="1.5"
                            />
                            <circle
                              cx="8"
                              cy="10"
                              r="2"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M21 17l-5.5-5.5a1 1 0 0 0-1.4 0L7 18"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-base md:text-lg font-medium text-black group-hover:opacity-70 transition-opacity">
                        {relatedProject.title}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {relatedProject.tags.map((tag) => (
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

      <FooterSection
        navLinks={navItems.map((item) => ({ label: item.label, href: item.to }))}
      />
    </div>
  );
}
