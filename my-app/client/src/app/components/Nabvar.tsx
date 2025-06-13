'use client';

import { useAuth } from '@/context/auth';
import Link from 'next/link';
import React from 'react';

export const Nabvar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container mx-auto flex justify-between items-center px-2">
      <h1 className="font-semibold text-xl">
        <Link href="/" className="text-2xl font-medium">
          SNS Clone
        </Link>
      </h1>
      <nav>
        <ul className="flex items-center">
          {/* componentにする */}
          {user ? (
            <>
              <li>
                <Link
                  className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                  href="/profile"
                >
                  プロフィール
                </Link>
              </li>
              <li>
                <button className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium">
                  ログアウト
                </button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
