import React from "react";
import { Home, FileText, Zap, BarChart2, CreditCard, Briefcase } from "lucide-react";
import { P, WHITE } from "../../constants.js";

export default function BottomNav({ active, onNavigate, userType }) {
  const items = [
    { id: "dashboard", Icon: Home, label: "Home" },
    { id: "documents", Icon: FileText, label: "Documents" },
    { id: "ai", Icon: Zap, label: "AI Help" },
    { id: "reports", Icon: BarChart2, label: "Reports" },
    userType === "personal"
      ? { id: "credit", Icon: CreditCard, label: "Credit" }
      : { id: "loans", Icon: Briefcase, label: "Loans" },
  ];
  return (
    <div style={{ display: "flex", background: WHITE, borderTop: "1px solid #e2e8f0", flexShrink: 0 }}>
      {items.map(({ id, Icon, label }) => {
        const on = active === id;
        return (
          <button key={id} onClick={() => onNavigate(id)}
            style={{ flex: 1, padding: "10px 0 6px", border: "none", background: "transparent", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: on ? P : "#94a3b8" }}>
            <Icon size={21} strokeWidth={on ? 2.5 : 1.8} />
            <span style={{ fontSize: 10, fontWeight: on ? 700 : 500 }}>{label}</span>
            {on && <div style={{ width: 18, height: 2.5, background: P, borderRadius: 99 }} />}
          </button>
        );
      })}
    </div>
  );
}
