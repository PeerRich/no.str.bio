// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/peer",
        destination:
          "https://damus.io/npub18zx8lw3947pghsgzqv2t0x8pe767sscag5djgj5afr755xkqd97qt530pr",
        permanent: true,
      },
      {
        source: "/kale",
        destination:
          "https://damus.io/npub19wnsemsf9upsllpsaypgzkemhxs2zh688pwfdmp0xydd030dwvuqncafq0",
        permanent: true,
      },
      {
        source: "/alexis",
        destination:
          "https://damus.io/npub136r547yapt7pc3yyaaq8nxh3numxn72m7mmj6e3mmna7zk3up7eq8lugz7",
        permanent: true,
      },
      {
        source: "/sovryn",
        destination:
          "https://damus.io/npub1fl7pr0azlpgk469u034lsgn46dvwguz9g339p03dpetp9cs5pq5qxzeknp",
        permanent: true,
      },
    ];
  },
  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;
