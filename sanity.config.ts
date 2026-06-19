import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const SINGLETON_TYPES = new Set(['profile'])

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((template) => !SINGLETON_TYPES.has(template.schemaType)),
  },
})
