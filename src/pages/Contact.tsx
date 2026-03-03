import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  business: z.string().trim().max(100).optional(),
  website: z.string().trim().max(255).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", business: "", website: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message Sent!", description: "Thank you! I'll get back to you within 24 hours." });
    setForm({ name: "", email: "", business: "", website: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <Layout>
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</p>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Let's Grow Your Business</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ready to dominate search results? Book your free SEO strategy call today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Book Your Free SEO Strategy Call</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="mt-1.5" />
                        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" className="mt-1.5" />
                        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="business">Business Name</Label>
                        <Input id="business" value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="Your business" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="website">Website URL</Label>
                        <Input id="website" value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="https://yoursite.com" className="mt-1.5" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell me about your SEO goals..." className="mt-1.5" rows={5} />
                      {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href="mailto:bredex2456@outlook.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">bredex2456@outlook.com</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <a href="tel:+15214684978" className="text-sm text-muted-foreground hover:text-primary transition-colors">+1 (521) 468-4978</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Address</p>
                        <p className="text-sm text-muted-foreground">1014 Oak Street, Burnet, TX 78611</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Mon–Fri: 9:00 AM – 5:00 PM CST</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="flex aspect-video items-center justify-center rounded-lg bg-muted">
                    <div className="text-center text-muted-foreground">
                      <MapPin size={32} className="mx-auto mb-2 opacity-30" />
                      <p className="text-sm">Burnet, Texas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
