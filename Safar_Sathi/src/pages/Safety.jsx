import SafetyCard from "../components/SafetyCard";

function Safety() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 text-center mb-4">
           Tourist Safety
        </h1>

        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Your safety is our priority. Save these emergency contacts
          and safety tips before your trip.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-10">
          <SafetyCard
            icon="📞"
            title="Emergency Contacts"
            text="Police: 100 | Ambulance: 108 | Tourist Helpline: 1800-XXX-XXXX"
          />

          <SafetyCard
            icon="🏥"
            title="Nearby Hospitals"
            text="District hospitals and primary health centers available in all major tourist areas."
          />

          <SafetyCard
            icon="📋"
            title="Safety Tips"
            text="Travel in groups. Share your location. Keep emergency numbers saved. Avoid isolated areas at night."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <SafetyCard
            icon="📱"
            title="Digital ID"
            text="Keep digital copies of your ID proof and travel documents on your phone."
          />

          <SafetyCard
            icon="🗺️"
            title="Share Itinerary"
            text="Always share your trip plan with family or friends before traveling."
          />
        </div>

        {/* SOS Button */}
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition animate-pulse">
            🆘 SOS - Emergency
          </button>

          <p className="text-gray-500 text-sm mt-4">
            Press in case of emergency to alert local authorities
          </p>
        </div>
      </div>
    </div>
  );
}

export default Safety;