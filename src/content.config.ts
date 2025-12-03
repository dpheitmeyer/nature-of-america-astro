// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const panes = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/panes/" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    sn: z.number(),
    position: z.string(),
    place: z.string(),
    date: z.date(),
    lat: z.number().optional(),
    lon: z.number().optional(),
    stamps: z.array(z.string()).optional(),
    resources: z.array(z.object({
      url: z.string(),
      title: z.string(),
      description: z.string().optional()
    })).optional(),
    species: z.array(z.object({
      name_common: z.string(),
      name_scientific: z.string(),
      eol_id: z.number().optional()
    })).optional()
  })
});
console.log(panes);

// 4. Export a single `collections` object to register your collection(s)
export const collections = { panes };
