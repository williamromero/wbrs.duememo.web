import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Screenshots } from "@/components/home/Screenshots";
import { Testimonials } from "@/components/home/Testimonials";
import { DownloadCTA } from "@/components/home/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <DownloadCTA />
    </>
  );
}
