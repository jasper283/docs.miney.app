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
  editLink: {
    component: null
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" />
      {/* 如果你有其他格式的 favicon，可以添加更多的 link 标签 */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  ),

}

export default config
