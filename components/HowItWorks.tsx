import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'You Reach Out',
    description: 'Fill out our contact form with your project details, goals, and any specific requirements. The more you share, the better we can understand your vision.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'We Talk Vision',
    description: 'We schedule a consultation to discuss your project in detail, understand your goals, and explore how we can bring your vision to life with our expertise.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'We Ship Magic',
    description: 'Our team gets to work, keeping you updated throughout the process. We deliver exceptional results on time and within budget, ready to make an impact.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

const HowItWorks = () => {
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
              How It Works
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Our streamlined process ensures your project is handled with care and precision from start to finish.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 to-yellow-400" />
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10'}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 text-black mb-4 ${index % 2 === 0 ? 'float-right' : 'float-left'}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
                
                {/* Center dot */}
                <div className="w-2/12 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 border-4 border-zinc-900 z-10" />
                </div>
                
                {/* Number */}
                <div className="w-5/12 flex items-center">
                  <span className={`text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 to-zinc-900 ${index % 2 === 0 ? 'pl-10' : 'pr-10 text-right'}`}>
                    {step.number}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
