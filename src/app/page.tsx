import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { JsonLd } from "@/components/jsonld";

// Lazy-load semua section di bawah fold — hemat JS awal ~40%
const Services = dynamic(() => import("@/components/sections/services").then(m => ({ default: m.Services })));
const Portfolio = dynamic(() => import("@/components/sections/portfolio").then(m => ({ default: m.Portfolio })));
const Process = dynamic(() => import("@/components/sections/process").then(m => ({ default: m.Process })));
const About = dynamic(() => import("@/components/sections/about").then(m => ({ default: m.About })));
const FAQ = dynamic(() => import("@/components/sections/faq").then(m => ({ default: m.FAQ })));
const Contact = dynamic(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })));
const Footer = dynamic(() => import("@/components/sections/footer").then(m => ({ default: m.Footer })));

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
