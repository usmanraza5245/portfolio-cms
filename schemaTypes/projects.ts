import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      description: 'Unique identifier for the project (used in URLs/code)',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 60,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'url',
      title: 'Live URL',
      type: 'url',
      description: 'Link to the live projects (Leave empty if not available)',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link to the GitHub repository (leave empty if private)',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this project in the featured section',
      initialValue: false,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Year or range, e.g. "2025" or "2023-2025"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order projects appear (lower = first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      featured: 'featured',
    },
    prepare({title, subtitle, featured}) {
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
})
