import React from 'react';

export const Post = () => {
  return (
    <div className="bg-white shadow-md rounded p-4 mt-4 border border-gray-500">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src="https://via.placeholder.com/150"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-semibold text-md">名前</h2>
          <p className="text-gray-500 text-sm">06/06 21:00</p>
        </div>
        <p className="text-gray-700">初めての投稿です</p>
      </div>
    </div>
  );
};
