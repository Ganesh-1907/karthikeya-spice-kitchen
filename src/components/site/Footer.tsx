import { RESTAURANT } from "@/data/menu";
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="font-serif text-gold text-2xl tracking-widest uppercase">
              {RESTAURANT.name}
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Experience the true essence of South Indian flavors and vibrant street food in the heart of Luton. We bring you authentic recipes made with passion and premium spices.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-white font-serif text-xl font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "Menu", href: "#menu" },
                { name: "About Us", href: "#about" },
                { name: "Gallery", href: "#gallery" },
                { name: "Reservation", href: "#reservation" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/50 hover:text-gold flex items-center gap-2 group transition-all text-sm">
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-6">
            <h4 className="text-white font-serif text-xl font-bold">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 shrink-0" size={18} />
                <p className="text-cream/50 text-sm leading-relaxed">
                  {RESTAURANT.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gold shrink-0" size={18} />
                <a href={RESTAURANT.phoneLink} className="text-cream/50 hover:text-gold transition-all text-sm font-mono">
                  {RESTAURANT.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-gold shrink-0" size={18} />
                <a href="mailto:info@karthikeya.co.uk" className="text-cream/50 hover:text-gold transition-all text-sm">
                  info@karthikeya.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter / Hours Column */}
          <div className="space-y-6">
            <h4 className="text-white font-serif text-xl font-bold">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-cream/40">Mon - Wed:</span>
                <span className="text-gold">12:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cream/40">Thu:</span>
                <span className="text-gold">12:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cream/40">Fri - Sat:</span>
                <span className="text-gold">12:00 PM - 11:30 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cream/40">Sun:</span>
                <span className="text-gold">1:00 PM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-cream/30 uppercase tracking-widest">
            © {currentYear} {RESTAURANT.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] text-cream/20 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-gold transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-all">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-all">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

