import { CampaignContent } from '../../types';
import { DEFAULT_CASES, MULTI_COLOR_CASES } from '../cases';
import { COMMON_REQUIREMENTS } from '../requirements';
import { MEDIA_ASSETS } from '../media';
import { STRUCTURE_CONTENT } from '../structure';
import { COMMON_BRAND_INFO } from '../common';
import { SINGLE_COLOR_PRODUCTS, MULTI_COLOR_PRODUCTS } from '../products';

export const IG_CONTENT: CampaignContent = {
  common: {
    ...COMMON_BRAND_INFO,
    labels: {
      ...COMMON_BRAND_INFO.labels,
      rules: undefined as any
    }
  },
  singleColor: {
    label: "Single Color Theme",
    id: "SS25",
    heroImage: "https://res.cloudinary.com/dw8q6wrts/image/upload/v1773388635/%E9%A6%96%E5%9B%BE-1_h52mk1.png",
    description: "Focusing on the singular beauty of our core silhouettes.",
    products: SINGLE_COLOR_PRODUCTS,
    structure: STRUCTURE_CONTENT,
    hooks: [],
    cases: { intro: "Hope this brings you inspiration.", items: DEFAULT_CASES, tips: [] },
    mediaAssets: MEDIA_ASSETS
  },
  multiColor: {
    label: "Multi Color Theme",
    id: "SS26",
    heroImage: "https://res.cloudinary.com/dw8q6wrts/image/upload/v1773388635/%E9%A6%96%E5%9B%BE-1_h52mk1.png",
    description: "Showcasing one style in multiple colorways.",
    products: MULTI_COLOR_PRODUCTS,
    structure: STRUCTURE_CONTENT,
    hooks: [],
    cases: { intro: "Hope this sparks some inspiration for your content.", items: MULTI_COLOR_CASES, tips: [] },
    mediaAssets: MEDIA_ASSETS
  }
};
