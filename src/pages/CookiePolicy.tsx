import Layout from "@/components/Layout";

const CookiePolicy = () => (
  <Layout>
    <section className="bg-secondary py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-foreground">Cookie Policy</h1>
        <p className="mt-2 text-muted-foreground">Last updated: March 3, 2026</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container prose prose-sm max-w-3xl text-foreground">
        <h2 className="font-display text-2xl font-bold text-foreground">1. What Are Cookies</h2>
        <p className="text-muted-foreground">Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and provide information to website owners.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">2. Types of Cookies We Use</h2>
        <p className="text-muted-foreground"><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</p>
        <p className="text-muted-foreground"><strong className="text-foreground">Analytics Cookies:</strong> We use Google Analytics cookies to understand how visitors interact with our website. These cookies collect anonymous data about pages visited, time on site, and traffic sources.</p>
        <p className="text-muted-foreground"><strong className="text-foreground">Functional Cookies:</strong> These remember your preferences and settings to provide a more personalized experience.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">3. Third-Party Cookies</h2>
        <p className="text-muted-foreground">Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties include Google Analytics and potentially social media platforms if share buttons are present.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">4. How to Manage Cookies</h2>
        <p className="text-muted-foreground">Most web browsers allow you to control cookies through their settings. You can set your browser to block or alert you about cookies. However, if you block essential cookies, some parts of the website may not function properly. You can manage your cookie preferences through your browser settings.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">5. Changes to This Policy</h2>
        <p className="text-muted-foreground">We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">6. Contact</h2>
        <p className="text-muted-foreground">If you have questions about our use of cookies, contact us at:<br />Email: bredex2456@outlook.com<br />Address: 1014 Oak Street, Burnet, TX 78611</p>
      </div>
    </section>
  </Layout>
);

export default CookiePolicy;
