import React from "react";

export default function Explain({ title, base_title, icon_name }) {
  return (
    <div className="explain_card col-4">
      <div className="title">{title}</div>
      <div className="base-title">{base_title}</div>
      {icon_name}
    </div>
  );
}
