import { CampaignContent } from '../../types';
import { DEFAULT_CASES, YT_INSPIRATION_CATEGORIES, MULTI_COLOR_CASES } from './cases';
import { COMMON_REQUIREMENTS } from './requirements';
import { MEDIA_ASSETS } from './media';
import { STRUCTURE_CONTENT, YT_STRUCTURE_CONTENT } from './structure';
import { COMMON_BRAND_INFO } from './common';
import { SINGLE_COLOR_PRODUCTS, MULTI_COLOR_PRODUCTS } from './products';

export const YT_CONTENT: CampaignContent = {
  common: {
    ...COMMON_BRAND_INFO,
    labels: {
      ...COMMON_BRAND_INFO.labels,
      inspiration: "Excellent Cases"
    }
  },
  singleColor: {
    label: "Single Color Theme (YT)",
    id: "YT_SS25",
    heroImage: "https://lh3.googleusercontent.com/d/1uWSM8d_gsNoQh1h3bRIFu-7OLxvK7VAZ",
    description: "YouTube focused campaign for single color products.",
    requirement: {
      goals: "This collaboration aims to highlight our heels and their unique blend of comfort and elegance on YouTube.",
      flows: [
        { title: "Confirmation", desc: "Terms and deliverables." },
        { title: "Choice", desc: "Choose product from the list." },
        { title: "Shipping", desc: "7-15 days delivery." },
        { title: "Preview", desc: "Review before publishing." }
      ],
      ...COMMON_REQUIREMENTS
    },
    products: SINGLE_COLOR_PRODUCTS,
    structure: YT_STRUCTURE_CONTENT,
    hooks: [],
    cases: { intro: "YouTube inspiration.", items: YT_INSPIRATION_CATEGORIES.flatMap(c => c.items).map(i => ({ title: "YT Case", author: i.id, description: i.description, videoUrl: i.videoUrl })), tips: [] },
    mediaAssets: MEDIA_ASSETS
  },
  multiColor: {
    label: "Multi Color Theme (YT)",
    id: "YT_SS26",
    heroImage: "https://lh3.googleusercontent.com/d/1uWSM8d_gsNoQh1h3bRIFu-7OLxvK7VAZ",
    description: "YouTube focused campaign for multi color products.",
    requirement: {
      goals: "Highlight how different colors fit various moods on YouTube.",
      flows: [
        { title: "1. Collab terms confirmation", desc: "We will confirm the deliverables together." },
        { title: "2. Product choice", desc: "Choose at least one product from the promotion list." },
        { title: "3. Shipping", desc: "Usually takes 7-15 days." },
        { title: "4. Preview", desc: "Preview is required before posting." }
      ],
      ...COMMON_REQUIREMENTS,
      ig: {
        ...COMMON_REQUIREMENTS.ig,
        reelReqs: COMMON_REQUIREMENTS.ig.multiColorReelReqs,
        thumbnail: [
          { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772785629/%E5%A4%9A%E8%89%B2%E5%B0%81%E9%9D%A2-1sofi.mamchur_ntcpmd.png", id: "@sofi.mamchur" },
          { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772785631/%E5%A4%9A%E8%89%B2%E5%B0%81%E9%9D%A2-2karina.wallenschus_zbpx3w.png", id: "@karina.wallenschus" },
          { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772785632/%E5%A4%9A%E8%89%B2%E5%B0%81%E9%9D%A2-3tanyakotyakova_sn7wy3.png", id: "@tanyakotyakova" }
        ]
      }
    },
    products: MULTI_COLOR_PRODUCTS,
    structure: YT_STRUCTURE_CONTENT,
    hooks: [],
    cases: { intro: "YouTube community cases.", items: YT_INSPIRATION_CATEGORIES.flatMap(c => c.items).map(i => ({ title: "YT Case", author: i.id, description: i.description, videoUrl: i.videoUrl })), tips: [] },
    mediaAssets: MEDIA_ASSETS
  }
};

export const CONTENT: CampaignContent = {
  common: COMMON_BRAND_INFO,
  singleColor: {
    label: "Single Color Theme",
    id: "SS25",
    heroImage: "https://lh3.googleusercontent.com/d/1uWSM8d_gsNoQh1h3bRIFu-7OLxvK7VAZ",
    description: "Focusing on the singular beauty of our core silhouettes.",
    requirement: {
      goals: "This collaboration aims to highlight our heels and their unique blend of comfort and elegance.",
      flows: [
        { title: "Confirmation", desc: "Terms and deliverables." },
        { title: "Choice", desc: "Choose product from the list." },
        { title: "Shipping", desc: "7-15 days delivery." },
        { title: "Preview", desc: "Review before publishing." }
      ],
      ...COMMON_REQUIREMENTS
    },
    products: SINGLE_COLOR_PRODUCTS,
    structure: STRUCTURE_CONTENT,
    hooks: [],
    cases: { intro: "Hope this brings you inspiration.", items: DEFAULT_CASES, tips: [] },
    mediaAssets: MEDIA_ASSETS
  },
  multiColor: {
    label: "Multi Color Theme",
    id: "SS26",
    heroImage: "https://lh3.googleusercontent.com/d/1uWSM8d_gsNoQh1h3bRIFu-7OLxvK7VAZ",
    description: "Showcasing one style in multiple colorways.",
    requirement: {
      goals: "Highlight how different colors fit various moods, outfits, and occasions.",
      flows: [
        { title: "1. Collab terms confirmation", desc: "We will confirm the deliverables together." },
        { title: "2. Product choice", desc: "Choose at least one product from the promotion list." },
        { title: "3. Shipping", desc: "Usually takes 7-15 days." },
        { title: "4. Preview", desc: "Preview is required before posting." }
      ],
      ...COMMON_REQUIREMENTS,
      ig: {
        ...COMMON_REQUIREMENTS.ig,
        reelReqs: COMMON_REQUIREMENTS.ig.multiColorReelReqs,
        thumbnail: [
          { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772785629/%E5%A4%9A%E8%89%B2%E5%B0%81%E9%9D%A2-1sofi.mamchur_ntcpmd.png", id: "@sofi.mamchur" },
          { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772785631/%E5%A4%9A%E8%89%B2%E5%B0%81%E9%9D%A2-2karina.wallenschus_zbpx3w.png", id: "@karina.wallenschus" },
          { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772785632/%E5%A4%9A%E8%89%B2%E5%B0%81%E9%9D%A2-3tanyakotyakova_sn7wy3.png", id: "@tanyakotyakova" }
        ]
      }
    },
    products: MULTI_COLOR_PRODUCTS,
    structure: STRUCTURE_CONTENT,
    hooks: [],
    cases: { intro: "Hope this sparks some inspiration for your content.", items: MULTI_COLOR_CASES, tips: [] },
    mediaAssets: MEDIA_ASSETS
  }
};
