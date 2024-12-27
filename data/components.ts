import TextAnimatedGradient from '@/components/lab/text/TextAnimatedGradient';
import TextGradient from '@/components/lab/text/TextGradient';
import TextShine from '@/components/lab/text/TextShine';
import ButtonBackgroundShine from '@/components/lab/button/ButtonBackgroundShine';
import ButtonGradient from '@/components/lab/button/ButtonGradient';
import ButtonHoverGradient from '@/components/lab/button/ButtonHoverGradient';
import ButtonBackgroundSpotlight from '@/components/lab/button/ButtonBackgroundSpotlight';
import ButtonRotatingBackgroundGradient from '@/components/lab/button/ButtonRotatingBackgroundGradient';
import ButtonShadowGradient from '@/components/lab/button/ButtonShadowGradient';
import ButtonRipple from '@/components/lab/button/ButtonRipple';
import ButtonToggle from '@/components/lab/button/ButtonToggle';
import InputGradientBorder from '@/components/lab/input/InputGradientBorder';
import InputSpotlightBorder from '@/components/lab/input/InputSpotlightBorder';
import InputPulseBorder from '@/components/lab/input/InputPulseBorder';
import BadgeAnimatedGradientBorder from '@/components/lab/badge/BadgeAnimatedGradientBorder';
import BadgeShine from '@/components/lab/badge/BadgeShine';
import BadgeTextGradient from '@/components/lab/badge/BadgeTextGradient';
import CardAnimatedBorderGradient from '@/components/lab/card/CardAnimatedBorderGradient';
import CardSpotlightImage from '@/components/lab/card/CardSpotlightImage';
import CardSpotlight from '@/components/lab/card/CardSpotlight';
import CardPulseBorder from '@/components/lab/card/CardPulseBorder';
import CardTilt from '@/components/lab/card/CardTilt';

const CSS = {
  ['text-gradient']: `
  @theme {
  --animate-text-gradient: text-gradient 1.5s linear infinite;

  @keyframes text-gradient {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 200% center;
    }
  }
}
`,
  ['background-shine']: `
  @theme {
  --animate-background-shine: background-shine 2s linear infinite;

  @keyframes background-shine {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -200% 0;
    }
  }
}
`,
  ['pulse-slow']: `
  @theme {
  --animate-pulse-slow: pulse-slow 6s infinite cubic-bezier(0.4, 0, 0.6, 1);
  }
  `,
  ['border-width']: `
    @theme {
  --animate-border-width: border-width 3s infinite alternate;

  @keyframes border-width {
    from {
      width: 10px;
      opacity: 0;
    }
    to {
      width: 100px;
      opacity: 1;
    }
  }
}
`,
};

export type ComponentsProps = {
  name: string;
  component: React.FC;
  slug: string;
  type: string;
  css?: string;
};

export const COMPONENTS = [
  {
    name: 'Badge Animated Gradient Border',
    component: BadgeAnimatedGradientBorder,
    slug: 'badge-animated-gradient-border',
    type: 'badge',
    categories: ['Badges', 'All'],
  },
  {
    name: 'Badge Shine',
    component: BadgeShine,
    slug: 'badge-shine',
    type: 'badge',
    css: CSS['background-shine'],
    categories: ['Badges', 'All'],
  },
  {
    name: 'Badge Text Gradient',
    component: BadgeTextGradient,
    slug: 'badge-text-gradient',
    type: 'badge',
    categories: ['Badges', 'All'],
  },
  {
    name: 'Button Background Shine',
    component: ButtonBackgroundShine,
    slug: 'button-background-shine',
    type: 'button',
    css: CSS['background-shine'],
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Gradient',
    component: ButtonGradient,
    slug: 'button-gradient',
    type: 'button',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Hover Gradient',
    component: ButtonHoverGradient,
    slug: 'button-hover-gradient',
    type: 'button',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Background Spotlight',
    component: ButtonBackgroundSpotlight,
    slug: 'button-background-spotlight',
    type: 'button',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Rotating Background Gradient',
    component: ButtonRotatingBackgroundGradient,
    slug: 'button-rotating-background-gradient',
    type: 'button',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Ripple',
    component: ButtonRipple,
    slug: 'button-ripple',
    type: 'button',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Shadow Gradient',
    component: ButtonShadowGradient,
    slug: 'button-shadow-gradient',
    type: 'button',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Toggle',
    component: ButtonToggle,
    slug: 'button-toggle',
    type: 'button',
    categories: ['Buttons', 'All'],
  },

  {
    name: 'Card Animated Border Gradient',
    component: CardAnimatedBorderGradient,
    slug: 'card-animated-border-gradient',
    type: 'card',
    categories: ['Cards', 'All'],
  },
  {
    name: 'Card Spotlight Image',
    component: CardSpotlightImage,
    slug: 'card-spotlight-image',
    type: 'card',
    categories: ['Cards', 'All'],
  },
  {
    name: 'Card Spotlight',
    component: CardSpotlight,
    slug: 'card-spotlight',
    type: 'card',
    categories: ['Cards', 'All'],
  },
  {
    name: 'Card Pulse Border',
    component: CardPulseBorder,
    slug: 'card-pulse-border',
    type: 'card',
    css: CSS['border-width'],
    categories: ['Cards', 'All'],
  },
  {
    name: 'Card Tilt',
    component: CardTilt,
    slug: 'card-tilt',
    type: 'card',
    categories: ['Cards', 'All'],
  },
  {
    name: 'Input Gradient Border',
    component: InputGradientBorder,
    slug: 'input-gradient-border',
    type: 'input',
    categories: ['Inputs', 'All'],
  },
  {
    name: 'Input Spotlight Border',
    component: InputSpotlightBorder,
    slug: 'input-spotlight-border',
    type: 'input',
    categories: ['Inputs', 'All'],
  },
  {
    name: 'Input Pulse Border',
    component: InputPulseBorder,
    slug: 'input-pulse-border',
    type: 'input',
    css: CSS['border-width'],
    categories: ['Inputs', 'All'],
  },
  {
    name: 'Text Gradient',
    component: TextGradient,
    slug: 'text-gradient',
    type: 'text',
    categories: ['Text', 'All'],
  },
  {
    name: 'Text Animated Gradient',
    component: TextAnimatedGradient,
    slug: 'text-animated-gradient',
    type: 'text',
    css: CSS['text-gradient'],
    categories: ['Text', 'All'],
  },
  {
    name: 'Text Shine',
    component: TextShine,
    slug: 'text-shine',
    type: 'text',
    css: CSS['background-shine'],
    categories: ['Text', 'All'],
  },
];
