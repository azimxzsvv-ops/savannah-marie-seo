import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, FileText, MapPin, BarChart3, Search, Link2, PenTool, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    icon: Settings, title: "Technical SEO",
    desc: "Ensure your website is fully optimized for search engine crawlers with proper site architecture, speed optimization, and technical health.",
    benefits: ["Faster page load speeds", "Improved crawlability & indexing", "Mobile-first optimization", "Core Web Vitals improvement"],
    process: ["Site audit & analysis", "Technical issue identification", "Priority-based fixes", "Ongoing monitoring"],
  },
  {
    icon: FileText, title: "On-Page SEO Optimization",
    desc: "Optimize every page on your website with targeted keywords, compelling meta tags, and content that ranks.",
    benefits: ["Higher keyword rankings", "Better click-through rates", "Improved user engagement", "Content that converts"],
    process: ["Keyword mapping", "Meta tag optimization", "Content enhancement", "Internal linking strategy"],
  },
  {
    icon: MapPin, title: "Local SEO",
    desc: "Dominate local search results and Google Maps to attract nearby customers actively searching for your services.",
    benefits: ["Google Maps top 3 rankings", "Increased local visibility", "More phone calls & visits", "Competitive local advantage"],
    process: ["Google Business Profile optimization", "Local citation building", "Review management strategy", "Local content creation"],
  },
  {
    icon: BarChart3, title: "SEO Audit & Strategy",
    desc: "Get a comprehensive analysis of your website's SEO health with a clear, actionable growth roadmap.",
    benefits: ["Complete site health overview", "Competitor gap analysis", "Prioritized action plan", "Revenue growth projections"],
    process: ["200+ point site audit", "Competitor analysis", "Strategy development", "Implementation roadmap"],
  },
  {
    icon: Search, title: "Keyword Research",
    desc: "Discover high-intent, high-value keywords that your ideal customers are searching for.",
    benefits: ["Target buyer-intent keywords", "Uncover untapped opportunities", "Competitive keyword gaps", "Content topic clusters"],
    process: ["Market & audience analysis", "Keyword discovery", "Competition assessment", "Keyword prioritization"],
  },
  {
    icon: Link2, title: "Link Building",
    desc: "Build high-quality backlinks that boost your domain authority and search engine rankings.",
    benefits: ["Higher domain authority", "Increased referral traffic", "Stronger search rankings", "Industry credibility"],
    process: ["Link profile audit", "Outreach strategy", "Quality link acquisition", "Performance tracking"],
  },
  {
    icon: PenTool, title: "Content Optimization",
    desc: "Transform your content into SEO-powered assets that rank, engage, and convert visitors into customers.",
    benefits: ["Content that ranks on page 1", "Higher engagement metrics", "More organic conversions", "Topical authority"],
    process: ["Content audit", "SEO content briefs", "Optimization & updates", "Performance measurement"],
  },
  {
    icon: TrendingUp, title: "Monthly SEO Management",
    desc: "Ongoing SEO management to continuously improve your rankings, traffic, and conversions month over month.",
    benefits: ["Consistent ranking improvements", "Monthly growth reports", "Proactive strategy adjustments", "Dedicated SEO partner"],
    process: ["Monthly strategy review", "Continuous optimization", "Performance reporting", "Strategy refinement"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">What I Offer</p>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">SEO Services</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Comprehensive SEO solutions designed to increase your visibility, traffic, and revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <div className="mb-4 inline-flex rounded-lg bg-secondary p-3 text-primary">
                        <service.icon size={28} />
                      </div>
                      <h2 className="mb-3 text-2xl font-bold text-foreground">{service.title}</h2>
                      <p className="mb-6 text-muted-foreground leading-relaxed">{service.desc}</p>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Benefits</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle size={14} className="mt-0.5 shrink-0 text-primary" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">Process</h3>
                          <ol className="space-y-2">
                            {service.process.map((p, j) => (
                              <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{j + 1}</span>
                                {p}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                      <Button asChild>
                        <Link to="/contact">Get Started <ArrowRight size={16} /></Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
