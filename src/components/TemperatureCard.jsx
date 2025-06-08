import React from 'react';

const TemperatureCard = ({ temperature, status }) => {
  return (
    <div className="card card-white p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 flex items-center justify-center mb-4">
          <div className="absolute w-full h-full rounded-full border-4 border-gray-100"></div>
          <div className="absolute w-24 h-24 rounded-full border-4 border-primary"></div>
          <div className="text-3xl font-bold">
            {temperature}°
            <span className="text-sm font-normal">C</span>
          </div>
        </div>
        <p className="text-gray-500">{status}</p>
        <h3 className="text-lg font-medium mt-2">Room Temperature</h3>
      </div>
    </div>
  );
};

export default TemperatureCard;
