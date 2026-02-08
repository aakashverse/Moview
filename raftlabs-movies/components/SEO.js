import Head from "next/head";

export default function SEO({
  title,
  description,
  image,
  url,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}
    </Head>
  );
}
