import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

// @ts-ignore
// eslint-disable-next-line
declare global {
  interface Window {
    inkeepWidget?: any;
    InkeepWidget?: any;
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </>
  );
}
