import React, { useState, useEffect } from "react";
import axios from "axios";

const EventHandler = () => {
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    const handleEvent = async (event) => {
      // Aquí debes procesar el evento recibido y hacer lo que desees con la información
      setEventData(event.data);
    };

    // Aquí debes escuchar el endpoint que te envíen la petición HTTP de tipo POST
    // Por ejemplo, puedes usar una librería como express en Node.js para crear el endpoint
    // y aquí escucharlo con axios
    const URL = "http://tu-servidor.com/event";
    axios.post(URL, { event: handleEvent }).catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <p>Event Data:</p>
      <pre>{JSON.stringify(eventData, null, 2)}</pre>
    </div>
  );
};

export default EventHandler;