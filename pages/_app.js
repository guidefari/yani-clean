import Head from 'next/head'
import "../css/index.css";

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og
  const title = pageProps.data?.title
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:title" content={title || `Yani Cleaning Services`} />
        <meta property="og:site_name" content="Yani Cleaning Services" />
        <meta property="og:description" content={og ? og.description : `Keeping your home clean & clutter free`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@txndai" />
        <meta property="og:image" content={og ? og.image : `https://yani-clean.vercel.app/assets/default.png`} />
        <link rel="shortcut icon" href="/assets/default.png" />


        <title>{title || `Yani Cleaning Services`}</title>
      </Head>
    
      <Component {...pageProps} />;
    </>
  ) 
  
}

export default MyApp;
