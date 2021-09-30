module.exports = {
  lang: 'zh-CN',
  title: 'Ditty UI',
  description: 'A vue 3 components library',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Ditty UI',
      description: '一个 Vue3 组件库',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Ditty UI',
      description: 'A vue 3 components library',
    },
  },
  themeConfig: {
    repo: 'chenment/dittyui',
    locales: {
      '/': {
        label: '中文',
        selectText: '选择语言',
        nav: [
          { text: '首页', link: '/' },
          { text: '文档', link: '/docs/' },
          { text: '组件', link: '/components/' },
        ],
        sidebar: {
          '/components/': [
            {
              text: '通用',
              children: [
                { text: '按钮 Button', link: '/components/button' },
                { text: '卡片 Card', link: '/components/card' },
                { text: '图标 Icon', link: '/components/icon' },
              ],
            },
            {
              text: '布局',
              children: [{ text: '栅格 Grid', link: '/components/grid' }],
            },
            {
              text: '数据录入',
              children: [{ text: '输入框 Input', link: '/components/input' }],
            },
            {
              text: '反馈',
              children: [{ text: '警告提示 Alert', link: '/components/alert' }],
            },
          ],
        },
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/docs' },
          { text: 'Components', link: '/en/components/' },
        ],
        sidebar: {
          '/en/components/': [
            {
              text: 'Common',
              children: [
                { text: 'Button', link: '/en/components/button' },
                { text: 'Card', link: '/en/components/card' },
                { text: 'Icon', link: '/en/components/icon' },
              ],
            },
            {
              text: 'Data Entry',
              children: [{ text: 'Input', link: '/en/components/input' }],
            },
            {
              text: 'Feedback',
              children: [{ text: 'Alert', link: '/en/components/alert' }],
            },
          ],
        },
      },
    },
  },
}
