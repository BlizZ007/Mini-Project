import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'all', label: 'All Devices' },
    { id: 'bedroom', label: 'Bedroom 1' },
    { id: 'utility', label: 'Utility' }
  ];

  return (
    <div className="flex space-x-2 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeTab === tab.id
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
