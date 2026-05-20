import Hero from "../components/Hero";
import OngoingEvents from "./OngoingEvents";

function Home() {
  return (
    <div>
      <Hero />

      <OngoingEvents/>

      {/* Intro Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
             What is Safar Sathi CG?
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Safar Sathi CG is a smart tourism platform designed to
            promote eco tourism, tribal culture, tourist safety, and
            trip planning in Chhattisgarh. It connects travelers with
            local experiences while supporting tribal artisans and
            sustainable tourism.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
            Tourism Highlights
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Eco Tourism
              </h3>
              <p className="text-gray-600 text-sm">
                Promote sustainable and nature-friendly travel
                experiences in Chhattisgarh.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Tribal Culture
              </h3>
              <p className="text-gray-600 text-sm">
                Experience authentic tribal art music and traditions
                of Bastar region.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Tourist Safety
              </h3>
              <p className="text-gray-600 text-sm">
                Emergency contacts safety tips and SOS features for
                tourist protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Explore Chhattisgarh?
        </h2>
        <p className="text-gray-300 mb-8">
          Start your smart tourism journey today
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/explore"
            className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore Places
          </a>
          <a
            href="/planner"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Plan Your Trip
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;