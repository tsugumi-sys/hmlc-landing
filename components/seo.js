import React from 'react'
import Head from 'next/head'

export default function SEO({
    description = '北大機械学習サークルHUMLのホームページです。機械学習を自分の武器にして、様々なことにチャレンジするサークルです。',
    meta,
    title = '北大機械学習サークルHUMLのホームページ',
    ogTitle="北大機械学習サークルHUMLのホームページ",
    ogDescription="北海道大学機械学習サークルへようこそ。機械学習を自分の武器にして、様々なことにチャレンジしましょう～！",
    ogUrl="https://hmlc.vercel.app",
    ogImage="https://hmlc.vercel.app/assets/hmlc-landing.png"
}) {
    const ogData = [
        {
            property: 'og:title',
            content: ogTitle,
        },
        {
            property: 'og:description',
            content: ogDescription,
        },
        {
            property: 'og:url',
            content: ogUrl
        },
        {
            property: 'og:image',
            content: ogImage   
        },
    ]
    const metaData = [
        {
            name: 'description',
            content: description,
        },
        {
            name: 'title',
            content: title
        },
        {
            name: 'twitter:card',
            content: 'summary',
        },
        {
            name: 'twitter:creator',
            content: 'HMLC',
        },
        {
            property: 'og:site_name',
            content: 'HMLC WebSite'
        },
        {
            property: 'og:type',
            content: 'website',
        },
    ].concat(meta);
    return (
        <Head>
            <title>{title}</title>
            {metaData.map(({ name, content }, i) => (
                <meta key={i} name={name} content={content} />
            ))}
            {ogData.map(({ property, content }, i) => (
                <meta key={i} property={property} content={content} />
            ))}
        </Head>
    );
}

SEO.defaultProps = {
    lang: 'ja',
    meta: [],
};