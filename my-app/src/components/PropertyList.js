import React from 'react';

function PropertyList() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Properties for Sale</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="https://via.placeholder.com/400x300" alt="Property 1" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-semibold mt-2">Luxury Home - San Francisco</h3>
          <p className="text-gray-600">$1.2M</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="https://via.placeholder.com/400x300" alt="Property 2" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-semibold mt-2">Cozy Apartment - San Carlos</h3>
          <p className="text-gray-600">$750K</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;