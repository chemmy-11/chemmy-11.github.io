# linslive.com — 个人页

Astro 静态站，双语（`/` 中文、`/en` English），部署到 GitHub Pages，域名 linslive.com。
视觉方案：Swiss editorial 排版骨架（大字号、编号目录、发丝线）+ Console 细节语言（等宽标签、key-value 规格块、状态灯）。

## 本地开发

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # 产出 dist/
npm run check      # 类型检查
```

## 内容改哪里

| 想改什么 | 文件 |
| --- | --- |
| 项目（标题/规格/问题-取舍-结果/标签） | `src/data/projects.ts` |
| 技术栈分组 | `src/data/projects.ts` 里的 `toolkit` |
| 所有界面文案、章节标题、状态词 | `src/i18n/ui.ts` |
| 域名、邮箱、GitHub、简历链接 | `src/data/site.ts` |
| 颜色、字号、留白、明暗主题 | `src/styles/global.css`（变量集中在文件顶部） |
| 结构（区块顺序、新增区块） | `src/components/Home.astro`、`ProjectRow.astro` |
| SEO / OG / hreflang / JSON-LD | `src/layouts/Base.astro` |

双语约定：每个文本字段都是 `{ zh, en }`，`astro check` 会因为你漏写某一边而报错——这是刻意的，防止英文站出现中文。

加一个新项目：往 `src/data/projects.ts` 的 `projects` 数组里追加一项，`index` 用 `2.3` 顺延即可，不需要动组件。

## 部署

1. 建仓库 `chemmy-11/chemmy-11.github.io`（user site，省掉 `/repo/` 前缀），推 `main`。
2. 仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。
3. 推 `main` 后 `.github/workflows/deploy.yml` 自动构建发布。
4. `public/CNAME` 已写入 `linslive.com`，GitHub 会自动登记自定义域名。

## DNS（Cloudflare）

Cloudflare 里 **代理状态必须选 DNS only（灰色云）**，不要开橙色云：GitHub Pages 的自定义域名证书签发会被代理挡住。

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |
| AAAA | `@` | `2606:50c0:8002::153` | DNS only |
| CNAME | `www` | `chemmy-11.github.io` | DNS only |

生效后在 Pages 设置里把 **HTTPS Enforce** 打开（证书就绪后再开，否则可能重定向循环）。

## 待补

- 简历：把 PDF 放到 `public/resume.pdf`，再把 `src/data/site.ts` 的 `resumeHref` 改成 `'/resume.pdf'`（留空则不渲染入口）。
- 项目配图：EIF 的链路/框图，dsh-nautilus 的面板截图。
- OG 分享图：目前是纯 meta 无图，加 `public/og.png`（1200×630）后在 `Base.astro` 补 `og:image`。
