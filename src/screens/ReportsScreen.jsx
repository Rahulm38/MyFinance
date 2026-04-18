import React, { useState } from "react";
import { Info, Download, RefreshCw, MessageSquare } from "lucide-react";
import { P, WHITE } from "../constants.js";
import { REPORTS } from "../data/mockData.js";

export default function ReportsScreen({ userType, onDownload }) {
  const list = REPORTS[userType];
  const [gen, setGen] = useState(null);

  const generate = (r) => {
    setGen(r.id);
    setTimeout(() => {
      setGen(null);
      onDownload({ name: r.name, size: (r.pages * 120) + " KB" });
    }, 1800);
  };

  return (
    <div style={{ padding: "14px 14px", paddingBottom: 16 }}>
      <div style={{ background: "#eff6ff", borderRadius: 12, padding: "11px 13px", marginBottom: 14, display: "flex", gap: 8 }}>
        <Info size={15} color={P} style={{ flexShrink: 0, marginTop: 1 }} />
        <div style={{ fontSize: 13, color: "#1e40af" }}>Reports are generated from your financial data managed by CA Chetan Marathe. Select a template and download instantly.</div>
      </div>

      {list.map(r => (
        <div key={r.id} style={{ background: WHITE, borderRadius: 16, padding: "14px 14px", marginBottom: 10, boxShadow: "0 1px 5px rgba(0,0,0,0.07)", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 26, flexShrink: 0 }}>{r.icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, color: "#1e293b", fontSize: 14 }}>{r.name}</div>
            <div style={{ fontSize: 12, color: "#64748b", marginTop: 2, lineHeight: 1.4 }}>{r.desc}</div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>{r.period} · {r.pages} pages</div>
          </div>
          <button onClick={() => generate(r)} disabled={gen === r.id}
            style={{ background: gen === r.id ? "#f1f5f9" : P, color: gen === r.id ? "#94a3b8" : "#fff", border: "none", borderRadius: 10, padding: "9px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
            {gen === r.id ? <RefreshCw size={12} style={{ animation: "spin 1s linear infinite" }} /> : <Download size={12} />}
            {gen === r.id ? "..." : "PDF"}
          </button>
        </div>
      ))}

      <div style={{ background: "#f8fafc", borderRadius: 14, padding: 16, border: "1.5px dashed #e2e8f0", textAlign: "center", marginTop: 4 }}>
        <MessageSquare size={22} color="#94a3b8" style={{ display: "block", margin: "0 auto 8px" }} />
        <div style={{ fontSize: 13, fontWeight: 600, color: "#64748b" }}>Need a custom report?</div>
        <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>Contact CA Chetan Marathe — he'll prepare it for you.</div>
      </div>
    </div>
  );
}
