import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:ml-90">
          <div className="space-y-6">
            <p className="text-muted-foreground md:w-190 md:-ml-60">
              I'm a passionate and dedicated web developer with a foundation in
              the MERN stack (MongoDB, Express.js, React, and Node.js). I love
              building responsive, user-friendly web applications that solve
              real-world problems.
            </p>

            <p className="text-muted-foreground md:w-190 md:-ml-59">
              I'm constantly learning and improving — exploring the latest
              technologies, writing clean code, and building projects that
              reflect my creativity and commitment to quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:w-300 md:-ml-115">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1FwUFW0RVIn00QgXu4KdZaW8aW9PcB5pW/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection