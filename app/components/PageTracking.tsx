import React from 'react';
import Link from 'next/link';
import { FaHome, FaFolder, FaAngleRight } from 'react-icons/fa';
import { Tracking } from '../types/pageTracking';

const ICON_CLASS = 'inline mb-1';
const LINK_CLASS = 'text-sm hover:underline';
const CONTAINER_CLASS = 'py-3 pl-3 bg-gray-200 dark:bg-slate-900';
const MARGIN_RIGHT_CLASS = 'mr-3';

export function PageTracking({
  pass,
  pageTitle,
  articleTitle,
  articlePass,
}: Tracking) {
  return (
    <div className={CONTAINER_CLASS}>
      <Link href="/" className={`${LINK_CLASS} ${MARGIN_RIGHT_CLASS}`}>
        <FaHome className={ICON_CLASS} /> TOP
      </Link>
      <FaAngleRight className={ICON_CLASS} />
      <Link href={`/articles/${pass}`} className={`${LINK_CLASS} ml-3`}>
        <FaFolder className={ICON_CLASS} /> {pageTitle}
      </Link>
      {articleTitle && (
        <>
          <FaAngleRight className={`ml-3 ${ICON_CLASS}`} />
          <Link
            href={`/articles/${pass}/${articlePass}`}
            className={`${LINK_CLASS} ml-3`}
          >
            <FaFolder className={ICON_CLASS} /> {articleTitle}
          </Link>
        </>
      )}
    </div>
  );
}
