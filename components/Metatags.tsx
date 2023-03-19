import Head from 'next/head';

export default function Metatags({
    title = 'Nitin Veeraperumal',
    description = 'Welcome to my personal website',
    }) {

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <link rel="shortcut icon" href="/valid.png" />
        </Head>
    )
}