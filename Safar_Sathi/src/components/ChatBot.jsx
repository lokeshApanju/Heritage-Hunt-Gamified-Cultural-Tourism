import { useState } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hello! I am SafarBot CG. Ask me about tourism in Chhattisgarh.",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

 const getBotReply = (msg) => {
  msg = msg.toLowerCase();

  // Greetings
  if (
    msg.includes("hello") ||
    msg.includes("hi") ||
    msg.includes("hey")
  ) {
    return (
      " Welcome to Safar Sathi CG!\n\n" +
      "I can help you with:\n" +
      "• Tourist places \n" +
      "• Waterfalls \n" +
      "• Trip planning \n" +
      "• Hotels \n" +
      "• Safety \n" +
      "• Events \n" +
      "• Tribal culture "
    );
  }

  // Waterfalls
  if (
    msg.includes("waterfall") ||
    msg.includes("falls")
  ) {
    return (
      " Famous Waterfalls in Chhattisgarh:\n\n" +
      "1️ Chitrakote Falls\n" +
      "• Known as the Niagara of India\n" +
      "• Best time: July to October\n\n" +
      "2️ Tirathgarh Falls\n" +
      "• Located inside Kanger Valley National Park\n" +
      "• Best for trekking and photography\n\n" +
      "These are top eco-tourism attractions of Bastar region."
    );
  }

  // Best places
  if (
    msg.includes("best place") ||
    msg.includes("tourist place") ||
    msg.includes("places")
  ) {
    return (
      " Top Tourist Places in Chhattisgarh:\n\n" +
      " Chitrakote Waterfall\n" +
      " Mainpat Hill Station\n" +
      " Sirpur Heritage Site\n" +
      " Kanger Valley National Park\n" +
      " Tirathgarh Falls\n\n" +
      "Each place offers nature, culture, and eco-tourism experiences."
    );
  }

  // Trip planning
  if (
    msg.includes("trip") ||
    msg.includes("plan")
  ) {
    return (
      " Suggested 5-Day Chhattisgarh Trip:\n\n" +
      " Day 1 → Raipur Local Sightseeing\n" +
      " Day 2 → Chitrakote Falls\n" +
      " Day 3 → Tirathgarh Falls & Kanger Valley\n" +
      " Day 4 → Mainpat Hill Station\n" +
      " Day 5 → Sirpur Heritage Visit\n\n" +
      "This plan covers nature, waterfalls, and culture."
    );
  }

  // Safety
  if (
    msg.includes("safety") ||
    msg.includes("emergency") ||
    msg.includes("sos")
  ) {
    return (
      " Tourist Safety Information:\n\n" +
      " Police: 100\n" +
      " Ambulance: 108\n" +
      " Fire Service: 101\n\n" +
      " Travel in groups\n" +
      " Keep emergency contacts saved\n" +
      " Carry water and first aid kit\n" +
      " Avoid isolated forest areas at night"
    );
  }

  // Hotels
  if (
    msg.includes("hotel") ||
    msg.includes("stay") ||
    msg.includes("resort")
  ) {
    return (
      " Popular Stay Options:\n\n" +
      " Jagdalpur → Hotels near Chitrakote & Tirathgarh\n" +
      " Mainpat → Eco resorts & hill cottages\n" +
      " Raipur → Budget and luxury hotels available\n\n" +
      " Tip: Book hotels in advance during festival season."
    );
  }

  // Events
  if (
    msg.includes("event") ||
    msg.includes("festival")
  ) {
    return (
      " Major Festivals & Events:\n\n" +
      " Bastar Dussehra\n" +
      " Famous tribal festival of Bastar\n\n" +
      " Sirpur Dance Festival\n" +
      " Classical and folk dance performances\n\n" +
      " Madai Festival\n" +
      " Tribal music, dance, and local markets\n\n" +
      "These events showcase the rich culture of Chhattisgarh."
    );
  }

  // Culture
  if (
    msg.includes("culture") ||
    msg.includes("tribal") ||
    msg.includes("art")
  ) {
    return (
      " Tribal Culture of Chhattisgarh:\n\n" +
      " Bastar Dhokra Art\n" +
      " Bamboo Handicrafts\n" +
      " Tribal Dance & Music\n" +
      " Traditional Festivals\n" +
      " Handwoven Tribal Products\n\n" +
      "Chhattisgarh is known for its rich tribal heritage and eco-cultural tourism."
    );
  }

  // Food
  if (
    msg.includes("food") ||
    msg.includes("dish") ||
    msg.includes("eat")
  ) {
    return (
      " Famous Foods of Chhattisgarh:\n\n" +
      " Chila\n" +
      " Faraa\n" +
      " Bore Baasi\n" +
      " Angakar Roti\n" +
      " Tribal Bamboo Curry\n\n" +
      "Local tribal food is healthy and traditional."
    );
  }

  // Default reply
  return (
    " Sorry, I couldn't understand that.\n\n" +
    "You can ask me about:\n" +
    "• Tourist places \n" +
    "• Waterfalls \n" +
    "• Trip planning \n" +
    "• Safety \n" +
    "• Hotels \n" +
    "• Events \n" +
    "• Tribal culture \n" +
    "• Food "
  );
};

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    const botMessage = {
      text: getBotReply(input),
      sender: "bot",
    };

    setMessages([...messages, userMessage, botMessage]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-green-700 hover:bg-green-800 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl z-50 transition"
      >
        {open ? "✕" : "🤖"}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-5 w-[340px] max-w-[90%] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
          
          {/* Header */}
          <div className="bg-green-800 text-white p-4">
            <h2 className="font-bold text-lg">
               SafarBot CG
            </h2>

            <p className="text-sm text-gray-200">
              Smart Tourism Assistant
            </p>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-green-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-[80%] text-sm ${
                    msg.sender === "user"
                      ? "bg-green-700 text-white"
                      : "bg-white shadow text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 outline-none text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-green-700 hover:bg-green-800 text-white px-5 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;