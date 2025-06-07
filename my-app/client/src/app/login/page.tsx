import Head from 'next/head';

export default function Login() {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px8">
      <Head>
        <title>ログイン</title>
      </Head>
      <div>
        <h2>アカウントログイン</h2>
      </div>
      <div>
        <div>
          <form action="">
            <div>
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-ful py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-500"
            >
              ログイン
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
