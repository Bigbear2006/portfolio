export const PROJECT_TYPES = ['COMMERCIAL', 'PET', 'HACKATHON'] as const
export type ProjectType = (typeof PROJECT_TYPES)[number]

export const ROLES = ['SOLO', 'MAINTENANCE'] as const
export type Role = (typeof ROLES)[number]

export interface Project {
  title: string
  short_description: string
  description: string
  logo?: string
  icon?: string
  slug: string
  type: ProjectType
  url?: string
  github?: string
  year?: string
  company?: string
  role: Role
  features?: string[]
}

export const projectTypeLabels: Record<ProjectType, string> = {
  COMMERCIAL: 'Коммерческий',
  PET: 'Pet-проект',
  HACKATHON: 'Хакатон',
}

export const roleLabels: Record<Role, string> = {
  SOLO: 'Разработка с нуля',
  MAINTENANCE: 'Доработка проекта',
}
