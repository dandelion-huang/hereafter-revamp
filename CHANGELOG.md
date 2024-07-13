# 開發日誌（Changelog）

> 只用來記錄與原專案的差異之處。並沒有特別按照一般 changelog 的格式分成 release, unreleased 等來撰寫。

或許應該說是開發日誌比較妥適。

## 2024-07-13

- 將 pnpm 升級到 9.5.0。
- 將 dvh 高度單位改為使用 svh 來讓 mobile 版在上下反覆滑動時有更好的體驗。
  > ref: [stackoverflow](https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser?page=2&tab=scoredesc)
- 調整了 component `ScrollStatus` 在 `useEffect` 中的條件判斷，讓 `end` 狀態更容易觸發。
- 使用 tailwindcss-3d 來簡化 tailwindcss 的寫法。
  > 主要也是為了修復下一點的問題，希望程式碼更簡潔。
  > clip-path 的部分也改成用 tailwind custom styles 寫，這部分就沒有想要使用第三方函式庫來簡化。
- 修復了 scale 在 webkit mobile 版上由小放大會導致模糊的問題，改成先設定放大後的尺寸在 scale 縮小。
  > 這個 webkit 行為大幅優化了效能，卻會導致字體和圖片模糊。
- 修復在 mobile 版 css animation 會閃爍 (flickering) 的問題。
- 將 `useScrollStatus` 抽取成一個 customed hook。
- 除了以上的狀況，在不影響語意的情況下進行 refactoring。

## 2024-07-12

- 在使用 Next.js `<Image>` 的時候，有思考到 `role="presentation"`、`role="none"` 或 `aria-hidden="true"` 等 accessibility 的問題。
  > 主要是在製作 component `Background` 的時候想到這個問題。
  > 但 intro page 中也有很多裝飾性的內容，但可能是會影響故事性的，這部分應該要透過 `alt` 來補足。所以先處理 component `Background` 的部分就好，使用 `aria-hidden="true"` 處理。
  > 可以在初版完成後再考慮回來補足。
- intro page 的最後一個部分 welcome banner，考慮了很久都覺得因為文案的關係，原版的排版在 RWD 上找不到妥善的方案，因此直接調整排版。
  > 這部分的排版等做完 component `Button` 後還會回來調整，因為 intro page 進入 lobby page 的 ui 都會使用到。

## 2024-06-30

- 原本使用 react-cookie 處理 client side cookie，現在統一改成使用 cookies-next 來處理。
  > 這樣可以獲得一致的 API 介面，同時自己撰寫 customed hook 處理 client side cookie。
- 使用 next-themes 來實作明暗主題。
- 使用 class-variance-authority 來實作 variants。

## 2024-06-29

- 啟用 Vercel 提供的 Speed Insights 服務。

## 2024-06-28

- 使用 i18next、react-i18next、@formatjs/intl-localematcher 和 negotiator 等來實作 i18n。
  > 路由的 locale 部分採用 ISO 3166 規範，並透過 cookie 來紀錄預設值。
- 使用 zod 進行 runtime validation。
- 使用 Anchor 提供的 lclhost 服務來提供開發環境的 https 協定。

## 2024-05-26

- 雖然可以使用 tailwindcss 配合 css modules 來處理 scope 的問題，但這樣會過早引入或許不必要的抽象，所以我們不會使用 css modules。
  > 將來如果覺得需要，可以統一在 `tailwind.css` 和 `tailwind.config.ts` 看到所有額外定義的 styles，可以再抽出來到 css modules 中。
- 原專案在 RWD 方面有許多力有未殆之處，這次會配合 tailwindcss 在這部分做得更完整。
- 將原本的 component `Background` 抽出來，利用 css `position: fixed` 以及; `overscroll-behavior: none` 來處理 scroll bouncing。
- 原本使用 react-scroll-motion 來處理 scroll 動畫，在這次我們使用 framer-motion 來實作。
  > 這部分等 css scroll-driven animations 支援度高一點以後，可以考慮改成純用 css 實作。

## 2024-04-28

- 由於 Next.js 是一個全端框架，盡量用 Next.js 生態系來處理。
  > 有機會的話想要把後端改成用 Rust 生態系的 actix-web。但因為使用者對 100ms 以下的延遲不會很敏感，有機會才會做這個改動。
- 盡量改成使用 tailwindcss，因此排版方式可能會和原版本不盡相同。
- tailwindcss 裡面可以用 dark mode (`dark:`) 來切換配色主題（theme），這種做法有些缺點：
  - 彷彿預設只會有明暗兩種配色主題。
  - 每個需要支援配色主題切換的地方都要手動加上; `dark:` 才能切換。
    > 為了假設將來有更多配色主題的支援性，會透過 css `:root` 以及 css variables 來實作，並透過 `tailwind.config.ts` 來設定客製化的 className。
