/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: xxx@xxx.com
 * @LastEditTime: 2022-09-22 16:57:30
 * @Description:
 */

import sidebarCSS from './sidebar/css';

module.exports = {
  title: 'vivace-itnerview',
  description: 'interview docs',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'Web Interview',
    logo: '/logo.png',
    laslltUpdatedText: '最后更新',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xiumubai',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present xiumubai',
    },
    nav: [
      {
        text: 'CSS',
        link: '/css/box',
        activeMatch: '/css',
      },
    ],
    sidebar: {
      '/css/': sidebarCSS(),
    },
  },
};
