import React, { useEffect, useState } from 'react';
import './Loading.css'; 

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return loading && (
    <div className="loading-screen">
      <div className="loader">
      </div>
      <p>Loading...</p>
    </div>
  )
};

export default LoadingScreen;
