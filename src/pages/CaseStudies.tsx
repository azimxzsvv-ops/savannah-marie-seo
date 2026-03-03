import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, BarChart3, Globe, DollarSign } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const caseStudies = [
  {
    title: "E-Commerce Fashion Brand",
    industry: "E-Commerce",
    icon: Globe,
    challenge: "Low organic traffic and poor keyword rankings despite a large product catalog.",
    metrics: [
      { label: "Organic Traffic", before: "2,500/mo", after: "15,000/mo", change: "+500%" },
      { label: "Keywords in Top 10", before: "12", after: "87", change: "+625%" },
      { label: "Monthly Revenue from SEO", before: "$3,200", after: "$28,500", change: "+790%" },
    ],
    results: "Achieved page 1 rankings for 87 high-intent keywords within 6 months, resulting in a massive revenue increase from organic search.",
  },
  {
    title: "Local Plumbing Company",
    industry: "Home Services",
    icon: BarChart3,
    challenge: "Invisible in local search results despite serving a large metro area.",
    metrics: [
      { label: "Google Maps Ranking", before: "Not visible", after: "Top 3", change: "Top 3" },
      { label: "Monthly Calls from Google", before: "8", after: "65", change: "+712%" },
      { label: "Website Leads", before: "15/mo", after: "120/mo", change: "+700%" },
    ],
    results: "Dominated local search results across 15+ service areas, becoming the go-to plumbing company in the metro area.",
  },
  {
    title: "B2B SaaS Platform",
    industry: "Technology",
    icon: DollarSign,
    challenge: "Heavily reliant on paid advertising with minimal organic visibility.",
    metrics: [
      { label: "Organic Traffic", before: "1,200/mo", after: "18,000/mo", change: "+1,400%" },
      { label: "Demo Requests from SEO", before: "5/mo", after: "45/mo", change: "+800%" },
      { label: "Customer Acquisition Cost", before: "$450", after: "$85", change: "-81%" },
    ],
    results: "Reduced customer acquisition costs by 81% by building a sustainable organic search pipeline that generates qualified leads on autopilot.",
  },
  {
    title: "Health & Wellness Blog",
    industry: "Health & Wellness",
    icon: TrendingUp,
    challenge: "New blog struggling to gain traction in a competitive health niche.",
    metrics: [
      { label: "Monthly Visitors", before: "500", after: "45,000", change: "+8,900%" },
      { label: "Featured Snippets", before: "0", after: "23", change: "23 snippets" },
      { label: "Ad Revenue", before: "$50/mo", after: "$3,200/mo", change: "+6,300%" },
    ],
    results: "Built topical authority through strategic content clusters, earning 23 featured snippets and turning the blog into a profitable asset.",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Proven Results</p>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Case Studies</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Real results from real businesses. See how SEO transformed their growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <div className="flex items-center gap-3">
                      <cs.icon size={24} />
                      <div>
                        <h2 className="text-xl font-bold">{cs.title}</h2>
                        <p className="text-sm text-primary-foreground/70">{cs.industry}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="mb-6 text-muted-foreground"><strong className="text-foreground">Challenge:</strong> {cs.challenge}</p>
                    <div className="mb-6 grid gap-4 sm:grid-cols-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="rounded-lg bg-secondary p-4 text-center">
                          <p className="text-xs text-muted-foreground">{m.label}</p>
                          <div className="mt-2 flex items-center justify-center gap-2 text-sm">
                            <span className="text-muted-foreground">{m.before}</span>
                            <ArrowRight size={14} className="text-primary" />
                            <span className="font-bold text-primary">{m.after}</span>
                          </div>
                          <p className="mt-1 text-xs font-semibold text-primary">{m.change}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Results:</strong> {cs.results}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">Want Results Like These?</h2>
          <p className="mt-4 text-primary-foreground/80">Book a free SEO audit and let's discuss your growth potential.</p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link to="/contact">Get Your Free Audit</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
