import { useState } from "react";

function PlannerForm() {
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const [interest, setInterest] = useState("Adventure");
  const [plan, setPlan] = useState([]);

  const generatePlan = () => {
    const plans = {
      Adventure: [
        "Day 1 → Raipur - Arrival & Local Sightseeing",
        "Day 2 → Chitrakote Waterfall - Trekking & Boating",
        "Day 3 → Tirathgarh Falls - Nature Walk",
        "Day 4 → Kanger Valley Caves - Cave Exploration",
        "Day 5 → Departure",
      ],
      Culture: [
        "Day 1 → Raipur - Museum Visit",
        "Day 2 → Sirpur - Ancient Temples",
        "Day 3 → Bastar - Tribal Village Visit",
        "Day 4 → Jagdalpur - Local Market",
        "Day 5 → Departure",
      ],
      Nature: [
        "Day 1 → Raipur - Arrival",
        "Day 2 → Mainpat - Hill Station",
        "Day 3 → Chitrakote - Waterfall",
        "Day 4 → Kanger Valley - Wildlife",
        "Day 5 → Departure",
      ],
    };

    setPlan(plans[interest] || plans["Adventure"]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget (₹)
          </label>
          <input
            type="number"
            placeholder="e.g. 15000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Days
          </label>
          <input
            type="number"
            placeholder="e.g. 5"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interest Type
          </label>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option>Adventure</option>
            <option>Culture</option>
            <option>Nature</option>
          </select>
        </div>
      </div>

      <button
        onClick={generatePlan}
        className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition"
      >
        ✈️ Generate Plan
      </button>

      {plan.length > 0 && (
        <div className="mt-6 bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-green-800 mb-4">
            📋 Your Itinerary
          </h3>

          {plan.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mb-3"
            >
              <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full font-bold">
                {index + 1}
              </span>

              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlannerForm;