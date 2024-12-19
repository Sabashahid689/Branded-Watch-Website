import React from 'react';

const Watches = () => {
  const watchData = [
    { id: 1, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/rolex.JPEG' },
    { id: 2, name: 'Omega', price: 8000, description: 'Sporty design', image: '/omega.JPEG' },
    { id: 3, name: 'Patek Philippe', price: 25000, description: 'Elegant timepiece', image: '/patek.JPEG' },
    { id: 4, name: 'Tag Heuer', price: 5000, description: 'Sporty and stylish', image: '/tag-heuer.JPEG' },
    { id: 5, name: 'Breitling', price: 7000, description: 'Bold and rugged', image: '/breitling.JPEG' },
    { id: 6, name: 'Seiko', price: 1000, description: 'Affordable and reliable', image: '/seikobg.JPEG' },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Watches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {watchData.map((watch) => (
          <div
            key={watch.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={watch.image}
              alt={watch.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
              <p className="text-gray-600 mb-4">{watch.description}</p>
              <div className="text-lg font-bold text-blue-500 mb-4">
                ${watch.price}
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
