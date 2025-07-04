import { PostType } from '@/types';
import Link from 'next/link';
import React from 'react';

type Props = {
  post: PostType;
};

export const Post = (props: Props) => {
  const { post } = props;

  return (
    <div className="bg-white shadow-md rounded p-4 mt-4 border border-gray-500">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Link href={`/profile/${post.authorId}`}>
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={post.author.profile?.profileImageUrl}
              alt=""
            />
          </Link>
        </div>
        <div>
          <h2 className="font-semibold text-md">{post.author?.username}</h2>
          <p className="text-gray-500 text-sm">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
};
