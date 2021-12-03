/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "SpaceX",
  titleTemplate: "SpaceX | %s",
  defaultTitle: "SpaceX",
  description: "SpaceX complete Website project",
  canonical: "https://spacex.arthursantos.codes",
  openGraph: {
    url: "https://spacex.arthursantos.codes",
    title: "spaceX",
    description: "SpaceX complete Website project",
    images: [
      {
        url: "https://og-image.sznm.dev/**spaceX**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "spacex.sznm.dev og-image",
      },
    ],
    site_name: "spaceX",
  },
  twitter: {
    handle: "@arthursantos",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
