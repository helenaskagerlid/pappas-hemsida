import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const artGallery = defineCollection({
  loader: glob({ pattern: ["*.md"], base: "src/content/art-gallery" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

export const collections = {
  artGallery,
};
