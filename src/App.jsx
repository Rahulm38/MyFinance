import React, { useState } from "react";
import { BG } from "./constants.js";
import { USERS } from "./data/mockData.js";
import Header from "./components/layout/Header.jsx";
import BottomNav from "./components/layout/BottomNav.jsx";
import DownloadModal from "./components/ui/DownloadModal.jsx";

// Screens
import LoginScreen from "./screens/LoginScreen.jsx";
import DashboardScreen from "./screens/DashboardScreen.jsx";
import DocumentsScreen from "./screens/DocumentsScreen.jsx";
import CreditScreen from "./screens/CreditScreen.jsx";
import LoansScreen from "./screens/LoansScreen.jsx";
import AIScreen from "./screens/AIScreen.jsx";
import ReportsScreen from "./screens/ReportsScreen.jsx";

const TITLES = { dashboard: "MyFinance", documents: "My Documents", credit: "Credit Score", loans: "Loan Options", ai: "AI Assistant", reports: "Custom Reports" };

export default function App() {
  const [screen, setScreen] = useState("login");
  const [userType, setUserType] = useState(null);
  const [user, setUser] = useState(null);
  const [downloading, setDownloading] = useState(null);

  const login = (type) => { setUserType(type); setUser(USERS[type]); setScreen("dashboard"); };
  const logout = () => { setScreen("login"); setUserType(null); setUser(null); };
  const startDownload = (doc) => { setDownloading(doc); setTimeout(() => setDownloading(null), 3800); };

  if (screen === "login") return <LoginScreen onLogin={login} />;

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: 430, margin: "0 auto", height: "100vh", background: BG, position: "relative", fontFamily: "system-ui,-apple-system,sans-serif", overflow: "hidden" }}>
      <Header title={TITLES[screen]} showBack={screen !== "dashboard"} onBack={() => setScreen("dashboard")} onLogout={logout} />

      {screen === "ai" ? (
        <AIScreen userType={userType} />
      ) : (
        <div style={{ flex: 1, overflowY: "auto" }}>
          {screen === "dashboard" && <DashboardScreen user={user} userType={userType} onNavigate={setScreen} onDownload={startDownload} />}
          {screen === "documents" && <DocumentsScreen userType={userType} onDownload={startDownload} />}
          {screen === "credit" && <CreditScreen user={user} onNavigate={setScreen} />}
          {screen === "loans" && <LoansScreen userType={userType} />}
          {screen === "reports" && <ReportsScreen userType={userType} onDownload={startDownload} />}
        </div>
      )}

      <BottomNav active={screen} onNavigate={setScreen} userType={userType} />

      {downloading && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "flex-end", zIndex: 300 }}>
          <DownloadModal doc={downloading} onClose={() => setDownloading(null)} />
        </div>
      )}
    </div>
  );
}
