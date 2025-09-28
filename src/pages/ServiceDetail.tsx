import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { ArrowLeft, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

type Aftercare =
  | string[]
  | {
      body: string[];
      face: string[];
      general?: string[];
      contraindications?: string[];
    };

const aftercareById: Record<string, Aftercare> = {
  microneedling: [
    'Expect mild redness & swelling for 1-3 days, possibly light flaking.',
    'Avoid direct sun exposure & heat (saunas, workouts) for 48 hours.',
    'No makeup for 24-48 hours.',
    'Use a gentle, hydrating cleanser & moisturizer, avoid actives (retinol, glycolic, salicylic acid) for 7 days.',
    'Apply SPF 50 daily — your skin is extra sensitive to the sun.',
    'Do not pick or peel flaking skin.'
  ],
  microdermabrasion: [
    'Expect slight pinkness; will subside in a few hours.',
    'Avoid makeup for 12-24 hours.',
    'No exfoliation or strong actives for 5-7 days.',
    'Keep skin well-hydrated & use sunscreen daily.',
    'Avoid swimming pools or hot tubs for 48 hours.'
  ],
  hydrafacial: [
    'Avoid makeup for 12-24 hours.',
    'No exfoliating products (AHAs/BHAs) for 48 hours.',
    'Drink plenty of water to boost results.',
    'Apply SPF 30+ daily to protect that new glow.',
    'Avoid vigorous workouts, saunas, or steam for 24 hours.'
  ],
  'bb-glow': [
    'No makeup or face washing for 24 hours.',
    'Avoid heavy sweating, saunas, and sun exposure for 48 hours.',
    'Use only gentle, hydrating skincare for 5-7 days.',
    'Minor dryness & flaking is normal — do not pick or scrub.',
    'Always wear SPF 50 daily to maintain your even glow.'
  ],
  'chemical-peels': [
    'Mild redness, tightness, and peeling expected over 3-7 days.',
    'Avoid makeup until skin settles, ideally 24-48 hours.',
    'No picking, peeling, or exfoliating.',
    'Apply hydrating products and SPF 50 daily.',
    'Avoid strenuous exercise, saunas, and sun exposure for 48 hours.'
  ],
  dermaplaning: [
    'Your skin may feel extra smooth & sensitive.',
    'Avoid exfoliants & active ingredients (retinol, acids) for 3-5 days.',
    'Wear SPF daily as skin is more prone to UV damage.',
    'Avoid makeup for 12-24 hours to prevent clogging.'
  ],
  'skin-brightening': [
    'Avoid heavy makeup for 12 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'vitamin-c-facial': [
    'Avoid heavy makeup for 12 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'classic-facial': [
    'Avoid heavy makeup for 12 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'glow-facial': [
    'Avoid heavy makeup for 12 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'deep-cleansing': [
    'Avoid heavy makeup for 12 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'acne-treatment': [
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'led-facial': [
    'Avoid heavy makeup for 12 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'oxygen-facial': [
    'Avoid heavy makeup for 12 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'gold-facial': [
    'Avoid heavy makeup for 12 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'slimming-treatment': {
    body: [
      'Do not eat for 1 hour after the session.',
      'Shower after 4–6 hours (avoid very hot water).',
      'Drink at least 1.5L of water within the day to support lymphatic drainage.',
      'Avoid alcohol for 48 hours.',
      'No sauna, hot springs, steam rooms, or strenuous exercise for 3 days.',
      'Avoid cold or very spicy foods; follow a low-fat, low-starch, low-sugar diet for the next 48–72 hours.',
      'Do at least 20 minutes of light–moderate exercise (e.g., brisk walking) on the same day to stimulate lymph detox.',
    ],
    face: [
      'Avoid washing face with overheated water for 3 days',
      'Keep skin hydrated',
      'Apply broad-spectrum SPF 30–50 daily; avoid direct sun exposure.',
      'Avoid sauna steaming, hot springs, or other strenuous exercises for 7 days',
      'It is better not to use alcohol, AHA, or other exfoliating products within 3 days',
      'Use a gentle, hydrating cleanser for the next 24–48 hours',
      'Avoid facial waxing, threading, or laser on the area for 7 days',
      'Stay well hydrated and avoid alcohol for 48 hours',
    ],

    general: [
      'Typical result range: ~1–2.5 inches loss per area within ~4 weeks (results vary by individual and treatment plan).',
      'For lasting results, maintain a balanced diet and regular exercise; follow your customized session plan (often a series of 10–12 sessions).',
    ],
    contraindications: [
      'Pregnant or breastfeeding.',
      'Heart disease or implanted heart pacemaker.',
      'Unhealed surgical wounds or currently in post-op recovery (including cosmetic surgery).',
      'Epilepsy.',
      'Severe diabetes.',
      'Hyperthyroidism.',
      'Malignant tumours.',
    ],
  },

};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Service not found.</p>
      </div>
    );
  }

  // Get the aftercare entry
  const entry = aftercareById[service.id];

  const isSectioned =
    entry && typeof entry === 'object' && !Array.isArray(entry);

  // Fallback for legacy array aftercare
  const fallbackArray =
    (!entry || Array.isArray(entry)) ? (entry as string[] | undefined) : undefined;

  // right above `return (<>`
  const BASE = 'https://lalaluskinlaser.com';
  const url = `${BASE}/services/${service.id}`;

  // choose a share image (fallback to site OG)
  const ogImage = `${BASE}/og-image.jpg`;

  // derive a price for previews / schema
  const tierPrices = Array.isArray(service.tiers) ? service.tiers.map(t => Number(t.price)).filter(Boolean) : [];
  const lowestPrice = tierPrices.length ? Math.min(...tierPrices) : Number(service.price);
  // near the top of ServiceDetail, after you have `service`
  type Tier = { name: string; price: number; originalPrice?: number; description?: string };

  const tiers: Tier[] = Array.isArray(service.tiers) ? service.tiers : [];
  const hasTiers = tiers.length > 0;


  return (
    <>
      <Helmet>
        <title>{service.name} | Lalalu Skin & Laser</title>
        <meta
          name="description"
          content={`Discover the benefits of ${service.name} at Lalalu Skin & Laser. ${service.description}`}
        />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="Lalalu Skin & Laser" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content={`${service.name} | Lalalu Skin & Laser`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${service.name} at Lalalu Skin & Laser`} />
        {/* Optional OG product price (nice-to-have) */}
        {Number.isFinite(lowestPrice) && (
          <>
            <meta property="product:price:amount" content={String(lowestPrice)} />
            <meta property="product:price:currency" content="CAD" />
          </>
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Breadcrumbs JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE}/` },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE}/services` },
            { "@type": "ListItem", "position": 3, "name": service.name, "item": url }
          ]
        })}</script>

        {/* Service schema with offers (tiers if present) */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "brand": { "@type": "Brand", "name": "Lalalu Skin & Laser" },
          "provider": {
            "@type": "LocalBusiness",
            "name": "Lalalu Skin & Laser",
            "address": { "@type": "PostalAddress", "addressLocality": "Calgary", "addressRegion": "AB", "addressCountry": "CA" },
            "url": BASE,
            "image": `${BASE}/logo.png`
          },
          "areaServed": { "@type": "City", "name": "Calgary" },
          "url": url,
          "offers": hasTiers
            ? tiers.map((t: any) => ({
                "@type": "Offer",
                "name": t.name,
                "price": t.price,
                "priceCurrency": "CAD",
                "availability": "https://schema.org/InStock",
                "url": `${BASE}/book`
              }))
            : [{
                "@type": "Offer",
                "price": service.price,
                "priceCurrency": "CAD",
                "availability": "https://schema.org/InStock",
                "url": `${BASE}/book`
              }]
        })}</script>
      </Helmet>


      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="mb-4 -mt-2">
            <Link
              to="/services"
              className="inline-flex items-center text-sm text-[#6a4c69] hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Services
            </Link>
          </div>

          <Card className="p-8 flex flex-col">
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h1>

            <div className="mb-6">
              <p className="text-gray-600">{service.duration} minutes</p>
            </div>

            <p className="text-gray-700 mb-4">{service.description}</p>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
              <ul className="space-y-1">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <Star className="h-3 w-3 text-[#6a4c69] mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer with button left, price right */}
            {/* CTA + Pricing */}
            <div className="mt-auto">
              {service.tiers && service.tiers.length > 0 ? (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Packages & Pricing</h3>
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                    <div className="divide-y divide-gray-100">
                      {service.tiers.map((tier) => (
                        <div key={tier.name} className="px-4 py-4">
                          <div className="flex items-baseline justify-between">
                            <span className="text-gray-900 font-medium">{tier.name}</span>
                            <span className="flex items-baseline gap-2">
                              {typeof tier.originalPrice === 'number' && (
                                <span className="text-gray-400 line-through">${tier.originalPrice}</span>
                              )}
                              <span className="text-lg font-semibold text-[#6a4c69]">${tier.price}</span>
                              {typeof tier.originalPrice === 'number' && (
                                <span className="ml-1 inline-block rounded-full bg-red-50 text-red-600 text-[10px] font-semibold px-1.5 py-0.5">
                                  Sale
                                </span>
                              )}
                            </span>
                          </div>
                          {tier.description && (
                            <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link to="/book">
                      <Button className="mt-4">Book Now</Button>
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between">
                  <Link to="/book">
                    <Button className="mt-4">Book Now</Button>
                  </Link>

                  {typeof service.originalPrice === 'number' ? (
                    <div className="flex items-baseline gap-2 mt-4">
                      <span className="text-sm text-gray-400 line-through">${service.originalPrice}</span>
                      <span className="text-2xl font-bold text-red-500">${service.price}</span>
                      <span className="ml-1 inline-block rounded-full bg-red-50 text-red-600 text-xs font-semibold px-2 py-0.5">
                        Sale
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold text-[#6a4c69] mt-4">
                      ${service.price}
                    </span>
                  )}
                </div>
              )}
            </div>


          </Card>


          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aftercare Instructions</h2>

            {/* Sectioned rendering for Body/Face/General/Contraindications */}
            {isSectioned ? (
              <>
                {/* Body */}
                {'body' in (entry as any) && (entry as any).body?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Body Aftercare</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      {(entry as any).body.map((tip: string, idx: number) => (
                        <li key={`body-${idx}`}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Face */}
                {'face' in (entry as any) && (entry as any).face?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Face Aftercare</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      {(entry as any).face.map((tip: string, idx: number) => (
                        <li key={`face-${idx}`}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* General */}
                {'general' in (entry as any) && (entry as any).general?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">General Tips</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      {(entry as any).general.map((tip: string, idx: number) => (
                        <li key={`general-${idx}`}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contraindications */}
                {'contraindications' in (entry as any) && (entry as any).contraindications?.length > 0 && (
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Who Should Not Use This Treatment</h3>
                    <ul className="space-y-2 list-disc list-inside text-gray-700">
                      {(entry as any).contraindications.map((tip: string, idx: number) => (
                        <li key={`contra-${idx}`}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              // Legacy array rendering (all your other services keep working)
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {(fallbackArray ?? [
                  'Avoid heavy makeup for 12–24 hours.',
                  'Use SPF daily to protect your skin.',
                  'Avoid saunas and intense heat for 24 hours.',
                  'Use gentle skincare products.',
                ]).map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            )}
          </Card>

        </div>
      </div>
    
    </>
  );
};

export default ServiceDetail;
