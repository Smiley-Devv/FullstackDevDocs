// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fullstack Dev Docs',
  tagline: 'Documentation for modern tech stacks',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://smiley-devv.github.io',
  baseUrl: '/FullstackDevDocs/',
  organizationName: 'smiley-devv',
  projectName: 'FullstackDevDocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Smiley-Devv/FullstackDevDocs/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
          editUrl: 'https://github.com/Smiley-Devv/FullstackDevDocs/edit/main/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-preview.png',
      navbar: {
        title: 'Fullstack Dev Docs',
        logo: {
          alt: 'Tech Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Smiley-Devv/FullstackDevDocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tech Stack Guides',
                to: '/docs/nodejs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/Smiley-Devv/FullstackDevDocs/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discord.com',
              },
              {
                label: 'X (Twitter)',
                href: 'https://x.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/Smiley-Devv/FullstackDevDocs',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Smiley Dev. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
