# 品牌包装设计师作品集

一个给品牌包装设计师使用的个人作品集网站，视觉方向参考 Clay 的暖纸感与彩色手作气质，并用 Apple 式克制留白、产品叙事和清晰层级来组织内容。

## 技术栈

- Vite
- React
- TypeScript
- lucide-react

## 命令

```bash
npm run dev
npm run build
npm run lint
```

## 内容结构

- 中文首屏与包装视觉陈列
- 6 个虚拟商业案例，覆盖香氛、茶叶、护肤、巧克力、康普茶、谷物早餐
- 每个案例包含设计任务、解决方案、材料工艺、交付物和成果指标
- 合作流程、设计能力、奖项/观察、项目启动清单和联系 CTA

图片资产位于 `public/projects/`，核心页面在 `src/App.tsx`，视觉系统在 `src/App.css` 与 `src/index.css`。
