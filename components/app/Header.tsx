import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { ReactSnippetsLogo, XLogoIcon } from './Icons';

const Header = () => {
    return (
        <header className='flex px-6 items-center justify-between py-8 border border-b-neutral-900 border-t-0 border-x-0'>
            <Link href='/'>
                <ReactSnippetsLogo className='h-6 w-auto' />
            </Link>
            <nav className='flex gap-6'>
                <Link
                    href='https://x.com/cbmonx'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex'
                >
                    <XLogoIcon className='size-6 text-neutral-50 transition-colors hover:text-neutral-400' />
                </Link>
                <Link
                    href='https://github.com/cbmongithub/ui-snippets'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex'
                >
                    <GitHubLogoIcon className='size-6 text-neutral-50 transition-colors hover:text-neutral-400' />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
