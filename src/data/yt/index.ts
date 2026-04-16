import { CampaignContent } from '../../types';
import { YT_INSPIRATION_CATEGORIES } from '../cases';
import { COMMON_REQUIREMENTS } from '../requirements';
import { MEDIA_ASSETS } from '../media';
import { YT_STRUCTURE_CONTENT } from '../structure';
import { COMMON_BRAND_INFO } from '../common';
import { SINGLE_COLOR_PRODUCTS, MULTI_COLOR_PRODUCTS } from '../products';

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
    heroImage: "https://res.cloudinary.com/dw8q6wrts/image/upload/v1773388635/%E9%A6%96%E5%9B%BE-1_h52mk1.png",
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
    heroImage: "https://res.cloudinary.com/dw8q6wrts/image/upload/v1773388635/%E9%A6%96%E5%9B%BE-1_h52mk1.png",
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
          { url: "https://res.cloudinary.com/dw8q6wrts/image/upload/v1773391375/Thumbnail-%E5%A4%9A%E8%89%B2_teygpc.png", id: "@sofi.mamchur" },
          { url: "https://res.cloudinary.com/dw8q6wrts/video/upload/v1773390290/HOOK_%E5%A4%9A%E8%89%B2_lindsayhignett__2026-03-06T150204.000Z_by1ql8.mp4", id: "@lindsayhignett" },
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
