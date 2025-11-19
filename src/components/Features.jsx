export default function Features() {
  const items = [
    {
      title: 'Prime Locations',
      desc: 'Address-focused developments across the city for unmatched convenience and value.',
    },
    {
      title: 'Architecture-led',
      desc: 'Clean lines, thoughtful proportions, and timeless minimal aesthetics.',
    },
    {
      title: 'Crafted Amenities',
      desc: 'Wellness, community, and lifestyle-first spaces designed for everyday living.',
    },
  ]

  return (
    <section id="about" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-white text-xl font-semibold">{i.title}</h3>
              <p className="mt-3 text-white/70">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
