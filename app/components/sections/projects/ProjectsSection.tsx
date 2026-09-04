import SectionContainer from "@/app/components/ui/SectionContainer";
import WineLane from "@/app/components/ui/WineLane";

import ProjectRow from "./ProjectRow";
import ProjectsIntro from "./ProjectsIntro";
import ClientsLogoSlider from "./ClientsLogoSlider";
import ProjectsTestimonials from "./ProjectsTestimonials";
import { projects } from "./projects.data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="
        relative
        overflow-hidden

        border-t
        border-white/10

        bg-black
      "
    >
      <WineLane />

      <SectionContainer>
        <ProjectsIntro />

        <div className="space-y-28 xl:space-y-40">
          {projects.map((project) => (
            <ProjectRow key={project.number} project={project} />
          ))}
        </div>

        <ClientsLogoSlider />

        <ProjectsTestimonials />
      </SectionContainer>
    </section>
  );
}
