import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Huzaifa Khan — Full Stack Software Engineer",
  author: "Huzaifa Khan",
  description:
    "Full Stack Software Engineer based in Okara, PAKISTAN. I specialize in crafting intuitive user interfaces, building responsive websites and web applications, and ensuring seamless user experiences through clean, maintainable code.",
  lang: "en",
  siteLogo: "/huzaifa small.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/collage.jpg",
  canonicalURL: "https://personal-portfolio-huzaifa-khan.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Huzaifa Khan",
    specialty: "Full Stack Software Engineer",
    summary:
      "Full Stack Software Engineer based in Okara, PAKISTAN. I specialize in crafting intuitive user interfaces, building responsive websites and web applications, and ensuring seamless user experiences through clean, maintainable code.",
    email: "huzaifazaifi25@gmail.com",
  },
  experience: [
    {
      company: "Codevenator",
      position: "Frontend Trainee",
      startDate: "Jan 2023",
      endDate: "Mar 2023",
      summary: ["Build Some Websites Using HTML and CSS only."],
    },
    {
      company: "MindGigs, KPIT, Peshawar",
      position: "Frontend Intern",
      startDate: "Jun 2024",
      endDate: "Oct 2024",
      summary: [
        "Build dynamic, responsive, and interactive user interfaces using React.js",
        "Collaborate with other developers for learning.",
        "Fix bugs, implement updates, and ensure consistent performance across devices and browsers.",
      ],
    },
    {
      company: "Invextech,Okara",
      position: "Software Engineer(Frontend Developer)",
      startDate: "Oct 2024",
      endDate: "Jun 2025",
      summary: [
        "Skilled in creating responsive and user-friendly interfaces that enhance user experiences.",
        "Skilled in developing modern web apps with Next.js, experienced in TypeScript integration.",
        "Work with designers to translate wireframes and designs into functional UI components.",
      ],
    },
    {
      company: "Hawkrix,Okara",
      position: "CEO and Founder",
      startDate: "Jul 2025",
      endDate: "Sep 2025",
      summary: [
        "Started my own company Hawkrix where I am working as CEO and Founder.",
        "Ended Up Due To Some Personal Problems."
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
     I'm a dedicated Full Stack Software Engineer with a strong background in building modern, responsive, and user-focused web applications. With experience ranging from internships to full-time development roles, I've worked with technologies like HTML, CSS, JavaScript, React.js, Next.js, and TypeScript to create clean, efficient, and scalable user interfaces.Throughout my journey, I've collaborated with cross-functional teams, translated design mockups into functional components, and contributed to high-performance products. I take pride in writing maintainable code and continuously improving user experience across devices and browsers.Currently, I started my own company Hawkrix where I was working as CEO and Founder, where I lead with a focus on innovation, product quality, and meaningful digital solutions.I ended Up Hawkrix Due to some personal problems. I'm passionate about leveraging technology to solve real-world problems and am always eager to take on new challenges in the ever-evolving tech landscape.
    `,
    image: "/huzaifa small.jpeg",
  },
};
