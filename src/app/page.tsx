import AboutPreview from "@/components/AboutPreview";
import ContactCta from "@/components/ContactCta";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ContactCta />
    </>
  );
}
