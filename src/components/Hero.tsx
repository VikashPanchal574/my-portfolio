import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float opacity-20" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: "-1.5s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Avatar/Photo placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-2xl hover-glow animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary hover-scale">
                JD
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vikash Panchal
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
            Java Backend Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I build scalable backend systems and modern frontend apps with passion for clean code and innovative solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href={`${import.meta.env.BASE_URL}Vikash-Panchal-Resume.pdf`} download>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full hover-glow btn-primary animate-slide-in-left animate-delay-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            </a>
            
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full hover-glow btn-primary animate-slide-in-right animate-delay-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover-glow hover-rotate animate-fade-in animate-delay-400"
              asChild
            >
              <a href="https://github.com/VikashPanchal574" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover-glow hover-rotate animate-fade-in animate-delay-500"
              asChild
            >
              <a href="https://www.linkedin.com/in/vikash-panchal-b29a96243/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle hover-scale cursor-pointer">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center hover-glow">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}