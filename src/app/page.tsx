import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const Services = dynamic(() => import('@/components/Services'));
const Portfolio = dynamic(() => import('@/components/Portfolio'));
const About = dynamic(() => import('@/components/About'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Contact = dynamic(() => import('@/components/Contact'));

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
