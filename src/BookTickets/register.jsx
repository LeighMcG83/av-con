import React from "react";
import RegistrationForm from "./registrationForm";

export default function Register() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8 lg:p-12">
    <div className="event-container">

        <h1 className="event-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Register for AvCon Tickets</h1>
        <div>
          <img
            src="https://www.aviationpress.co.uk/wp-content/uploads/2022/04/PC-12-Banner-scaled.jpg"
            alt="header image"
            style={{
              width: '100%',
              mixBlendMode: 'luminosity'
            }}
          />
        </div>
        <RegistrationForm />
    </div>
  </main>
  );
}