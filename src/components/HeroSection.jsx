import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Naga Swaroop
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
              {" "}
              S N
            </span>
          </h1>

          <p>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-4xl">
              {" "}
              I'm
            </span>
            <span className="text-gradient text-primary ml-2 opacity-0 animate-fade-in-delay-2 text-4xl ">
              {" "}
              <Typewriter
                words={["Full Stack Developer.", "MERN Stack Developer."]}
                loop={5}
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a passionate web developer specializing in the MERN stack. I
            love building full-stack applications that are fast, responsive, and
            scalable turning ideas into seamless digital experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;