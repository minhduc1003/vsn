export const categories = [
  {
    id: 1,
    type: "Photo",
    name: "Campaign",
    description:
      "From concept to visuals, the multi-platform communication campaign enabled the brand to tell its story consistently and compellingly.",
    imageUrl: "/work/campaign-1.avif",
  },
  {
    id: 2,
    type: "Photo",
    name: "Press",
    description:
      "Communication visuals and content that embody the brand’s spirit through refined composition, cohesive colors, and meticulously chosen language.",
    imageUrl: "/work/Press-6.avif",
  },
  {
    id: 3,
    type: "Photo",
    name: "Lookbook",
    description:
      "Fashion imagery curated by concept – honoring the brand identity through intentional layouts, lighting, and compelling visual narratives.",
    imageUrl: "/work/LOOKBOOK.avif",
  },
  {
    id: 4,
    type: "Video",
    name: "Video",
    description:
      "Creative video production – from music videos, TVCs to short-form content – focusing on emotion, strong visuals, and a clear narrative flow.",
    imageUrl: "/work/VIDEO.avif",
  },
];
export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};
