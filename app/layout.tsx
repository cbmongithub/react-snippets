import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from './header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ui-snippets - Dark Mode Components',
  description:
    'Crafted with Tailwind and React',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-black`}
        suppressHydrationWarning={true}
      >
        <div className='relative min-h-screen p-6'>
          <Header />
          <main className='container mx-auto flex max-w-5xl flex-1 flex-col px-4'>
            {children}
          </main>
          <footer>
            <div className='flex items-center justify-center py-8'>
              <span className='text-sm text-neutral-400'>
                By
                <a
                  href='https://twitter.com/Ibelick'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-1 text-neutral-50'
                >
                  @Ibelick
                </a>
                &nbsp;and
                <a
                  href='https://twitter.com/cbmonx'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-1 text-neutral-50'
                >
                  @cbmonx
                </a>
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
