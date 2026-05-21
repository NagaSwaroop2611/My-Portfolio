import ThemeToggle from "../components/ThemeToggle";
import StarBackGround from "@/components/StarBackGround";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";


export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackGround />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}
