import React from 'react';
import { Post } from './Post';

export default function TimeLine() {
  return (
    <main>
      <div className="px-10">
        <form className="px-10">
          <textarea
            className="w-full h-24 border bg-gray-50 border-gray-300 resize-one focus:outline-none focus:ring-2 focus:ring-blue-400"
            name=""
            id=""
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-gray-700 duration-200 text-white font-semibold py-2 px-4 rounded"
          >
            投稿
          </button>
        </form>
        <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
      </div>
    </main>
  );
}
