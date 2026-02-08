import "../styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Moview – Discover Movies Instantly</title>
        <link rel="icon" href="/clapperboard_3355866.png" />
        <meta
          name="description"
          content="Search and explore movies with ratings, posters, and detailed information. Built with Next.js and optimized for SEO."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph */}
        <meta property="og:title" content="Moview – Discover Movies Instantly" />
        <meta
          property="og:description"
          content="Explore trending movies and get detailed information instantly."
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

      </Head>
      <Header/>
      <Component {...pageProps} />;
      <Footer/>
    </>
  )
}
