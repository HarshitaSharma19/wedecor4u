import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles, Bot, ChevronRight } from "lucide-react";
import { packageConfigs, getVendorsByTier } from "@/lib/vendors";

const vendorScript = {
  economical: "For **Economical** projects, I recommend **Greenply** or **Kitply** for plywood, **Godrej** for hardware, and **Virgo** laminates. Total material cost typically ranges ₹80 – ₹1.5L per room.",
  premium: "For **Premium** projects, our curated vendors include **CenturyPly** or **Action TESA** for boards, **Hettich** soft-close hardware, **Marino** or **Merino** laminates, and **Saint-Gobain** glass. Budget ₹2.5 – ₹5L per room for materials.",
  "ultra premium": "For **Ultra Premium** projects, we specify **Austrian Blum** MOVENTO systems, **Häfele** architectural fittings, **Royale Touche** decorative panels, and **Saint-Gobain** smart glass. Material cost: ₹5 – ₹15L per room.",
  blum: "**Blum** (Austria) is the gold standard in kitchen and wardrobe hardware. Their MOVENTO 760H runner, AVENTOS lift systems, and SERVO-DRIVE automation are exclusively specified in Ultra Premium projects. Lead time 14–21 days.",
  hettich: "**Hettich** (Germany) offers precision-engineered soft-close systems. Their InnoTech Atira drawer system and Quadro runner are specified in Premium projects. Rating: 4.9/5 across 408 WEDECOR4U projects.",
  "saint-gobain": "**Saint-Gobain** (France) supplies our glass requirements — from Lacobel back-painted glass to Stadip Silence acoustic panels. Available for Premium and Ultra Premium tiers. Price: ₹280–1,800/sqft.",
};

function buildAiResponse(userInput, state) {
  const lower = userInput.toLowerCase();

  for (const [key, response] of Object.entries(vendorScript)) {
    if (lower.includes(key)) {
      return { text: response, chips: ["Tell me about packages", "Get a quote", "Book consultation"], nextPhase: state.phase };
    }
  }

  switch (state.phase) {
    case "greeting":
      return {
        text: "Welcome to WEDECOR4U Atelier. I'm Meena, your design concierge. May I help you compose your space? What type of property are we styling?",
        chips: ["Apartment", "Villa / Bungalow", "Penthouse", "Hospitality"],
        nextPhase: "property",
      };
    case "property":
      return {
        text: `A ${userInput} — wonderful. Which package tier interests you? Our three tiers each unlock a distinct material world.`,
        chips: ["Economical · ₹1.2L/room", "Premium · ₹6.5L/home", "Ultra Premium · ₹15L+"],
        nextPhase: "tier",
      };
    case "tier": {
      let tier = "Premium";
      if (lower.includes("economical")) tier = "Economical";
      else if (lower.includes("ultra")) tier = "Ultra Premium";

      const pkg = packageConfigs.find((p) => p.tier === tier);
      const tierVendors = getVendorsByTier(tier);
      return {
        text: `Excellent. For the **${tier}** package, your recommended vendor ecosystem includes: ${tierVendors.slice(0, 4).map((v) => v.name).join(", ")} — covering ${[...new Set(tierVendors.slice(0, 4).map((v) => v.category))].join(", ")}. Design timeline: ${pkg.estimatedTimeline}. How many rooms are part of this project?`,
        chips: ["1 room", "2–3 rooms", "Full home", "Complete estate"],
        nextPhase: "rooms",
      };
    }
    case "rooms":
      return {
        text: `Noted. Could you share an indicative budget range? This helps me refine material and vendor recommendations.`,
        chips: ["Under ₹5L", "₹5L – ₹15L", "₹15L – ₹50L", "₹50L+"],
        nextPhase: "budget",
      };
    case "budget": {
      const isHighBudget = lower.includes("50") || lower.includes("15l") || lower.includes("₹15");
      return {
        text: isHighBudget
          ? "With that budget, I'd recommend exploring our Ultra Premium tier — Blum hardware, Häfele fittings, Royale Touche panels, and Saint-Gobain smart glass. Shall I show you vendor combinations for each material category?"
          : "Perfect. I can suggest a curated vendor mix within that range. Shall I walk you through material recommendations by category — woodwork, hardware, laminates, and glass?",
        chips: ["Yes, show me vendors", "See package details", "Book consultation now"],
        nextPhase: "vendors",
      };
    }
    case "vendors":
      return {
        text: "I'll prepare a personalised vendor brief for your project. What's your preferred timeline — are we working to a deadline?",
        chips: ["4 weeks", "8 weeks", "3 months", "Flexible"],
        nextPhase: "timeline",
      };
    case "timeline":
      return {
        text: "Thank you — I have everything I need. Based on your inputs, I recommend beginning with a formal consultation so our principal designer can visit your space. May I have your name and email to arrange this within 24 hours?",
        chips: ["Book consultation", "Continue browsing"],
        nextPhase: "close",
      };
    case "close":
    default:
      return {
        text: "Thank you — a member of our atelier will be in touch shortly. In the meantime, explore our material library and portfolio.",
        chips: ["View vendors", "See portfolio", "Browse collection"],
        nextPhase: "close",
      };
  }
}

export function AIChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Welcome to WEDECOR4U Atelier. I'm Meena, your AI design concierge. I can help you choose vendors, explore material tiers, or plan your consultation.",
      chips: ["Explore vendors", "Compare packages", "Book consultation", "Get cost estimate"],
    },
  ]);
  const [input, setInput] = useState("");
  const [state, setState] = useState({ phase: "greeting" });
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const { text: aiText, chips, nextPhase } = buildAiResponse(text, state);
      setState((s) => ({ ...s, phase: nextPhase }));
      setMessages((m) => [...m, { role: "ai", text: aiText, chips }]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  const formatText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Chat with AI concierge"
        className={`fixed bottom-6 right-6 z-40 group ${open ? "hidden" : ""}`}
      >
        <div className="bg-ink text-ivory pl-4 pr-5 py-3.5 flex items-center gap-2.5 shadow-xl hover:bg-bronze transition-all duration-300 hover:shadow-bronze/20 hover:shadow-2xl">
          <div className="relative">
            <Sparkles className="h-4 w-4 text-champagne" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <span className="text-[11px] tracking-[0.28em] uppercase">Concierge</span>
        </div>
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] max-w-[400px] h-[600px] bg-ivory border border-border shadow-2xl flex flex-col">

          {/* Header */}
          <div className="bg-ink text-ivory px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-9 w-9 bg-champagne/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-champagne" />
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-400 rounded-full border-2 border-ink" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.32em] uppercase text-champagne/70">Atelier AI · Live</p>
                <h4 className="font-display text-base leading-tight">Meena, Design Concierge</h4>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="hover:text-champagne transition">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-pearl">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[88%] space-y-2">
                  <div
                    className={`px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-ink text-ivory ml-auto"
                        : "bg-ivory border border-border/60"
                    }`}
                    dangerouslySetInnerHTML={{ __html: formatText(m.text) }}
                  />
                  {m.chips && m.role === "ai" && (
                    <div className="flex flex-wrap gap-1.5">
                      {m.chips.map((chip) => (
                        <button
                          key={chip}
                          onClick={() => handleSend(chip)}
                          className="flex items-center gap-1 text-[9px] tracking-wider uppercase border border-border bg-ivory hover:border-bronze/60 hover:text-bronze px-2.5 py-1.5 transition-all"
                        >
                          {chip}
                          <ChevronRight className="h-2.5 w-2.5" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-ivory border border-border/60 px-4 py-3 flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-bronze/60 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quick topics */}
            {messages.length === 1 && (
              <div className="mt-2">
                <p className="text-[9px] tracking-widest uppercase text-foreground/40 mb-2">Quick topics</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    "Vendor recommendations",
                    "Compare Blum vs Hettich",
                    "Ultra Premium materials",
                    "Estimate project cost",
                  ].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => handleSend(topic)}
                      className="text-left text-[10px] tracking-wider border border-border/60 bg-ivory p-2.5 hover:border-bronze/50 hover:text-bronze transition-all leading-tight"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="border-t border-border flex items-center gap-2 p-3 bg-ivory flex-shrink-0"
          >
            <MessageCircle className="h-4 w-4 text-bronze ml-1 flex-shrink-0" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about vendors, materials, costs…"
              className="flex-1 bg-transparent text-sm py-2 focus:outline-none placeholder:text-foreground/35"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-ink text-ivory p-2 hover:bg-bronze transition disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              aria-label="Send"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-border bg-ivory flex-shrink-0">
            <p className="text-[9px] tracking-wider text-foreground/30 text-center">
              Powered by WEDECOR4U AI · Vendor knowledge base updated Nov 2025
            </p>
          </div>
        </div>
      )}
    </>
  );
}
