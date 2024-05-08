import { defineConfig } from 'dumi';
const path = require('path');

export default defineConfig({
  outputPath: 'dist',
  favicons: ['/images/Ayong.png'],
  logo: '/ayonguidocs/images/AyongUI.png',
  title: 'AyongUI',
  // 配置
  headScripts: [
    `
    // 获取完整的 URL 地址
var url = window.location.href;

// 获取查询字符串部分
var queryString = window.location.search;

// 将查询字符串解析为对象
var params = new URLSearchParams(queryString);

// 获取特定参数的值
var version = params.get('version');

// 输出参数值
console.log('参数值为：version', version);

localStorage.setItem('version',version || 1.4)

    `,
  ],
  // 其他配置项...
  resolve: {
    alias: {
      // 将ayongUI和ayongui都映射到同一个路径
      ayongUI: path.resolve(__dirname, 'node_modules/ayongui'),
      ayongui: path.resolve(__dirname, 'node_modules/ayongui'),
    },
  },

  mfsu: false, //关闭mfsu 会导致打包速度变慢 但是没有缓存 可以热更新 组件库代码
  // locales: [
  //   { id: 'zh-CN', name: '中文' },
  //   { id: 'zh-CN2', name: '中文111' },
  //   { id: 'zh-CN2111', name: '中文111123' },
  //   { id: 'zh-CN266', name: '中文111qwe' },
  //   { id: 'zh-CN23', name: '中文111asd' },
  // ],
  themeConfig: {
    name: '',
    footer: `<div>重铸前端荣光 我辈义不容辞!</div>`,
    socialLinks: {
      github: 'https://github.com/AyongNice/ayongUI.git',
    },
    // 添加路由变化监听函数
    onRouteChange: (route) => {
      console.log('用户切换到了版本：', route);
      // 判断路由是否包含 /versions，如果是，则执行相应的操作
      if (route.startsWith('/versions')) {
        // 获取当前版本号
        const version = route.split('/')[2]; // 假设路由格式为 /versions/{version}/...
        // 执行你想要的操作，比如根据版本号加载不同的内容
        console.log('用户切换到了版本：', version);
        // 可以在这里根据版本号执行相应的操作，比如加载对应的文档内容
      }
    },
    nav: [
      {
        title: '安装初始化',
        link: '/init',
      },
      {
        title: '组件使用',
        link: '/components/button',
      },
      {
        title: '版本',
        children: [
          {
            title: '1.0.3',
            link: 'https://ayongnice.github.io/ayonguidocs?version=1.3',
          },
          {
            title: '1.0.4',
            link: 'https://ayongnice.github.io/ayonguidocs?version=1.4',
          },
          // 添加其他版本
        ],
      },
      {
        title: '合作',
        link: '/cooperate',
      },
    ],
    sidebar: {
      '/versions': [
        {
          title: 'Version 1.0',
          children: [
            { title: 'Introduction', path: '/versions/1.0/introduction' },
            { title: 'Installation', path: '/versions/1.0/installation' },
            // 添加版本 1.0 的其他页面
          ],
        },
        {
          title: 'Version 2.0',
          children: [
            { title: 'Introduction', path: '/versions/2.0/introduction' },
            { title: 'Installation', path: '/versions/2.0/installation' },
            // 添加版本 2.0 的其他页面
          ],
        },
        // 添加其他版本
      ],
    },
  },

  resolve: {},
  base: '/ayonguidocs/',
  publicPath: '/ayonguidocs/',
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
