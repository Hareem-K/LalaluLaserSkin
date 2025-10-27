import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/UI/Card';
import { concerns } from '../../data/concerns';
import { services } from '../../data/services';
import { Link as LinkIcon, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Inline pill beside price: show first custom badge if present, else "Sale" when discounted
const InlinePill = ({
  badges,
  discounted,
}: {
  badges?: { text: string; color?: 'red' | 'lavender' | 'green' | 'gray' }[];
  discounted: boolean;
}) => {
  const b = badges?.[0];
  if (!b && !discounted) return null;

  const colorClass =
    b?.color === 'lavender'
      ? 'bg-purple-50 text-purple-700'
      : b?.color === 'green'
      ? 'bg-green-50 text-green-700'
      : b?.color === 'gray'
      ? 'bg-gray-100 text-gray-600'
      : 'bg-red-50 text-red-600';

  return (
    <span
      className={`ml-1 inline-block rounded-full text-[10px] font-semibold px-1.5 py-0.5 ${colorClass}`}
    >
      {b?.text ?? 'Sale'}
    </span>
  );
};

const ConcernPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const concern = concerns.find(c => c.slug === slug);


  // Scroll to top on first mount AND whenever the slug changes
  useEffect(() => {
    // Use both calls for best cross-browser behavior
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [slug]);


  if (!concern) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Not found</h1>
        <p className="text-gray-600 mb-6">This skin concern doesn’t exist.</p>
        <a href="/concerns/acne" className="text-[#6a4c69] underline">
          See Acne
        </a>
      </div>
    );
  }

  const recommended = services.filter((s: any) =>
    concern.recommendedServiceIds.includes(s.id)
  );

  const hasTiers = (svc: any) =>
    Array.isArray(svc?.tiers) && svc.tiers.length > 0;
  const isDiscount = (orig?: number, price?: number) =>
    typeof orig === 'number' && typeof price === 'number' && orig > price;

  const BASE = 'https://lalaluskinlaser.com';
  const canonical = `${BASE}/concerns/${slug}`;
  const rawImg = concern.image || '/og-image.jpg';
  const ogImage = rawImg.startsWith('http') ? rawImg : `${BASE}${rawImg}`;

  return (
    <>
      <Helmet>
        <title>{concern.title} | Lalalu Skin & Laser</title>
        <meta
          name="description"
          content={`Learn more about ${concern.title} and recommended treatments at Lalalu Skin & Laser.`}
        />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${concern.title} | Lalalu Skin & Laser`}
        />
        <meta
          property="og:description"
          content={`Learn more about ${concern.title} and recommended treatments at Lalalu Skin & Laser.`}
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Lalalu Skin & Laser" />
        <meta
          property="og:image:alt"
          content={`${concern.title} — Lalalu Skin & Laser`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://lalaluskinlaser.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: concern.title,
                item: canonical,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Intro with image on right */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {concern.title}
            </h1>
            <div className="space-y-3">
              {concern.intro.map((p, i) => (
                <p key={i} className="text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={concern.image}
              alt={concern.title}
              className="max-w-sm w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Recommended Treatments
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommended.map((service: any) => (
            <Card key={service.id} className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              {service.duration && (
                <p className="text-gray-600 text-sm mb-3">
                  {service.duration} minutes
                </p>
              )}

              {service.description && (
                <p className="text-gray-700 mb-4">{service.description}</p>
              )}

              {Array.isArray(service.benefits) &&
                service.benefits.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Star className="h-3 w-3 text-[#6a4c69] mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Pricing / Tiers */}
              <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                {hasTiers(service) ? (
                  <div className="space-y-2">
                    {service.tiers.map((tier: any, idx: number) => {
                      const discounted = isDiscount(
                        tier?.originalPrice,
                        tier?.price
                      );
                      return (
                        <div
                          key={idx}
                          className="flex items-baseline justify-between rounded-lg border border-gray-100 px-3 py-2"
                        >
                          <span className="text-sm text-gray-800">
                            {tier.name}
                          </span>
                          <span className="flex items-baseline gap-2">
                            {discounted && (
                              <span className="text-gray-400 line-through text-sm">
                                ${tier.originalPrice}
                              </span>
                            )}
                            <span
                              className={`text-[#6a4c69] font-semibold ${
                                discounted ? 'text-red-500' : ''
                              }`}
                            >
                              ${tier.price}
                            </span>
                            <InlinePill
                              badges={tier.badges}
                              discounted={discounted}
                            />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex items-center justify-end gap-2">
                    {isDiscount(service?.originalPrice, service?.price) ? (
                      <>
                        <span className="text-sm text-gray-400 line-through">
                          ${service.originalPrice}
                        </span>
                        <span className="text-lg font-bold text-red-500">
                          ${service.price}
                        </span>
                        <InlinePill
                          badges={service.badges}
                          discounted
                        />
                      </>
                    ) : (
                      <span className="text-lg font-bold text-[#6a4c69]">
                        ${service.price}
                      </span>
                    )}
                  </div>
                )}

                {/* CTAs — match your Services page buttons */}
                <div className="mt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`/services/${service.id}`}
                    className="inline-flex items-center px-5 py-2.5 border border-[#6a4c69] text-[#6a4c69] rounded-full font-semibold text-sm hover:bg-[#6a4c69] hover:text-white transition-colors duration-200"
                  >
                    <LinkIcon className="h-4 w-4 mr-2" />
                    More Details
                  </a>
                  <a
                    href="/book"
                    className="inline-flex items-center px-5 py-2.5 bg-[#6a4c69] text-white rounded-full font-semibold text-sm hover:brightness-110 transition-colors duration-200"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ConcernPage;
