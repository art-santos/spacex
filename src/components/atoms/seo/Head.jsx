import { NextSeo } from "next-seo";
import React from "react";

const HeadDefault = ({ title, description, image }) => {
  console.log('title', title);
  console.log('description', description);
  console.log('image', image);
  return (
        <NextSeo
            title={title}
            description={description}
            canonical="https://spacex.arthursantos.codes"
            openGraph={{
            url: 'https://spacex.arthursantos.codes',
            title: title,
            description: description,
            images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: image,
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: image },
          { url: image },
        ],
        site_name: 'SpaceX',
      }}
      twitter={{
        handle: '@spacex',
        site: '@spacex',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default HeadDefault;
