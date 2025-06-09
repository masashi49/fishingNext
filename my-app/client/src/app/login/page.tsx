'use client';

import { useAuth } from '@/context/auth';
import { apiClient } from '@/lib/apiClient';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const router = useRouter();
  const { login } = useAuth(); // useAuthは認証情報を取得するためのカスタムフック

  //React.FormEvent<HTMLFormElement>はonSubmitの型
  const handoleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページのリロードを防ぐ

    // 新規登録APIをたたく
    try {
      const responce = await apiClient.post('auth/login', {
        email,
        password,
      });

      const tocken = responce.data.token;
      login(tocken); // ログイン情報を保存する

      if (tocken) {
        router.push('/'); // ログインできたらトップページへ
      }

      //router.push('/'); // ログインできたらトップページへ
    } catch (error) {
      alert('入力内容に誤りがあります。');
    }
  };
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px8">
      <Head>
        <title>ログイン</title>
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          アカウントログイン
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handoleSubmit}>
            <div>
              <label htmlFor="email">メールアドレス</label>
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
            <div>
              <label htmlFor="password">パスワード</label>
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
            <div className='class="mt-6"'>
              <button
                type="submit"
                className="w-ful py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-500"
              >
                ログイン
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
