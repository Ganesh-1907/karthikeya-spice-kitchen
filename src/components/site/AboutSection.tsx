import { motion } from "framer-motion";
import { UserCheck, Utensils, Sparkles, Headphones } from "lucide-react";
import collage from "@/assets/about/about-collage.png";

export function AboutSection() {
  const features = [
    {
      icon: UserCheck,
      title: "Master Chefs",
      desc: "Our chefs bring decades of authentic expertise to every dish.",
      active: false,
    },
    {
      icon: Utensils,
      title: "Quality Food",
      desc: "We use only the freshest ingredients and premium spices.",
      active: false,
    },
    {
      icon: Sparkles,
      title: "Authentic Spices",
      desc: "Hand-picked, stone-ground spices for a signature taste.",
      active: false,
    },
    {
      icon: Headphones,
      title: "24/7 Service",
      desc: "Dedicated to serving you extraordinary Indian cuisine.",
      active: false,
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24 px-5 sm:px-6 bg-background text-cream">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Symmetric Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-gold font-serif italic text-lg tracking-widest">About Us</span>
            <span className="h-0.5 w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight mb-4">
            Our Story
          </h2>
          <p className="text-gold font-serif italic text-lg">
            "Bold Spices. Real Flavours. Made Fresh. Served with Love."
          </p>
        </motion.div>

        {/* Main About Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={collage}
              alt="Karthikeya Spice Kitchen"
              className="w-full rounded-2xl shadow-2xl border border-gold/20"
            />
          </motion.div>

          {/* Right Side: Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-white">
                Authentic South Indian <br /> Flavours in <span className="text-gold">Luton</span>
              </h3>
            </div>

            <div className="space-y-6 text-cream/70 leading-relaxed text-base sm:text-lg">
              <p>
                Karthikeya Spice Kitchen celebrates authentic South Indian food and vibrant Indian
                street food flavours with every plate.
              </p>
              <p>
                Our freshly prepared dishes bring bold spices to life across comforting curries,
                fragrant biryanis and irresistible starters.
              </p>
              <p>
                Whether you are dining in with family or picking up takeaway, we serve a warm,
                premium experience at our restaurant in the heart of Luton.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-l-4 border-gold pl-6">
              <div className="space-y-1">
                <p className="text-4xl font-bold text-gold">10</p>
                <div className="text-sm text-cream/40 uppercase tracking-widest">
                  Years of <br /> <span className="font-bold text-white">EXPERIENCE</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-gold">33</p>
                <div className="text-sm text-cream/40 uppercase tracking-widest">
                  Popular <br /> <span className="font-bold text-white">MASTER CHEFS</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-gold text-primary-foreground px-10 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all rounded-xl shadow-gold">
                Read More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Integrated Features Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-xl border transition-all hover:-translate-y-2 cursor-default ${
                f.active ? "bg-gold text-primary-foreground shadow-gold" : "glass border-gold/20 text-cream"
              }`}
            >
              <f.icon size={40} className={`mb-6 ${f.active ? "text-primary-foreground" : "text-gold"}`} />
              <h3 className="font-bold text-lg mb-3">{f.title}</h3>
              <p className={`text-xs leading-relaxed ${f.active ? "text-primary-foreground/90" : "text-cream/50"}`}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

