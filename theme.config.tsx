import Logo from './common/components/Logo'

const GITHUB_BASE_URL = 'https://github.com/netra-lab'

const config = {
  projectLink: GITHUB_BASE_URL,
  github: GITHUB_BASE_URL,
  docsRepositoryBase: `${GITHUB_BASE_URL}/docs`,
  titleSuffix: ' – Netra',
  logo: <Logo />,
  head: () => (
    <>
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='theme-color' content='#ffffff' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Language' content='en' />
      <meta
        name='description'
        content='Netra: decentralized music NFT platform'
      />
      <meta
        name='og:description'
        content='Netra: decentralized music NFT platform'
      />
      <meta name='twitter:card' content='summary_large_image' />
      {/*TODO! */}
      {/* <meta name='twitter:image' content='https://nextra.vercel.app/og.png' /> */}
      <meta name='twitter:site:domain' content='docs.netra.live' />
      <meta name='twitter:url' content='https://docs.netra.live' />
      <meta name='og:title' content='Netra: decentralized music NFT platform' />
      {/*TODO! */}
      {/* <meta name='og:image' content='https://nextra.vercel.app/og.png' /> */}{' '}
      <meta name='apple-mobile-web-app-title' content='Netra' />
      <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      <link rel='icon' href='/favicon.png' type='image/png' />
      <link
        rel='icon'
        href='/favicon-dark.svg'
        type='image/svg+xml'
        media='(prefers-color-scheme: dark)'
      />
      <link
        rel='icon'
        href='/favicon-dark.png'
        type='image/png'
        media='(prefers-color-scheme: dark)'
      />
    </>
  ),
  banner:
    '🚧 This is a work-in-progress docs for Netra, content may be incomplete or inaccurate.',
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: `© ${new Date().getFullYear()} Netra.`,
  floatTOC: true,
  defaultMenuCollapsed: true,
}

export default config
