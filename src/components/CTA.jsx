export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(255,255,255,0.07),transparent),radial-gradient(600px_300px_at_90%_90%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Make an enquiry</h2>
          <p className="mt-3 text-white/70">We will get back to you shortly.</p>
          <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full name" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <input type="tel" placeholder="Phone" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 sm:col-span-2" />
            <textarea placeholder="Message" rows="4" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 sm:col-span-2" />
            <button type="button" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition sm:col-span-2">
              Submit
            </button>
          </form>
        </div>
        <p className="mt-6 text-center text-white/50 text-sm">© {new Date().getFullYear()} Shivalik Minimal. All rights reserved.</p>
      </div>
    </section>
  )
}
