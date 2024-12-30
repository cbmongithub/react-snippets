import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type CardProps = {
    children: React.ReactNode;
    slug: string;
    name: string;
};

const Card: React.FC<CardProps> = ({
    children,
    slug,
    name,
}) => {
    return (
        <Link href={`/${slug}`}>
            <div className='relative flex items-center justify-center border border-neutral-900 hover:border-neutral-800 bg-black px-8 py-32'>
            <Link
                href={`/${slug}`}
                className='absolute left-5 top-4 text-sm text-white'
            >
                {name}
            </Link>
            <div className='absolute right-5 top-3'>
                <Link href={`/${slug}`}>
                    <ArrowRightIcon className='h-5 w-5 text-white' />
                </Link>
            </div>
            <div className='z-0'>{children}</div>
        </div>
        </Link>
    );
};

export default Card;