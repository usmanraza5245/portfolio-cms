import {defineType, defineField} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
      description: 'e.g. "Mar 2025 – Mar 2026"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Key achievements and responsibilities',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order entries appear (lower = first / most recent)',
    }),
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company',
      period: 'period',
    },
    prepare({title, subtitle, period}) {
      return {
        title: `${title} @ ${subtitle}`,
        subtitle: period,
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
      title: 'Period (Newest First)',
      name: 'periodDesc',
      by: [{field: 'period', direction: 'desc'}],
    },
  ],
})
