import React, { useState, useEffect } from "react";

const CarMakeShow = (props) => {
  const [carMake, setCarMake] = useState({ carModels: [] });

  useEffect(() => {
    const id = props.match.params.id;
    async function getCarMake() {
      try {
        const response = await fetch(`/api/v1/car-makes/${id}`);
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
        const fetchedData = await response.json();
        setCarMake(fetchedData.carMake);
      } catch (err) {
        console.error(`Rut-roh!  Error in fetch: ${err.message}`);
      }
    }
    getCarMake();
  }, []);

  const carModelListItems = carMake.carModels.map((carModel) => {
    return <li key={carModel.id}>{carModel.name}</li>;
  });

  return (
    <>
      <h1>{carMake.name}</h1>
      <h2>Models:</h2>
      <ul>{carModelListItems}</ul>
    </>
  );
};

export default CarMakeShow;
