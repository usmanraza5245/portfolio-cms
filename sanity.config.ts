import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const SINGLETON_TYPES = new Set(['profile'])

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'svp4ppae',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((template) => !SINGLETON_TYPES.has(template.schemaType)),
  },
})
