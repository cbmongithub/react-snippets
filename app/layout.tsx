import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Header } from './header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ui.ibelick - Collection of dark mode-first components and effects.',
  description:
    'Collection of dark mode-first components and effects. Crafted with React and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang='en'>
      {!isDev ? (
        <Script
          async
          src='https://analytics.umami.is/script.js'
          data-website-id='d6b95341-74ea-4ba4-9f82-6b10cc342ea8'
        />
      ) : null}
      <body
        className={`${inter.className} bg-black`}
        suppressHydrationWarning={true}
      >
        <div className='relative min-h-screen'>
          <Header />
          <main className='container mx-auto flex max-w-5xl flex-1 flex-col px-4'>
            {children}
          </main>
          <footer>
            <div className='flex items-center justify-center py-8'>
              <span className='text-sm text-gray-400'>
                Made by
                <a
                  href='https://twitter.com/Ibelick'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-1 text-gray-50'
                >
                  @Ibelick
                </a>
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
