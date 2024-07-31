import React from 'react';
import Link from 'next/link';

const linksData = {
  siteLinks: [
    { href: 'https://qiita.com/hukuryo', title: 'Qiita' },
    { href: 'https://zenn.dev/ryohei0509', title: 'Zenn' },
    { href: 'https://github.com/hukuryo', title: 'GitHub' },
    { href: 'https://twitter.com/hukuryo_', title: 'Twitter(X)' },
    { href: 'https://www.wantedly.com/id/ryohei0509', title: 'Wantedly' },
  ],
  profileLinks: [{ href: '/profile', title: 'プロフィール' }],
  categoryLinks: [
    { href: '/articles/tech', title: '技術記事' },
    { href: '/articles/books', title: '読んだ本' },
    { href: '/articles/hobby', title: '趣味' },
  ],
};

type SiteLinkProps = {
  href: string;
  title: string;
};

const SiteLink = ({ href, title }: SiteLinkProps) => (
  <li className="mb-3">
    <Link
      className="text-md hover:opacity-60 hover:underline"
      href={href}
      target="_blank"
    >
      {title}
    </Link>
  </li>
);

type LinksSectionProps = {
  title: string;
  links: SiteLinkProps[];
};

const LinksSection = ({ title, links }: LinksSectionProps) => (
  <div>
    <h3 className="mb-6 border-l-8 border-stone-400 pl-2 text-sm font-semibold text-gray-400 uppercase dark:text-white">
      {title}
    </h3>
    <ul>
      {links.map((link) => (
        <SiteLink key={link.href} href={link.href} title={link.title} />
      ))}
    </ul>
  </div>
);

export function Footer() {
  return (
    <footer className="py-7 shadow-lg">
      <div className="w-full px-10 sm:px-32 mx-auto max-w-8xl">
        <div className="grid gap-12 grid-cols-3 lg:gap-12">
          <LinksSection title="サイト" links={linksData.siteLinks} />
          <LinksSection title="プロフィール" links={linksData.profileLinks} />
          <LinksSection title="カテゴリー" links={linksData.categoryLinks} />
        </div>
        <hr className="mt-10 mb-10" />
        <span className="block text-center text-gray-600 dark:text-gray-400">
          © 2024 Hukuryo-no-Blog
        </span>
      </div>
    </footer>
  );
}
