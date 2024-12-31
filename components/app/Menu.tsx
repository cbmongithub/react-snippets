"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import {
    svgPathOpen,
    svgPathClose,
    ulVariants,
    liVariants,
} from '../../data/variants';
import { COMPONENTS } from '@/data/components';

const useLoaded = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => setLoaded(true), [])
    return loaded
}

export const Menu = () => {
    const [nav, setNav] = useState(false)
    const [animation, setAnimation] = useState('closed')
    const loaded = useLoaded()

    const handleNav = () => {
        setNav(!nav)
        setAnimation('moving')
        setTimeout(() => {
            setAnimation(animation === 'closed' ? 'open' : 'closed')
        }, 750)
    }

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
            <motion.ul
                className={
                    nav
                        ? 'absolute  bg-black right-0 top-0 mt-18 z-40 flex min-h-screen w-full flex-col items-center justify-center duration-1000 text-sm ease-in-out'
                        : 'absolute  bg-black right-[-100%] top-0 mt-18 z-40 flex min-h-screen w-full flex-col items-center justify-center  duration-1000 text-sm ease-in-out'
                }
                variants={ulVariants}
                animate={nav ? 'open' : 'closed'}>
                {COMPONENTS.map((component) => (
                    <motion.li
                        className='flex flex-col items-center justify-center w-full'
                        key={component.slug}
                        variants={liVariants}
                        whileTap={{ scale: 1.00 }}
                        whileHover={{ scale: 1.03 }}>
                        <Link
                            className='text-lg bg-black pb-0.5 font-light text-neutral-50 transition duration-300 ease-in-out hover:text-blue-600'
                            href={component.slug}
                            role='component'
                            onClick={handleNav}
                            aria-label={`${component.name} Component Link`}>
                            {component.name}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </>)
};