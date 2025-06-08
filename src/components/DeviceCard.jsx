import React from 'react';
import Toggle from './Toggle';
import { 
  FaLightbulb, 
  FaFan, 
  FaSnowflake, 
  FaTint 
} from 'react-icons/fa';

const DeviceCard = ({ device, onToggle, onSpeedChange }) => {
  const getIcon = () => {
    switch (device.type) {
      case 'light':
        return <FaLightbulb className="text-xl" />;
      case 'fan':
        return <FaFan className="text-xl" />;
      case 'ac':
        return <FaSnowflake className="text-xl" />;
      case 'water':
        return <FaTint className="text-xl" />;
      default:
        return null;
    }
  };

  return (
    <div className={`card p-4 ${device.cardColor}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="mr-3">
            {getIcon()}
          </div>
          <div>
            <h3 className="font-medium">{device.name}</h3>
            <p className="text-xs text-gray-600">{device.location}</p>
          </div>
        </div>
        <Toggle isOn={device.isOn} onToggle={() => onToggle(device.id)} />
      </div>

      {device.type === 'fan' && device.isOn && (
        <div className="mt-4">
          <p className="text-xs text-gray-600 mb-2">Fan Speed Control</p>
          <div className="flex space-x-2">
            {['Low', 'Medium', 'High', 'Turbo'].map(speed => (
              <button
                key={speed}
                className={`btn-speed ${
                  device.speed === speed
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => onSpeedChange(device.id, speed)}
              >
                {speed}
              </button>
            ))}
          </div>
        </div>
      )}

      {device.type === 'water' && (
        <div className="mt-4">
          <p className="text-xs text-gray-600 mb-2">Water Level</p>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
              style={{ width: `${device.level}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-600">{device.level}%</span>
            <span className="text-xs text-gray-600">Water Level</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceCard;
