import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center mb-6">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="User" 
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold">Hello, User!</h1>
        <p className="text-sm text-gray-500">Welcome to your smart home control</p>
      </div>
    </div>
  );
};

export default Header;
