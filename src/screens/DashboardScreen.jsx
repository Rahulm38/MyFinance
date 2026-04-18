import React from "react";
import { CheckCircle, Phone, TrendingUp, Shield, PieChart, RefreshCw, CreditCard, AlertCircle, Calendar, FileText, Zap, BarChart2, Briefcase } from "lucide-react";
import { P, WHITE } from "../constants.js";
import { PERSONAL_DOCS, BUSINESS_DOCS } from "../data/mockData.js";
import StatCard from "../components/ui/StatCard.jsx";
import DocRow from "../components/ui/DocRow.jsx";

export default function DashboardScreen({ user, userType, onNavigate, onDownload }) {
  const isP = userType === "personal";
  const recDocs = isP
    ? PERSONAL_DOCS["Tax & Income"].filter(d => d.badge).slice(0, 3)
    : BUSINESS_DOCS["GST Returns"].filter(d => d.badge).slice(0, 3);

  return (
    <div style={{ paddingBottom: 16 }}>
      <div style={{ background: "linear-gradient(135deg, #1e3a8a, #1e40af)", padding: "18px 16px 22px" }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 3 }}>Welcome back,</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 2 }}>{user.name}</div>
        {isP
          ? <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{user.ay} · {user.caName}</div>
          : <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>GSTIN: {user.gstin}</div>
        }
        <div style={{ background: "rgba(255,255,255,0.14)", borderRadius: 12, padding: "11px 14px", marginTop: 14, display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(255,255,255,0.2)" }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CheckCircle size={18} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#fff" }}>{user.caName}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>{user.caFirm} · Your Chartered Accountant</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 10px", display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
            <Phone size={12} color="#fff" /><span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>Call</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "14px 12px 0" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          {isP ? (
            <>
              <StatCard icon={<TrendingUp size={15} color={P} />} label="Annual Income" value={user.income} sub={user.ay} col={P} />
              <StatCard icon={<Shield size={15} color="#059669" />} label="Tax Paid" value={user.taxPaid} sub="FY 2023-24" col="#059669" />
            </>
          ) : (
            <>
              <StatCard icon={<TrendingUp size={15} color={P} />} label="Turnover" value={user.turnover} sub="FY 2023-24" col={P} />
              <StatCard icon={<PieChart size={15} color="#059669" />} label="Net Profit" value={user.netProfit} sub="FY 2023-24" col="#059669" />
            </>
          )}
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          {isP ? (
            <>
              <StatCard icon={<RefreshCw size={15} color="#d97706" />} label="Refund Due" value={user.refundDue} sub={user.refundStatus} col="#d97706" />
              <StatCard icon={<CreditCard size={15} color="#7c3aed" />} label="Credit Score" value={user.creditScore} sub={user.creditRating + " ★★★★"} col="#7c3aed" onClick={() => onNavigate("credit")} />
            </>
          ) : (
            <>
              <StatCard icon={<AlertCircle size={15} color="#d97706" />} label="GST Payable" value={user.gstPayable} sub="Current quarter" col="#d97706" />
              <StatCard icon={<Calendar size={15} color="#7c3aed" />} label="TDS Payable" value={user.tdsPayable} sub="This month" col="#7c3aed" />
            </>
          )}
        </div>

        <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b", marginBottom: 10 }}>Quick Access</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[
            { id: "documents", Icon: FileText, label: "My Documents", sub: "Download any time", col: P },
            { id: "ai", Icon: Zap, label: "Ask AI", sub: "Get instant answers", col: "#7c3aed" },
            { id: "reports", Icon: BarChart2, label: "Custom Reports", sub: "Download summaries", col: "#059669" },
            isP
              ? { id: "loans", Icon: CreditCard, label: "Loan Options", sub: "Check eligibility", col: "#d97706" }
              : { id: "loans", Icon: Briefcase, label: "Business Loans", sub: "CA-curated offers", col: "#d97706" },
          ].map(a => (
            <button key={a.id + a.label} onClick={() => onNavigate(a.id)}
              style={{ background: WHITE, border: "1px solid #e2e8f0", borderRadius: 14, padding: "14px 12px", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "flex-start", gap: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: a.col + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <a.Icon size={17} color={a.col} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1e293b" }}>{a.label}</div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 1 }}>{a.sub}</div>
              </div>
            </button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1e293b" }}>Recently Added</div>
          <button onClick={() => onNavigate("documents")} style={{ color: P, fontSize: 12, fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>View All →</button>
        </div>
        <div style={{ background: WHITE, borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
          {recDocs.map(d => <DocRow key={d.id} doc={d} onDownload={onDownload} />)}
        </div>
      </div>
    </div>
  );
}
