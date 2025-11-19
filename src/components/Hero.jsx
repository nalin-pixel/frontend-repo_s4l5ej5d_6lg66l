import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elevating Spaces with Minimal Elegance
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80">
            A modern, minimalist real estate experience inspired by Shivalik — refined design, premium materials, and purposeful spaces that feel like home.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition">
              Explore Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/20 transition">
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
