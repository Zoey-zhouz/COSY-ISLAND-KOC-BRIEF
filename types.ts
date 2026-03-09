export type CampaignSeason = 'SS25' | 'SS26';
export type ActiveSection = 'home' | 'onboarding' | 'platform' | 'campaignType' | 'requirement' | 'products' | 'structure' | 'hooks' | 'cases' | 'brand' | 'media' | 'dashboard' | 'tech' | 'ytType' | 'tiktokInfo';
export type Platform = 'IG' | 'YT';
export type YTType = 'dedicated' | 'integrated';

export interface ProductFeature {
  id: string;
  name: string;
  image: string;
  colors: string[];
  sellingPoints: string[];
  url: string;
  isPastSelection?: boolean;
  firstShowColor?: string;
  detailCases?: CaseStudy[];
}

export interface CaseStudy {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  author: string;
}

export interface HookItem {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

export interface RequirementData {
  goals: string;
  flows: { title: string; desc: string }[];
  ig?: {
    reelReqs: { text: string; status: 'must' | 'mustnt' }[];
    multiColorReelSteps?: { step: string; title: string; desc: string }[];
    carouselReqs: { text: string; status: 'must' | 'mustnt' }[];
    captionReqs: {
      ad: string;
      mentions: string[];
      exclusivity: string;
      direction: string;
    };
    thumbnail?: { url: string; id: string }[];
  };
  yt?: {
    dedicated: { text: string; status: 'must' | 'mustnt' }[];
    integrated: { text: string; status: 'must' | 'mustnt' }[];
    captionReqs: {
      title?: string;
      links: string;
      tags: string[];
    };
    dedicatedGoals?: string;
    integratedGoals?: string;
    dedicatedFormats?: { title: string; desc: string }[];
    integratedFormats?: { title: string; desc: string }[];
    thumbnail?: { url: string; id: string }[];
    reminder?: string[];
  };
}

export interface StructureStep {
  title: string;
  desc: string;
  details?: string;
  examples: (string | { url: string; id: string; title?: string })[];
  hookIntro?: {
    intro: string;
    types: {
      title: string;
      desc: string;
      icon: string;
      image?: string;
      examples?: string[];
      videoExamples?: string[];
      author?: string;
    }[];
  };
  musicTypes?: {
    title: string;
    desc: string;
    examples: (string | { url: string; id: string; title?: string })[];
  }[];
}

export interface CampaignData {
  label: string;
  id: string;
  heroImage: string;
  description: string;
  requirement: RequirementData;
  products: ProductFeature[];
  structure: {
    intro: string;
    steps: StructureStep[];
    reminder1: { title: string; points: string[]; images: string[] };
    reminder2: { title: string; desc: string; images: string[] };
  };
  hooks: HookItem[];
  cases: {
    intro: string;
    items: CaseStudy[];
    tips: string[];
  };
  mediaAssets: {
    fonts: string;
    logo: string;
    colorGuide: string;
    hookTutorial: string;
  };
}

export interface CampaignContent {
  singleColor: CampaignData;
  multiColor: CampaignData;
  common: {
    brandName: string;
    website: string;
    instagram: string;
    seasonalColors: string[];
    labels: { [key: string]: string };
    updates?: { date: string; content: string }[];
  };
}

// Added Brief interface to fix import errors in components
export interface Brief {
  id: string;
  title: string;
  brand: string;
  description: string;
  requirements: string;
  productUrl: string;
  category: string;
  reward: string;
  imageUrl: string;
  status: string;
  createdAt: number;
}
