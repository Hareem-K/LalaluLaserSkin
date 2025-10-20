import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import PostRenderer from '../components/blog/PostRenderer';
import { blogPosts } from '../data/blog';
import { Helmet } from 'react-helmet-async';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  const siteName = 'Lalalu Skin & Laser';
  const baseUrl = 'https://lalaluskinlaser.com';
  const url = `${baseUrl}/blog/${post?.slug ?? ''}`;
  const description =
    post?.excerpt ||
    'Expert tips, treatment deep-dives, and real results from Lalalu Skin & Laser in Calgary.';
  const image = post?.coverImage || `${baseUrl}/og-image.jpg`;

  // Light JSON-LD like your other pages
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      ...(post
        ? [{ '@type': 'ListItem', position: 3, name: post.title, item: url }]
        : []),
    ],
  };

  const postSchema = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description,
        image,
        datePublished: post.createdAt,
        dateModified: post.updatedAt || post.createdAt,
        author: { '@type': 'Organization', name: siteName },
        mainEntityOfPage: url,
      }
    : null;

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <p className="text-gray-600">Post not found.</p>
        <Link to="/blog"><Button className="mt-4">Back to Blog</Button></Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Lalalu Skin & Laser | lalalu Blog</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph (match style used elsewhere) */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="Lalalu Skin & Laser | lalalu Blog"  />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lalalu Skin & Laser — Calgary" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lalalu Skin & Laser | lalalu Blog" />

        {/* JSON-LD (light) */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>
        {postSchema && (
          <script type="application/ld+json">{JSON.stringify(postSchema)}</script>
        )}
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <Card className="overflow-hidden">
            {post.coverImage && <img src={post.coverImage} alt={post.title} className="w-full h-80 object-cover" />}
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
              <PostRenderer blocks={post.blocks} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
