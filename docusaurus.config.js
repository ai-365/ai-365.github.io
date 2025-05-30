// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '我的个人博客网站',
  tagline: 'Dinosaurs are cool我的个人网站',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ai-365.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // 这里的设置非常重要！
  // 如果仓库名是 [用户名].github.io 则设置为 '/'
  // 否则应该为仓库名
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',  // 如果链接失效怎么办？默认报错，这里改成警告
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'log', // 标题锚点失效，默认报错

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: false,
        /**/
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',  // 设置docs的根目录为项目根目录
          
        },
        
        blog: false,  // 取消博客功能
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // 隐藏侧边栏
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: '我的个人网站',
        logo: {
          src: 'https://img1.baidu.com/it/u=3965699632,899385305&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        },
        items: [
          {
            to: 'Web/JavaScript——TOC',
            label: 'JavaScript Guide',
            position: 'left',
          },

          {
            to: 'Web/React——TOC',
            label: 'React Guide',
            position: 'left',
          },

          {
            to: 'Operation/Linux——TOC',
            label: 'Linux Guide',
            position: 'left',
          },

          {
            to: 'Operation/Python——TOC',
            label: 'Python Guide',
            position: 'left',
          },
         
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: 'Copyright © 2015-2025. Built with Docusaurus.'
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
