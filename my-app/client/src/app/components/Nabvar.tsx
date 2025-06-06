import Link from 'next/link';
import React from 'react';

export const Nabvar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center px-2">
      <h1 className="font-semibold text-xl">
        <Link href="/" className="text-2xl font-medium">
          SNS Clone
        </Link>
      </h1>
      <nav>
        <ul className="flex items-center">
          <li>
            <Link
              className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
              href="/login"
            >
              ログイン
            </Link>
          </li>
          <li>
            <Link
              className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
              href="/signup"
            >
              サインアップ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
