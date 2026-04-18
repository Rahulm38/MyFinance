import React from "react";
import { ArrowLeft, Shield, Bell, LogOut } from "lucide-react";
import { P } from "../../constants.js";

export default function Header({ title, onBack, showBack, onLogout }) {
  return (
    <div style={{ background: P, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
      {showBack ? (
        <button onClick={onBack} style={{ background: "rgba(255,255,255,0.18)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", flexShrink: 0 }}>
          <ArrowLeft size={18} />
        </button>
      ) : (
        <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Shield size={16} color="#fff" />
        </div>
      )}
      <div style={{ flex: 1, color: "#fff", fontWeight: 700, fontSize: 16 }}>{title}</div>
      <button style={{ background: "rgba(255,255,255,0.18)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", position: "relative" }}>
        <Bell size={17} />
        <span style={{ position: "absolute", top: -3, right: -3, background: "#ef4444", color: "#fff", fontSize: 9, fontWeight: 700, width: 15, height: 15, borderRadius: 99, display: "flex", alignItems: "center", justifyContent: "center" }}>3</span>
      </button>
      <button onClick={onLogout} style={{ background: "rgba(255,255,255,0.18)", border: "none", borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}>
        <LogOut size={16} />
      </button>
    </div>
  );
}
