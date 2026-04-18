import React from "react";

export default function Pill({ text, col = "#059669" }) {
  return (
    <span style={{ background: col + "22", color: col, fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, whiteSpace: "nowrap" }}>
      {text}
    </span>
  );
}
