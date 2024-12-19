import React from 'react';

const Hero = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-center h-screen flex items-center justify-center text-center"
        style={{ backgroundImage: "url('watches-background.JPEG')" }}
      >
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in">
            Welcome to Watch World
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your one-stop shop for the best watches
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
