import React, { useState, useEffect } from "react";

let fd = {};

export const Client = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const uploadFunc = (e) => {
    setIsLoading(true);
    console.log(JSON.stringify(fd));
    fetch("/api/pets", {
      method: "POST",
      /* mode: "cors", */
      /*   headers: {
				"Content-Type": "multipart/form-data",
			}, */
      body: JSON.stringify(fd),
    })
      .then((response) => {
        /* console.log(response); */
        return response.json();
      })
      .then((resp) => {
        if (resp.success === true) {
          setMessage("true");
        } else {
          setMessage("false");
        }
        console.log(message);
      })
      .then(() => setIsLoading(false));
  };

  return (
    <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
      {props.data.name}
      {props.data.pets.map((pet, index) => {
        return (
          <div style={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}>
            {pet.name} ({pet.animal}) - Vaccinated:{" "}
            <button
              onClick={(e) => {
                console.log(e.target.value);
                fd = {
                  name: pet.name,
                  isVaccinated: !pet.isVaccinated,
                };
                uploadFunc();
                pet.isVaccinated = !pet.isVaccinated;
              }}>
              {isLoading ? "..." : pet.isVaccinated ? "true" : "false"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
