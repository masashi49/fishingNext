'use client';

import React, { useEffect, useState } from 'react';
import { Post } from './Post';
import { apiClient } from '@/lib/apiClient';
import { PostType } from '@/types';

export default function TimeLine() {
  const [postText, setPostText] = useState<string>();
  const [latestPosts, setLatestPosts] = useState<PostType[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newPost = await apiClient.post('posts/post', {
        content: postText,
      });

      setLatestPosts((prevPosts) => [newPost.data, ...prevPosts]);

      setPostText('');
    } catch (error) {
      alert('ログインしてください');
    }
  };

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const res = await apiClient.get('posts/latestpost');
        setLatestPosts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLatestPosts();
  }, []);

  return (
    <main>
      <div className="px-10">
        <form className="px-10" onSubmit={handleSubmit}>
          <textarea
            className="w-full h-24 border bg-gray-50 border-gray-300 resize-one focus:outline-none focus:ring-2 focus:ring-blue-400"
            name=""
            id=""
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setPostText(e.target.value)
            }
            value={postText}
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-gray-700 duration-200 text-white font-semibold py-2 px-4 rounded"
          >
            投稿
          </button>
        </form>
        {latestPosts.map((post: PostType) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
