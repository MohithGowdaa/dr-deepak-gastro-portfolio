import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

// 👉 replace this with YOUR worker URL
const BOT_ENDPOINT = "https://drdeepak-bot.mohithg83.workers.dev/";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [msgs, setMsgs] = useState([
    { role: "assistant", content: "Hi! I’m Dr. Deepak’s assistant. Ask about procedures, clinics, or directions. For urgent issues, please call." }
  ]);

  const listRef = useRef(null);
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgs, open]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;

    const next = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setInput("");
    setBusy(true);

    try {
      // Worker expects { messages: [{role, content}, ...] }
      const res = await fetch(BOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      const data = await res.json();
      const reply = data?.reply || "Sorry, I couldn’t reply. Please try again or WhatsApp +91 9108336267.";
      setMsgs((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: "Network error. Please try again or WhatsApp +91 9108336267." }]);
    } finally {
      setBusy(false);
    }
  }

  function onKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* round bubble button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed z-50 bottom-24 right-4 sm:bottom-6 sm:right-6 rounded-full p-4 shadow-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* chat panel */}
      {open && (
        <div className="fixed z-50 bottom-20 right-2 sm:bottom-20 sm:right-6 w-[92vw] max-w-sm rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-2xl">
          <div className="flex items-center justify-between p-3 border-b border-neutral-200 dark:border-neutral-800">
            <div className="text-sm font-medium">Clinic Assistant</div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={listRef} className="h-72 overflow-y-auto p-3 space-y-2">
            {msgs.map((m, i) => (
              <div key={i} className={`text-sm leading-relaxed ${m.role === "assistant" ? "" : "text-right"}`}>
                <div
                  className={`inline-block px-3 py-2 rounded-2xl ${
                    m.role === "assistant"
                      ? "bg-neutral-100 dark:bg-neutral-800"
                      : "bg-emerald-100 dark:bg-emerald-900/40"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {busy && <div className="text-xs text-neutral-500">Typing…</div>}
          </div>

          <div className="p-3 border-t border-neutral-200 dark:border-neutral-800">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              rows={2}
              placeholder="Type your question…"
              className="w-full resize-none px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none"
            />
            <div className="mt-2 flex justify-between items-center text-xs text-neutral-500">
              <span>General info only. Not a diagnosis.</span>
              <button
                onClick={send}
                disabled={busy}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 ${busy ? "opacity-60" : ""}`}
              >
                <Send className="w-3.5 h-3.5" /> Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
