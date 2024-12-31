"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    svgPathOpen,
    svgPathClose,
    ulVariants,
    liVariants,
} from '../../data/variants';
import { CATEGORIES, COMPONENTS } from '@/data/components';
import { useLoaded } from '@/hooks';

export const Menu = () => {
    const [nav, setNav] = useState(false);
    const [animation, setAnimation] = useState('closed');
    const loaded = useLoaded();

    const handleNav = () => {
        setNav(!nav);
        setAnimation('moving');
        document.body.style.overflow = nav ? 'auto' : 'hidden';
        setTimeout(() => {
            setAnimation(animation === 'closed' ? 'open' : 'closed');
        }, 750);
    };

    return loaded && (
        <>
            <button
                type='button'
                className='z-50 cursor-pointer'
                aria-label='Menu Toggle'
                role='button'
                onClick={handleNav}>
                <svg
                    aria-hidden='true'
                    width='29'
                    height='29'
                    viewBox='0 0 29 29'>
                    <motion.path
                        stroke='currentColor'
                        animate={animation}
                        variants={svgPathOpen}
                    />
                    <motion.path
                        stroke='currentColor'
                        animate={animation}
                        variants={svgPathClose}
                    />
                </svg>
            </button>
            <motion.div
                className={
                    nav
                        ? 'fixed border border-x-neutral-900 w-full h-screen border-y-0 bg-black right-0 top-0 mt-18 z-40 flex flex-col duration-1000 text-sm ease-in-out'
                        : 'fixed border border-x-neutral-900 w-full h-screen border-y-0 bg-black right-[-100%] top-0 mt-18 z-40 flex flex-col duration-1000 text-sm ease-in-out'
                }
                variants={ulVariants}
                animate={nav ? 'open' : 'closed'}>
                {CATEGORIES.map((category) => (
                    <motion.div
                        key={category}
                        variants={liVariants}
                        whileTap={{ scale: 1.00 }}
                        whileHover={{ scale: 1.03 }}>
                        <motion.details className='w-full'>
                            <motion.summary className='text-lg bg-black pb-0.5 font-light text-neutral-50 transition duration-300 ease-in-out hover:text-blue-600 cursor-pointer'>
                                {category}
                            </motion.summary>
                            <motion.ul className='w-full'>
                                {COMPONENTS.filter(component => component.categories.includes(category))?.map((component) => (
                                    <motion.li key={component.name} className='w-full'>
                                        <Link href={`/${component.slug}`}>
                                            <p className='w-full text-neutral-50 hover:text-blue-600 transition duration-300 ease-in-out'>
                                                {component.name}
                                            </p>
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.details>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};


