import { Hero } from "@/components/sections/Hero";
import { AssessmentSection } from "@/components/sections/AssessmentSection";
import { WorkWithUsSection } from "@/components/sections/WorkWithUsSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { DemoSection } from "@/components/sections/DemoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AssessmentSection />
      <WorkWithUsSection />
      <FoundersSection />
      <DemoSection />
    </>
  );
}
