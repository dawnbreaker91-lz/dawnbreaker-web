# DawnBreaker’s Web

一个关于摄影、公路车改装与骑行心得的个人主页，视觉方向结合纪实杂志与高端汽车品牌风格。

## 本地预览

```bash
pnpm install
pnpm dev
```

打开开发服务器显示的本地地址即可预览。

## 验证

```bash
pnpm build
pnpm test
```

## GitHub Pages 发布

推送到 `main` 分支后，`.github/workflows/pages.yml` 会自动：

1. 准备轻量静态页面；
2. 上传 Pages 部署资源；
3. 发布到 GitHub Pages。

工作流使用同一个 `pages` 并发组，并自动取消旧的卡住任务。线上入口为：

<https://dawnbreaker91-lz.github.io/dawnbreaker-web/>

## 主要文件

- `app/`：本地 Vinext/React 开发版本
- `index.html`、`styles.css`、`interactions.js`：GitHub Pages 静态版本
- `hero-dawn-road.jpg`：压缩后的线上首图
