import { motion } from "framer-motion";
import { Star, Quote, UserRound } from "lucide-react";

type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  dateLabel: string;
};

const reviews: Review[] = [
  {
    id: "r1",
    name: "Priya Sharma",
    rating: 5,
    text: "The most authentic South Indian flavors I've found in Luton. The Gongura Chicken was absolutely phenomenal and the service was exceptional.",
    dateLabel: "Verified Guest",
  },
  {
    id: "r2",
    name: "James Wilson",
    rating: 5,
    text: "Incredible Biryani! Each grain of rice was perfectly seasoned and the meat was so tender. A must-visit for any curry lover.",
    dateLabel: "Food Critic",
  },
  {
    id: "r3",
    name: "Ananya Patel",
    rating: 5,
    text: "The ambiance is stunning, perfect for a family dinner. Their starters are crispy and full of spice. Definitely our new favorite spot.",
    dateLabel: "Local Guide",
  },
  {
    id: "r4",
    name: "Marcus Thompson",
    rating: 4,
    text: "Great atmosphere and even better food. The Tandoori Chicken was cooked to perfection. Highly recommend the Mango Lassi as well.",
    dateLabel: "Verified Guest",
  },
];

function RatingStars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < value ? "fill-gold text-gold" : "text-gold/20"} />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 relative py-24 px-6 bg-background"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-gold font-serif italic text-xl tracking-widest uppercase">Testimonials</span>
            <span className="h-0.5 w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl text-white font-bold leading-tight">
            Guest Stories
          </h2>
          <p className="text-gold mt-6 max-w-2xl mx-auto font-serif italic">
            "We take great pride in the happiness of our guests. Here is what some of our regular diners have to say about their experience with us."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-[2rem] border border-white/5 p-8 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-500">
                <Quote size={20} className="opacity-50 group-hover:opacity-100" />
              </div>
              
              <div className="mb-6 pt-4">
                <RatingStars value={r.rating} />
              </div>
              
              <p className="text-cream/80 leading-relaxed italic mb-8 relative z-10">
                "{r.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center overflow-hidden">
                  <UserRound size={20} className="text-gold/50" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-bold">{r.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold opacity-60">
                    {r.dateLabel}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full border border-gold/20 glass">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gold/20 flex items-center justify-center overflow-hidden">
                  <UserRound size={12} className="text-gold" />
                </div>
              ))}
            </div>
            <p className="text-cream/60 text-sm">
              Joined by over <span className="text-gold font-bold">500+</span> happy diners this month
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
