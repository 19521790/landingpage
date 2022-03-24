import React from "react";

export default function ReasonCard({ icon, content, delay }) {
  return (
    <div
      className="reason_card col-4"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="hexagon">
        <div className="hexagon_child hexagon">
          {icon}
          <div className="hexagon_content">{content}</div>
        </div>
      </div>
    </div>
  );
}
