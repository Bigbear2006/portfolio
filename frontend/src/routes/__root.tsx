import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ModalContextProvider } from '#/context.tsx'
import { Toaster } from 'sonner'
import { config } from '#/config.ts'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

const url = new URL(config.BASE_API_URL).origin

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Михаил Мороз | Fullstack Разработчик',
      },
      {
        name: 'description',
        content:
          'Михаил Мороз - Fullstack разработчик сайтов, телеграм ботов и Telegram Web App',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: url,
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {config.UMAMI_SCRIPT && config.UMAMI_WEBSITE_ID && (
          <script
            defer
            src={config.UMAMI_SCRIPT}
            data-website-id={config.UMAMI_WEBSITE_ID}
          />
        )}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <QueryClientProvider client={queryClient}>
          <ModalContextProvider>{children}</ModalContextProvider>
        </QueryClientProvider>
        <Toaster position="top-center" richColors />
        <Scripts />
      </body>
    </html>
  )
}
