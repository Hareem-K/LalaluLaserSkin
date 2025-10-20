// src/data/blog.ts
export type BlogBlock =
  | { type: 'heading'; level?: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string; aspect?: 'landscape' | 'square' | 'portrait' }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'instagram'; url: string; title?: string } // paste the IG post/reel URL
  ;

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  tags: string[];
  createdAt: string; // ISO
  updatedAt?: string;
  readingMinutes: number;
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 'oxygen-gold-facials',
    slug: 'oxygen-and-gold-facials-benefits',
    title: 'Unlock the Secrets to Radiant Skin: The Magic of Oxygen and Gold Facials',
    excerpt:
      'Deep hydration, visible plumping, and a luxe glow—see how oxygen and gold facials can fit your goals in Calgary.',
    tags: ['facials', 'anti-aging', 'hydration'],
    createdAt: '2025-10-10',
    readingMinutes: 6,
    blocks: [
      { type: 'paragraph', text: 'Forget what you think you know about facials. Many stick to the usual treatments, but oxygen and gold facials offer something different—deep hydration and luxurious anti-aging benefits that truly refresh your skin. At Lalalu Skin & Laser, these emerging skin treatments are designed to leave your complexion glowing and healthy. Let’s explore how these options can fit your skin rejuvenation goals in Calgary.' },
      
      { type: 'heading', level: 2, text: 'Oxygen Facials: A Breath of Fresh Air' },
      { type: 'image', src: '/blog/oxygen.png', alt: 'oxygen', aspect: 'landscape' },
      { type: 'paragraph', text: 'Imagine infusing your skin with a rush of revitalizing freshness. Oxygen facials are perfect for those craving a hydrating facial that breathes new life into the skin. This treatment features advanced techniques that can leave your skin feeling rejuvenated and plump.' },

      { type: 'heading', level: 3, text: 'Deep Hydration Benefits' },
      { type: 'paragraph', text: 'Oxygen facials are known for delivering deep hydration, offering your skin a refreshing boost. By infusing oxygen-rich serums, your skin receives instant moisture, which can keep it looking supple and vibrant. This method targets dryness, ensuring that your skin feels softer and more radiant.' },
      { type: 'paragraph', text: 'The science behind this lies in the oxygen’s ability to absorb quickly into the skin, allowing nutrients to penetrate deeply. This action enhances your skin’s natural barrier, offering lasting hydration.' },

      { type: 'heading', level: 3, text: 'Plumping Effects for Radiance' },
      { type: 'paragraph', text: 'Beyond hydration, oxygen facials are celebrated for their plumping effects. This treatment helps stimulate collagen production, which is crucial in maintaining skin elasticity. When collagen levels are boosted, you can enjoy a firmer, more youthful appearance.' },
      { type: 'paragraph', text: 'People often notice reduced fine lines and a smoother texture after just a few sessions. As one client shared, "I felt an immediate difference in my skin’s fullness." If you’re seeking that radiant glow, this treatment could be your secret.' },

      { type: 'heading', level: 2, text: 'The Luxurious Appeal of Gold Facials' },
      { type: 'image', src: '/blog/goldfacial.png', alt: 'gold facial', aspect: 'landscape' },
      { type: 'paragraph', text: 'Now, let’s dive into the opulence of gold facials. This treatment is more than just a skincare routine; it’s a luxurious experience that pampers your skin while delivering visible results.' },

      { type: 'heading', level: 3, text: 'Anti-Aging Treatment Explained' },
      { type: 'paragraph', text: 'Gold facials are not just about indulgence; they’re an anti-aging treatment powerhouse. The use of gold in skincare dates back centuries, known for its properties that can help improve circulation and enhance skin elasticity. Gold facials work to reduce fine lines, offering your skin a smoother and more even tone.' },
      { type: 'paragraph', text: 'This treatment also provides protection against environmental damage, making it ideal for anyone looking to maintain youthful skin. It’s an investment in both luxury and effectiveness, giving you the best of both worlds.' },

      { type: 'heading', level: 3, text: 'A Touch of Luxury in Skincare' },
      { type: 'paragraph', text: 'Adding gold to your skincare routine elevates it to new heights of luxury. Imagine the sensation of gentle, gold-infused masks that not only feel exquisite but also brighten and firm your complexion. This indulgence leaves you feeling pampered and looking radiant.' },
      { type: 'paragraph', text: 'Clients often comment on the immediate glow that follows a gold facial. The fusion of luxury and efficacy is what sets this treatment apart, making it a must-try for those who want to feel like royalty during their skincare regimen.' },
      
      { type: 'heading', level: 2, text: 'Personalized Skincare in Calgary' },
      { type: 'image', src: '/blog/facial.png', alt: 'facial', aspect: 'landscape' },
      { type: 'paragraph', text: 'Finding the right skincare treatment can be challenging, but Lalalu Skin & Laser offers personalized solutions tailored to your unique needs. Whether you’re dealing with acne or seeking anti-aging treatments, there’s something for everyone.' },
      
      { type: 'heading', level: 3, text: 'Tailored Solutions for All Ages' },
      { type: 'paragraph', text: 'At Lalalu Skin & Laser, we understand that skincare is not one-size-fits-all. That’s why our treatments are customized to address your specific concerns, no matter your age. From teenagers dealing with acne to adults wanting to combat signs of aging, we have the right solution.' },
      { type: 'paragraph', text: 'Our expert aestheticians are dedicated to helping you achieve your skin goals, ensuring each session is tailored and personal. You deserve skincare that understands you, and that’s exactly what we deliver.' },
      
      { type: 'heading', level: 3, text: 'Booking Your Session at Lalalu Skin & Laser' },
      { type: 'paragraph', text: 'Ready to experience the magic of these treatments yourself? Booking a session at Lalalu Skin & Laser is simple and rewarding. Our flexible hours and welcoming environment make it easy to fit a session into your schedule. Whether you’re after deep hydration or luxurious anti-aging care, we’re here to help.' },
      { type: 'paragraph', text: 'The longer you wait, the more you miss out on transformative skincare benefits. Take the first step towards radiant skin and book your appointment today. Your journey to glowing skin starts here.' },
      // Optional Instagram tie-in if you post about this on IG:
      // { type: 'instagram', url: 'https://www.instagram.com/p/XXXXXXXXX/', title: 'Client glow after oxygen facial' },
    ]
  },
  {
    id: 'laser-top-5',
    slug: 'top-5-skin-concerns-laser',
    title: 'Top 5 Skin Concerns Solved with Professional Laser Care at Lalalu Skin & Laser',
    excerpt:
      'From acne to pigmentation and fine lines, here’s how our laser treatments deliver real, visible results.',
    tags: ['laser', 'acne', 'pigmentation', 'anti-aging'],
    createdAt: '2025-10-19',
    readingMinutes: 10,
    blocks: [
      { type: 'paragraph', text: 'You’ve tried creams and quick fixes, but your skin concerns keep coming back. At Lalalu Skin & Laser, we offer laser skin treatments that tackle stubborn issues like acne, pigmentation, and wrinkles with real results. Let’s explore the top 5 skin concerns we solve, so you can feel confident and refreshed in your own skin. Book your personalized consultation today to start your journey towards healthier, glowing skin!' },
      
      { type: 'heading', level: 2, text: 'Acne Solutions with Laser Care' },
      { type: 'image', src: '/blog/acne.png', alt: 'Acne Treatments', aspect: 'landscape' },
      { type: 'paragraph', text: 'Laser treatments offer a powerful way to tackle stubborn acne. Many find these methods effective when creams and medications fall short.' },

      { type: 'heading', level: 3, text: 'Effective Treatments for Teen Acne' },
      { type: 'paragraph', text: 'Teenagers often face significant challenges with acne. Hormonal changes can make it seem like nothing helps. Our laser treatments target the root cause of acne, not just the symptoms. By focusing on deep layers of the skin, lasers reduce bacteria that cause acne. This results in clearer skin over time.' },
      { type: 'paragraph', text: 'Imagine not having to worry about breakouts before a big event. With our treatments, you can achieve smoother, healthier skin that lasts. And its not just about appearances; clear skin can boost confidence in social settings. Most people think only topical treatments work, but laser care is a game changer.' },

      { type: 'heading', level: 3, text: 'Service Spotlight: Clearer Skin Pathway' },
      { type: 'paragraph', text: 'So what does this mean for you? What specific treatments will actually help you achieve clear, balanced, and breakout-free skin? Here’s a look at our most effective acne-focused options that work synergistically to target congestion, inflammation, and post-acne marks.' },
      { type: 'list', items: [
        'Acne Treatment Facial – reduces active breakouts, calms inflammation, and supports long-term clarity.',
        'Deep Cleansing Facial – intensive decongestion and pore purification for oily or congested skin.',
        'HydraFacial (Regular/Deluxe/Platinum) – cleanse, extract, and infuse; great for stubborn congestion and post-acne glow.',
        'Morpheus8 RF Microneedling – best for lingering acne scars and texture irregularities.',
        'LED Light Therapy Facial – blue, red, or combination light customized to calm inflammation, reduce acne-causing bacteria, and support healing.',
      ]},


      { type: 'heading', level: 3, text: 'Clearing Adult Acne Challenges' },
      { type: 'paragraph', text: 'Adult acne can be frustrating and often feels unexpected. Unlike teen acne, adult acne is usually due to stress or hormonal imbalances. Our laser services provide a targeted solution that addresses these unique triggers. By reducing oil production and inflammation, laser treatments offer a long-lasting solution.' },
      { type: 'paragraph', text: 'Picture waking up to clearer skin every day. Many adults see a dramatic improvement after just a few sessions. Its time to challenge the assumption that acne is only a teenage problem. Let us help you find the relief you have been searching for.' },

      { type: 'instagram', url: 'https://www.instagram.com/p/DQA3HytiZsd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', title: 'Acne tips from our IG' },

      { type: 'heading', level: 2, text: 'Anti-Aging Treatments for Youthful Skin' },
      { type: 'image', src: '/blog/antiaging.png', alt: 'Anti-Aging Treatments', aspect: 'landscape' },
      { type: 'paragraph', text: 'As we age, maintaining youthful skin becomes a priority. Laser treatments offer a non-invasive option to tackle aging signs effectively.' },

      { type: 'heading', level: 3, text: 'Reducing Fine Lines and Wrinkles' },
      { type: 'paragraph', text: 'Fine lines and wrinkles are common concerns as we age. Our laser treatments can soften these signs of aging by promoting new collagen growth. With each session, you can see a noticeable reduction in lines, making your skin look rejuvenated.' },
      { type: 'paragraph', text: 'Imagine having skin that reflects your inner vitality. Our clients often comment on feeling years younger after our treatments. While many believe surgery is the only option, laser treatments offer an effective and gentler alternative.' },

      { type: 'heading', level: 3, text: 'Improving Skin Elasticity' },
      { type: 'paragraph', text: 'Elasticity is key to youthful skin. Over time, skin can lose its natural firmness. Our lasers stimulate collagen and elastin production, leading to tighter, more resilient skin.' },
      { type: 'paragraph', text: 'Consider the joy of seeing a more lifted appearance in the mirror. Enhanced elasticity means fewer sags and a fresher look. Most people think creams can do it all, but laser treatments reach where creams cant.' },

      { type: 'heading', level: 3, text: 'Service Spotlight: Firm, Smooth, Glow' },
      { type: 'paragraph', text: 'So what treatments actually help restore firmness, smoothness, and that radiant glow we all want? Here are some of our most-loved anti-aging and rejuvenation services—each designed to renew collagen, refine texture, and give your skin a youthful bounce.' },
      { type: 'list', items: [
        'Morpheus8 RF Microneedling – combines microneedling with RF to tighten, firm, and remodel collagen.',
        'HydraFacial (Platinum: Lip + Eye Boosters) – hydrates and targets delicate areas for a youthful glow.',
        'LED Light Therapy Facial – red light to support collagen and post-procedure recovery.',
        'Chemical Peel (Glycolic Acid Peel) – brightens dull tone and smooths early lines.',
        'Gold Facial – 24k gold-infused luxury to enhance radiance and support elasticity.',
        'Vitamin C Facial – antioxidant boost for brightness and visible skin vitality.'
      ]},

      { type: 'heading', level: 2, text: 'Addressing Skin Pigmentation Issues' },
      { type: 'image', src: '/blog/pigmentation.png', alt: 'Pigmentation', aspect: 'landscape' },
      { type: 'paragraph', text: 'Uneven skin tone can affect anyone. Laser treatments provide a targeted approach to achieving clear, even skin.' },

      { type: 'heading', level: 3, text: 'Lightening Dark Spots' },
      { type: 'paragraph', text: 'Dark spots can result from sun damage or aging. Our laser treatments can significantly reduce these spots, revealing a more even complexion. With precise targeting, lasers break down pigmentation, allowing your natural skin tone to shine through.' },
      { type: 'paragraph', text: 'Consider walking out with confidence, knowing your skin looks its best. Many clients notice lighter spots after just a few sessions. Its time to redefine whats possible for your skin.' },

      { type: 'heading', level: 3, text: 'Evening Out Skin Tone' },
      { type: 'paragraph', text: 'An even skin tone can enhance your overall appearance. Our laser treatments offer a solution by targeting areas of hyperpigmentation and redness.' },
      { type: 'paragraph', text: 'Imagine the ease of having a balanced complexion without heavy makeup. Many assume only makeup can cover skin tone issues, but lasers offer a true solution. Let us help you achieve that natural, flawless look.' },

      
      { type: 'heading', level: 3, text: 'Service Spotlight: Bright, Even Complexion' },
      { type: 'paragraph', text: 'So what does that mean in practice? Which treatments actually help fade dark spots, even out skin tone, and bring back your natural glow? Here are some of our most effective brightening and pigment-correcting services designed to reveal a smoother, more luminous complexion.' },
      { type: 'list', items: [
        'Microdermabrasion – gentle diamond-tip exfoliation to smooth texture and lift surface pigment.',
        'Dermaplaning – removes dull skin and peach fuzz to enhance brightness and product absorption.',
        'HydraFacial (Brightening focus) – cleanse, extract, and infuse for immediate glow.',
        'Chemical Peel (Glycolic Acid Peel) – resurfaces dullness and helps fade discoloration.',
        'BB Glow – semi-permanent tinted serum to even tone and minimize the look of imperfections.',
        'Skin Brightening Facial – reduces dark spots and restores overall clarity.',
        'Vitamin C Facial – brightens and provides antioxidant support for tone and elasticity.',
      ]},

      { type: 'paragraph', text: '🌟 Book your personalized consultation today! 🌟' },

      // Example Instagram tie-in for acne:
    ]
  }
];

// Utility: newest first
export const getSortedPosts = () =>
  [...blogPosts].sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
