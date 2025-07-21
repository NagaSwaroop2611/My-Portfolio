import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import project1 from "../assets/projects/todo-advance.png";
import project2 from "../assets/projects/weather-app.png";
import project3 from "../assets/projects/music-player.png";
import project4 from "../assets/projects/image-carosuel.png";
import project5 from "../assets/projects/calculator.png";
import project6 from "../assets/projects/usePopcorn.png";



const projects = [
  {
    id: 1,
    title: "Todo App (Full Stack)",
    description:
      "A full-stack React + Node.js To-Do app with CRUD operations, MongoDB storage, and responsive design.",
    image: project1,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Postman",
      "GitHub",
      "Netlify",
      "Render",
    ],
    demoUrl: "https://todo-advance-app.netlify.app/",
    githubUrl: "https://github.com/NagaSwaroop2611/advanced-todo-full-stack-app",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Built with React and Open-Meteo API, this weather app provides hourly and daily forecasts based on user location or search.",
    image: project2,
    tags: ["React", "JavaScript", "Open-Meteo API", "Netlify"],
    demoUrl: "https://swaroop-weather-app.netlify.app/",
    githubUrl: "https://github.com/NagaSwaroop2611/Weather-App-Deployment",
  },
  {
    id: 3,
    title: "Music Player",
    description:
      "A JavaScript-based music player with playlist control, shuffle, loop, volume adjustment, and a modal with artist details.",
    image: project3,
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub"],
    demoUrl: "https://nagaswaroop2611.github.io/Simple-spotify-clone/",
    githubUrl: "https://github.com/NagaSwaroop2611/Simple-spotify-clone",
  },
  {
    id: 4,
    title: "Image Carousel",
    description:
      "Developed an interactive image carousel with HTML, CSS, and JavaScript that supports manual and auto navigation with full-screen preview support.",
    image: project4,
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub"],
    demoUrl: "https://nagaswaroop2611.github.io/Image-Slider/",
    githubUrl: "https://github.com/NagaSwaroop2611/Image-Slider",
  },
  {
    id: 5,
    title: "Web Calculator",
    description:
      "Developed a web-based calculator using HTML, CSS, and JavaScript to perform basic arithmetic operations. The calculator supports addition, subtraction, multiplication, and division, along with features like clearing input, backspace, and result evaluation.",
    image: project5,
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub"],
    demoUrl: "https://nagaswaroop2611.github.io/Calculator-Level-2/",
    githubUrl: "https://github.com/NagaSwaroop2611/Calculator-Level-2",
  },
  {
    id: 6,
    title: "Movie Rating App",
    description:
      "Movie Rating App built with React using the OMDB API to search, rate, and view detailed movie information.",
    image: project6,
    tags: ["React.js","omdb API"],
    demoUrl: "https://usepopcorn-myapp.netlify.app/",
    githubUrl: "https://github.com/NagaSwaroop2611/usePopcorn",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 hover:bg-gray-700 text-gradient rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border border-gray-600 rounded-full bg-indigo-600 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-violet-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-500 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-white hover:text-primary transition-colors duration-300"
            target="_blank"
            href="https://github.com/NagaSwaroop2611"
            rel="noopener noreferrer"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;