import React from 'react';
// 导入单独的注册入口，保证 Dumi 启动时执行（用于注册 Web Components）
import './register-web-components';

// 在 dev 环境打印日志，便于确认该 App wrapper 被 Dumi 加载
// eslint-disable-next-line no-console
console.log('[src/app] App wrapper loaded');

export default function App({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
