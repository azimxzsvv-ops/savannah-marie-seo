import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="bg-secondary py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-foreground">Terms & Conditions</h1>
        <p className="mt-2 text-muted-foreground">Last updated: March 3, 2026</p>
      </div>
    </section>
    <section className="py-16">
      <div className="container prose prose-sm max-w-3xl text-foreground">
        <h2 className="font-display text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground">By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use this website.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">2. Services</h2>
        <p className="text-muted-foreground">Savannah Marie provides SEO consulting and digital marketing services. Specific service details, timelines, and deliverables will be outlined in individual service agreements.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">3. Intellectual Property</h2>
        <p className="text-muted-foreground">All content on this website, including text, graphics, logos, images, and software, is the property of Savannah Marie and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without prior written consent.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
        <p className="text-muted-foreground">Savannah Marie shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services. Our total liability shall not exceed the amount paid for services in the preceding 12 months.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">5. No Guarantees</h2>
        <p className="text-muted-foreground">While we strive to achieve the best possible results, SEO results depend on many factors beyond our control. We do not guarantee specific rankings, traffic levels, or revenue outcomes.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">6. Governing Law</h2>
        <p className="text-muted-foreground">These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.</p>

        <h2 className="mt-8 font-display text-2xl font-bold text-foreground">7. Contact</h2>
        <p className="text-muted-foreground">For questions about these Terms, contact us at:<br />Email: bredex2456@outlook.com<br />Address: 1014 Oak Street, Burnet, TX 78611</p>
      </div>
    </section>
  </Layout>
);

export default Terms;
