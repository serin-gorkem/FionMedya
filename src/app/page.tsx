import { ExperienceCanvas } from "@/components/experience/ExperienceCanvas";
import { ExperienceDebug } from "@/components/experience/ExperienceDebug";
import { ScrollProgress } from "@/components/experience/ScrollProgress";
import { HomeContent } from "@/components/home/HomeContent";

export default function Home() {
  return (
    <>
      <ExperienceDebug />

      <ScrollProgress />

      <ExperienceCanvas />

      <HomeContent />
    </>
  );
}