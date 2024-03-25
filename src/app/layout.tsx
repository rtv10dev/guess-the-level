import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const myFont = localFont({
  src: './files/font.otf',
  display: 'auto'
});

export const metadata: Metadata = {
  title: 'Guess the level',
  description: ''
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={myFont.className}>
        <div>
          <Toaster
            position="top-center"
            containerStyle={{
              top: '48%',
              left: '50%',
              bottom: 'auto',
              right: '-38px',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
