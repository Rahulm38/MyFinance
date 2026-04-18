import React, { useState, useEffect, useRef } from "react";
import { AlertCircle, Zap, Send } from "lucide-react";
import { P, WHITE } from "../constants.js";
import { AI_Qs, AI_ANSWERS } from "../data/aiData.js";

export default function AIScreen({ userType }) {
  const [msgs, setMsgs] = useState([
    { role: "ai", text: "Hello! 👋 I'm your AI Finance Assistant.\n\nI can answer questions about your taxes, investments, GST and compliance — all based on data managed by CA Chetan Marathe.\n\nTap a suggestion below or type your question." }
  ]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef();

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, typing]);

  const send = (q) => {
    if (!q.trim()) return;
    setMsgs(p => [...p, { role: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const ans = AI_ANSWERS[q] || "This is a placeholder response for the prototype. In the full app, this will be answered using your actual financial data provided by CA Chetan Marathe.\n\n📞 For specific queries, contact CA Chetan Marathe directly.";
      setMsgs(p => [...p, { role: "ai", text: ans }]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
      <div style={{ background: "#fffbeb", padding: "9px 14px", display: "flex", gap: 8, alignItems: "flex-start", flexShrink: 0 }}>
        <AlertCircle size={13} color="#d97706" style={{ flexShrink: 0, marginTop: 1 }} />
        <div style={{ fontSize: 11, color: "#92400e" }}>AI Assistant — prototype mode. Responses use demo data. Always verify with CA Marathe for important decisions.</div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px" }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", marginBottom: 12 }}>
            {m.role === "ai" && (
              <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg, #7c3aed, #1e40af)", display: "flex", alignItems: "center", justifyContent: "center", marginRight: 8, flexShrink: 0, marginTop: 2 }}>
                <Zap size={14} color="#fff" />
              </div>
            )}
            <div style={{ background: m.role === "user" ? P : WHITE, color: m.role === "user" ? "#fff" : "#1e293b", padding: "11px 13px", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", maxWidth: "78%", fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap", boxShadow: m.role === "ai" ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg, #7c3aed, #1e40af)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={14} color="#fff" />
            </div>
            <div style={{ background: WHITE, padding: "11px 14px", borderRadius: "16px 16px 16px 4px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: 99, background: "#94a3b8", animation: "blink 1s infinite", animationDelay: i * 0.2 + "s" }} />)}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {msgs.length < 3 && (
        <div style={{ padding: "8px 14px", flexShrink: 0, background: "#fafafa", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, marginBottom: 7 }}>SUGGESTED QUESTIONS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {AI_Qs[userType].map(q => (
              <button key={q} onClick={() => send(q)}
                style={{ background: WHITE, border: "1.5px solid #e2e8f0", borderRadius: 20, padding: "7px 11px", fontSize: 12, color: P, fontWeight: 600, cursor: "pointer" }}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      <div style={{ padding: "10px 14px", background: WHITE, borderTop: "1px solid #f1f5f9", display: "flex", gap: 8, flexShrink: 0 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send(input)}
          placeholder="Type your question here..."
          style={{ flex: 1, padding: "11px 13px", border: "1.5px solid #e2e8f0", borderRadius: 12, fontSize: 14, outline: "none" }} />
        <button onClick={() => send(input)} style={{ background: P, border: "none", borderRadius: 12, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
          <Send size={16} color="#fff" />
        </button>
      </div>
    </div>
  );
}
