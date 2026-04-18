import React, { useState } from "react";
import { Star, Briefcase, CheckCircle } from "lucide-react";
import { P, WHITE } from "../constants.js";
import { PERSONAL_LOANS, BUSINESS_LOANS } from "../data/mockData.js";
import Pill from "../components/ui/Pill.jsx";

export default function LoansScreen({ userType }) {
  const loans = userType === "personal" ? PERSONAL_LOANS : BUSINESS_LOANS;
  const [applied, setApplied] = useState(null);

  return (
    <div style={{ paddingBottom: 16 }}>
      <div style={{ background: "#fff7ed", padding: "12px 16px", margin: "12px 14px", borderRadius: 12, display: "flex", gap: 8, alignItems: "flex-start" }}>
        <Star size={15} color="#d97706" style={{ flexShrink: 0, marginTop: 1 }} />
        <div style={{ fontSize: 13, color: "#92400e" }}>
          Offers screened by <strong>CA Priya Mehta</strong> based on your profile. Applying through this portal directly supports your CA.
        </div>
      </div>

      <div style={{ padding: "0 14px" }}>
        {loans.map(loan => (
          <div key={loan.id} style={{ background: WHITE, borderRadius: 16, marginBottom: 12, overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.08)", opacity: loan.eligible ? 1 : 0.6 }}>
            <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid #f8fafc", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: loan.col + "18", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Briefcase size={18} color={loan.col} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 700, color: "#1e293b", fontSize: 14 }}>{loan.type}</span>
                  {loan.tag && <Pill text={loan.tag} col="#059669" />}
                  {!loan.eligible && <Pill text="Not Eligible" col="#dc2626" />}
                </div>
                <div style={{ fontSize: 12, color: "#64748b" }}>{loan.bank}</div>
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: P }}>{loan.rate}</div>
            </div>
            <div style={{ padding: "12px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[["Max Amount", loan.max], ["Tenure", loan.tenure], ["Processing Fee", loan.processing]].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>{k}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#1e293b" }}>{v}</div>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <button onClick={() => loan.eligible && setApplied(loan)} disabled={!loan.eligible}
                  style={{ background: loan.eligible ? P : "#e2e8f0", color: loan.eligible ? "#fff" : "#94a3b8", border: "none", borderRadius: 8, padding: "8px 12px", fontSize: 12, fontWeight: 700, cursor: loan.eligible ? "pointer" : "not-allowed", width: "100%" }}>
                  {loan.eligible ? "Apply Now →" : "Not Eligible"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {applied && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "flex-end", zIndex: 200 }}>
          <div style={{ background: WHITE, borderRadius: "20px 20px 0 0", padding: 28, width: "100%" }}>
            <CheckCircle size={40} color="#059669" style={{ display: "block", margin: "0 auto 12px" }} />
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#1e293b" }}>Application Started!</div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>CA Priya Mehta will connect you with <strong>{applied.bank}</strong> for your {applied.type}. Expect a call within 24 hours.</div>
            </div>
            <button onClick={() => setApplied(null)} style={{ width: "100%", padding: "14px 0", background: P, color: "#fff", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
