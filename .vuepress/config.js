module.exports = {
  base: '/markdown/dist/',
  dest:'dist',
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
      // {
      //     title: 'Wechat-vue',
      //     collapsable: true,
      //     children: [
      //         '/wechatvue/default.md',
      //         '/wechatvue/wechatvue.md',
      //         '/wechatvue/payMixin.md',
      //         '/wechatvue/scrolly.md',
      //         '/wechatvue/uploadimg.md',
      //         '/wechatvue/seoContent.md',
      //         '/wechatvue/getLatLng.md',
      //         '/wechatvue/shareFunc.md',
      //         '/wechatvue/表单验证.md',
      //         '/wechatvue/自定义指令.md',
      //     ]
      // },
      // {
      //     title: '智能页面',
      //     collapsable: true,
      //     children: [
      //         '/diycms/',
      //         '/diycms/main.md',
      //     ]
      // },
      // {
      //     title: 'IM即时通讯',
      //     collapsable: true,
      //     children: [
      //         '/IM/'
      //     ]
      // },
      // {
      //     title: 'h91160-vue',
      //     collapsable: true,
      //     children: [
      //         '/h91160vue/h91160vue.md'
      //     ]
      // },
      // 
        // old start
        // {
        //     title: 'wechat-vue',
        //     collapsable: true,
        //     children: [
        //         '/wechat-vue/'
        //     ]
        // },
        // {
        //     title: '91160-com-vue',
        //     collapsable: true,
        //     children: [
        //         '/91160comvue/index.md'
        //     ]
        // },
        // {
        //     title: '智能页面',
        //     collapsable: true,
        //     children: [
        //         '/intelligent/index.md'
        //     ]
        // },
        // old end

        {
            title: '安全防范知识点',
            collapsable: true,
            children: [
                // '/safety/main.md',
                '/safety/XSS.md',
            ]
        },
        {
            title: 'h5前端兼容',
            collapsable: true,
            children: [
                '/compatible/main.md',
            ]
        },
    ]
  }
}