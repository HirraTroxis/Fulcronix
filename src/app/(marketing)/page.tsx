import { HeroSection } from "@/components/home/hero-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { PivotProcessSection } from "@/components/home/pivot-process-section";
import { PartnersSection } from "@/components/home/partners-section";
import { EngagementsSection } from "@/components/home/engagements-section";
import { EngagementTypesSection } from "@/components/home/engagement-types-section";
import { WhyFulcronixSection } from "@/components/home/why-fulcronix-section";
import { JoinTeamSection } from "@/components/home/join-team-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <PivotProcessSection />
      <PartnersSection />
      <EngagementsSection />
      <EngagementTypesSection />
      <WhyFulcronixSection />
      <JoinTeamSection />
    </>
  );
}
