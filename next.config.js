/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  images: {
    domains: [
    "i.imgur.com",
    "imgur.com",
    "images.unsplash.com",
    "images2.imgbox.com",
    "live.staticflickr.com",  
    "farm1.staticflickr.com",
    "farm2.staticflickr.com",
    "farm3.staticflickr.com",
    "farm4.staticflickr.com",
    "farm5.staticflickr.com",
    "farm6.staticflickr.com",
    "farm7.staticflickr.com",
    "farm8.staticflickr.com", 
    "farm9.staticflickr.com"
  ],
  }, 
  pwa: {
    disable:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "preview" ||
      process.env.NODE_ENV === "production",
      // delete two lines above to enable PWA in production deployment
      // add your own icons to public/manifest.json 
      // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
});
