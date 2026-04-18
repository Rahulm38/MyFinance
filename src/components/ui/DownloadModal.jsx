import React, { useState, useEffect } from "react";
import { FileText, X, CheckCircle } from "lucide-react";
import { P, WHITE } from "../../constants.js";

export default function DownloadModal({ doc, onClose }) {
  const [prog, setProg] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setProg(p => { if (p >= 100) { clearInterval(t); setDone(true); return 100; } return p + 10; });
    }, 120);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ background: WHITE, borderRadius: "20px 20px 0 0", padding: 28, width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: "#1e293b" }}>Downloading File</span>
        <button onClick={onClose} style={{ background: "#f1f5f9", border: "none", borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <X size={16} />
        </button>
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "center" }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <FileText size={20} color={P} />
        </div>
        <div>
          <div style={{ fontWeight: 600, color: "#1e293b", fontSize: 14 }}>{doc.name}</div>
          <div style={{ color: "#64748b", fontSize: 12 }}>PDF · {doc.size}</div>
        </div>
      </div>
      {!done ? (
        <>
          <div style={{ background: "#f1f5f9", borderRadius: 99, height: 6, marginBottom: 8 }}>
            <div style={{ background: P, width: prog + "%", height: 6, borderRadius: 99, transition: "width 0.12s" }} />
          </div>
          <div style={{ fontSize: 12, color: "#64748b" }}>Downloading... {prog}%</div>
        </>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#059669", fontWeight: 700, fontSize: 15 }}>
          <CheckCircle size={20} /> Downloaded successfully!
        </div>
      )}
    </div>
  );
}
