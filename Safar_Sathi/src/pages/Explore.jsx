import { useEffect, useState } from "react";
import places from "../data/places";
import PlaceCard from "../components/PlaceCard";

function Explore() {
  const [allPlaces, setAllPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const results = await Promise.all(
          places.map(async (place) => {
            const res = await fetch(
              `https://en.wikipedia.org/api/rest_v1/page/summary/${place.wiki}`
            );
            const data = await res.json();

            return {
              ...place,
              description:
                data.extract || place.shortDesc,
            };
          })
        );

        setAllPlaces(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setAllPlaces(places);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  const filtered = allPlaces.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 text-center mb-6">
           Explore Places
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Click on any place card to see full details
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search places..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 animate-pulse">
               Loading places...
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((place, index) => (
              <PlaceCard key={index} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;