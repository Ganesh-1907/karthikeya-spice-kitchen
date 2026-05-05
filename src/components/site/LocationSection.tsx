import { motion } from "framer-motion";
import { MapPin, Phone, User, ExternalLink } from "lucide-react";
import { RESTAURANT } from "@/data/menu";
import { openMaps } from "@/lib/maps";
import exteriorImg from "@/assets/restaurant-exterior.png";

export function LocationSection() {
  return (
    <section
      id="location"
      className="scroll-mt-24 py-20 px-5 sm:px-6 bg-[#0D0D0D] text-white"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-gold font-serif italic text-lg tracking-widest">Location</span>
            <span className="h-0.5 w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl text-white font-bold leading-tight">
            Visit Us in Luton
          </h2>
          <p className="text-cream/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the authentic heritage of Indian spices. We are conveniently
            located in the heart of Luton, ready to serve you extraordinary flavors.
          </p>
        </div>

        {/* Desktop Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Restaurant Photo with Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-white/10 min-h-[400px] lg:h-full group"
          >
            <img
              src={exteriorImg}
              alt="Karthikeya Spice Kitchen Exterior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-dark border border-gold/30 p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white leading-tight">8 Gordon Street</p>
                  <p className="text-sm text-cream/60">Luton, LU1 2QP</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] rounded-2xl p-8 border border-gold/20 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-3xl text-gold mb-8">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-gold">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cream/40">Manager</p>
                    <p className="text-xl font-bold text-white">{RESTAURANT.manager}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cream/40">Phone Number</p>
                    <p className="text-xl font-bold text-white">{RESTAURANT.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={RESTAURANT.phoneLink}
              className="mt-8 flex items-center justify-center gap-3 w-full py-4 bg-gold text-primary-foreground rounded-xl font-bold text-lg hover:bg-gold-soft transition-colors shadow-gold"
            >
              <Phone size={20} fill="currentColor" /> Call Now
            </a>
          </motion.div>

          {/* Directions / Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_1px,_transparent_1px)] bg-[size:20px_20px]" />
            </div>
            
            <div className="relative z-10">
              <h3 className="font-serif text-3xl text-white mb-6">Find Our Kitchen</h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-8">
                Located conveniently at 8 Gordon Street. Tap below to get instant navigation through Google Maps.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-cream/80">
                  <MapPin size={18} className="text-gold shrink-0 mt-1" />
                  <span className="text-sm">8 Gordon Street, Luton, LU1 2QP, United Kingdom</span>
                </div>
              </div>
            </div>

            <button
              onClick={openMaps}
              className="relative z-10 mt-8 flex items-center justify-center gap-3 w-full py-4 border border-gold text-gold rounded-xl font-bold text-lg hover:bg-gold/10 transition-all group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            >
              <ExternalLink size={20} /> Get Directions
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}



