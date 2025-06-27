import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'microneedling',
    name: 'Morpheus 8 Microneedling',
    price: 197,
    duration: 90,
    description: 'Morpheus 8 Microneedling combines radiofrequency and microneedling to tighten skin, boost collagen, and reduce scarring, fine lines, and wrinkles.',
    category: 'laser',
    benefits: ['Skin tightening', 'Collagen production', 'Reduced scarring', 'Reduced Fine lines and Wrinkles']
  },
  {
    id: 'microdermabrasion',
    name: 'Microdermabrasion',
    price: 97,
    duration: 60,
    description: 'Gentle diamond tip exfoliation for smoother, more radiant skin.',
    category: 'treatment',
    benefits: ['Skin resurfacing', 'Reduced fine lines', 'Improved texture', 'Brighter complexion']
  },
  {
    id: 'hydrofacial',
    name: 'Hydrofacial',
    price: 147,
    duration: 90,
    description: 'Our Hydrofacial deeply cleanses, exfoliates, and hydrates the skin, leaving you with a smooth, radiant glow.',
    category: 'facial',
    benefits: ['Deep hydration', 'Improve skin tone and texture', 'Reduced fine lines and wrinkles', 'Minimized pore size']
  },
  {
    id: 'dermaplaning',
    name: 'Dermaplaning',
    price: 57,
    duration: 60,
    description: 'Gentle exfoliation treatment that removes dead skin cells and peach fuzz.',
    category: 'treatment',
    benefits: ['Smoother skin', 'Better product absorption', 'Instant glow', 'Makeup application improvement']
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peel',
    price: 77,
    duration: 60,
    description: 'Professional chemical exfoliation to reveal smoother, brighter skin.',
    category: 'treatment',
    benefits: ['Improved skin texture', 'Reduced fine lines', 'Brighter complexion', 'Minimized pores']
  },
  {
    id: 'bb-glow',
    name: 'BB Glow',
    price: 97,
    duration: 70,
    description: 'Semi-permanent makeup treatment that gives your skin a flawless, glowing appearance.',
    category: 'treatment',
    benefits: ['Even skin tone', 'Natural glow', 'Reduced appearance of imperfections', 'Long-lasting results']
  },
  {
    id: 'skin-brightening',
    name: 'Skin Brightening Facial',
    price: 77,
    duration: 60,
    description: 'Specialized facial to reduce dark spots and even skin tone.',
    category: 'facial',
    benefits: ['Reduced hyperpigmentation', 'Even skin tone', 'Brighter complexion', 'Glowing skin']
  },
  {
    id: 'classic-facial',
    name: 'Classic Facial',
    price: 77,
    duration: 60,
    description: 'Traditional facial treatment for all skin types.',
    category: 'facial',
    benefits: ['Deep cleansing', 'Relaxation', 'Improved skin health', 'Customized treatment']
  },
  {
    id: 'glow-facial',
    name: 'Glow Facial',
    price: 77,
    duration: 60,
    description: 'Revitalizing facial designed to give you an instant, radiant glow.',
    category: 'facial',
    benefits: ['Instant radiance', 'Hydrated skin', 'Improved texture', 'Natural glow']
  },
  {
    id: 'deep-cleansing',
    name: 'Deep Cleansing Facial',
    price: 57,
    duration: 60,
    description: 'Thorough cleansing treatment perfect for congested or oily skin.',
    category: 'facial',
    benefits: ['Deep pore cleansing', 'Reduced blackheads', 'Clearer skin', 'Oil control']
  },
  {
    id: 'acne-treatment',
    name: 'Acne Treatment Facial',
    price: 117,
    duration: 75,
    description: 'Specialized treatment targeting acne-prone skin with professional-grade products.',
    category: 'facial',
    benefits: ['Acne reduction', 'Clearer skin', 'Reduced inflammation', 'Prevention of breakouts']
  },
  {
    id: 'led-facial',
    name: 'LED Facial',
    price: 77,
    duration: 60,
    description: 'Light therapy treatment to promote healing and rejuvenation.',
    category: 'treatment',
    benefits: ['Reduced inflammation', 'Collagen stimulation', 'Acne healing', 'Anti-aging benefits']
  },
  {
    id: 'oxygen-facial',
    name: 'Oxygen Facial',
    price: 97,
    duration: 60,
    description: 'Oxygen-infused treatment for immediate hydration and glow.',
    category: 'facial',
    benefits: ['Instant hydration', 'Plumped skin', 'Immediate glow', 'Reduced fine lines']
  },
  {
    id: 'gold-facial',
    name: 'Gold Facial',
    price: 77,
    duration: 60,
    description: 'Luxurious facial treatment with 24k gold for anti-aging benefits.',
    category: 'facial',
    benefits: ['Anti-aging effects', 'Improved elasticity', 'Luxurious experience', 'Radiant glow']
  }
];