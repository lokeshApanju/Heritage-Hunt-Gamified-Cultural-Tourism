import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import placeDetails from "../data/placeDetails";
import places from "../data/places";

function PlaceDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const found = places.find((p) => p.id === parseInt(id));
    const details = placeDetails[found?.name];

    setPlace(found);
    setDetail(details);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <p className="text-xl text-gray-600 animate-pulse">
          ⏳ Loading place details...
        </p>
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-4">
            Place details not found
          </p>
          <Link
            to="/explore"
            className="text-green-700 font-semibold hover:underline"
          >
            ← Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url('${detail.image}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-end p-8 max-w-7xl mx-auto">
          <Link
            to="/explore"
            className="text-white mb-4 hover:text-green-300 transition"
          >
            ← Back to Explore
          </Link>

          <span className="bg-green-600 text-white text-sm px-4 py-1 rounded-full w-fit mb-3">
            {detail.tagline}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {place?.name}
          </h1>

          <p className="text-gray-300 text-lg">
            📍 {detail.location}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Quick Info Cards */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-12">
          <div className="bg-white p-5 rounded-xl shadow text-center">
            <span className="text-2xl">📅</span>
            <p className="text-xs text-gray-500 mt-1">Best Time</p>
            <p className="font-semibold text-green-800 text-sm">
              {detail.bestTime}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">
            <span className="text-2xl">🕐</span>
            <p className="text-xs text-gray-500 mt-1">Timings</p>
            <p className="font-semibold text-green-800 text-sm">
              {detail.timings}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">
            <span className="text-2xl">🎫</span>
            <p className="text-xs text-gray-500 mt-1">Entry Fee</p>
            <p className="font-semibold text-green-800 text-sm">
              {detail.entryFee}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">
            <span className="text-2xl">📏</span>
            <p className="text-xs text-gray-500 mt-1">Distance</p>
            <p className="font-semibold text-green-800 text-sm">
              {detail.distance}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            📖 About This Place
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {detail.description}
          </p>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🎯 Activities
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {detail.activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"
              >
                <span className="bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <p className="text-gray-700">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hotels & Hospitals */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Hotels */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              🏨 Nearby Hotels
            </h2>
            <div className="space-y-4">
              {detail.nearbyHotels.map((hotel, index) => (
                <div
                  key={index}
                  className="border border-green-200 rounded-lg p-4 hover:bg-green-50 transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {hotel.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        📍 {hotel.distance} away
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-700">
                        {hotel.price}
                      </p>
                      <p className="text-sm">{hotel.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hospitals */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              🏥 Nearby Hospitals
            </h2>
            <div className="space-y-4">
              {detail.nearbyHospitals.map((hospital, index) => (
                <div
                  key={index}
                  className="border border-red-200 rounded-lg p-4 hover:bg-red-50 transition"
                >
                  <h3 className="font-bold text-gray-800">
                    {hospital.name}
                  </h3>
                  <div className="flex justify-between mt-2">
                    <p className="text-sm text-gray-500">
                      📍 {hospital.distance}
                    </p>
                    <a
                      href={`tel:${hospital.phone}`}
                      className="text-sm text-red-600 font-semibold hover:underline"
                    >
                      📞 {hospital.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips & Nearby */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Tips */}
          <div className="bg-yellow-50 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              ⚠️ Travel Tips
            </h2>
            <div className="space-y-3">
              {detail.tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Places */}
          <div className="bg-blue-50 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              📍 Nearby Places
            </h2>
            <div className="space-y-3">
              {detail.nearbyPlaces.map((nearby, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-3 rounded-lg"
                >
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{nearby}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/planner"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            ✈️ Plan Trip Here
          </Link>

          <Link
            to="/safety"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            🛡️ Safety Info
          </Link>

          <Link
            to="/explore"
            className="bg-white border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            ← Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetail;