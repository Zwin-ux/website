import React from 'react';

const BusinessWebsiteSetupSection = () => {
  return (
    <section id="business-websites" className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-blue-400">Business Website Setup</span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
          Need a clean, professional site without the hassle? We set up a simple business website quickly and at a fair price.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[ 
          { title: 'Simple Pages', description: 'Home, About, Services, Contact. Add more as needed.' },
          { title: 'Mobile + SEO Basics', description: 'Looks good on phones and shows up properly on Google.' },
          { title: 'Fast Turnaround', description: 'Get online in days, not weeks.' },
        ].map((item) => (
          <div key={item.title} className="p-6 bg-zinc-800/50 rounded-lg">
            <h3 className="text-lg font-semibold text-zinc-100 mb-2">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 md:mt-12 max-w-3xl mx-auto bg-zinc-800/60 border border-zinc-700 rounded-xl p-6 text-center">
        <p className="text-2xl font-bold text-white mb-2">Starting at $50–$100</p>
        <p className="text-zinc-300 mb-6">Basic business website setup (home, about, services, contact) with mobile + SEO basics.</p>
        <a href="mailto:mzwin3545@gmail.com" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">Get Started</a>
      </div>
    </section>
  );
};

export default BusinessWebsiteSetupSection;
