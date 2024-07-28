import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.throwyourheartintothesea.com/',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.throwyourheartintothesea.com/en',
          de: 'https://www.throwyourheartintothesea.com/de',
        },
      },
    },
    {
      url: 'https://www.throwyourheartintothesea.com/trailer',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.throwyourheartintothesea.com/en/trailer',
          de: 'https://www.throwyourheartintothesea.com/de/trailer',
        },
      },
    },
    {
      url: 'https://www.throwyourheartintothesea.com/credits',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.throwyourheartintothesea.com/en/credits',
          de: 'https://www.throwyourheartintothesea.com/de/credits',
        },
      },
    },
    {
      url: 'https://www.throwyourheartintothesea.com/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.throwyourheartintothesea.com/en/contact',
          de: 'https://www.throwyourheartintothesea.com/de/contact',
        },
      },
    },
  ];
}
