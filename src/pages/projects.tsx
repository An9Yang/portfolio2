import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { X } from "lucide-react";
import { FooterSection } from "@/components/footer-section";
import { projectList, PROJECT_CATEGORIES } from "@/lib/projects-data";

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

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<(typeof PROJECT_CATEGORIES)[number]>(
    "All projects"
  );

  const filteredProjects =
    activeCategory === "All projects"
      ? projectList
      : projectList.filter((project) => project.tags.includes(activeCategory));

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

      <main>
        <section className="relative pt-[160px] pb-16 md:pb-24">
          <div className="section-wrap">
            <h1 className="text-[clamp(4.5rem,11vw,10.5rem)] font-black leading-[0.82] tracking-tight text-black">
              Projects
            </h1>
            <div className="mt-12 flex flex-wrap gap-3">
              {PROJECT_CATEGORIES.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 text-sm font-medium tracking-tight transition-colors border rounded-full ${
                      isActive
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black/20 hover:border-black hover:bg-black/5"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="section-wrap section-pad">
            <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
              <div className="sticky-col">
                <span className="eyebrow text-black/70">I SELECTED PROJECTS</span>
              </div>
              <div className="content-col">
                <div className="max-w-[920px] space-y-16">
                  {filteredProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="block group"
                    >
                      <div className="card-image ratio-16x9 img-hover-scale">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
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
                          {project.title}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
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
      </main>

      <FooterSection
        navLinks={navItems.map((item) => ({ label: item.label, href: item.to }))}
      />
    </div>
  );
}
