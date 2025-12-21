import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoStacked from "@/assets/logo-stacked.svg";
const Contact = () => {
  return <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-bp-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-bp-green-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-bp-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-bp-cream mb-6">
              Ready to Commercialize Your Technology?
            </h2>
            <p className="text-bp-cream/80 text-lg mb-8">Whether you're navigating US market entry, planning manufacturing scale-up, or defining your GTM—we're here to help.</p>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:Sales@BatteryPartners.us" className="flex items-center gap-4 p-4 rounded-lg bg-bp-cream/5 border border-bp-cream/10 hover:bg-bp-cream/10 hover:border-bp-cream/20 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-bp-gold/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-bp-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-bp-cream/60 text-sm">Email</p>
                  <p className="text-bp-cream font-medium">Sales@BatteryPartners.us</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-bp-cream/40 group-hover:text-bp-gold transition-colors" />
              </a>
              
              <a href="tel:+18105778547" className="flex items-center gap-4 p-4 rounded-lg bg-bp-cream/5 border border-bp-cream/10 hover:bg-bp-cream/10 hover:border-bp-cream/20 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-bp-gold/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-bp-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-bp-cream/60 text-sm">Phone</p>
                  <p className="text-bp-cream font-medium">(810) 577-8547</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-bp-cream/40 group-hover:text-bp-gold transition-colors" />
              </a>
              
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-bp-cream/5 backdrop-blur-sm border border-bp-cream/10 rounded-2xl p-8 md:p-12 text-center max-w-md">
              <img src={logoStacked} alt="Battery Partners" className="h-32 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-bp-cream mb-2">
                Dave McChesney
              </h3>
              <p className="text-bp-gold font-medium mb-6">Founder</p>
              <Button variant="hero" size="lg" asChild className="w-full">
                <a href="mailto:Dave@BatteryPartners.us">
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;