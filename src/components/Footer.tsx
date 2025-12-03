const Footer = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Battery Partners. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#services"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
