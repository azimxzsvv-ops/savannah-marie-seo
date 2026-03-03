import Layout from "@/components/Layout";

const Disclaimer = () => (
  <Layout>
    <section className="bg-secondary py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-foreground">Disclaimer</h1>
        <p className="mt-2 text-muted-foreground">Last updated: March 3, 2026</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container prose prose-sm max-w-3xl text-foreground">
        <h2 className="font-display text-2xl font-bold text-foreground">1. General Disclaimer</h2>
        <p className="text-muted-foreground">The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">2. Earnings Disclaimer</h2>
        <p className="text-muted-foreground">Any income or earnings statements are estimates only. There is no assurance that you will achieve similar results. Your results will depend on many factors, including but not limited to your background, experience, industry, and work ethic. All business carries risk and no action should be taken solely based on the information on this website.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">3. Professional Advice Disclaimer</h2>
        <p className="text-muted-foreground">The content on this website does not constitute professional advice. SEO strategies and recommendations should be evaluated in the context of your specific business situation. We recommend consulting with qualified professionals before making business decisions based on SEO advice.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">4. Testimonials Disclaimer</h2>
        <p className="text-muted-foreground">Testimonials and case studies on this website represent individual experiences and results. They are not guaranteed outcomes and individual results may vary based on many factors.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">5. External Links</h2>
        <p className="text-muted-foreground">This website may contain links to external sites. We are not responsible for the content, privacy policies, or practices of any third-party websites.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">6. Contact</h2>
        <p className="text-muted-foreground">If you have questions about this Disclaimer, contact us at:<br />Email: bredex2456@outlook.com<br />Address: 1014 Oak Street, Burnet, TX 78611</p>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
