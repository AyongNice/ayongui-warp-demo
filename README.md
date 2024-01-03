# react-ayongUI-demo

## 介绍

这是一个react组件库的demo，用于学习react组件库的开发
## 该组件库技术属于 原生React jsx开发 无需任何第三方库,除动画以外不运行使用第三方UI库

## 开始使用

### 规范必须使用 yarn命令安装依赖

``` 
 yarn 
```

## 运行命令

``` 
npm run dev
```

## 项目结构

1. 项目分为demo一个仓库 ayongUI组件一个仓库
2. ⚠️ 拉取仓库时候，先拉取demo仓库， ⚠️然后在demo的 node_modules目录 拉代码 ayongUI组件仓库
3. 提交代码时，先提交组件仓库，再提交demo仓库 切记 顺序不能乱!!!



## 组件库的结构目录说明 (在组件库ayongUI仓库内也有一份)
### ⚠️组件库的导出 必须统一在index.ts文件内导出

```json
 ———— components
|··· 主体组件
———— config 组件全局配置
|
———style.module.less 全局样式
———style-const.ts    全局样式TS常量
———— utils 工具类
———— index.ts 组件总入口文件所有组件导出地方
———— package.json 组件依赖文件
———— tsconfig.json 组件TS配置
———— tsconfig.node.json 组件TS-node配置
———— vite.config.ts 组件打包配置
———— yarn.lock 组件打包依赖版本锁
```
## 组件库单个组件 结构目录说明
以button示例

```json

———button 组件目录
——————components 组件内容组件目录
——————index.module.less 组件内部样式文件
——————index.tsx  组件主体内容
——————index.d.ts 组件类型文件

```
## demo目录结构

```json

——————.dumirc.ts 框架配置文件
——————docs 首页文案
——————globe 全局配置
      --index.less 全局样式
      --theme 全局白天/黑夜主题配置
——————public静态文件
——————src 主体内容
      --组件说明
        --index.md 使用说明
        --index.module.less 文案样式

```

## 组件样式规范

1. 样式必须使用 model类型文件 类名使用 小驼峰
2. 全局样式 必须在 config/style里 颜色必须统一使用 全局颜色变量
3. 组件全局css变量 命名以颜色的名字 命名注释上那个组件在使用

## 组件开发规范JS TS类型声明文件

1. 声明的TS类必须单独创建改组件的类型文件 例如：index.d.ts 放在 当前文件夹下

## 开源组件开发规范

组件代码开源 所有人都可看到 所以注意JS细节

1. 变量名 方法名必须使用小驼峰 纯英语翻译 如果实在不知道怎么翻译 可以添加前缀 ayong
2. 组件内部JS 单个方法代码量超过20行必须处抽离到外部文件 如果是公共可服用 放到 utils文件内, 如果不可复用放到当前组件文件夹内

## 组件使用说明


## 测试流程
### 开发模式
直接在组件内部开发 在demo新建组件目录 创建md文档

### 测试模式




```
## git提交规范

1. !⚠️ 必须先提交 ayongUI组件库仓库 然后在提交demo仓库 切记顺序不可乱!⚠️
   2!⚠️ git 提交必须序号 说清 哪些 添加文件 | 删除文件 | 修改文件

```MD
1 添加 button 使用说明示例文档
2 添加 工具utils文件夹

```

3. 先提交dev分支 通过微信群通知大家 代码已经提交到dev分支 我在合并主分支 请大家注意拉取代码

## git解决冲突技巧

1. 先拉去代码 再提交
2. 代码拉去不到 说明有冲突
3. 现将更改内容git暂存
4. 然后在拉去代码
5. 将暂存代码回复使用 手动修改冲突
