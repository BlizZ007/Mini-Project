import React, { useState } from 'react';
import Header from './Header';
import TabNavigation from './TabNavigation';
import DeviceCard from './DeviceCard';
import TemperatureCard from './TemperatureCard';
import HistoryCard from './HistoryCard';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: 'Light',
      type: 'light',
      location: 'Bedroom 1',
      isOn: true,
      cardColor: 'card-yellow'
    },
    {
      id: 2,
      name: 'Fan',
      type: 'fan',
      location: 'Bedroom 1',
      isOn: true,
      speed: 'Medium',
      cardColor: 'card-blue'
    },
    {
      id: 3,
      name: 'AC',
      type: 'ac',
      location: 'Bedroom 1',
      isOn: false,
      cardColor: 'card-blue'
    },
    {
      id: 4,
      name: 'Water Pump',
      type: 'water',
      location: 'Utility',
      isOn: true,
      level: 75,
      cardColor: 'card-yellow'
    }
  ]);

  const activities = [
    {
      userName: 'Sarah',
      action: 'turned on the lights',
      time: '2 minutes ago',
      userImage: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      userName: 'John',
      action: 'turned off the AC',
      time: '15 minutes ago',
      userImage: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      userName: 'Emma',
      action: 'opened curtains',
      time: '1 hour ago',
      userImage: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const handleToggleDevice = (deviceId) => {
    setDevices(devices.map(device => 
      device.id === deviceId 
        ? { ...device, isOn: !device.isOn } 
        : device
    ));
  };

  const handleSpeedChange = (deviceId, speed) => {
    setDevices(devices.map(device => 
      device.id === deviceId 
        ? { ...device, speed } 
        : device
    ));
  };

  const filteredDevices = activeTab === 'all' 
    ? devices 
    : devices.filter(device => device.location.toLowerCase().includes(activeTab));

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDevices.map(device => (
          <DeviceCard 
            key={device.id} 
            device={device} 
            onToggle={handleToggleDevice}
            onSpeedChange={handleSpeedChange}
          />
        ))}
        <TemperatureCard temperature={23} status="Normal" />
        <div className="lg:col-span-2">
          <HistoryCard activities={activities} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
