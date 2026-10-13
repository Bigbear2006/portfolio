import { createFileRoute } from '@tanstack/react-router'
import { PrivacyPolicyPage } from '#/pages/PrivacyPolicyPage.tsx'
import { buildSeoHead } from '#/seo.ts'

export const Route = createFileRoute('/_layout/privacy')({
  head: () =>
    buildSeoHead({
      title: 'Политика конфиденциальности',
      description: 'Положения политики конфиденциальности',
      url: '/privacy',
    }),
  component: PrivacyPolicyPage,
})
