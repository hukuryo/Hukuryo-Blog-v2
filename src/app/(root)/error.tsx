'use client';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'エラーが発生しました。',
  description: 'エラーが発生しました。',
};

export default function ErrorPage500() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-red-600">Oops!</h1>
        <p className="mt-2 text-lg">エラーが発生しました。</p>
        <p className="mt-2 mb-10">サーバー側でエラーが発生しました。</p>
        <Link href="/" legacyBehavior>
          <a className="mt-10 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            トップページに戻る
          </a>
        </Link>
      </div>
    </div>
  );
}
