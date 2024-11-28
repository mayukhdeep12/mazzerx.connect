import { cache } from 'react';

// Sample data to replace Contentful API calls
const sampleProjects = [
  {
    name: "Designing",
    slug: "designing",
    tags: ["Website Design", "Website Development", "3D Design"],
    image: {
      src: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/e9681e37a42424a5ffd1833b7f34d87f.jpg?v=1732823655358",
      alt: "Project 1 Image"
    }
  },
  {
    name: "Generative AI",
    slug: "generative-ai",
    tags: ["Large • Image • Video • Language • Models"],
    image: {
      src: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1b446e9ae1552e26b9f0be8125c8fadf.jpg?v=17328237174589",
      alt: "Project 2 Image"
    }
  },
  {
    name: "Mixed Reality",
    slug: "mixed-reality",
    tags: ["Augmented Reality", "Virtual Reality"],
    image: {
      src: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/75b4cd8e2ab49f31d39ff278efe2fb87-transformed%20(1).jpeg?v=1732824302225",
      alt: "Project 2 Image"
    }
  },
  {
    name: "MedTech",
    slug: "med-tech",
    tags: ["Computer Vision", "Radiological Tools"],
    image: {
      src: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/04b643248180329a6681afc67344db52-transformed.jpeg?v=1732824373970",
      alt: "Project 2 Image"
    }
  }
];

const sampleContent = {
  about: ["About line 1", "About line 2"],
  skills: ["Skill 1", "Skill 2"],
  navLinks: {
    home: "/",
    projects: "/services"
  },
  contactLinks: {
    email: "contact@example.com",
    phone: "123-456-7890"
  },
  otherLinks: {
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example"
  }
};

// Mock function to mimic getBase64
const getBase64 = async (src) => {
  // Return a placeholder base64 string for demonstration purposes
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...";
};

// Mimic the structure of Asset and fields for sample data
interface Asset<T, U> {
  fields: {
    file: {
      url: U;
    };
    description?: T;
  };
}

interface ProjectsSkeleton {
  fields: {
    name: string;
    slug: string;
    tags: string[];
    image: Asset<undefined, string>;
    index: number;
  };
}

interface ProjectSkeleton {
  fields: {
    name: string;
    slug: string;
    tags: string[];
    image: Asset<undefined, string>;
  };
}

interface ContentSkeleton {
  fields: {
    about: string;
    skills: string[];
    navLinks: {
      data: {
        [key: string]: string;
      };
    };
    contacts: {
      [key: string]: string;
    };
    otherLinks: {
      [key: string]: string;
    };
  };
}

export const getAllProjects = cache(async () => {
  try {
    const projects = await Promise.all(
      sampleProjects.map(async (project) => {
        const imgSrc = project.image.src;
        const imgBase64 = await getBase64(imgSrc);

        return {
          name: project.name,
          slug: project.slug,
          tags: project.tags,
          image: {
            src: imgSrc,
            alt: project.image.alt,
            base64: imgBase64
          }
        };
      })
    );

    return projects;
  } catch (error) {
    console.error(error);
  }
});

export const getSingleProject = cache(async (slug_: string) => {
  try {
    const project = sampleProjects.find(project => project.slug === slug_);
    if (!project) throw new Error("Project not found");

    const imgSrc = project.image.src;
    const imgBase64 = await getBase64(imgSrc);

    return {
      ...project,
      image: {
        src: imgSrc,
        alt: project.image.alt,
        base64: imgBase64
      }
    };
  } catch (error) {
    console.error(error);
  }
});

export const getContent = cache(async () => {
  try {
    return {
      about: sampleContent.about.split(/\r?\n/).filter((line) => line.trim() !== '') || [],
      skills: sampleContent.skills || [],
      navLinks: sampleContent.navLinks.data || {},
      contactLinks: sampleContent.contactLinks || {},
      otherLinks: sampleContent.otherLinks || {}
    };
  } catch (error) {
    console.error(error);
  }
});