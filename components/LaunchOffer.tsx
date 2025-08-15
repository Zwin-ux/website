import React from 'react';
import { motion } from 'framer-motion';

const LaunchOffer = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
              Launch Offer
            </span>
          </h2>

          <div className="space-y-6 text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto">
            <p>
              To kick things off in our community, we’re working with our first four businesses for <span className="text-yellow-300 font-semibold">free</span>. No catch — we want real examples and testimonials to show what we can do.
            </p>
            <p>
              After that, our average service cost is <span className="text-yellow-300 font-semibold">$50 per project</span>. Affordable, straightforward pricing, and you’ll know exactly what you’re getting before we start.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchOffer;
