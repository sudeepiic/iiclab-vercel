import contentful from "contentful";
import type{Document} from "@contentful/rich-text-types";

export interface CaseStudy{
  heroTitleMain: Document;
  heroBanner: Document;
  heroBanner2:Document;
  heroContent: Document;
  clientInfo: Document;
  solutionInfo: Document;
  carousalImages: Document;
  belowCarousalTitle: Document;
  belowCarousalText: Document;
  fullSizeImg: Document;
  midContentTitle:Document;
  midContentImg: Document;
  midImgCaption: Document;
  tiltImagesTitle: Document;
  tiltImagesText: Document;
  tiltImages: Document;
  bottomCompTitle: Document;
  bottomCompText: Document;
  bottomCompImgs: Document;
  yellowCompTitle: Document;
  yellowCompText: Document;

}
console.log(import.meta.env)
export const contentfulClient = contentful.createClient({
  space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});