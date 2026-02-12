import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/jsonld";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
