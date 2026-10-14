import type { Project } from '#/types.ts'
import { config } from '#/config.ts'

export function JsonLd(data: any) {
  return {
    type: 'application/ld+json',
    children: JSON.stringify(data),
  }
}

const PERSON_ID = `${config.SITE_URL}/#person`

export function buildPortfolioData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Михаил Мороз',
    alternateName: 'Mikhail Moroz',
    jobTitle: 'Fullstack-разработчик',
    url: config.SITE_URL,
    image: `${config.SITE_URL}/assets/resume-photo.png`,
    sameAs: [config.GITHUB, config.LINKEDIN, config.TELEGRAM],
    knowsAbout: [
      'Python',
      'Django',
      'FastAPI',
      'Sqlalchemy',
      'TypeScript',
      'React',
      'Tailwind',
      'Aiogram',
      'Telegram Bot API',
      'Telegram Mini Apps',
      'Docker',
      'Nginx',
      'CI/CD',
    ],
  }
}

export function buildProjectListData(projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Мои проекты',
    url: `${config.SITE_URL}/projects`,
    author: { '@id': PERSON_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${config.SITE_URL}/project/${project.slug}`,
        name: project.title,
        description: project.short_description,
      })),
    },
  }
}

export function buildProjectData(project: Project) {
  const url = `${config.SITE_URL}/project/${project.slug}`
  const credit = project.role === 'SOLO' ? 'creator' : 'contributor'
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}/#project`,
    name: project.title,
    description: project.short_description,
    [credit]: { '@id': PERSON_ID },
    url,
    ...(project.logo && { image: `${config.SITE_URL}/${project.logo}` }),
    ...(project.github && { sameAs: [project.github] }),
    ...(project.place && { award: `${project.place} место на хакатоне` }),
  }
}
