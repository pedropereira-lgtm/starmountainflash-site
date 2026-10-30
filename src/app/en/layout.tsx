import type { ReactNode } from 'react';

/**
 * Páginas inglesas em React (/en/blog, /en/trabalhos, legais).
 * O <html> é do layout principal: este script acerta a língua antes de a página ser mostrada.
 */
export default function LayoutEn({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.lang='en';document.documentElement.dataset.lang='en';",
        }}
      />
      {children}
    </>
  );
}
