import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="bg-secondary py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-muted-foreground">Last updated: March 3, 2026</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container prose prose-sm max-w-3xl text-foreground">
        <h2 className="font-display text-2xl font-bold text-foreground">1. Information We Collect</h2>
        <p className="text-muted-foreground">We collect information you voluntarily provide when you fill out our contact form, including your name, email address, business name, website URL, and message content. We also collect certain information automatically through Google Analytics, including your IP address, browser type, pages visited, and time spent on our site.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
        <p className="text-muted-foreground">We use the information collected to respond to your inquiries, provide SEO services, improve our website experience, and send occasional marketing communications (with your consent). We do not sell, rent, or share your personal information with third parties except as required by law.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">3. Google Analytics</h2>
        <p className="text-muted-foreground">We use Google Analytics to analyze website traffic and usage patterns. Google Analytics uses cookies to collect anonymous data about how visitors use our site. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">4. GDPR Compliance</h2>
        <p className="text-muted-foreground">If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These include the right to access, correct, update, or request deletion of your personal information. You may also object to processing of your personal data, request data portability, and withdraw consent at any time.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">5. Data Security</h2>
        <p className="text-muted-foreground">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">6. Data Retention</h2>
        <p className="text-muted-foreground">We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">7. Contact Us</h2>
        <p className="text-muted-foreground">If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us at:<br />Email: bredex2456@outlook.com<br />Phone: +1 (521) 468-4978<br />Address: 1014 Oak Street, Burnet, TX 78611</p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
