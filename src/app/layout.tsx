import { Metadata } from 'next';

import Providers from 'components/Providers';

import { fonts } from 'app/fonts';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubikFont.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
