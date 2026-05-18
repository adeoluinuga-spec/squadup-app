export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">
          SquadUp
        </h1>

        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Join Waitlist
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="px-8 py-24 max-w-6xl mx-auto">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
            Curated Experiences • Meaningful Connections
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            Find Your People.
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            SquadUp helps you discover beautiful experiences,
            meaningful company, and unforgettable memories —
            all curated around your vibe.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
              Explore Experiences
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full text-lg hover:bg-white/10 transition">
              Become a Creator
            </button>
          </div>

        </div>

      </section>

      {/* FEATURED EXPERIENCES */}
      <section className="px-8 pb-24 max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Featured Experiences
          </h2>

          <p className="text-gray-400">
            Lagos • Curated Weekly
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">

            <div className="h-64 bg-gradient-to-br from-orange-300 to-pink-500"></div>

            <div className="p-6">
              <p className="text-sm text-gray-400 mb-3">
                Rooftop Dinner • ₦25k
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Sunset & Stories
              </h3>

              <p className="text-gray-300">
                Warm conversations, beautiful city lights,
                soulful music, and meaningful company.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">

            <div className="h-64 bg-gradient-to-br from-blue-300 to-cyan-500"></div>

            <div className="p-6">
              <p className="text-sm text-gray-400 mb-3">
                Wellness Retreat • ₦40k
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Quiet Escape
              </h3>

              <p className="text-gray-300">
                Slow mornings, reflection, healing energy,
                and restorative human connection.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">

            <div className="h-64 bg-gradient-to-br from-yellow-200 to-amber-500"></div>

            <div className="p-6">
              <p className="text-sm text-gray-400 mb-3">
                Beach Circle • ₦18k
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Golden Hour Club
              </h3>

              <p className="text-gray-300">
                Ocean breeze, laughter, games,
                music, and beautiful memories.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="px-8 pb-32">

        <div className="max-w-4xl mx-auto bg-zinc-900 border border-white/10 rounded-[40px] p-12 text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
            SquadUp
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Stop Scrolling Life.
            <br />
            Start Living It.
          </h2>

          <p className="text-gray-300 text-xl mb-10">
            Beautiful experiences begin with one yes.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
            Join The Waitlist
          </button>

        </div>

      </section>

    </main>
  );
}