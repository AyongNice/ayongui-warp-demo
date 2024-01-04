import {defineConfig} from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/images/Ayong.png'],
  logo: '/ayonguidocs/images/AyongUI.png',
  mfsu: false,//关闭mfsu 会导致打包速度变慢 但是没有缓存 可以热更新 组件库代码
  themeConfig: {
    name: '',
    socialLinks: {
      github: 'https://github.com/AyongNice/ayongUI.git',
    },
    // sidebar: {
    //   '/guide': {
    //     title: '分组名称（可选）',
    //     children: [{title: '标题', link: '/message'}],
    //   },
    // },
  },
  base: '/ayonguidocs/',
  publicPath: '/ayonguidocs/',
  proxy: {
    '/api': {
      'target': 'http://localhost:3000',
      'changeOrigin': true,
      'pathRewrite': {'^/api': ''},
    }
  },
});
