import React from 'react';

const CreativeMarketingSection = () => {
  return (
    <section id="creative-marketing" className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500">
            Marketing & Content
          </span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
          Practical help with content, brand basics, and simple growth tactics.
        </p>
      </div>

      <div className="space-y-8">
        {[
          {
            title: "Clear Messaging",
            description: "Say what you do and why it helps — plain and simple.",
            bgColor: "bg-gradient-to-br from-amber-600 to-orange-700"
          },
          {
            title: "Brand Basics",
            description: "Clean logo use, colors, and type so everything matches.",
            bgColor: "bg-gradient-to-br from-orange-600 to-yellow-700"
          },
          {
            title: "Simple Growth",
            description: "Basic landing pages, email capture, and light A/B testing.",
            bgColor: "bg-gradient-to-br from-yellow-600 to-amber-700"
          },
          {
            title: "Social Content",
            description: "Short posts and visuals that feel human, not corporate.",
            bgColor: "bg-gradient-to-br from-amber-600 to-yellow-700"
          }
        ].map((item, index) => (
          <div key={index} className={`p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ${item.bgColor} text-white`}>
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-md opacity-90">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativeMarketingSection;
