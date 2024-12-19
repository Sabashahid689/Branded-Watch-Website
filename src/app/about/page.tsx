import React from 'react';

const About = () => {
  return (
    <div>
      <section
        className="about bg-cover bg-center h-screen flex items-center text-center"
        style={{ backgroundImage: "url('about.JPEG')" }}
      >
        <div className="bg-black bg-opacity-50 text-white p-6 md:p-12 rounded-md max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">About</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Welcome to Watch World, where we believe a watch is more than just an accessory—it is a statement of style,
            precision, and craftsmanship. Our mission is to bring you a diverse selection of premium timepieces from
            around the globe, each chosen for its quality and unique design. Whether you are a connoisseur or simply
            appreciate the beauty of a well-made watch, we are here to help you find the perfect piece to complement your
            personality and elevate your look.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
