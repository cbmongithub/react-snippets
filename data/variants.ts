export const svgPathOpen = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  moving: { d: 'M1 8.5L24 8.5' },
  closed: { d: 'M1 8.5L24 8.5' },
}

export const svgPathClose = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M1 14.5L24 14.5' },
  closed: { d: 'M1 14.5L12 14.5' },
}

export const ulVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 },
  },
}

export const liVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 30, type: 'spring', ease: 'easeIn' },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 30, type: 'spring', ease: 'easeOut' },
    },
  },
}
