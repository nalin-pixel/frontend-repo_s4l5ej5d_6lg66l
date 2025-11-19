export default function Projects() {
  const projects = [
    {
      name: 'Shivalik Boulevard',
      tag: 'Residential',
      image: 'https://images.unsplash.com/photo-1529429612778-bd8b66c113aa?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Shivalik Square',
      tag: 'Commercial',
      image: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Shivalik Vista',
      tag: 'Residences',
      image: 'https://images.unsplash.com/photo-1508020963102-c6c723be5765?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="projects" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <a href="#contact" className="text-white/70 hover:text-white">View all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-white/60 text-sm">{p.tag}</p>
                <h3 className="text-white text-xl font-semibold mt-1">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
