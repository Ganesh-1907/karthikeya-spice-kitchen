import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Calendar, User, Sparkles, Clock, Phone } from "lucide-react";
import reservationImg from "@/assets/reservation.png";

const WHATSAPP_NUMBER = "447717217963";

export function ReservationSection() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      `*New Table Reservation* 🍽️`,
      ``,
      `*Name:* ${form.name || "—"}`,
      `*Mobile:* ${form.mobile || "—"}`,
      `*Date:* ${form.date || "—"}`,
      `*Time:* ${form.time || "—"}`,
      `*Guests:* ${form.guests || "—"}`,
      `*Special Requests:* ${form.requests || "None"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="reservation" className="scroll-mt-24 py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered Heading */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-gold font-serif italic text-xl tracking-widest uppercase">Reservation</span>
            <span className="h-0.5 w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-white leading-tight">
            Book A Table
          </h2>
          <p className="text-cream/40 mt-4 max-w-2xl mx-auto italic">
            "Experience authentic flavours in an atmosphere of warmth and elegance. Secure your journey through the spices of India today."
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Premium Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-auto lg:h-[650px]">
              <img
                src={reservationImg}
                alt="Dine with us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                  <p className="text-gold font-serif italic text-lg mb-2">Signature Experience</p>
                  <p className="text-white text-sm leading-relaxed opacity-80">
                    Join us for an unforgettable culinary voyage where every dish tells a story of heritage and spice.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Refined Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0A0A0A] p-8 sm:p-14 rounded-[2.5rem] border border-white/5 shadow-2xl relative"
          >
            <div className="mb-12 text-center sm:text-left">
              <h3 className="text-3xl font-serif font-bold text-white mb-3">Make a Reservation</h3>
              <p className="text-cream/50">Please fill in your details to secure your table.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-gold/60 font-bold mb-2 block ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-4 rounded-xl text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-cream/10"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-gold/60 font-bold mb-2 block ml-1">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-4 rounded-xl text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-cream/10"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Date, Time, Guests */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-gold/60 font-bold mb-2 block ml-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40 group-focus-within:text-gold transition-colors pointer-events-none" size={18} />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-4 rounded-xl text-white focus:outline-none focus:border-gold/50 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-gold/60 font-bold mb-2 block ml-1">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40 group-focus-within:text-gold transition-colors pointer-events-none" size={18} />
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-4 rounded-xl text-white focus:outline-none focus:border-gold/50 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-gold/60 font-bold mb-2 block ml-1">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40 group-focus-within:text-gold transition-colors" size={18} />
                    <input
                      type="text"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      placeholder="e.g. 4"
                      className="w-full bg-white/5 border border-white/10 pl-12 pr-4 py-4 rounded-xl text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-cream/10"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Special Requests */}
              <div className="relative group">
                <label className="text-xs uppercase tracking-widest text-gold/60 font-bold mb-2 block ml-1">Special Requests</label>
                <textarea
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                  placeholder="Tell us about any allergies or special occasions..."
                  className="w-full bg-white/5 border border-white/10 px-4 py-4 rounded-xl text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-cream/10 h-32"
                />
              </div>

              <button type="submit" className="w-full bg-gold text-primary-foreground font-bold uppercase tracking-widest py-5 hover:brightness-110 transition-all shadow-xl shadow-gold/10 rounded-2xl flex items-center justify-center gap-3 group active:scale-[0.98]">
                Confirm My Reservation
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
