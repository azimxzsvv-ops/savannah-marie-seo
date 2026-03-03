import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-xl font-bold">
              SAVANNAH<span className="text-primary">MARIE</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Helping businesses rank higher, drive organic traffic, and grow faster through data-driven SEO strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {[{ to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/services", label: "Services" }, { to: "/case-studies", label: "Case Studies" }, { to: "/blog", label: "Blog" }, { to: "/contact", label: "Contact" }].map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Technical SEO", "On-Page SEO", "Local SEO", "Keyword Research", "Link Building", "Content Optimization"].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-primary transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
                <a href="mailto:bredex2456@outlook.com" className="hover:text-primary transition-colors">bredex2456@outlook.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
                <a href="tel:+15214684978" className="hover:text-primary transition-colors">+1 (521) 468-4978</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>1014 Oak Street, Burnet, TX 78611,United States of America
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 text-xs opacity-60 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Savannah Marie. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
