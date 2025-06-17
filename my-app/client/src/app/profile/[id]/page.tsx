import React from 'react';

export default function UserProfile({ id }) {
  console.log(id);
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="w-full max-w-x1 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="flex items-center">
              <img className="w-20 h-20 rounded-full mr-4" src="" alt="" />
              <div>
                <h2 className="text-2xl font-semibold mb-1">名前</h2>
                <p className="text-gray-600">初めまして</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded p-4 mb-4">
            <div className="mb-4">
              <div className="flex item-center mb-2">
                <img className="w-10 h-10 rounded-full mr-2" src="" alt="" />
                <div>
                  <h2 className="font-semibold text-md">名前</h2>
                  <p className="text-gray-500 text-base">2023/05/08</p>
                </div>
              </div>
              <p className="text-gray-700">初めての投稿です</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
