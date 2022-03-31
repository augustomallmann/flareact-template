// import Head from 'flareact/head';
// import { useRouter } from 'flareact/router';
export { default as Seo } from './MetaTags/Default';
export { default as ArticleJson } from './StructuredData/Article';

// type SeoProps = {
//     title: string;
//     description: string;
//     shareImage: string;
//     preloadImage: string;
// };

// export function Seo({
//     title,
//     description,
//     shareImage,
//     preloadImage
// }: SeoProps) {
//     const router = useRouter();

//     return (
//         <>
//             {title && (
//                 <Head>
//                     <title>{title} | Azion</title>
//                     <meta name="og:title" content={`${title} - Azion`} />
//                 </Head>
//             )}
//             {description && (
//                 <Head>
//                     <meta name="description" content={description} />
//                     <meta name="og:description" content={description} />
//                 </Head>
//             )}
//             {shareImage && (
//                 <Head>
//                     <meta
//                         name="image"
//                         property="og:image"
//                         content={absoluteUrl(shareImage)}
//                     />
//                     <meta name="og:image" content={absoluteUrl(shareImage)} />
//                     <meta
//                         name="twitter:image"
//                         content={absoluteUrl(shareImage)}
//                     />
//                 </Head>
//             )}
//             {preloadImage && (
//                 <Head>
//                     <link
//                         rel="preload"
//                         as="image"
//                         href={`https://www.azion.com${preloadImage}`}
//                     />
//                 </Head>
//             )}
//             <Head>
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:site" content="@" />
//                 <meta name="twitter:creator" content="@" />
//                 <meta
//                     property="og:url"
//                     content={`https://flareact.com${router.asPath}`}
//                 />
//                 <meta property="og:type" content="website" />
//                 <meta property="og:locale" content="en_US" />
//                 <meta property="og:site_name" content="Azion Technologies" />
//             </Head>
//         </>
//     );
// }

// function absoluteUrl(url) {
//     return url.startsWith('https') ? url : 'https://www.azion.com' + url;
// }
