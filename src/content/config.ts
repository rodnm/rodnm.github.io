import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Rodrigo Norabuena'),
        image: z.string().optional(),
        tags: z.array(z.string()),
    }),
});

export const collections = { blog };
