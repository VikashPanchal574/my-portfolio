import { useState } from "react";
import emailjs from "emailjs-com";  // ✅ new import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, title: "Email", value: "tech.vikashpanchal474@gmail.com", href: "mailto:tech.vikashpanchal474@gmail.com" },
  { icon: Phone, title: "Phone", value: "+91 89621 87626", href: "tel:+918962187626" },
  { icon: MapPin, title: "Location", value: "Indore, Madhya Pradesh", href: null },
];

const socialLinks = [
  { icon: Github, name: "GitHub", href: "https://github.com/VikashPanchal574", color: "hover:text-gray-800 dark:hover:text-gray-200" },
  { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/vikash-panchal-b29a96243", color: "hover:text-blue-600" },
  { icon: Twitter, name: "Twitter", href: "https://x.com/Vikashpanc16609?s=08", color: "hover:text-blue-400" },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // ✅ Step 3.1 – handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Step 3.2 – handle EmailJS form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the email
      const result = await emailjs.send(
        "service_hjjdqrw",     // 🔹 replace this
        "template_i2ayl4b",    // 🔹 replace this
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "CRVqK74nMcQRmDtah"      // 🔹 replace this
      );

      console.log("Email sent:", result.text);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I’ll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      toast({
        title: "Failed to Send",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-sm glass-card">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-border pt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="icon"
                      asChild
                      className={`hover-glow ${social.color}`}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column – Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-card p-8 rounded-xl shadow-lg glass-card">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px]"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full btn-primary">
                    {isSubmitting ? "Sending..." : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
