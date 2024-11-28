import Script from 'next/script';

import Loader from '@/components/Loader';
import Toast from '@/components/Toast';
import { HOME_SCHEMA } from '@/constants';

import About from './components/About';
import Contacts from './components/Contacts';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';

// Sample data
const sampleContent = {
  skills: ["Transformative", "Revolutionary", "Robust", "Stunning", "Innovative", "Immersive", "Visionary", "Transformative", "Revolutionary", "Robust", "Stunning", "Innovative", "Immersive", "Visionary", "Transformative", "Revolutionary", "Robust", "Stunning", "Innovative", "Immersive", "Visionary"],
  
  about: ["About line 1", "About line 2", "About line 3"],
  contactLinks: {
    Email: [
      { label: "mazzerx.connect@gmail.com", href: "mailto:mazzerx.connect@gmail.com", value: "mazzerx.connect@gmail.com" }
    ],
    socials: [
      // { label: "LinkedIn", href: "https://www.linkedin.com/in/drish-xd/", value: "LinkedIn" },
      { label: "Twitter", href: "https://twitter.com/MazzerxConnect", value: "Twitter" },
      { label: "Instagram", href: "https://www.instagram.com/mazzerx.connect", value: "Instagram" }
    ],
    // development: [
    //   { label: "Github", href: "https://github.com/Drish-xD/", value: "Github" },
    //   { label: "Codepen", href: "https://codepen.io/drish-xd", value: "Codepen" }
    // ]
  },
  otherLinks: {
    spotify: "https://open.spotify.com/user/example"
  }
};

export default async function Portfolio() {
  const content = sampleContent;

  return (
    <main>
      <Loader />
      <Landing />
      <Projects />
      <Skills skills={content.skills || []} />
      <About about={content.about || []} spotify={content.otherLinks.spotify || ''} />
      <Contacts contacts={content.contactLinks || {}} />

      <Toast />
      <Script
        id='structured-schema'
        type='application/ld+json'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{ __html: HOME_SCHEMA }}
      />
    </main>
  );
}

export const dynamic = 'force-static';