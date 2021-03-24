import React, { useState } from "react";

export const Client = (props) => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
      {props.data.name}
      {props.data.pets.map((pet, index) => {
        return (
          <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
            {pet.name} ({pet.animal}) - Vaccinated:{" "}
            <button>{pet.isVaccinated ? "true" : "false"}</button>
          </div>
        );
      })}
    </div>
  );
};
