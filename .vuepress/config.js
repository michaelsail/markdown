module.exports = {
  base: '/frontend/dist/',
  title: '健康160前端分享',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '移动端远程调试',
        collapsable: true,
        children: [
          '/debug/',
        ]
      },
      {
        title: '原生JS',
        collapsable: true,
        children: [
          '/native/JavaScript.md',
        ]
      },
      {
        title: '前端命名规则',
        collapsable: true,
        children: [
          '/native/CssClass.md',
          '/native/CssClass2.md',
          '/native/CssClass3.md',
          '/native/CssClass4.md',
          '/native/CssClass5.md',
        ]
      },
      {
        title: 'eslint语法规范',
        collapsable: true,
        children: [
          '/eslint/eslint.md',
        ]
      },
    ]
  }
}