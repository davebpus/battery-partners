import { Battery, Plug, Package, Factory, MapPin, Cpu, Beaker, FlaskConical } from "lucide-react";
const projects = [{
  icon: Battery,
  category: "Energy Storage",
  title: "Foreign ESS OEM",
  description: "Managed US onshoring and automation strategy for plant build-out, including phased project planning, milestone definition, and consultant alignment."
}, {
  icon: Plug,
  category: "EV Charging",
  title: "EV Charging OEM",
  description: "Directed BABA compliant onshoring strategy with multi-option modeling, consultant coordination, and integrated tariff/cost analysis."
}, {
  icon: Package,
  category: "Consumer Electronics",
  title: "Foreign Pack Designer",
  description: "Authored Strategic Growth Plan positioning US manufacturing partner for end-to-end growth including capital advisory, site selection, and GTM strategy."
}, {
  icon: Factory,
  category: "Cell Manufacturing",
  title: "Domestic Cell Manufacturer",
  description: "Provided advisory on North American supply chain localization, manufacturing site strategy, and recycling integration."
}, {
  icon: MapPin,
  category: "Heavy Duty",
  title: "Foreign Pack Designer",
  description: "Structured US site selection project with facility data gathering, regional analysis coordination, and supply chain sourcing positioning."
}, {
  icon: Cpu,
  category: "Medical & Robotics",
  title: "Domestic Pack Assembler",
  description: "Conducted supply chain cost benchmarking and coordinated data handoff for sourcing analysis and pricing validation."
}, {
  icon: Beaker,
  category: "Novel Chemistry",
  title: "Domestic Battery Startup",
  description: "Advised founding team on commercialization structure, designed hiring architecture, and authored full technical operations plan bridging R&D to manufacturability."
}, {
  icon: FlaskConical,
  category: "eMobility & Powertrain Testing",
  title: "Testing Services Provider",
  description: "Led new market expansion into eVTOL, light electric vehicles, and commercial trucking industries. Identified strategic account targets for accelerated revenue growth."
}];
const Projects = () => {
  return <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-bp-gold font-semibold text-sm uppercase tracking-wider mb-4 block">
            Recent Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects Across the Electrification Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg">From ESS to eMobility to novel battery chemistries, we've supported companies at every stage of the electrification value chain.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <div key={index} className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-bp-gold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;