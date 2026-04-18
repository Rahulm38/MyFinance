import React, { useState } from "react";
import { Search } from "lucide-react";
import { P, WHITE } from "../constants.js";
import { PERSONAL_DOCS, BUSINESS_DOCS } from "../data/mockData.js";
import DocRow from "../components/ui/DocRow.jsx";

export default function DocumentsScreen({ userType, onDownload }) {
  const docs = userType === "personal" ? PERSONAL_DOCS : BUSINESS_DOCS;
  const cats = Object.keys(docs);
  const [tab, setTab] = useState(cats[0]);
  const [q, setQ] = useState("");

  const filtered = docs[tab].filter(d =>
    d.name.toLowerCase().includes(q.toLowerCase()) || d.sub.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <div style={{ padding: "10px 14px", background: WHITE, borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f8fafc", borderRadius: 10, padding: "9px 12px", border: "1px solid #e2e8f0" }}>
          <Search size={15} color="#94a3b8" />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search documents..."
            style={{ border: "none", background: "transparent", outline: "none", flex: 1, fontSize: 14, color: "#1e293b" }} />
        </div>
      </div>

      <div style={{ display: "flex", overflowX: "auto", borderBottom: "1px solid #e2e8f0", background: WHITE, scrollbarWidth: "none" }}>
        {cats.map(c => (
          <button key={c} onClick={() => setTab(c)}
            style={{ padding: "11px 14px", border: "none", background: "transparent", cursor: "pointer", whiteSpace: "nowrap", fontSize: 13, fontWeight: 700, color: tab === c ? P : "#64748b", borderBottom: tab === c ? `2.5px solid ${P}` : "2.5px solid transparent" }}>
            {c}
            <span style={{ marginLeft: 5, background: tab === c ? P + "20" : "#f1f5f9", color: tab === c ? P : "#94a3b8", fontSize: 10, padding: "1px 6px", borderRadius: 10, fontWeight: 700 }}>
              {docs[c].length}
            </span>
          </button>
        ))}
      </div>

      <div style={{ background: WHITE, margin: "12px 14px", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
        {filtered.length > 0
          ? filtered.map(d => <DocRow key={d.id} doc={d} onDownload={onDownload} />)
          : <div style={{ padding: 40, textAlign: "center", color: "#94a3b8", fontSize: 14 }}>No documents found</div>
        }
      </div>
      <div style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", padding: "0 0 20px" }}>
        Managed by {userType === "personal" ? "CA Priya Mehta" : "CA Priya Mehta & Associates"}
      </div>
    </div>
  );
}
