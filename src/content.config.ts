import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * Blog Collection
 * Posts in MDX with full SEO frontmatter for GEO/AEO optimization.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160, 'SEO descriptions should be 160 characters or less'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      author: z.string().default('musicallydown'),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      // SEO/GEO specific fields
      canonicalUrl: z.string().url().optional(),
      noindex: z.boolean().default(false),
      ogType: z.enum(['article', 'website']).default('article'),
    }),
});

/**
 * Authors Collection
 * Author profiles shown on blog posts. Only `name` is required.
 * `type: 'organization'` credits the site itself (BlogPosting.author = the Organization, no personal
 * profile). To credit a real person, add a JSON file with `type: 'person'` plus real bio, avatar
 * and social links, then point the post's `author:` frontmatter at it.
 */
const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      type: z.enum(['person', 'organization']).default('person'),
      role: z.string().optional(),
      bio: z.string().optional(),
      avatar: image().optional(),
      credentials: z.array(z.string()).default([]),
      social: z
        .object({
          twitter: z.string().url().optional(),
          linkedin: z.string().url().optional(),
          github: z.string().url().optional(),
          website: z.string().url().optional(),
        })
        .optional(),
    }),
});

export const collections = { blog, authors };
