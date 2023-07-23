import Head from 'next/head';
import Footer from '../components/Footer';
import { SectionOne } from '../components/sharedstyles';
import BlogPostPage from '../components/Places/[id]'


const BlogPost: React.FC = () => {

    return (
        <SectionOne>
          <Head>
            <title>Stay With Tate | Own your stay</title>
            <link rel='icon' href='/stayWithTateLogo.svg' />
            <meta property="og:title" content="Othent - Merging Web2 to Web3 user logins with a familiar and simple interface."/>
            <meta property='og:description' content='Othent - Merging Web2 to Web3 user logins with a familiar and simple interface.' />
            <meta property="og:url" content="https://Othent.io"/>
            <meta property="og:image" content="https://Othent.io/favicon.ico"/>
            <meta property="og:image:width" content="200"/>
            <meta property="og:image:height" content="200"/>
            <meta name="keywords" content="Othent, Smart Contract Wallets, Web3, JWT Transactions, Arweave, Community Labs, $U, U Arweave Token"></meta>
            <meta name="author" content="Othent.io"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="apple-mobile-web-app-capable" content="yes"></meta>
            <meta name="theme-color" content="#2375EF"></meta>
            <meta name="twitter:site" content="@othent_io"></meta>
            <meta property="og:site_name" content="Othent"></meta>
          </Head>

          <BlogPostPage />
    
          <Footer />
        </SectionOne>
      );
};

export default BlogPost;