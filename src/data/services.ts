import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'microneedling',
    name: 'Morpheus8 RF Microneedling',
    price: 200,
    originalPrice: 300,
    duration: 90,
    description: 'An advanced treatment that combines microneedling with radiofrequency energy to penetrate deep into the skin, stimulating collagen and elastin production. This treatment improves skin tightness, smooths texture, reduces scars, and restores a youthful, radiant appearance.',
    category: 'laser',
    benefits: [
      'Reduces acne scars',
      'Softens fine lines and wrinkles',
      'Diminishes stretch marks',
      'Minimizes enlarged pores',
      'Improves uneven skin texture and tone',
      'Addresses early signs of aging',
      'Fades hyperpigmentation and sun damage',
    ],
    tiers: [
      { name: 'Microneedling',  price: 150, description: 'Classic microneedling to refine texture and minimize pores.' },
      { name: 'Morpheus8 Microneedling with RF', price: 100, originalPrice: 250, description: 'RF + microneedling for deeper tightening and collagen remodeling.' },
    ]
  },
  {
    id: 'microdermabrasion',
    name: 'Microdermabrasion',
    price: 100,
    originalPrice: 150,
    duration: 60,
    description: 'A gentle, non-invasive treatment using diamond-tip exfoliation to buff away dead skin cells and unclog pores. This process stimulates natural skin renewal, boosts collagen production, and enhances absorption of skincare products. Over time, it helps fade discoloration, smooth uneven texture, and restore a healthy, radiant glow.',
    category: 'treatment',
    benefits: [
      'Exfoliates skin',
      'Enhances collagen production',
      'Improves skin texture and tone',
      'Reduces fine lines and wrinkles',
      'Fades mild acne scars',
      'Minimizes hyperpigmentation and age spots',
      'Unclogs pores and reduces blackheads'
    ]
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    price: 150,
    duration: 90,
    description: 'The HydraFacial is a multi-step treatment that deeply cleanses, gently exfoliates, and hydrates the skin using advanced vortex-fusion technology. Customized serums and boosters target your specific concerns—such as fine lines, acne, or hyperpigmentation—leaving your skin instantly smoother, plumper, and glowing with long-lasting protection.',
    category: 'facial',
    benefits: [
      'Cleanses, exfoliates, and extracts impurities',
      'Deeply hydrates and infuses skin',
      'Customizable with boosters for targeted concerns',
      'Improves skin tone and texture',
      'Reduces fine lines and wrinkles',
      'Minimizes pore size',
      'Restores a radiant, dewy glow'
    ],
    tiers: [
      { name: 'Regular',  price: 80, originalPrice: 150, description: 'Cleanse, exfoliate, extract, and hydrate for instant glow.' },
      { name: 'Deluxe (Lymphatic Drainage)', price: 160, description: 'Includes lymphatic drainage to reduce puffiness and boost detox.' },
      { name: 'Platinum (Lip + Eye Boosters)', price: 200, description: 'Targets fine lines and dryness around lips and eyes.' },
    ]
  },
  {
    id: 'dermaplaning',
    name: 'Dermaplaning',
    price: 100,
    originalPrice: 120,
    duration: 60,
    description: 'A gentle, non-invasive exfoliation treatment that removes dead skin cells and peach fuzz. It instantly reveals smoother, brighter skin, enhances product absorption, and creates the perfect base for flawless makeup while softening fine lines for a youthful glow.',
    category: 'treatment',
    benefits: [
      'Exfoliates and removes peach fuzz',
      'Brightens complexion',
      'Smooths skin texture',
      'Enhances product absorption',
      'Reduces early signs of aging',
      'Improves makeup application',
      'Delivers an instant radiant glow'
    ]
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peel',
    price: 100,
    originalPrice: 130,
    duration: 60,
    description: 'A professional exfoliation treatment that uses medical-grade solutions to gently resurface the skin. Chemical peels help shed dull, damaged layers, revealing a smoother, brighter, and more even-toned complexion while stimulating skin renewal for long-lasting results.',
    category: 'treatment',
    benefits: [
      'Softens fine lines and wrinkles',
      'Fades sun damage and discoloration',
      'Reduces acne and acne scars',
      'Improves hyperpigmentation',
      'Smooths dullness and rough texture'
    ],
    tiers: [
      { name: 'Salicylic Acid Peel', price: 80, originalPrice: 95, description: 'Refines oily, acne-prone skin and clears congestion.' },
      { name: 'Glycolic Acid Peel',  price: 85, description: 'Brightens dull tone and smooths fine lines.' },
      { name: 'Vivid Gentle Peel', price: 75, description: 'Mild resurfacing for sensitive or first-time peel clients.' },
    ]
  },
  {
    id: 'bb-glow',
    name: 'BB Glow',
    price: 100,
    originalPrice: 130,
    duration: 70,
    description: 'A semi-permanent skin treatment that uses tinted serums and microneedling technology to create a flawless, radiant finish. BB Glow helps even skin tone, minimize imperfections, and improve texture while delivering anti-aging benefits for a naturally glowing complexion that lasts.',
    category: 'treatment',
    benefits: [
      'Provides a radiant, luminous glow',
      'Evens skin tone and reduces discoloration',
      'Softens fine lines and offers anti-aging benefits',
      'Improves overall skin texture',
      'Reduces acne scars and blemishes',
      'Helps control excess oil for balanced skin'
    ]
  },
  {
    id: 'vitamin-c-facial',
    name: 'Vitamin C Facial',
    price: 100,
    originalPrice: 125,
    duration: 60,
    description: 'A brightening facial enriched with antioxidant-rich Vitamin C to target dullness, uneven tone, and signs of aging. This treatment deeply nourishes the skin, helping to fade hyperpigmentation, improve elasticity, and reveal a fresh, radiant glow.',
    category: 'facial',
    benefits: [
      'Brightens and evens skin tone', 
      'Boosts Collagen', 
      'Reduces signs of aging', 
      'Hydrates and smooths the skin', 
      'Minimizes inflammation', 
      'Provides antioxidant protection']
  },
  {
    id: 'skin-brightening',
    name: 'Skin Brightening Facial',
    price: 100,
    originalPrice: 130,
    duration: 60,
    description: 'A targeted facial designed to fade dark spots, reduce hyperpigmentation, and restore balance to uneven skin tone. This treatment uses brightening serums and gentle exfoliation to reveal a clearer, more radiant complexion while promoting long-term skin clarity and glow.',
    category: 'facial',
    benefits: [
      'Reduces hyperpigmentation and dark spots',
      'Evens skin tone',
      'Brightens dull complexion',
      'Improves overall skin clarity',
      'Enhances natural glow',
      'Promotes long-term radiance'
    ]
  },
  {
    id: 'classic-facial',
    name: 'Classic Facial',
    price: 80,
    originalPrice: 100,
    duration: 60,
    description: 'A relaxing, all-in-one treatment suitable for every skin type. The Classic Facial includes deep cleansing, gentle exfoliation, extractions if needed, and a nourishing mask to refresh and revitalize your skin. It restores balance, promotes relaxation, and leaves you with a healthy, refreshed glow.',
    category: 'facial',
    benefits: [
      'Deeply cleanses and purifies skin',
      'Removes buildup and unclogs pores',
      'Restores skin balance and hydration',
      'Improves overall skin health',
      'Promotes relaxation and stress relief'
    ]
  },
  {
    id: 'glow-facial',
    name: 'Glow Facial',
    price: 100,
    originalPrice: 130,
    duration: 60,
    description: 'A revitalizing facial treatment that deeply hydrates, smooths, and refreshes the skin. The Glow Facial is designed to instantly brighten your complexion, improve texture, and leave you with a healthy, luminous finish.',
    category: 'facial',
    benefits: [
      'Provides instant radiance',
      'Deeply hydrates and nourishes',
      'Smooths and refines skin texture',
      'Enhances natural glow',
      'Leaves skin refreshed and revitalized'
    ]
  },
  {
    id: 'deep-cleansing',
    name: 'Deep Cleansing Facial',
    price: 80,
    originalPrice: 100,
    duration: 60,
    description: 'An intensive treatment for congested or oily skin. This facial combines exfoliation, extractions, and a clarifying mask to deeply cleanse pores, balance oil, and leave skin visibly clearer and refreshed.',
    category: 'facial',
    benefits: [
      'Deeply cleanses and purifies pores',
      'Reduces blackheads and congestion',
      'Balances excess oil production',
      'Improves skin clarity and smoothness',
      'Helps prevent future breakouts'
    ]
  },
  {
    id: 'acne-treatment',
    name: 'Acne Treatment Facial',
    price: 100,
    originalPrice: 130,
    duration: 75,
    description: 'A targeted facial designed for acne-prone and congested skin. This treatment uses deep cleansing, exfoliation, and soothing professional-grade products to reduce breakouts, calm inflammation, and promote clearer, healthier skin over time.',
    category: 'facial',
    benefits: [
      'Reduces active acne and blemishes',
      'Calms redness and inflammation',
      'Helps prevent future breakouts',
      'Unclogs pores for clearer, smoother skin'
    ]
  },
  {
    id: 'led-facial',
    name: 'LED Light Therapy Facial',
    price: 100,
    originalPrice: 125,
    duration: 60,
    description: 'A non-invasive light therapy that uses different wavelengths of LED light to target specific skin concerns. Customized to your needs, it can reduce acne, calm inflammation, stimulate collagen, and rejuvenate the skin for a healthier, more radiant complexion.',
    category: 'treatment',
    benefits: [
      'Calms redness and inflammation',
      'Stimulates collagen and elasticity',
      'Promotes acne healing and prevention',
      'Provides anti-aging and skin rejuvenation benefits'
    ]
  },
  {
    id: 'oxygen-facial',
    name: 'Oxygen Facial',
    price: 100,
    originalPrice: 130,
    duration: 60,
    description: 'A revitalizing treatment that infuses oxygen and nutrient-rich serums deep into the skin. It delivers instant hydration, boosts circulation, and supports collagen production, leaving your complexion refreshed, plump, and glowing.',
    category: 'facial',
    benefits: [
      'Deeply hydrates and plumps the skin',
      'Brightens and evens skin tone',
      'Promotes collagen and elastin for rejuvenation',
      'Detoxifies by killing bacteria and reducing redness',
      'Clears and refines pores to reduce congestion'
    ]
  },
  {
    id: 'gold-facial',
    name: 'Gold Facial',
    price: 100,
    originalPrice: 130,
    duration: 60,
    description: 'A luxurious 24k gold-infused facial that stimulates collagen and elastin production, improves circulation, and protects against environmental damage. This indulgent treatment helps reduce signs of aging while leaving the skin radiant, firm, and rejuvenated.',
    category: 'facial',
    benefits: [
      'Boosts collagen and improves skin elasticity',
      'Reduces fine lines and wrinkles',
      'Enhances radiance and brightens complexion',
      'Provides antioxidant and anti-inflammatory protection'
    ]
  },
  {
    id: 'slimming-treatment',
    name: 'Body & Face Slimming Treatment',
    price: 100, // base or starting price
    duration: 90,
    description: 'A non-invasive treatment that combines ultrasound cavitation, radiofrequency, and vacuum technologies to target stubborn fat, tighten skin, and sculpt both the body and face. By using gentle heat energy, it breaks down fat cells, stimulates collagen production, and improves circulation for smoother, firmer, and more defined results. For best results, a series of 10–12 sessions is required.',
    category: 'slimming',
    benefits: [
      'Reduces stubborn fat deposits',
      'Firms and tightens loose skin',
      'Smooths cellulite and improves texture',
      'Contours face and body',
      'Defines jawline and reduces puffiness',
      'Stimulates lymphatic drainage',
      'Safe, comfortable, and non-invasive',
    ],
    tiers: [
      {
        name: 'One session',
        price: 100,
        description: 'Single treatment to sample the service.'
      },
      {
        name: 'Ten sessions',
        price: 850,
        description: 'Recommended plan for visible inch-loss over ~4 weeks.'
      },
      {
        name: 'Twelve sessions',
        price: 1000,
        description: 'Enhanced plan for best results and maintenance.'
      },
    ],
  }


];