export type RelatedProject = {
  id: string;
  title: string;
  image: string;
  tags: string[];
};

export type ProjectDetail = {
  id: string;
  title: string;
  cardTitle?: string;
  heroImage: string;
  services: string;
  industry: string;
  year: string;
  website: string;
  tags: string[];
  overview: {
    text: string;
    secondText: string;
    image: string;
  };
  scopeOfWork: {
    intro: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    image: string;
  };
  relatedProjects: RelatedProject[];
};

export const PROJECT_CATEGORIES = [
  "All projects",
  "Branding",
  "Web design",
  "Marketing",
  "Development",
  "Motion",
] as const;

export const projectsData: Record<string, ProjectDetail> = {
  boldstream: {
    id: "boldstream",
    title: "CoreVision",
    cardTitle: "Boldstream",
    heroImage:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80",
    services: "Website Design",
    industry: "Software",
    year: "2025",
    website: "www.boldstream.com",
    tags: ["Marketing", "Web design", "Development"],
    overview: {
      text: "Discharge of stitching even the fully which be to not rome; Alone, the of go. Of years, mental as shown down stiff copy of he countries are emphasis called attribute head because of understand sight as it long labour, would anyone paint, approach thoroughly, to example",
      secondText:
        "Period, to his millions she to the vices the of you bread at he satisfaction dressing irregular harmonic years human my lie looked from aged was by which plot however up that while person, week the star different fur I to for it whose aside, right his honour; Have arduous would films so at power decisions, a and each dense, the it secure dissolute you a elucidates gradually and the then, and employed hand. Was a seemed for far only an links by checks, writer of, even that a peacefully absolutely was abandon gradually it his into to be that.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
    },
    scopeOfWork: {
      intro:
        "Outline the services provided, such as strategy, design, development, branding, or marketing Example:",
      items: [
        {
          title: "Website design and development:",
          description:
            "Firstly, you might ask what is Hubstaff? Well, Hubstaff is like your all-in-one timekeeping wizard, designed to bring order to the chaos.",
        },
        {
          title: "E-commerce integration:",
          description:
            "The classes and uneasiness, his ticking service, what something it bear extended had sooner sort.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    },
    relatedProjects: [
      {
        id: "innovatex",
        title: "InnovateX",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
        tags: ["Web design", "Motion", "Development"],
      },
      {
        id: "aether-chair",
        title: "Aether Chair",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
        tags: ["Branding", "Motion", "Development"],
      },
    ],
  },
  innovatex: {
    id: "innovatex",
    title: "InnovateX",
    cardTitle: "InnovateX",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    services: "Web Design",
    industry: "Tech",
    year: "2024",
    website: "www.innovatex.com",
    tags: ["Web design", "Motion", "Development"],
    overview: {
      text: "InnovateX represents the cutting edge of modern web design, combining innovative UI patterns with seamless user experiences. This project pushed the boundaries of what's possible with web technologies.",
      secondText:
        "Through careful attention to detail and a focus on performance, we created a digital experience that not only looks beautiful but performs exceptionally well across all devices and platforms.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    },
    scopeOfWork: {
      intro: "Comprehensive design and development services:",
      items: [
        {
          title: "UI/UX Design:",
          description:
            "Created a modern, intuitive interface that guides users effortlessly through complex workflows.",
        },
        {
          title: "Motion Design:",
          description:
            "Implemented sophisticated animations and micro-interactions that enhance the user experience.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    },
    relatedProjects: [
      {
        id: "boldstream",
        title: "CoreVision",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80",
        tags: ["Marketing", "Web design", "Development"],
      },
      {
        id: "aether-chair",
        title: "Aether Chair",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
        tags: ["Branding", "Motion", "Development"],
      },
    ],
  },
  "aether-chair": {
    id: "aether-chair",
    title: "Aether Chair",
    cardTitle: "Aether Chair",
    heroImage:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
    services: "Product Design",
    industry: "Furniture",
    year: "2024",
    website: "www.aetherchair.com",
    tags: ["Branding", "Motion", "Development"],
    overview: {
      text: "Aether Chair is a stunning example of modern furniture design meeting digital visualization. This project showcases our ability to create photorealistic 3D renders and immersive product experiences.",
      secondText:
        "By combining traditional design principles with cutting-edge 3D technology, we created a product presentation that elevates the viewing experience and helps customers visualize the product in their space.",
      image:
        "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1600&q=80",
    },
    scopeOfWork: {
      intro: "3D visualization and product design services:",
      items: [
        {
          title: "3D Modeling & Rendering:",
          description:
            "Created photorealistic 3D models and renders that showcase every detail of the product design.",
        },
        {
          title: "Interactive Exploration:",
          description:
            "Developed an interactive 3D viewer allowing customers to explore the product from every angle.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    },
    relatedProjects: [
      {
        id: "boldstream",
        title: "CoreVision",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80",
        tags: ["Marketing", "Web design", "Development"],
      },
      {
        id: "innovatex",
        title: "InnovateX",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
        tags: ["Web design", "Motion", "Development"],
      },
    ],
  },
};

export type ProjectListItem = {
  id: string;
  title: string;
  image: string;
  tags: string[];
};

export const projectList: ProjectListItem[] = Object.values(projectsData).map(
  (project) => ({
    id: project.id,
    title: project.cardTitle ?? project.title,
    image: project.heroImage,
    tags: project.tags,
  })
);
