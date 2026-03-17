/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // 确保包含你的组件文件路径
    ],
    theme: {
      extend: {
        animation: {
          'spin': 'spin 3s linear infinite', // 注册自定义spin动画
        },
        minHeight: {
          '4': '1rem', // 注册min-h-4的样式
        }
      },
    },
    plugins: [],
  }