import Script from 'next/script';

import Loader from '@/components/Loader';
import Toast from '@/components/Toast';
import { HOME_SCHEMA } from '@/constants';

import About from './components/About';
import Contacts from './components/Contacts';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Review from './components/Skills';

// Sample data
const sampleContent = {
  review: [
    { text: "Transformative", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531" },
    { text: "Revolutionary", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/3.jpg?v=1733139269378" },
    { text: "Robust", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/4.jpg?v=1733139268326" },
    { text: "Stunning", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595" },
    { text: "Innovative", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/7.jpg?v=1733139275056" },
    { text: "Immersive", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/5.jpg?v=1733139272968" },
    { text: "Visionary", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531" },
    { text: "Transformative", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595" },
    { text: "Revolutionary", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/6.jpg?v=1733139270080" },
    { text: "Robust", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/4.jpg?v=1733139268326" },
    { text: "Stunning", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/3.jpg?v=1733139269378" },
    { text: "Innovative", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/6.jpg?v=1733139270080" },
    { text: "Immersive", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531" },
    { text: "Visionary", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/5.jpg?v=1733139272968" },
    { text: "Transformative", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/7.jpg?v=1733139275056" },
    { text: "Revolutionary", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595" },
    { text: "Robust", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/4.jpg?v=1733139268326" },
    { text: "Stunning", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/1.jpg?v=1733139268531" },
    { text: "Innovative", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/3.jpg?v=1733139269378" },
    { text: "Immersive", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/2.jpg?v=1733139271595" },
    { text: "Visionary", image: "https://cdn.glitch.global/4c8c9e0a-aad7-4257-aedf-2cd32b466477/6.jpg?v=1733139270080" }
  ],
  
  about: ["About line 1", "About line 2", "About line 3"],
  contactLinks: {
    Email: [
      { label: "mazzerx.connect@gmail.com", href: "mailto:mazzerx.connect@gmail.com", value: "mazzerx.connect@gmail.com" }
    ],
    socials: [
      { label: "Twitter", href: "https://twitter.com/MazzerxConnect", value: "Twitter" },
      { label: "Instagram", href: "https://www.instagram.com/mazzerx.connect", value: "Instagram" }
    ]
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
      <Review review={content.review || []} />
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