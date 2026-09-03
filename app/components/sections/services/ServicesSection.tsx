import SectionContainer from "@/app/components/ui/SectionContainer";
import WineLane from "@/app/components/ui/WineLane";
import ServiceRow from "./ServiceRow";
import ServicesIntro from "./ServicesIntro";
import ServicesSummary from "./ServicesSummary";
import { services } from "./services.data";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden border-t border-white/10 bg-black"
    >
      <WineLane />
      <SectionContainer>
        <ServicesIntro />
        <div className="space-y-24 xl:space-y-36">
          {services.map((service) => (
            <ServiceRow key={service.number} service={service} />
          ))}
        </div>
        <ServicesSummary />
      </SectionContainer>
    </section>
  );
}
