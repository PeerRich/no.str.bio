import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>no.str.bio</title>
        <meta name="title" content="no.str.bio" />
        <meta
          name="description"
          content="Get your #nostr short link and NIP5 identifier"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://no.str.bio" />
        <meta property="og:title" content="no.str.bio" />
        <meta
          property="og:description"
          content="Get your #nostr short link and NIP5 identifier"
        />
        <meta property="og:image" content="https://no.str.bio/og-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://no.str.bio" />
        <meta property="twitter:title" content="no.str.bio" />
        <meta
          property="twitter:description"
          content="Get your #nostr short link and NIP5 identifier"
        />
        <meta
          property="twitter:image"
          content="https://no.str.bio/og-image.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8d3ac5" />
        <meta name="msapplication-TileColor" content="#8d3ac5" />
        <meta name="theme-color" content="#8d3ac5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <main>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <Image
              alt="Nostrich Running Gif"
              src="/nostrich.gif"
              width={200}
              height={200}
            />
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Get your <span className="text-[#8D3AC5]">no.str.bio</span> link
            </h1>
            <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://www.lnurlpay.com/peer@getalby.com/10000?comment=i%20want%20the%20username:"
              >
                <h3 className="text-2xl font-bold">1. Claim your username →</h3>
                <div className="text-lg">
                  Get your unique no.str.bio link and NIP-5 verification for{" "}
                  <strong>10,000 Sats</strong>.
                </div>
                <strong>⚡ Pay with Lightning</strong>
              </Link>
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://no.str.bio/peer"
              >
                <h3 className="text-2xl font-bold">2. Send me a DM →</h3>
                <div className="text-lg">
                  Once your lightning payment went through, send me a DM and I
                  will create your link.
                </div>
                <strong>Send a DM on Nostr</strong>
              </Link>
            </div>
          </div>
        </main>

        <footer className="text-center text-white opacity-50">
          Created by{" "}
          <a
            className="text-[#8D3AC5] underline hover:text-purple-400"
            href="https://no.str.bio/peer"
            target="_blank"
            rel="noreferrer"
          >
            no.str.bio/peer
          </a>
          , Nostrich Gif by{" "}
          <a
            className="text-[#8D3AC5] underline hover:text-purple-400"
            href="https://github.com/satscoffee/nostr_icons"
            target="_blank"
            rel="noreferrer"
          >
            satscoffee
          </a>
          . Source code on{" "}
          <a
            className="text-[#8D3AC5] underline hover:text-purple-400"
            href="https://github.com/PeerRich/no.str.bio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <br />
          <small className="opacity-50">
            No refunds. Non-commercial fun-project. Pura Vida 🤙
          </small>
        </footer>
      </div>
    </>
  );
};

export default Home;
