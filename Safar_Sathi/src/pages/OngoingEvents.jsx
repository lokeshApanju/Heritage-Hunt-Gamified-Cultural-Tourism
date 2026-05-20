import { useState } from "react";

function OngoingEvents() {
  const [filter, setFilter] = useState("All");

  // Demo data: Marked as Ongoing/Upcoming for presentation
  const events = [
    {
      id: 1,
      name: "Bastar Dussehra",
      status: "Ongoing",
      date: "Oct 1 - Nov 15",
      location: "Jagdalpur, Bastar",
      desc: "Unique 75-day tribal festival celebrating local deities with chariots, folk dances, and cultural rituals.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xF46LswZQbanjGFQFI_sQhqEwfLf33p8Jg&s",
    },
    {
      id: 2,
      name: "Sirpur National Dance Festival",
      status: "Upcoming",
      date: "Jan 15 - Jan 20",
      location: "Sirpur, Mahasamund",
      desc: "Classical and folk dance performances by artists across India at the ancient archaeological site.",
      image: "https://www.hlimg.com/images/events/738X538/event_1536831184m2.jpg?w=400&dpr=2.6",
    },
    {
      id: 3,
      name: "Madai Tribal Festival",
      status: "Ongoing",
      date: "Feb 10 - Mar 5",
      location: "Various Tribal Villages",
      desc: "Traditional tribal gathering featuring music, dance, local markets, and community celebrations.",
      image: "https://htoindia.com/wp-content/uploads/2017/11/madai-festival-a-festival-that-travel.jpg",
    },
    {
      id: 4,
      name: "Rajim Kumbh Mela",
      status: "Upcoming",
      date: "Feb 18 - Mar 5",
      location: "Rajim, Gariaband",
      desc: "Grand religious gathering at the confluence of Mahanadi, Pairi, and Sondur rivers.",
      image: "https://images.news18.com/ibnkhabar/uploads/2024/02/Kumbh-2024-02-0303798029639dce78dfb3b5caa8d4e9.jpeg",
    },
    {
      id: 5,
      name: "Hareli Harvest Festival",
      status: "Upcoming",
      date: "July 15 - Aug 10",
      location: "Rural Chhattisgarh",
      desc: "Agricultural festival celebrating the new crop season with folk songs, bullock races, and tribal rituals.",
      image: "https://culturetravel.in/images/cultureEvents/hareliFestival/img_4.jpg",
    },
  ];

  const filtered = filter === "All" ? events : events.filter((e) => e.status === filter);

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-900 mb-3">Ongoing & Upcoming Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover live festivals, cultural gatherings, and seasonal celebrations happening across Chhattisgarh.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["All", "Ongoing", "Upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                filter === tab
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-white text-green-800 border border-green-300 hover:bg-green-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative">
                <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                  event.status === "Ongoing" 
                    ? "bg-green-600 text-white animate-pulse" 
                    : "bg-blue-600 text-white"
                }`}>
                  {event.status === "Ongoing" && <span className="w-2 h-2 bg-white rounded-full"></span>}
                  {event.status}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>📍 {event.location}</span>
                  <span className="text-gray-300">|</span>
                  <span>🗓️ {event.date}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                
                <button className="mt-4 w-full bg-green-100 text-green-800 py-2 rounded-lg text-sm font-semibold hover:bg-green-200 transition">
                  View Event Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OngoingEvents;