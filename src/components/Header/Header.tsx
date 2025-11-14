import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-gray-900 bg-opacity-50 text-white p-2 flex justify-between items-center fixed top-0 left-0 right-0">
      <div className="flex items-center">
        <img src="/apple-logo.svg" alt="Apple Logo" className="h-5 w-5 mr-4" />
        <span className="font-bold">Portfolio</span>
      </div>
      <div className="flex items-center">
        <span>{time.toLocaleTimeString()}</span>
        <span className="ml-4">72°F</span>
        <span className="ml-4">New York, NY</span>
        <img src="/us-flag.svg" alt="US Flag" className="h-5 w-5 ml-4" />
      </div>
    </div>
  );
};

export default Header;