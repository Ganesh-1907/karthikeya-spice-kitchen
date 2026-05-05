import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Utensils } from "lucide-react";
import { MENU } from "@/data/menu";
import { usePlate } from "./PlateContext";

export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const { add, has, qtyOf } = usePlate();
  const activeCategory = MENU.find((c) => c.id === active) || MENU[0];

  return (
    <section id="menu" className="scroll-mt-24 relative py-20 bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-0.5 w-10 bg-gold" />
            <span className="text-gold font-serif italic text-lg tracking-widest">Food Menu</span>
            <span className="h-0.5 w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
            Our Signature Menu
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b border-white/10 mb-12 gap-y-2">
          {MENU.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative px-6 py-4 flex items-center gap-3 transition-all ${
                  isActive ? "text-gold" : "text-cream/50 hover:text-cream"
                }`}
              >
                <Utensils size={20} className={isActive ? "text-gold" : "text-cream/30"} />
                <div className="text-left">
                  <p className="font-bold text-xs uppercase tracking-tight">{cat.title}</p>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {activeCategory.items.map((item) => {
              const quantity = qtyOf(item.id);
              const added = has(item.id);

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 group glass p-4 rounded-xl border border-white/5 hover:border-gold/30 transition-all"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-white/10 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-1">
                      <h4 className="font-bold text-white border-b border-dotted border-white/20 flex-grow pb-1">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs text-cream/50 italic line-clamp-1">{item.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => add(item)}
                    className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition hover:bg-gold hover:text-primary-foreground"
                    aria-label={`Add ${item.name} to plate`}
                    title="Add to plate"
                  >
                    {added ? <Check size={17} /> : <Utensils size={17} />}
                    {quantity > 0 && (
                      <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-primary-foreground">
                        {quantity}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
