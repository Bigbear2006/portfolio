export const PROJECT_TYPES = ['ALL', 'COMMERCIAL', 'PET', 'HACKATHON'] as const
export type ProjectType = (typeof PROJECT_TYPES)[number]

export interface Project {
  title: string
  short_description: string
  description: string
  image?: string
  slug: string
  type: ProjectType
  url?: string
  github?: string
  year?: string
  features?: string[]
}
