// 从 tailwindcss 库导入 Config 类型定义，用于 TypeScript 类型检查
import type { Config } from 'tailwindcss';

// 创建并导出 Tailwind CSS 配置对象，符合 Config 接口规范
const config: Config = {
  // content 配置项：指定 Tailwind CSS 应该扫描哪些文件来查找类名
  // 这些路径模式确保 Tailwind 能够找到并包含所有使用的 CSS 类
  content: [
    // 扫描 pages 目录下所有子目录中的 js、ts、jsx、tsx、mdx 文件
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // 扫描 components 目录下所有子目录中的 js、ts、jsx、tsx、mdx 文件
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // 扫描 app 目录下所有子目录中的 js、ts、jsx、tsx、mdx 文件
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme 配置项：定义主题的自定义扩展
  theme: {
    // extend 对象：在不覆盖默认主题的情况下添加自定义样式
    extend: {
      // 自定义网格模板列配置
      gridTemplateColumns: {
        // 添加名为 '13' 的网格列配置，创建 13 列等宽网格
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      // 自定义颜色调色板
      colors: {
        // 自定义蓝色色阶
        blue: {
          // 蓝色 400 色阶：亮蓝色，用于次要交互元素
          400: '#2589FE',
          // 蓝色 500 色阶：标准蓝色，用于主要交互元素
          500: '#0070F3',
          // 蓝色 600 色阶：深蓝色，用于悬停状态和选中状态
          600: '#2F6FEB',
        },
      },
    },
    // 自定义关键帧动画定义
    keyframes: {
      // 定义名为 shimmer 的闪烁动画效果
      shimmer: {
        // 在动画 100% 完成时的状态
        '100%': {
          // 将元素沿 X 轴平移 100%，实现从左到右的滑动效果
          transform: 'translateX(100%)',
        },
      },
    },
  },
  // 插件配置：加载并使用 Tailwind CSS 插件
  plugins: [
    // 加载 @tailwindcss/forms 插件，提供表单元素的基础样式重置和美化
    require('@tailwindcss/forms')
  ],
};

// 导出配置对象作为默认导出，供 Tailwind CSS 构建工具使用
export default config;
