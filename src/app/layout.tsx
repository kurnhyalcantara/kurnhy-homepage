import { Metadata } from 'next';

import { fonts } from '@/app/fonts';
import Provider from '@/components/ui/provider';
import Container from '@/components/ui/container';

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
        <Provider>
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
