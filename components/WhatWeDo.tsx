import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Website Refresh",
    description:
      "We take your existing site (or create one if you don’t have it) and make sure it’s fast, mobile-friendly, and optimized so people can actually find you on Google. Better visibility, a smoother phone experience, and a more professional look.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4.5h18M3 9.75h18M3 15h18M3 19.5h18" />
      </svg>
    ),
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Local Automation Setup",
    description:
      "Small changes that save you hours. Online booking for your services, automated customer reminders, and simple order systems — so you can focus on running your business instead of chasing calls or messages.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3v3.75m4.5-3.75V6.75M4.5 9.75h15M6 12.75h12M8.25 15.75H16.5M5.25 6.75h13.5a1.5 1.5 0 011.5 1.5V18a3 3 0 01-3 3H6.75a3 3 0 01-3-3V8.25a1.5 1.5 0 011.5-1.5z" />
      </svg>
    ),
    color: "from-yellow-500 to-amber-400",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
              What We Do
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Bonelli helps local businesses get ahead with simple, effective tech upgrades. We focus on tools and improvements that actually make a difference in your day-to-day — not gimmicks or bloated software you’ll never use.
          </p>
          <p className="text-zinc-500 mt-2">We keep it simple. Two main services to start:</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-800/80 transition-all duration-300 group"
            >
              <div className={`w-20 h-20 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-black`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-zinc-400 mb-6">{service.description}</p>
              <a
                href="#commission-form"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold shadow hover:shadow-lg transition-all duration-200"
              >
                Get started
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
