import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({ customPaths: ["public/sitemap.xml"] })],
  // image: {
  //     domains: ["images.ctfassets.net"],
  // }
  redirects: {
    // '/about/': '/about-us/',

    "/about-us/": "/about/",
    "/contact": "/contact-us/",
    "/hiring/": "/career/",
    "/blogs/Paradox-of-Being-a-Good-Boss":
      "/blogs/the-paradox-of-being-a-good-boss-radical-candor",
    "/blogs/network-will-decide-your-net-worth":
      "/blogs/your-network-will-decide-your-net-worth",
    "/blogs/mind-blocking-in-current-situation":
      "/blogs/how-are-people-coping-with-mind-blocking-in-the-current-situation",
    "/blogs/the-purpose-of-life":
      "/blogs/the-purpose-of-life-is-a-life-of-purpose",
    "/blogs/How-Round-tables-make-things-straight":
      "/blogs/how-round-tables-make-things-straight",
    "/blogs/The-cycle-of-Analysis-Paralysis":
      "/blogs/the-cycle-of-analysis-paralysis",
    "/blogs/I-met-Ravi-Shastri-LIVE-rom-my-couch":
      "/blogs/i-met-ravi-shastri-live-from-my-couch-the-incredible-new-wave-of-sports-consumption",
    "/blogs/The-Rise-of-VPS": "/blogs/the-rise-of-vps",
    "/blogs/most-common-mistakes-in-ui":
      "/blogs/most-common-mistakes-in-ui-ux-design",
    "/blogs/interactive-wall":
      "/blogs/get-everyones-attention-with-these-amazing-experiences",
    "/blogs/five-virtual-reality-games-that-will-have-people-lining-up-to-try":
      "/blogs/four-virtual-reality-games-that-will-have-people-lining-up-to-try",
    "/blogs/how-companies-have-used-virtual-reality-to-wow-their-audiences":
      "/blogs/how-companies-have-used-virtual-reality-to-wow-their-audiences",
    "/blogs/For-Team-IIC-Quality-is-not-an-act-it%E2%80%99s-a-habit":
      "/blogs/for-team-iic-quality-is-not-an-act-it-a-habit",
    "/blogs/rudra-the-edge-of-darkness-in-the-metaverse":
      "/blogs/rudra-in-metaverse",
    "/blogs/Power-of-Less": "/blogs/the-power-of-less",
    "/portfolio/Only": "/portfolio/only-virtual-fashion-show",
    "/portfolio/jack-jones": "/portfolio/jack-jones-interactive-website",
    "/portfolio/rudra": "/portfolio/disney-hotstar-rudra-metaverse",
    "/portfolio/Adidas":
      "/portfolio/adidas-experiential-marketing-product-launch",
    "/portfolio/maruti-suzuki":
      "/portfolio/maruti-suzuki-brezza-virtual-test-drive-vr",
    "/portfolio/Netflix":
      "/portfolio/netflix-offline-activation-experiential-marketing",
    "/portfolio/viacom%2018":
      "/portfolio/network18-dance-deewane-juniors-metaverse",
    "/portfolio/myntra-nautica":
      "/portfolio/nautica-gesture-recognition-experiential-marketing",
    "/portfolio/fifa": "/portfolio/fifa-2022-experiential-marketing",
    "/portfolio/Mahindra": "/portfolio/mahindra-krish-e-interactive-website",
    "/portfolio/Kumar-Properties":
      "/portfolio/kumar-properties-virtual-sales-assistance-tool",
    "/portfolio/google": "/portfolio/google-for-india-rotoscope-wall",
    "/portfolio/maruti":
      "/portfolio/maruti-suzuki-comic-con-projection-mapping-virtual-reality",
    "/portfolio/volkswagen": "/portfolio/volkswagen-projection-mapping",
    "/portfolio/cipla": "/portfolio/cipla-virtual-event",
    "/portfolio/shapoorji-pallonji":
      "/portfolio/shapoorji-pallonji-real-estate-object-recognition-table",
    "/portfolio/Pride-Circle": "/portfolio/pride-circle-virtual-event",
    "/portfolio/oral-b":
      "/portfolio/oral-b-product-launch-projection-mapping-augmented-reality",
    "/portfolio/capgemini": "/portfolio/capgemini-virtual-car-showroom",
    "/portfolio/capgemini-5g": "/portfolio/capgemini-5g-experience-center",
    "/portfolio/PKL": "/portfolio/star-sports-pkl-experiential-marketing",
    "/portfolio/defence-Expo":
      "/portfolio/government-of-india-defence-expo-2021-virtual-event",
    "/solutions": "/services",
    "/solutions/virtual-reality": "/services/virtual-reality",
    "/solutions/projection-mapping": "/services/projection-mapping",
    "/solutions/interactive-wall": "/services/interactive-wall",
    "/solutions/immersive-technology": "/services/immersive-technology",
    "/solutions/interactive-solution": "/services/interactive-solution",
    "/solutions/mobile-and-web": "/services/mobile-and-web",
    "/solutions/content-development": "/services/content-development",
    "/solutions/experiential-marketing": "/services/experiential-marketing",
    "/solutions/strategy-and-design": "/services/strategy-and-design",

  },
});
