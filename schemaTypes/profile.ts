import {defineField, defineType} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'e.g. Full-Stack Developer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Short one-liner shown near your name/hero section',
      type: 'string',
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email().error('Must be a valid email address'),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
    },
  },
})
