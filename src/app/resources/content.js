import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Anthony",
  lastName: "Brunet-Bessette",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Web Developer",
  avatar: "/images/avatar.jpg", // Path to your avatar image
  location: "Victoriaville, Quebec, Canada", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Reach out to {person.firstName}</>,
  description: (
    <>
      Don’t hesitate to reach out to me using the contact details below if you have any questions.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Anthony123495",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://ca.linkedin.com/in/anthony-brunet-bessette",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:abrunetbessette@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Web Developer</>,
  subline: (
    <>
      I'm Anthony, a <InlineCode>Full Stack Web Developer</InlineCode> passionate about building clean, intuitive  
      user experiences <br /> that blend creativity with functionality.
    </>
  ),
};

const about = {
  label: "About",
  title: "Learn more about me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Anthony, a Canada-based Full Stack Web Developer with a passion for turning complex ideas into simple, elegant web solutions. I specialize in building dynamic interfaces, seamless user experiences, and bridging the gap between design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "David Astro Inc.",
        timeframe: "2022 - 2025",
        role: "Full-Stack Web Developper",
        achievements: [
          <>
            Redesigned the UI/UX for the David Astro platform.
          </>,
          <>
            Designed and developed a complete suite of custom tools for astronomy and astrophotography enthusiasts — including a powerful Framing Calculator and a collection of advanced astronomy calculators, all built from scratch.
            <br />
            Languages used are <InlineCode>Figma</InlineCode>, <InlineCode>JavaScript</InlineCode>, <InlineCode>Python</InlineCode>, <InlineCode>React</InlineCode>, <InlineCode>Node.js</InlineCode>, <InlineCode>Material UI</InlineCode>, <InlineCode>GitHub</InlineCode>, <InlineCode>FireBase</InlineCode>, <InlineCode>Emotion</InlineCode>, and more!
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/David Astro Tools/davidastrotools.png",
            alt: "David Astro Tools - Framing Simulator",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Self-Employed",
        timeframe: "2015 - present",
        role: "Full-Stack Web Developper",
        achievements: [
          <>
            Built a complex, highly customized tool for motorcycle and VTT enthusiasts —  allowing users to compare two models side by side and discover the best fit for their needs. The tool also locates the best available deals near the user's location.
            <br />
            Languages used are <InlineCode>Figma</InlineCode>, <InlineCode>JavaScript</InlineCode>, <InlineCode>Python</InlineCode>, <InlineCode>React</InlineCode>, <InlineCode>Node.js</InlineCode>, <InlineCode>Material UI</InlineCode>, <InlineCode>GitHub</InlineCode>, <InlineCode>FireBase</InlineCode>, <InlineCode>Emotion</InlineCode>, and more!
          </>,
          <>
            I always find new tools to build and new projects to work on. I love to learn and improve my skills, and I am always looking for new challenges.
          </>
        ],
        images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                      src: "/images/projects/Ride Rank/riderank1.png",
                      alt: "Ride Rank - Bike Comparison Tool",
                      width: 16,
                      height: 9,
                    },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Polytechnique of Montreal",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Proficient in Figma for designing intuitive UI/UX layouts, wireframes, and interactive prototypes to streamline the development process and enhance user experience.</>,
        images: [],
      },
      {
        title: "React JS",
        description: <>Experienced in building responsive and component-based web applications using React JS, including advanced state management and hooks-based architecture.</>,
        images: [],
      },
      {
        title: "Python",
        description: <>Skilled in Python for scripting, automation, and building backend systems. Frequently used for data processing, web scraping, and server-side logic.</>,
        images: [],
      },
      {
        title: "Node JS",
        description: <>Develop backend services and REST APIs using Node.js, Express, and other related libraries to build scalable, performant web applications.</>,
        images: [],
      },
      {
        title: "JavaScript Frameworks",
        description: <>Strong command over modern JavaScript frameworks such as React, Vue, and Next.js to create dynamic, fast, and SEO-optimized web apps.</>,
        images: [],
      },
      {
        title: "PHP",
        description: <>Capable of developing and maintaining dynamic websites and server-side applications using PHP, often combined with MySQL and Laravel.</>,
        images: [],
      },
      {
        title: "SAAS (Software as a Service) - FireBase, SupaBase, etc.",
        description: <>Hands-on experience with SaaS platforms like Firebase and Supabase for authentication, real-time databases, hosting, and serverless backend logic.</>,
        images: [],
      },
      {
        title: "MySQL",
        description: <>Use MySQL to design and manage relational databases, write optimized queries, and maintain data integrity across web applications.</>,
        images: [],
      },
      {
        title: "APIs",
        description: <>Skilled in designing, integrating, and consuming RESTful and third-party APIs to extend application functionality and ensure seamless communication between services.</>,
        images: [],
      },
      {
        title: "HTML, CSS",
        description: <>Strong foundation in semantic HTML and modern CSS (including Flexbox, Grid, and responsive design) to create accessible and visually engaging web interfaces.</>,
        images: [],
      }      
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Anthony Brunet-Bessette's Portfolio - Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Astrophotography Gallery",
  title: "Astrophotography Gallery",
  description: `An astrophotography collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
