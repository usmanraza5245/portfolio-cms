import {defineField, defineType} from 'sanity'

export const certificationType = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Certificate URL',
      type: 'url',
      description: 'Link to the certificate (optional)',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
    },
  },
})
