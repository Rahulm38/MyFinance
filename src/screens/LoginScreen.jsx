import React, { useState } from "react";
import { Shield, User, Building2, Eye, EyeOff } from "lucide-react";
import { P } from "../constants.js";
import { USERS } from "../data/mockData.js";

export default function LoginScreen({ onLogin }) {
  const [type, setType] = useState("personal");
  const [pan, setPan] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const tryLogin = () => {
    const u = USERS[type];
    if (pan.toUpperCase() === u.pan && pass === u.password) { onLogin(type); }
    else { setError(`Wrong PAN or password.\n\nDemo: ${u.pan} / ${u.password}`); }
  };

  const fillDemo = () => { const u = USERS[type]; setPan(u.pan); setPass(u.password); setError(""); };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(155deg, #1e3a8a, #1e40af 50%, #3b82f6)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ width: 72, height: 72, borderRadius: 22, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", border: "1px solid rgba(255,255,255,0.3)" }}>
          <Shield size={36} color="#fff" />
        </div>
        <div style={{ color: "#fff", fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>MyFinance</div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 4 }}>Your CA's Secure Document Portal</div>
      </div>

      <div style={{ background: "rgba(255,255,255,0.97)", borderRadius: 24, padding: 28, width: "100%", maxWidth: 360, boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>
        <div style={{ display: "flex", background: "#f1f5f9", borderRadius: 12, padding: 4, marginBottom: 22 }}>
          {["personal", "business"].map(t => (
            <button key={t} onClick={() => { setType(t); setError(""); setPan(""); setPass(""); }}
              style={{ flex: 1, padding: "10px 0", borderRadius: 9, border: "none", fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, transition: "all 0.2s", background: type === t ? P : "transparent", color: type === t ? "#fff" : "#64748b" }}>
              {t === "personal" ? <User size={13} /> : <Building2 size={13} />}
              {t === "personal" ? "Personal" : "Business"}
            </button>
          ))}
        </div>

        <div style={{ marginBottom: 14 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 6 }}>PAN Number</label>
          <input value={pan} onChange={e => setPan(e.target.value.toUpperCase())}
            placeholder={type === "personal" ? "e.g. ABCPS1234D" : "e.g. AACES1234B"}
            style={{ width: "100%", padding: "13px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 15, fontFamily: "monospace", letterSpacing: 2, outline: "none", boxSizing: "border-box" }} />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 6 }}>Password</label>
          <div style={{ position: "relative" }}>
            <input type={showPass ? "text" : "password"} value={pass} onChange={e => setPass(e.target.value)}
              placeholder="Enter your password"
              style={{ width: "100%", padding: "13px 44px 13px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 15, outline: "none", boxSizing: "border-box" }} />
            <button onClick={() => setShowPass(s => !s)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#94a3b8" }}>
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {error && <div style={{ fontSize: 12, color: "#dc2626", background: "#fef2f2", padding: "10px 12px", borderRadius: 8, marginBottom: 10, whiteSpace: "pre-line", lineHeight: 1.5 }}>{error}</div>}

        <button onClick={tryLogin} style={{ width: "100%", padding: "14px 0", background: P, color: "#fff", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer", marginTop: 6 }}>
          Sign In →
        </button>
        <button onClick={fillDemo} style={{ width: "100%", padding: "11px 0", background: "transparent", color: P, border: "1.5px solid " + P, borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 10 }}>
          Use Demo Credentials
        </button>

        <div style={{ textAlign: "center", marginTop: 14, fontSize: 11, color: "#94a3b8" }}>
          🔒 Powered by CA Mehta & Associates · Encrypted
        </div>
      </div>
    </div>
  );
}
