
import BadgeAnimatedGradientBorder from '../../components/badges/BadgeAnimatedGradientBorder';
import BadgeShine from '../../components/badges/BadgeShine'
import BadgeTextGradient from '../../components/badges/BadgeTextGradient'
import ButtonBackgroundShine from '../../components/buttons/ButtonBackgroundShine'
import ButtonBackgroundSpotlight from '../../components/buttons/ButtonBackgroundSpotlight'
import ButtonGradient from '../../components/buttons/ButtonGradient'
import ButtonHoverGradient from '../../components/buttons/ButtonHoverGradient'
import ButtonRipple from '../../components/buttons/ButtonRipple'
import ButtonRotatingBackgroundGradient from '../../components/buttons/ButtonRotatingBackgroundGradient'
import ButtonShadowGradient from '../../components/buttons/ButtonShadowGradient'
import ButtonSlideLeft from '../../components/buttons/ButtonSlideLeft'
import ButtonToggle from '../../components/buttons/ButtonToggle'
import CardAnimatedBorderGradient from '../../components/cards/CardAnimatedBorderGradient'
import CardPulseBorder from '../../components/cards/CardPulseBorder'
import CardSpotlight from '../../components/cards/CardSpotlight'
import CardTilt from '../../components/cards/CardTilt'
import InputGradientBorder from '../../components/inputs/InputGradientBorder'
import InputPulseBorder from '../../components/inputs/InputPulseBorder'
import InputSpotlightBorder from '../../components/inputs/InputSpotlightBorder'
import TextAnimatedGradient from '../../components/texts/TextAnimatedGradient'
import TextGradient from '../../components/texts/TextGradient'
import TextShine from '../../components/texts/TextShine'

const CSS = {
  'text-gradient': `
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
  'background-shine': `
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
  'pulse-slow': `
  @theme {
  --animate-pulse-slow: pulse-slow 6s infinite cubic-bezier(0.4, 0, 0.6, 1);
  }
  `,
  'border-width': `
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
}

type ComponentsProps = {
  name: string
  component: React.FC
  slug: string
  type: string
  css?: string
  categories: string[]
}[]

export const COMPONENTS: ComponentsProps = [
  {
    name: 'Badge Animated Gradient Border',
    component: BadgeAnimatedGradientBorder,
    slug: 'badge-animated-gradient-border',
    type: 'badges',
    categories: ['Badges', 'All'],
  },
  {
    name: 'Badge Shine',
    component: BadgeShine,
    slug: 'badge-shine',
    type: 'badges',
    css: CSS['background-shine'],
    categories: ['Badges', 'All'],
  },
  {
    name: 'Badge Text Gradient',
    component: BadgeTextGradient,
    slug: 'badge-text-gradient',
    type: 'badges',
    categories: ['Badges', 'All'],
  },
  {
    name: 'Button Background Shine',
    component: ButtonBackgroundShine,
    slug: 'button-background-shine',
    type: 'buttons',
    css: CSS['background-shine'],
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Gradient',
    component: ButtonGradient,
    slug: 'button-gradient',
    type: 'buttons',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Hover Gradient',
    component: ButtonHoverGradient,
    slug: 'button-hover-gradient',
    type: 'buttons',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Background Spotlight',
    component: ButtonBackgroundSpotlight,
    slug: 'button-background-spotlight',
    type: 'buttons',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Rotating Background Gradient',
    component: ButtonRotatingBackgroundGradient,
    slug: 'button-rotating-background-gradient',
    type: 'buttons',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Ripple',
    component: ButtonRipple,
    slug: 'button-ripple',
    type: 'buttons',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Shadow Gradient',
    component: ButtonShadowGradient,
    slug: 'button-shadow-gradient',
    type: 'buttons',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Slide Left',
    component: ButtonSlideLeft,
    slug: 'button-slide-left',
    type: 'buttons',
    categories: ['Buttons', 'All'],
  },
  {
    name: 'Button Toggle',
    component: ButtonToggle,
    slug: 'button-toggle',
    type: 'buttons',
    categories: ['Buttons', 'All'],
  },

  {
    name: 'Card Animated Border Gradient',
    component: CardAnimatedBorderGradient,
    slug: 'card-animated-border-gradient',
    type: 'cards',
    categories: ['Cards', 'All'],
  },
  {
    name: 'Card Spotlight',
    component: CardSpotlight,
    slug: 'card-spotlight',
    type: 'cards',
    categories: ['Cards', 'All'],
  },
  {
    name: 'Card Pulse Border',
    component: CardPulseBorder,
    slug: 'card-pulse-border',
    type: 'cards',
    css: CSS['border-width'],
    categories: ['Cards', 'All'],
  },
  {
    name: 'Card Tilt',
    component: CardTilt,
    slug: 'card-tilt',
    type: 'cards',
    categories: ['Cards', 'All'],
  },
  {
    name: 'Input Gradient Border',
    component: InputGradientBorder,
    slug: 'input-gradient-border',
    type: 'inputs',
    categories: ['Inputs', 'All'],
  },
  {
    name: 'Input Spotlight Border',
    component: InputSpotlightBorder,
    slug: 'input-spotlight-border',
    type: 'inputs',
    categories: ['Inputs', 'All'],
  },
  {
    name: 'Input Pulse Border',
    component: InputPulseBorder,
    slug: 'input-pulse-border',
    type: 'inputs',
    css: CSS['border-width'],
    categories: ['Inputs', 'All'],
  },
  {
    name: 'Text Gradient',
    component: TextGradient,
    slug: 'text-gradient',
    type: 'texts',
    categories: ['Text', 'All'],
  },
  {
    name: 'Text Animated Gradient',
    component: TextAnimatedGradient,
    slug: 'text-animated-gradient',
    type: 'texts',
    css: CSS['text-gradient'],
    categories: ['Text', 'All'],
  },
  {
    name: 'Text Shine',
    component: TextShine,
    slug: 'text-shine',
    type: 'texts',
    css: CSS['background-shine'],
    categories: ['Text', 'All'],
  },
]
