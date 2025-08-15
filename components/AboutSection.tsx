import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              I'm Mazen Zwin, a passionate full-stack developer and technical consultant with a love for creating innovative digital solutions. 
            </p>
            <p className="text-zinc-400 mb-12">
              My journey in software development has led me to work on diverse projects, from custom web applications to complex technical integrations. 
            </p>
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-zinc-200">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Frontend Development</h4>
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                Creating responsive, interactive user interfaces with modern frameworks and libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded">React</span>
                <span className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded">Next.js</span>
                <span className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded">TypeScript</span>
                <span className="px-2 py-1 text-xs bg-blue-900/30 text-blue-300 rounded">Tailwind CSS</span>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Backend Development</h4>
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                Building robust APIs, databases, and server-side applications that scale.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-green-900/30 text-green-300 rounded">Node.js</span>
                <span className="px-2 py-1 text-xs bg-green-900/30 text-green-300 rounded">Python</span>
                <span className="px-2 py-1 text-xs bg-green-900/30 text-green-300 rounded">PostgreSQL</span>
                <span className="px-2 py-1 text-xs bg-green-900/30 text-green-300 rounded">MongoDB</span>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white">Technical Consulting</h4>
              </div>
              <p className="text-zinc-400 text-sm mb-3">
                Providing strategic technical guidance and architecture decisions for complex projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-purple-900/30 text-purple-300 rounded">Architecture</span>
                <span className="px-2 py-1 text-xs bg-purple-900/30 text-purple-300 rounded">Performance</span>
                <span className="px-2 py-1 text-xs bg-purple-900/30 text-purple-300 rounded">Security</span>
                <span className="px-2 py-1 text-xs bg-purple-900/30 text-purple-300 rounded">DevOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Current Focus
          </h3>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            I'm always working on something new and exciting, collaborating with talented individuals to create innovative digital experiences.
          </p>
          <div className="max-w-md mx-auto">
            <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-700/20 text-blue-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path d="M10 2.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 0V4m0 6.5v7m0 0H7.5m2.5 0H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="font-semibold text-lg text-white">Creative Collaborations</span>
              </div>
              <div className="text-zinc-300 text-sm mb-4">
                Working with talented artists and creators to bring innovative digital experiences to life. I provide the technical expertise to transform creative visions into interactive web applications and digital platforms.
              </div>
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-300 font-semibold">Ongoing</span>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-zinc-200 mb-4">OUR PLAYLIST</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://open.spotify.com/embed/playlist/41svkVH46zY2N1ZhdG4OhA" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <a 
            href="mailto:mzwin3545@gmail.com" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
