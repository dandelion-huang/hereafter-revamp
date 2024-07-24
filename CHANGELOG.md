# 開發日誌（Changelog）

> 只用來記錄與原專案的差異之處。並沒有特別按照一般 changelog 的格式分成 release, unreleased 等來撰寫。

或許應該說是開發日誌比較妥適。

## 2024-07-21

- 使用 react-aria 來製作 accessible ui components。
  > 我一直想做一個 shadcn-ui + react-aria 的 component library，這部分參考了 [JollyUI](https://www.jollyui.dev/) 並簡化。
  - 使用 react-aria 的 i18nProvider 來為不可見內容提供翻譯，將其包裝為 component `AppI18nProvider`。
    > [Server Side Rendering – React Aria](https://react-spectrum.adobe.com/react-aria/ssr.html)
    > 關於上述連結的 Advanced optimization 部分，日後會再處理，畢竟目前連 datepicker 都還沒有實作到。
  - 由於 react-aria 有自己的 `<Link>`，也包裝了一個 component `AppRouterProvider`。
    > [Client Side Routing – React Aria](https://react-spectrum.adobe.com/react-aria/routing.html)
  - 將 component `CustomLink` 改名為 `Link`，並移動到 components/ui 資料夾中統一管理。
- 完成了 component `Button` 並修改 component `Link`。
  > 透過 component `Button` 來包裝 component `Link`，優化了 intro skip tab 的 accessibility。
- 希望網頁速度再快一點，先減少 font.ts 中引入的字級數量。

## 2024-07-16

- 將 type 都抽出來統一放在 types 資料夾中。
- 統一了一下 file naming rule：只使用 kebab-case。
  > 雖然有時候還是覺得 hooks 不用 camelCase 很怪，但還是希望有一個統一的命名系統（這樣就可以不要再花心思在這件事情上）。
- 由於原專案在 theming 上：
  - intro page 只接受 light theme。
  - nextlife page 只接受 dark theme。
  - 因此透過 middleware 把 route segment 放入 `response` `header` 中讓前端可以取得。
    > 這是一個暫時性的有點 hack 的處理方式，靜待官方支援更好的在 server side 取得 pathname 的方式。
- 接續前一點，新增了一個 custom hook `useTheme` 來限縮 `theme` 只能是 `light | dark`。
- 使用 shadcn-ui 當 component library basis（透過 radix-ui 的概念）。

## 2024-07-14

- 調整了 intro page 中 place 和 appearance 的排版，讓 mobile 版的視覺體驗更好。
  > 我經常使用的設備是 iphone 14，也就是 390px 的寬度。因此微調了 animations 的尺寸。
  > 這也能幫助 mobiles 版在 viewport 較小時，animations 不會和 skip 重疊。
  > 小幅度調整了 svg man 的位置，使其和 svg man in the mirror 不會重疊。
- 為 pseudo-element 移除不必要的 tailwindcss 樣式 `content`。
- 使用 @next/bundle-analyzer 來分析 bundle size。
  - 配合 next-compose-plugins 使用。
    > 也可以配合 source-map-explorer 使用（先略過，可以之後再詳細分析）。
- 啟用 @vercel/analytics。
- 修正一些 PageSpeed Insights 報告中提出的問題。
  - 調整了 intro page welcome banner 中的 DOM 結構來避免 non-composited css animations。
  - 關於 reduce unused css 以及 failed to find font override 的問題：
    > 這兩個問題應該可以等官方修復。
    > [How to fix link preload warning in Next.js app? · vercel/next.js · Discussion #49607 · GitHub](https://github.com/vercel/next.js/discussions/49607) > [[NEXT-1192] Failed to find font override - next/font/google · Issue #47115 · vercel/next.js](https://github.com/vercel/next.js/issues/47115)
  - metadata 相關：
    - 修正 `authors` 誤植為 `author` 的問題。
    - 修正 `openGraph` 的 `images` 設置錯誤的問題。
    - 修正 `canonical` 不應該使用相對路徑的問題。
    - 修正 `languages` 產生無效 `hreflang` 的問題。
  - SEO 相關：
    > 先開出 lobby page 以避免 best practices 部分被扣分。
- 利用將 `motion` 改為 `m` 並配合 `LazyMotion` 來減少 framer-motion 的 bundle size。
  > [Reduce bundle size | Framer for Developers](https://www.framer.com/motion/guide-reduce-bundle-size/)
  > /[locale] - 60.3 kB -> 35.1 kB
  > other shared chunks (total) - 1.92 -> 1.99 kB
- 實作了一個 component `CustomLink` 來封裝 Next.js `Link` 並預設提供 `prefetch={false}`。
- 更新 eslint 相關的設定：
  - `import/no-unused-modules`: error。
  - `react/jsx-sort-props`: warn。
  - `react/no-unused-prop-types`: error。

## 2024-07-13

- 將 pnpm 升級到 9.5.0。
- 將 dvh 高度單位改為使用 svh 來讓 mobile 版在上下反覆滑動時有更好的體驗。
  > [The large, small, and dynamic viewport units | Blog | web.dev](https://web.dev/blog/viewport-units) > [stackoverflow](https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser?page=2&tab=scoredesc)
- 調整了 component `ScrollStatus` 在 `useEffect` 中的條件判斷，讓 `end` 狀態更容易觸發。
- 使用 tailwindcss-3d 來簡化 tailwindcss 的寫法。
  > 主要也是為了修復下一點的問題，希望程式碼更簡潔。
  > clip-path 的部分也改成用 tailwind custom styles 寫，這部分就沒有想要使用第三方函式庫來簡化。
- 修復了 scale 在 webkit mobile 版上由小放大會導致模糊的問題，改成先設定放大後的尺寸在 scale 縮小。
  > 這個 webkit 行為大幅優化了效能，卻會導致字體和圖片模糊。
- 修復在 mobile 版 css animation 會閃爍 (flickering) 的問題。
- 將 `useScrollStatus` 抽取成一個 custom hook。
- 除了以上的狀況，在不影響語意的情況下進行 styling refactoring。

## 2024-07-12

- 在使用 Next.js `Image` 的時候，有思考到 `role="presentation"`、`role="none"` 或 `aria-hidden="true"` 等 accessibility 的問題。
  > 主要是在製作 component `Background` 的時候想到這個問題。
  > 但 intro page 中也有很多裝飾性的內容，但可能是會影響故事性的，這部分應該要透過 `alt` 來補足。所以先處理 component `Background` 的部分就好，使用 `aria-hidden="true"` 處理。
  > 不需要同時使用 `role="presentation"` 和 `aria-hidden="true"`。
  > 可以在初版完成後再考慮回來完善 accessibility。
- intro page 的最後一個部分 welcome banner，考慮了很久都覺得因為文案的關係，原版的排版在 RWD 上找不到妥善的方案，因此直接調整排版。
  > DONE: 這部分的排版等做完 component `Button` 後還會回來調整，因為 intro page 進入 lobby page 的 ui 都會使用到。
  > 關於 component/intro 裡面還是有一個 intro.tsx 而非 index.tsx 的狀況，單純是不希望有一大堆同名的 index.tsx 在專案中。所以雖然引用的時候會寫得比較長，但我覺得只要符合規範就是好事。
  > 如果還是習慣使用 index.tsx 的話，可以透過以下的 vscode settings 處理。

```json
"workbench.editor.customLabels.patterns": {
  "**/index.*": "${dirname} (index)"
},
```

## 2024-06-30

- 原本使用 react-cookie 處理 client side cookie，現在統一改成使用 cookies-next 來處理。
  > 這樣可以獲得一致的 API 介面，同時自己撰寫 custom hook 處理 client side cookie。
- 使用 next-themes 來實作明暗主題。
- 使用 class-variance-authority 來實作 variants。

## 2024-06-29

- 啟用 @vercel/speed-insights。

## 2024-06-28

- 使用 i18next、react-i18next、@formatjs/intl-localematcher 和 negotiator 等來實作 i18n。
  - 路由的 locale 部分採用 ISO 3166 規範，並透過 cookie 來紀錄預設值。
- 使用 zod 進行 runtime validation。
- 使用 Anchor 提供的 [lcl.host](https://lcl.host/) 服務來提供開發環境的 https 協定。

## 2024-05-26

- 雖然可以使用 tailwindcss 配合 css modules 來處理 scope 的問題，但這樣會過早引入或許不必要的抽象，所以我們不會使用 css modules。
  > 將來如果覺得需要，可以統一在 `tailwind.css` 和 `tailwind.config.ts` 看到所有額外定義的 styles，可以再抽出來到 css modules 中。
- 原專案在 RWD 方面有許多力有未殆之處，這次會配合 tailwindcss 在這部分做得更完整。
- 將原本的 component `Background` 抽出來，利用 css `position: fixed` 以及; `overscroll-behavior: none` 來處理 scroll bouncing。
- 原本使用 react-scroll-motion 來處理 scroll 動畫，在這次我們使用 framer-motion 來實作。
  > 這部分等 css scroll-driven animations 支援度高一點以後，可以考慮改成純用 css 實作。

## 2024-04-28

- 由於 next 是一個全端框架，盡量用 next 生態系來處理。
  > 有機會的話想要把後端改成用 Rust 生態系的 actix-web。但因為使用者對 100ms 以下的延遲不會很敏感，有機會才會做這個改動。
- 盡量改成使用 tailwindcss，因此排版方式可能會和原版本不盡相同。
- tailwindcss 裡面可以用 dark mode (`dark:`) 來切換配色主題（theme），這種做法有些缺點：
  - 彷彿預設只會有明暗兩種配色主題。
  - 每個需要支援配色主題切換的地方都要手動加上; `dark:` 才能切換。
    > 為了假設將來有更多配色主題的支援性，會透過 css `:root` 以及 css variables 來實作，並透過 `tailwind.config.ts` 來設定客製化的 className。
