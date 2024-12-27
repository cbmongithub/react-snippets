import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const CardImage = () => {
    return (
        <div className="relative w-full rounded-2xl my-6 bg-gradient-to-tl from-neutral-950 border to-neutral-900 flex flex-col sm:flex-row">
            <div className="w-full h-48 mt-[-25px] sm:mt-0 sm:w-2/5 shrink-0 overflow-hidden rounded-2xl">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1663954128351-fee58e787b61?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="A blue bird sitting on a branch at night"
                    height={360}
                    width={480}
                    className="size-full rounded-2xl object-cover"
                />
            </div>
            <div className="p-6">
                <time
                    className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-neutral-500"
                    dateTime="2024-12-29"
                >
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                        <span className="h-4 w-0.5 rounded-full bg-neutral-500" />
                    </span>
                    Dec 29, 2024
                </time>
                <h2 className="text-sm sm:text-base font-semibold tracking-tight text-neutral-100">
                    <div
                        className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-neutral-800/50 sm:-inset-x-6 sm:rounded-2xl"
                        aria-hidden="true"
                    />
                    <span
                        className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
                        aria-hidden="true"
                    />
                    <span className="relative">This is a title</span>
                </h2>
                <p className="hidden sm:block relative mt-2 text-sm text-neutral-400">This is a card description</p>
                <div className="inline-flex flex-row justify-evenly mt-4 space-x-4">
                    <Link
                        href="#"
                        className="text-sm text-blue-500 hover:text-blue-600"
                    ><span className='inline-flex'>Read more
                            <ArrowRightIcon className="mt-1 ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardImage;