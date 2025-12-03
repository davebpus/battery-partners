import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-bp-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bp-green-light rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--bp-cream)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--bp-cream)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-bp-cream/10 border border-bp-cream/20">
              <Zap className="w-4 h-4 text-bp-gold" />
              <span className="text-bp-cream/90 text-sm font-medium">
                Electrification & eMobility Advisory
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bp-cream leading-tight mb-6 animate-slide-up">
            Helping Early-Stage Electrification Companies{" "}
            <span className="text-bp-gold">Commercialize</span>
          </h1>
          
          <p className="text-lg md:text-xl text-bp-cream/80 max-w-2xl mb-10 animate-slide-up animation-delay-100">
            From GTM strategy to manufacturing execution, we partner with battery, 
            EV charging, and energy storage innovators to bring transformative 
            technologies to market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#projects">
                View Our Work
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
