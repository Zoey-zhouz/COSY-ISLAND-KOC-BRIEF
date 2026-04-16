export const YT_INSPIRATION_CATEGORIES = [
  {
    title: "YouTube Dedicated Review",
    desc: "In-depth reviews and unboxing experiences.",
    items: [
      { id: "yt_1", videoUrl: "https://www.youtube.com/watch?v=R58OiDeu6Ig", description: "Dedicated Review 1" },
      { id: "yt_2", videoUrl: "https://www.youtube.com/watch?v=uAJRvMQYg-I&t=16s", description: "Dedicated Review 2" }
    ]
  },
  {
    title: "YouTube Integrated Styling",
    desc: "Longer styling videos and lookbooks.",
    items: [
      { id: "yt_3", videoUrl: "https://www.youtube.com/watch?v=pYPM7lcT5WQ&t=396s", description: "Integrated Styling 1" },
      { id: "yt_4", videoUrl: "https://www.youtube.com/watch?v=0UOE5vbTPEk&t=140s", description: "Integrated Styling 2" }
    ]
  }
];

export const INSPIRATION_CATEGORIES = [
  {
    title: "Trends that fit our product",
    desc: "Recent hot trends related to shoes or outfits.",
    items: [
      { id: "@saramahayri", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611242/Trend_1-Feet_POV_GRWM-saramahayri__2026-02-26T102100.000Z_kbbw7g.mp4", description: "Feet POV GRWM" },
      { id: "@evajan.x", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611243/Trend_2-rapid_outfit_check-evajan.x__2025-08-19T144903.000Z_gzvjew.mp4", description: "Rapid outfit check" },
      { id: "@jessideoliveira", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611249/Trend_3-_I_fell_but_I_saved_my_...-jessideoliveira__2026-02-24T172107.000Z_vyufxg.mp4", description: "I fell but I saved my..." },
      { id: "@katyaklema", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611245/Trend_4-colorful_detail_frames-katyaklema__2026-02-02T180741.000Z_7_guvbru.mp4", description: "Colorful detail frames" }
    ]
  },
  {
    title: "Editing tutorial",
    desc: "Popular editing tutorials suitable for IG.",
    items: [
      { id: "@stevenwommack", videoUrl: "https://res.cloudinary.com/dw8q6wrts/video/upload/v1773024678/Tutorial-trend_2-stevenwommack__2026-02-23T141032.000Z_ztfpif.mp4", description: "Tutorial trend 2" },
      { id: "@stevenwommack", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611248/Tutorial-ai%E5%B0%8F%E4%BA%BA%E6%8D%A2%E8%A3%85-stevenwommack__2026-01-26T134821.000Z_1_hmlksn.mp4", description: "Tutorial AI outfit change" },
      { id: "@stevenwommack", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611246/Tutorial-AI_transform_location-stevenwommack__2026-01-28T190058.000Z_vdcjgf.mp4", description: "Tutorial AI transform location" },
      { id: "@stevenwommack", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611249/Tutorial-split_screen-stevenwommack__2026-01-24T111206.000Z_gfwnln.mp4", description: "Split screen tutorial" },
      { id: "@stevenwommack", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611253/Tutorial%E6%95%99%E7%A8%8B-trend_4__2026-02-06T162457.000Z_gtptqu.mp4", description: "Tutorial trend 4" }
    ]
  },
  {
    title: "AIGC Cases",
    desc: "Showcasing our influencer content.",
    items: [
      { id: "@lanaforgeau", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611908/AIGC-1_lanaforgeau__2026-02-27T160419.000Z_w6pxbt.mp4", description: "AIGC Case 1" },
      { id: "@paleshnyk.ai", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611910/AIGC-2_paleshnyk.ai__2026-02-10T190105.000Z_w7lgwa.mp4", description: "AIGC Case 2" },
      { id: "@paleshnyk.ai", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772611916/AIGC-3_paleshnyk.ai__2026-02-14T193028.000Z_fejbw1.mp4", description: "AIGC Case 3" }
    ]
  },
  {
    title: "Multicolor case",
    desc: "Excellent cases showcasing multiple colors.",
    items: [
      { id: "@tanyakotyakova", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772786164/HOOK_%E5%A4%9A%E8%89%B2_tanyakotyakova__2026-01-20T162420.000Z_spamyo.mp4", description: "Multicolor case 1" },
      { id: "@sofi.mamchur", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772786409/%E5%A4%9A%E8%89%B2%E6%A1%88%E4%BE%8B1_sofi.mamchur__2026-02-02T180519.000Z_bqky7m.mp4", description: "Multicolor case 2" },
      { id: "@lidiyabairon", videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772786424/_lidiyabairon__2025-12-22T153201.000Z_wbjrhx.mp4", description: "Multicolor case 3" },
      { id: "@lindsayhignett", videoUrl: "https://res.cloudinary.com/dw8q6wrts/video/upload/v1773390290/HOOK_%E5%A4%9A%E8%89%B2_lindsayhignett__2026-03-06T150204.000Z_by1ql8.mp4", description: "Multicolor case 4" }
    ]
  }
];

export const DEFAULT_CASES = INSPIRATION_CATEGORIES[0].items.map(item => ({
  title: "Community Case",
  author: item.id,
  description: "Inspiration for your content.",
  videoUrl: item.videoUrl
}));

export const MULTI_COLOR_CASES = [
  {
    title: "Community Case",
    author: "@tanyakotyakova",
    description: "Inspiration for your content.",
    videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772786164/HOOK_%E5%A4%9A%E8%89%B2_tanyakotyakova__2026-01-20T162420.000Z_spamyo.mp4"
  },
  {
    title: "Community Case",
    author: "@sofi.mamchur",
    description: "Inspiration for your content.",
    videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772786409/%E5%A4%9A%E8%89%B2%E6%A1%88%E4%BE%8B1_sofi.mamchur__2026-02-02T180519.000Z_bqky7m.mp4"
  },
  {
    title: "Community Case",
    author: "@lidiyabairon",
    description: "Inspiration for your content.",
    videoUrl: "https://res.cloudinary.com/dqdisi2yp/video/upload/v1772786424/_lidiyabairon__2025-12-22T153201.000Z_wbjrhx.mp4"
  },
  {
    title: "Community Case",
    author: "@lindsayhignett",
    description: "Inspiration for your content.",
    videoUrl: "https://res.cloudinary.com/dw8q6wrts/video/upload/v1773390290/HOOK_%E5%A4%9A%E8%89%B2_lindsayhignett__2026-03-06T150204.000Z_by1ql8.mp4"
  }
];
