/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: xxx@xxx.com
 * @LastEditTime: 2022-09-22 19:30:31
 * @Description:
 */

import sidebarCSS from './sidebar/css';
import sidebarECMAScript from './sidebar/js';
import sidebarES6 from './sidebar/es.js';
import sidebarVue from './sidebar/vue.js';
import sidebarVue3 from './sidebar/vue3.js';
import sidebarReact from './sidebar/react.js';
import sidebarWebpack from './sidebar/webpack.js';

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
      {
        text: "JavaScript",
        link: '/JavaScript/data_type',
      },
      {
        text: "es6",
        link: '/es6/var_let_const',
      },
      {
        text: "Vue",
        link: '/vue/vue',
      },
      {
        text: "Vue3",
        link: '/vue3/goal',
      },
      {
        text: "React",
        link: '/React/React',
      },
      {
        text: "webpack",
        link: '/webpack/webpack',
      }
    ],
    sidebar: {
      '/css/': sidebarCSS(),
      '/JavaScript': sidebarECMAScript(),
      '/es6/': sidebarES6(),
      '/vue/': sidebarVue(),
      '/vue3/': sidebarVue3(),
      '/React/': sidebarReact(),
      '/webpack/': sidebarWebpack(),
    },
  },
};
