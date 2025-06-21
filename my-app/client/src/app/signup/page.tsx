'use client';

import { apiClient } from '@/lib/apiClient';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();

  //React.FormEvent<HTMLFormElement>はonSubmitの型
  const handoleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページのリロードを防ぐ

    // 新規登録APIをたたく
    try {
      await apiClient.post('auth/register', {
        username,
        email,
        password,
      });
      router.push('/login'); // 登録成功後にログインページへリダイレクト
    } catch (error) {
      alert(error + '入力内容に誤りがあります。');
    }
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px8">
      <Head>
        <title>新規作成</title>
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          アカウント登録
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handoleSubmit}>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="username"
              >
                お名前
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                required
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mt-6">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mt-6">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                パスワード
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-ful py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-500"
              >
                新規登録
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
