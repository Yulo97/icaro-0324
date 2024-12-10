import React from "react";

export const Card = ({ children, orientacion, tamaño }) => {
  return tamaño === "pequeño" ? (
    <div
      className="cardContainer"
      style={
        orientacion === "horizontal"
          ? { width: "400px", height: "200px" }
          : { width: "200px", height: "400px" }
      }
    >
      {children}
    </div>
  ) : (
    <div
      className="cardContainer"
      style={
        orientacion === "horizontal"
          ? { width: "600px", height: "400px" }
          : { width: "400px", height: "600px" }
      }
    >
      {children}
    </div>
  );
};
