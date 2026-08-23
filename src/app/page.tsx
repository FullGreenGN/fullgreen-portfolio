import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experiences } from "@/components/experiences";
import { Hero } from "@/components/hero";
import { HomeProjects } from "@/components/home-projects";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experiences />
      <HomeProjects />
      <Stack />
      <Contact />
    </>
  );
}
