import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Contact Manager",
    description: "A smart contact management web app that enables users to store, organize, and manage contacts efficiently. Developed with Spring Boot, Hibernate, and MySQL, featuring role-based access and modern UI design.",
    tech: ["Java", "Spring Boot", "MYSQL", "Spring Security", "Data JPA", "tailwindcss"],
    github: "https://github.com/VikashPanchal574/Smart_Contact_manager/tree/master",
    demo: "http://smart-contact-manager.ap-south-1.elasticbeanstalk.com/home",
    image: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    title: "Chrome Email Writer Extenshion",
    description: "A smart Chrome extension built with Spring AI, Java, JavaScript, HTML, and CSS that integrates into Gmail. It adds an “AI Reply” button to your inbox, which reads the received email and generates a reply using AI.",
    tech: ["Spring AI", "Java", "Spring Boot", "Gemini", "WebSocket"],
    github: "https://github.com/VikashPanchal574/Email_Writer_Chrome_Extenshion/tree/master",
    demo: "https://github.com/VikashPanchal574/Email_Writer_Chrome_Extenshion/tree/master",
    image: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  // {
  //   title: "Banking System Simulation",
  //   description: "A secure banking system simulation with account management, transaction processing, and audit logging. Implements advanced security patterns and data validation.",
  //   tech: ["Java", "Spring Security", "Hibernate", "MySQL", "Maven"],
  //   github: "https://github.com/example/banking-system",
  //   demo: null,
  //   image: "bg-gradient-to-br from-purple-500 to-pink-600"
  // },
  // {
  //   title: "Weather Dashboard",
  //   description: "A responsive weather dashboard that displays current weather and forecasts. Features location-based weather data, interactive charts, and modern UI design.",
  //   tech: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
  //   github: "https://github.com/example/weather-dashboard",
  //   demo: "https://weather-dashboard.example.com",
  //   image: "bg-gradient-to-br from-orange-500 to-red-600"
  // }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating my skills in both backend and frontend development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-card rounded-xl shadow-lg overflow-hidden project-card animate-fade-in animate-delay-${(index + 1) * 200}`}
              >
                {/* Project Image/Placeholder */}
                <div className={`h-48 ${project.image} flex items-center justify-center hover-scale`}>
                  <div className="text-white text-xl font-bold opacity-80">
                    {project.title}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 hover-scale">{project.title}</h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`skill-badge hover-scale animate-fade-in animate-delay-${((index * 4) + techIndex + 1) * 100}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover-glow btn-primary"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    
                    {project.demo && (
                      <Button
                        size="sm"
                        asChild
                        className="hover-glow btn-primary"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="hover-glow"
            >
              <a
                href="https://github.com/VikashPanchal574?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}