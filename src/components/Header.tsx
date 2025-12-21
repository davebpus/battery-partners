import { useState, useEffect } from "react";
import logoHorizontal from "@/assets/logo-horizontal.svg";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background py-1 shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img alt="Battery Partners" className="h-12 md:h-16" src="/lovable-uploads/5d85f881-8e8d-45e1-820c-e4594b064078.png" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Services
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Projects
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Contact
          </a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md">
          Get in Touch
        </a>
      </div>
    </header>;
};
export default Header;