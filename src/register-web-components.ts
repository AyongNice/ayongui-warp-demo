// 单独的注册入口，确保仅包含副作用导入，方便调试与防止被 tree-shake
// 这里使用动态 import 并打印同步日志，便于确认模块是否被加载
// eslint-disable-next-line no-console
console.log('[register-web-components] module loaded');

(async () => {
  try {
    // 动态导入，这将在浏览器环境和打包后都能正确执行
    await import('ayongui/components/button/index');
    // eslint-disable-next-line no-console
    console.log('[register-web-components] ayong-button registration module executed');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[register-web-components] failed to import ayong-button', err);
  }
})();

export {};
