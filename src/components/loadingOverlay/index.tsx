import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-white w-16 h-16"></div>
    </div>
  );
};

export default LoadingOverlay;
