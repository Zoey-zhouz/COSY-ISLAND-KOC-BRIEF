export const COMMON_REQUIREMENTS = {
  ig: {
    reelReqs: [
      { text: "Send us a preview before posting (CRITICAL)", status: 'must' as const },
      { text: "Feature only the assigned product", status: 'must' as const },
      { text: "English voiceover and subtitles", status: 'must' as const },
      { text: "Tag and mention @COSYISLAND_OFFICIAL", status: 'must' as const },
      { text: "Mention other brands", status: 'mustnt' as const },
      { text: "Inaccurate product color/shape", status: 'mustnt' as const }
    ],
    multiColorReelReqs: [
      { text: "Send us a preview before posting (CRITICAL)", status: 'must' as const },
      { text: "Feature only the assigned product", status: 'must' as const },
      { text: "English voiceover and subtitles", status: 'must' as const },
      { text: "Tag and mention @COSYISLAND_OFFICIAL", status: 'must' as const },
      { text: "Mention other brands", status: 'mustnt' as const },
      { text: "Inaccurate product color/shape", status: 'mustnt' as const }
    ],
    multiColorReelSteps: [
      { step: "1", title: "Full Color Showcase", desc: "Open the video with a clean, aesthetic display of all available colors.\nCan be shown laid out side by side, held in hand, or worn briefly." },
      { step: "2", title: "First Outfit Styling (Hero Color)", desc: "Show the shoes in Hero color in a complete outfit.\nThis color should feel like the “key color” of the video." },
      { step: "3", title: "Comfort Close-Ups", desc: "Close-up shots focusing on details that suggest comfort (bouncy insole cushion, heel stability, flexible movement, premium fabrics, etc.).\nSee product feature page for more reference" },
      { step: "4", title: "Additional Colors with Different Outfits", desc: "Switch to other colors, each styled with a different outfit or vibe, showing that the same design works across multiple styles and occasions" },
      { step: "5", title: "Product Close-Up + CTA", desc: "End the video with a medium close-up shot of the product.\nFinish with a clean product close-up.\nAdd a CTA using on-screen text or voiceover. (e.g. find your favorite color on their website!)" }
    ],
    carouselReqs: [
      { text: "Show assigned product clearly", status: 'must' as const },
      { text: "English captions first", status: 'must' as const },
      { text: "3 to 8 high-quality photos", status: 'must' as const },
      { text: "Competitor brand tags", status: 'mustnt' as const },
      { text: "Blurry or low-light shots", status: 'mustnt' as const }
    ],
    captionReqs: {
      ad: "Short: #ad at end. Long: #ad at start.",
      mentions: ["@cosyisland_official", "#cosyislanders", "#comfyheels"],
      exclusivity: "No competitor mentions.",
      direction: "Snappy or Informative."
    },
    thumbnail: [
      { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772605384/Brief-%20total/Brief-photos/thumbnail_-1_zpoqdg.jpg", id: "@kseni_wolter" },
      { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772605384/Brief-%20total/Brief-photos/thumbnail_-2_c6sgep.jpg", id: "@euphoria_el_" },
      { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772605383/Brief-%20total/Brief-photos/thumbnail_-3_ujwcsf.jpg", id: "@reginemorales20" }
    ]
  },
  yt: {
    dedicatedGoals: "Focuses on Cosy Island, highlighting comfort, elegance, and key product features.",
    integratedGoals: "Naturally integrate Cosy Island into your video, showcasing its signature blend of comfort and elegance.",
    dedicated: [
      { text: "Send us a preview before posting (CRITICAL)", status: 'must' as const },
      { text: "Focus on the entire video on Cosy Island.", status: 'must' as const },
      { text: "5–20 minute horizontal YouTube video.", status: 'must' as const },
      { text: "English voiceover and subtitles", status: 'must' as const },
      { text: "Feature an honest, in-depth review and styling guide with clear close-ups and try-on shots to highlight the product.", status: 'must' as const },
      { text: "Promote other footwear brands", status: 'mustnt' as const },
      { text: "Inaccurate product color/shape", status: 'mustnt' as const },
      { text: "Low audio quality", status: 'mustnt' as const }
    ],
    integrated: [
      { text: "Send us a preview before posting (CRITICAL)", status: 'must' as const },
      { text: "3–10 minute horizontal YouTube video", status: 'must' as const },
      { text: "Feature the shoes within the first 3 minutes of the video", status: 'must' as const },
      { text: "English voiceover and subtitles", status: 'must' as const },
      { text: "Include clear try-on shots and product close-ups.", status: 'must' as const },
      { text: "Cosy Island heels are naturally integrated into the video’s theme.", status: 'must' as const },
      { text: "Promote other footwear brands", status: 'mustnt' as const },
      { text: "Inaccurate product color/shape", status: 'mustnt' as const },
      { text: "Low audio quality", status: 'mustnt' as const }
    ],
    captionReqs: {
      title: "COSY ISLAND (Must be in all caps)",
      links: "Please use the personalized tracking links for the website and products shared in our email.",
      tags: ["#cosyisland", "#cosyislanders", "#comfyheels"]
    },
    dedicatedFormats: [
      { title: "Review & Try-On", desc: "A deep dive into craftsmanship, comfort technology, and real-world fit performance." },
      { title: "Styling & Versatility Lookbook", desc: "A curated visual guide showcasing how to style the heels across diverse everyday and elevated outfits." },
      { title: "The Professional Edit", desc: "Office-ready heels that balance professionalism, elegance, and comfort." },
      { title: "The Problem Solver", desc: "Honest reviews focusing on real comfort solutions for specific needs like wide feet, bunions, or long commutes." }
    ],
    integratedFormats: [
      { title: "The 8 Hour/Week Performance Test", desc: "A \"Day in the Life\" vlog showcasing the heels' seamless comfort from morning meetings to post-work social events." },
      { title: "Style Evolution (Identity & Growth)", desc: "A personal narrative on building a functional, modern wardrobe after life transitions, such as having children or shifting careers, featuring these heels as the essential anchor piece." },
      { title: "Curated Seasonal Essentials", desc: "Trend focused lookbooks styling the heels with current seasonal textures and palettes to prove their year round versatility." },
      { title: "The \"Effortless\" Talk", desc: "A candid discussion on confidence and self-care for the modern woman (30s, 40s, 50s+), framing comfort as the prerequisite for true elegance." }
    ],
    thumbnail: [
      { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772780680/DiaMeraz_r21joz.jpg", id: "@DiaMeraz" },
      { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772780675/mademoisellejaime_hrb40s.png", id: "@mademoisellejaime" },
      { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772780676/Stylemebetter_brz74i.jpg", id: "@Stylemebetter" },
      { url: "https://res.cloudinary.com/dqdisi2yp/image/upload/v1772780676/veronikarosandic_nh1eln.jpg", id: "@veronikarosandic" }
    ],
    reminder: [
      "Our official website is cosyisland.co — NOT .com.",
      "And it’s Cosy with an S.",
      "Thanks for helping us keep it right! 😉"
    ]
  }
};
