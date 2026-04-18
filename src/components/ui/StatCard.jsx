import React from "react";
import { P, WHITE } from "../../constants.js";

export default function StatCard({ icon, label, value, sub, col = P, onClick }) {
  return (
    <div onClick={onClick}
      style={{ background: WHITE, borderRadius: 14, padding: 14, flex: 1, minWidth: 0, cursor: onClick ? "pointer" : "default", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", border: onClick ? "1px solid " + col + "30" : "none" }}>
      <div style={{ width: 34, height: 34, borderRadius: 9, background: col + "18", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
        {icon}
      </div>
      <div style={{ fontSize: 11, color: "#64748b", fontWeight: 500, marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 700, color: "#1e293b" }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}
