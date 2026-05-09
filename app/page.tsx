import Benefits from "@/components/Benefits";
import ConsultationIncludes from "@/components/ConsultationIncludes";
import CTAForm from "@/components/CTAForm";
import FinalPitch from "@/components/FinalPitch";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <ConsultationIncludes />
      <Benefits />
      <Urgency />
      <FinalPitch />
      <CTAForm />
    </main>
  );
}
