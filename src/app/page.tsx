import {
  ExperienceCanvas,
} from "@/components/experience/ExperienceCanvas";

import {
  ExperienceDebug,
} from "@/components/experience/ExperienceDebug";

import {
  ExperienceViewport,
} from "@/components/experience/ExperienceViewport";

import {
  ScrollProgress,
} from "@/components/experience/ScrollProgress";

import {
  HomeContent,
} from "@/components/home/HomeContent";

import {
  SiteHeader,
} from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <ExperienceViewport />

      <ScrollProgress />

      <ExperienceDebug />

      <ExperienceCanvas />

      <SiteHeader />

      <HomeContent />
    </>
  );
}