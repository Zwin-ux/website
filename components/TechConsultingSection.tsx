import React from 'react';

const TechConsultingSection = () => {
  return (
    <section id="tech-consulting" className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-green-500">
            Tech Consulting
          </span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
          We help you make smart technical decisions early — before they become expensive.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Choose the Right Stack",
            description: "Firebase vs. Supabase? Shopify or custom? We guide you through critical technology choices.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-3 text-blue-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-.813 2.846a4.5 4.5 0 00-3.09 3.09zM18.25 12L15.404 12.813a4.5 4.5 0 00-3.09 3.09L11.25 18.75l.813-2.846a4.5 4.5 0 003.09-3.09L18.75 12l-2.846-.813a4.5 4.5 0 00-3.09-3.09L11.25 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L18.75 12z" /></svg>
          },
          {
            title: "Scale Without Chaos",
            description: "Structure your backend, data, and infrastructure for long-term sanity and sustainable growth.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-3 text-teal-400"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3m-16.5 0h16.5M3.75 0v.75M12 16.5v3.75m0-3.75V3.75M5.25 16.5V3.75m13.5 12.75V3.75M9 16.5v3.75M15 16.5v3.75M3.75 9h16.5M6.75 21H17.25" /></svg>

          },
          {
            title: "Automate Workflows",
            description: "Use GPT, n8n, Zapier, and other tools to save time, reduce manual effort, and unlock new efficiencies.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-3 text-green-400"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" /></svg>
          }
        ].map((item, index) => (
          <div key={index} className="p-6 bg-zinc-800/50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 flex flex-col items-center text-center">
            {item.icon}
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">{item.title}</h3>
            <p className="text-zinc-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechConsultingSection;
