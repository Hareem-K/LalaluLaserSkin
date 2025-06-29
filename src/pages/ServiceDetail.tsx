import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const aftercareById: Record<string, string[]> = {
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
    'Avoid makeup for 12 hours.',
    'No exfoliation or strong actives for 5-7 days.',
    'Keep skin well-hydrated & use sunscreen daily.',
    'Avoid swimming pools or hot tubs for 48 hours.'
  ],
  hydrofacial: [
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
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'classic-facial': [
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'glow-facial': [
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'deep-cleansing': [
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'acne-treatment': [
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'led-facial': [
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'oxygen-facial': [
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
  'gold-facial': [
    'Avoid heavy makeup for 12-24 hours to let your skin breathe.',
    'Avoid hot showers, saunas, or steam rooms for 24 hours.',
    'Use gentle cleansers and moisturizers.',
    'Always apply broad-spectrum SPF 30+ daily, even on cloudy days.',
    'Avoid exfoliating products (retinols, AHAs, scrubs) for 3-5 days.',
    'Stay hydrated to maintain that fresh glow!'
  ],
};

const generalTips = [
  'Keep your skin hydrated.',
  'Wear broad-spectrum SPF every day (even when cloudy).',
  'Schedule your next treatment as recommended for the best long-term results!'
];

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

  const aftercare = aftercareById[service.id] || [
    'Avoid heavy makeup for 12-24 hours.',
    'Use SPF daily to protect your skin.',
    'Avoid saunas and intense heat for 24 hours.',
    'Use gentle skincare products.'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h1>
          <span>
            <div className="mb-6">
                <p className="text-gray-600">{service.duration} minutes</p>
            </div>
          </span>
          <p className="text-gray-700 mb-4">{service.description}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Key Benefits:</h3>
            <ul className="space-y-1">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-gray-600">• {benefit}</li>
              ))}
            </ul>
          </div>

          <Link to="/book">
            <Button className="mt-4">Book Now</Button>
          </Link>
        </Card>

        <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aftercare Instructions</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
                {aftercare.map((tip, index) => (
                <li key={index}>{tip}</li>
                ))}
            </ul>
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Universal Tips</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                {generalTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                ))}
                </ul>
            </div>
        </Card>

      </div>
    </div>
  );
};

export default ServiceDetail;
