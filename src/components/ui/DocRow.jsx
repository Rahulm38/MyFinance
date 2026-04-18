import React from "react";
import { FileText, Download } from "lucide-react";
import { P, WHITE } from "../../constants.js";
import Pill from "./Pill.jsx";

export default function DocRow({ doc, onDownload }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "14px 16px", background: WHITE, borderBottom: "1px solid #f8fafc", gap: 12 }}>
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <FileText size={18} color={P} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1e293b" }}>{doc.name}</span>
          {doc.badge && <Pill text={doc.badge} col="#059669" />}
        </div>
        <div style={{ fontSize: 12, color: "#64748b", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{doc.sub}</div>
        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 1 }}>{doc.size} · {doc.date}</div>
      </div>
      <button onClick={() => onDownload(doc)}
        style={{ background: P, color: "#fff", border: "none", borderRadius: 8, padding: "7px 11px", display: "flex", alignItems: "center", gap: 4, cursor: "pointer", flexShrink: 0, fontSize: 12, fontWeight: 700 }}>
        <Download size={12} /> PDF
      </button>
    </div>
  );
}
