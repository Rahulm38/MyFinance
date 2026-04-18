import React from "react";
import { P, WHITE } from "../constants.js";
import { CREDIT_FACTORS } from "../data/mockData.js";

export default function CreditScreen({ user, onNavigate }) {
  const score = user.creditScore;
  const pct = (score - 300) / 600;
  const theta = (1 - pct) * Math.PI;
  const cx = 110, cy = 100, r = 80;
  const ex = (cx + r * Math.cos(theta)).toFixed(1);
  const ey = (cy - r * Math.sin(theta)).toFixed(1);
  const nx = (cx + 62 * Math.cos(theta)).toFixed(1);
  const ny = (cy - 62 * Math.sin(theta)).toFixed(1);
  const col = score >= 750 ? "#059669" : score >= 650 ? "#d97706" : "#dc2626";

  return (
    <div style={{ paddingBottom: 16 }}>
      <div style={{ margin: "14px 14px 0", background: WHITE, borderRadius: 18, padding: "20px 16px 16px", boxShadow: "0 1px 6px rgba(0,0,0,0.08)", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600, marginBottom: 4 }}>EQUIFAX CREDIT SCORE · June 2024</div>
        <svg width={220} height={120} style={{ overflow: "visible", display: "block", margin: "0 auto" }}>
          <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="#f1f5f9" strokeWidth={14} />
          <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${ex} ${ey}`} fill="none" stroke={col} strokeWidth={14} strokeLinecap="round" />
          <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#1e293b" strokeWidth={2.5} strokeLinecap="round" />
          <circle cx={cx} cy={cy} r={7} fill="#1e293b" />
          <text x={cx - r - 4} y={cy + 18} fontSize={11} fill="#94a3b8" fontWeight="600" textAnchor="middle">300</text>
          <text x={cx + r + 4} y={cy + 18} fontSize={11} fill="#94a3b8" fontWeight="600" textAnchor="middle">900</text>
        </svg>
        <div style={{ fontSize: 42, fontWeight: 800, color: col, marginTop: -6 }}>{score}</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: col, marginBottom: 8 }}>{user.creditRating}</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
          {[["300–549", "Poor", "#dc2626"], ["550–649", "Fair", "#f59e0b"], ["650–749", "Good", "#d97706"], ["750–900", "Excellent", "#059669"]].map(([r, l, c]) => (
            <div key={r} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ width: 7, height: 7, borderRadius: 99, background: c }} />
              <span style={{ fontSize: 11, color: "#64748b" }}>{r} {l}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: "12px 14px 0" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 10 }}>Score Breakdown</div>
        <div style={{ background: WHITE, borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
          {CREDIT_FACTORS.map((f, i) => (
            <div key={f.label} style={{ padding: "12px 16px", borderBottom: i < CREDIT_FACTORS.length - 1 ? "1px solid #f8fafc" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{f.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: f.col }}>{f.score}/100</span>
              </div>
              <div style={{ background: "#f1f5f9", borderRadius: 99, height: 5 }}>
                <div style={{ background: f.col, width: f.score + "%", height: 5, borderRadius: 99 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ margin: "12px 14px 0", background: "linear-gradient(135deg, #1e40af, #7c3aed)", borderRadius: 16, padding: "16px 16px" }}>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Pre-approved Loan Offers</div>
        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 12 }}>Your score of {score} qualifies you for great rates!</div>
        <button onClick={() => onNavigate("loans")} style={{ background: "#fff", color: P, border: "none", borderRadius: 10, padding: "10px 18px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          View Loan Options →
        </button>
      </div>
    </div>
  );
}
