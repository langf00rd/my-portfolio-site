import Head from 'next/head';

const metaContent = {
  title: 'langford ツ',
  description: "hey i'm langford. a software engineer",
  image:
    'https://res.cloudinary.com/follio/image/upload/v1693761848/fbnrxbnygh7azprri4bf.png',
  imageAlt: "langford's portfolio banner image",
  siteName: 'langford.lol',
  url: 'https://www.langford.lol',
  twitterCreator: '@langf00rd',
  keywords:
    'software engineer, software developer, react developer, flutter developer, nextjs, nextjs developer, developer portfolio, mobile app developer',
};

const Meta = (props: { title?: string; description?: string }) => {
  const { title, description } = props;
  return (
    <>
      <Head>
        {/* Global Metadata */}
        <meta name='robots' content='follow, index' />
        <meta name='title' content={title || metaContent.title} />
        <meta name='description' content={description ?? metaContent.description} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' type='image/ico' href='/favicon.ico' />
        <meta name='keywords' content={metaContent.keywords} />
        <title>{title || metaContent.title}</title>

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={metaContent.siteName} />
        <meta property='og:url' content={metaContent.url} />
        <meta property='og:title' content={title || metaContent.title} />
        <meta
          property='og:description'
          content={description ?? metaContent.description}
        />
        <meta property='og:image' content={metaContent.image} />
        <meta property='og:image:alt' content={metaContent.imageAlt} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={metaContent.url} />
        <meta property='twitter:title' content={title || metaContent.title} />
        <meta
          property='twitter:description'
          content={description ?? metaContent.description}
        />
        <meta property='twitter:image' content={metaContent.image} />
        <meta property='twitter:domain' content={metaContent.url} />
        <meta name='twitter:creator' content={metaContent.twitterCreator} />
        <meta name='twitter:image:alt' content={metaContent.imageAlt} />
      </Head>
      {/* <Script async src="https://tally.so/widgets/embed.js"></Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PB0Y248B6M"
      ></Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3725774437684608"
        crossOrigin="anonymous"
      ></Script> */}
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PB0Y248B6M');
        `}
      </Script> */}
    </>
  );
};

export default Meta;
