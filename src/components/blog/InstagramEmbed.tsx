// src/components/blog/InstagramEmbed.tsx
import React, { useEffect, useRef } from 'react';

type Props = { url: string; title?: string };

const InstagramEmbed: React.FC<Props> = ({ url, title }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = () => {
      // @ts-ignore
      if (window.instgrm) window.instgrm.Embeds.process();
    };

    // inject script once
    const existing = document.querySelector('script#ig-embed');
    if (!existing) {
      const s = document.createElement('script');
      s.id = 'ig-embed';
      s.async = true;
      s.src = 'https://www.instagram.com/embed.js';
      s.onload = load;
      document.body.appendChild(s);
    } else {
      load();
    }
  }, [url]);

  return (
    <div ref={ref} className="my-6">
      {title && <p className="text-sm text-gray-500 mb-2">{title}</p>}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: '#fff', border: 0, margin: 0, padding: 0, width: '100%' }}
      />
    </div>
  );
};

export default InstagramEmbed;
