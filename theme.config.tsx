import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Miney</span>,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/jasper283/docs.miney.app',
  footer: {
    text: '2024 © Happx Tech',
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  ),
  editLink: { component: () => null },
  // editLink: {
  //   component: null
  // },


}

export default config
