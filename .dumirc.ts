import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/images/Ayong.png'],
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
  logo: '/images/AyongUI.png',
});
