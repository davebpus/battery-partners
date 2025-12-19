import { Target, Handshake, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "GTM Strategy",
    description:
      "Define your market entry approach with precision. We build go-to-market strategies that align product-market fit with commercial execution.",
    items: [
      "Market positioning & competitive analysis",
      "Channel strategy & partnership development",
      "Pricing & revenue model optimization",
    ],
  },
  {
    icon: Handshake,
    title: "Partnerships & Joint Ventures",
    description:
      "Identify and structure strategic partnerships that accelerate growth. We help you find the right partners and structure deals that create mutual value.",
    items: [
      "Strategic partner identification",
      "Joint venture structuring & negotiation",
      "Partnership due diligence & integration",
    ],
  },
  {
    icon: TrendingUp,
    title: "Market Expansion & Acquisitions",
    description:
      "Expand into new markets and identify acquisition targets that complement your capabilities. We guide you from opportunity assessment to deal execution.",
    items: [
      "New market entry strategy",
      "Acquisition target identification",
      "Market & competitive landscape analysis",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bp-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Strategic Growth Advisory
          </h2>
          <p className="text-muted-foreground text-lg">
            We partner with founders and leadership teams to accelerate the path 
            from innovation to market success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-bp-gold mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
