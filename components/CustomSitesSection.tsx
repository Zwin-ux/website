import React from 'react';

const CustomSitesSection = () => {
  return (
    <section id="custom-sites" className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Custom Sites & Web Apps
          </span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
          We design and build digital experiences that don’t just look good — they perform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 pr-0 md:pr-8">
          {[
            { title: "Modern Tech Stack", description: "Built with Next.js, React 19, Tailwind CSS for peak performance and developer experience." },
            { title: "SEO & Mobile-First", description: "Optimized for search engines and responsive on all devices from day one." },
            { title: "Fast, Secure, Scalable", description: "Blazing fast load times, robust security, and architecture that grows with you." },
            { title: "Versatile Projects", description: "From sleek landing pages to full-stack marketplaces and intricate client portals." }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-zinc-800/50 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Placeholder for an image or visual element */}
        <div className="mt-8 md:mt-0 h-64 md:h-auto bg-gradient-to-br from-purple-600 to-blue-700 rounded-xl flex items-center justify-center p-8 shadow-2xl">
          {/* Replace with an actual image or a more sophisticated graphic */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-white opacity-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <p className="text-white opacity-75 ml-4 text-lg">Visual representation of a sleek web app.</p>
        </div>
      </div>
    </section>
  );
};

export default CustomSitesSection;
