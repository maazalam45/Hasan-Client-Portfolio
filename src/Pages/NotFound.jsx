// NotFound.js
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-center animate-fadeIn text-white">
      <h1 className="text-9xl font-bold text-red-500 animate-bounce">404</h1>
      <p className="mt-4 text-lg opacity-80">Oops! Page not found.</p>
      <a
        href="/"
        className="mt-6 inline-block px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white transition duration-300"
      >
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
