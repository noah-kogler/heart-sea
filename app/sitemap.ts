import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.throwyourheartintothesea.com/en',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://www.throwyourheartintothesea.com/de',
        },
      },
    },
    {
      url: 'https://www.throwyourheartintothesea.com/en/trailer',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://www.throwyourheartintothesea.com/de/trailer',
        },
      },
    },
    {
      url: 'https://www.throwyourheartintothesea.com/en/credits',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://www.throwyourheartintothesea.com/de/credits',
        },
      },
    },
    {
      url: 'https://www.throwyourheartintothesea.com/en/press',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://www.throwyourheartintothesea.com/de/press',
        },
      },
    },
    {
      url: 'https://www.throwyourheartintothesea.com/en/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://www.throwyourheartintothesea.com/de/contact',
        },
      },
    },
  ];
}
