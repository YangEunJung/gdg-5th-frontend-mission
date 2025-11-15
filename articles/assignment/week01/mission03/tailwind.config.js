/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // 루트에 있는 index.html 파일 추가
    "./src/**/*.{js,ts,jsx,tsx}", // src 내부의 모든 js, ts, jsx, tsx 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}