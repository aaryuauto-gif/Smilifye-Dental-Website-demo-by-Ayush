import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
      <Services />
      <Team />
      <Values />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
