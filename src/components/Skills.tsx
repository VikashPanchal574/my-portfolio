import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Backend",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    skills: ["Java", "Spring Boot", "Hibernate", "JPA", "Maven", "REST APIs"]
  },
  {
    title: "Frontend",
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React", "Vite"]
  },
  {
    title: "Databases",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    skills: ["MySQL", "PostgreSQL", "SQL", "Database Design"]
  },
  {
    title: "Tools & Others",
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "Postman", "Linux", "Docker"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-card p-6 rounded-xl shadow-lg hover-lift glass-card animate-slide-up animate-delay-${(categoryIndex + 1) * 100}`}
              >
                <h3 className="text-xl font-semibold mb-4 text-center hover-scale">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`skill-badge ${category.color} animate-fade-in animate-delay-${((categoryIndex * 3) + skillIndex + 1) * 100}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-card p-8 rounded-xl shadow-lg glass-card max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always exploring new technologies and best practices. Currently learning 
                about microservices architecture, cloud platforms, and advanced Spring Security 
                to stay ahead in the rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}