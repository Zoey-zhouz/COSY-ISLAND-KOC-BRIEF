/**
 * Centralized Media Assets
 * This file contains all the video, image, and icon URLs used in the application.
 */

export const MEDIA_ASSETS = {
  // Brand Images
  LOGO: "https://cosyisland.co/cdn/shop/files/Logo_300x.png",
  
  // Product Images
  PRODUCTS: {
    HEEL_1: "https://lh3.googleusercontent.com/d/1GI14vx-9YVHdhPJz05SmJEf1OLQccbGj",
    HEEL_2: "https://lh3.googleusercontent.com/d/1GI14vx-9YVHdhPJz05SmJEf1OLQccbGj",
  },

  // Video Framework Examples
  STRUCTURE: {
    HOOK_CASE_1: "https://www.instagram.com/reels/C4p_8X_S_9_/",
    HOOK_CASE_2: "https://www.instagram.com/reels/C4p_8X_S_9_/",
  },

  // Placeholders
  PLACEHOLDERS: {
    VIDEO_COVER: (seed: string) => `https://picsum.photos/seed/${seed}/800/1422`,
    IMAGE: (seed: string) => `https://picsum.photos/seed/${seed}/800/800`,
  }
};
