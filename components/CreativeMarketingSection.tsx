import React from 'react';

const CreativeMarketingSection = () => {
  return (
    <section id="creative-marketing" className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Creative Marketing & Strategy
          </span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
          We bridge code and culture — making marketing that moves people and metrics.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            title: "Visual Storytelling",
            description: "Crafting compelling narratives with conversion in mind. Your brand's story, beautifully told.",
            bgColor: "bg-gradient-to-br from-pink-600 to-red-700"
          },
          {
            title: "Brand Systems, Not Just Assets",
            description: "Building cohesive brand identities that resonate across all touchpoints.",
            bgColor: "bg-gradient-to-br from-red-600 to-yellow-700"
          },
          {
            title: "Data-Driven Growth Tools",
            description: "Leveraging A/B testing, funnel design, smart copy, and influencer ops to achieve measurable results.",
            bgColor: "bg-gradient-to-br from-yellow-600 to-orange-700"
          },
          {
            title: "Human-Centric Social Content",
            description: "Creating social media content that doesn’t feel corporate — it feels authentic and engaging.",
            bgColor: "bg-gradient-to-br from-orange-600 to-pink-700"
          }
        ].map((item, index) => (
          <div key={index} className={`p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ${item.bgColor} text-white`}>
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-md opacity-90">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Optional: Add a small gallery or visual element here */}
      <div className="mt-12 text-center">
        <p className="text-zinc-400 italic">Let's make your brand unforgettable.</p>
      </div>
    </section>
  );
};

export default CreativeMarketingSection;
