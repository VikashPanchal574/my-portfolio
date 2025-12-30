import { Code, Server, Database, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "100+ DSA Problem on LeetCode",
    description: "Solving complex coding challenges to strengthen problem-solving and logic."
  },
  {
    icon: Server,
    title: "Backend Specialist",
    description: "Expert in Java, Spring Boot, and scalable architectures"
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Proficient in SQL optimization and data modeling"
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Passionate about writing efficient, maintainable code"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Passionate Java Developer & Problem Solver
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated Java Backend Developer with a strong foundation in both 
                  backend and frontend technologies. My journey in software development 
                  started with a curiosity for solving complex problems and has evolved 
                  into a passion for building scalable, efficient applications.
                </p>
                
                <p>
                  With expertise in Java ecosystem including Spring Boot and Hibernate, 
                  I specialize in creating robust backend systems. I also have strong 
                  frontend skills in HTML, CSS, JavaScript, and modern frameworks like 
                  React, allowing me to contribute to full-stack projects effectively.
                </p>
                
                <p>
                  I believe in writing clean, maintainable code and staying up-to-date 
                  with the latest industry trends. My goal is to contribute to innovative 
                  projects that make a positive impact while continuously growing as a developer.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="bg-card p-6 rounded-xl shadow-lg hover-glow glass-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}