import React from 'react';

const HistoryCard = ({ activities }) => {
  return (
    <div className="card card-white p-4">
      <h3 className="text-lg font-medium mb-4">History</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
              <img 
                src={activity.userImage} 
                alt={activity.userName} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-sm">
                <span className="font-medium">{activity.userName}</span> {activity.action}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryCard;
