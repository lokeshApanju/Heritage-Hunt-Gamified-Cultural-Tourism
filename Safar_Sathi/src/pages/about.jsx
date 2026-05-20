function About() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            About Safar Sathi CG
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A Smart Eco & Cultural Tourism Platform created to promote tourism,
            safety, and local culture in Chhattisgarh.
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h2 className="text-3xl font-bold text-green-800 mb-5">
            Project Overview
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Safar Sathi CG is a tourism-based web platform designed
            to help travelers explore the natural beauty, tribal
            culture, waterfalls, forests, and historical places of
            Chhattisgarh. The website provides smart tourism
            features such as place exploration, trip planning,
            tourist safety information, and a marketplace for local
            handicrafts.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            The main goal of this website is to create awareness
            about eco-tourism and support local communities by
            digitally promoting tourism destinations and tribal
            products.
          </p>
        </div>

        {/* Main Features */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
            Main Features of the Website
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Explore Tourist Places
              </h3>

              <p className="text-gray-600">
                Users can explore famous tourist places of
                Chhattisgarh with images, descriptions, best time to
                visit, nearby hotels, hospitals, and travel tips.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Smart Trip Planner
              </h3>

              <p className="text-gray-600">
                Travelers can enter budget, trip days, and interest
                type to generate a simple travel itinerary for their
                Chhattisgarh tour.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Tourist Safety
              </h3>

              <p className="text-gray-600">
                The platform provides emergency contacts, nearby
                hospitals, safety tips, and SOS interface to improve
                tourist security.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Tribal Marketplace
              </h3>

              <p className="text-gray-600">
                Local tribal artisans can showcase handicrafts,
                bamboo crafts, Bastar art, and traditional products
                to tourists digitally.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Eco Tourism Awareness
              </h3>

              <p className="text-gray-600">
                Encourages responsible tourism and promotes nature
                conservation through eco-friendly travel awareness.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Beginner-Friendly UI
              </h3>

              <p className="text-gray-600">
                Simple responsive interface designed for easy use on
                mobile, tablet, and desktop devices.
              </p>
            </div>
            {/* Events */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                Events & Festivals
              </h3>

              <p className="text-gray-600">
                Users can view ongoing cultural festivals and tourism
                events such as Bastar Dussehra, Madai Festival,
                and Sirpur Dance Festival.
              </p>
            </div>

            {/* AI Chatbot */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                SafarBot CG
              </h3>

              <p className="text-gray-600">
                The AI-style tourism chatbot helps tourists with
                place recommendations, trip suggestions,
                safety information, hotels, cultural guidance,
                and tourism assistance.
              </p>
            </div>
          </div>
        </div>

        {/* How It Helps */}
        <div className="grid gap-8 md:grid-cols-2 mb-10">
          {/* Tourists */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-5">
              How This Website Helps Tourists
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                Discover hidden tourist destinations of
                Chhattisgarh.
              </li>

              <li className="flex gap-3">
                Get complete travel information in one platform.
              </li>

              <li className="flex gap-3">
                Plan trips based on budget and interests.
              </li>

              <li className="flex gap-3">
                Access emergency and safety information quickly.
              </li>

              <li className="flex gap-3">
                Learn about tribal culture and eco tourism.
              </li>
            </ul>
          </div>

          {/* Local People */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-5">
              How This Website Helps Local People
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                Promotes local tribal handicrafts and products.
              </li>

              <li className="flex gap-3">
                Increases tourism-related employment opportunities.
              </li>

              <li className="flex gap-3">
                Supports local hotels and small businesses.
              </li>

              <li className="flex gap-3">
                Preserves tribal culture and traditions.
              </li>

              <li className="flex gap-3">
                Encourages sustainable and eco-friendly tourism.
              </li>
            </ul>
          </div>
        </div>

        {/* Technology */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h2 className="text-3xl font-bold text-green-800 mb-5">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "React.js",
              "Vite",
              "Tailwind CSS",
              "React Router DOM",
              "Wikipedia API",
              "Responsive Design",
              "Frontend Chatbot",
              "Local JSON Data",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-green-100 text-green-800 px-5 py-3 rounded-full font-semibold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        {/* Future Scope */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-14">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Future Scope
          </h2>

          <div className="grid gap-4 md:grid-cols-2 text-gray-700">

            <div className="flex gap-3">
              AI-based travel recommendations
            </div>

            <div className="flex gap-3">

              Real-time weather updates
            </div>

            <div className="flex gap-3">

              GPS navigation support
            </div>

            <div className="flex gap-3">

              Online hotel booking
            </div>

            <div className="flex gap-3">

              Voice-enabled chatbot
            </div>

            <div className="flex gap-3">
              Multi-language support
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;