import type { Badge } from '../../types';

const COLOR: Record<string, string> = {
  red: 'bg-red-50 text-red-600',
  lavender: 'bg-purple-50 text-purple-700',
  green: 'bg-green-50 text-green-700',
  gray: 'bg-gray-100 text-gray-600',
};

export default function PriceBadges({ badges }: { badges?: Badge[] }) {
  if (!badges?.length) return null;
  return (
    <div className="flex flex-wrap gap-1">
      {badges.map((b, i) => (
        <span
          key={`${b.text}-${i}`}
          className={`inline-block rounded-full text-[10px] font-semibold px-1.5 py-0.5 ${COLOR[b.color ?? 'red']}`}
        >
          {b.text}
        </span>
      ))}
    </div>
  );
}
