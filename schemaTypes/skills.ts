import {defineField, defineType} from 'sanity'

export const skillsType = defineType({
  name: 'skills',
  title: 'Skills Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Frontend, Backend, Databases',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of skill names in this category',
      validation: (rule) => rule.required().min(1).max(25),
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      description:
        "Controls display order on the site (lower numbers first). Used since Studio list order isn't guaranteed to match query order.",
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'category',
      items: 'items',
    },
    prepare({title, items}) {
      return {
        title,
        subtitle: items?.length ? items.join(', ') : 'No skills added',
      }
    },
  },
})
