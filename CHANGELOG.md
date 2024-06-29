# 開發日誌 (Changelog)

> 只用來記錄與原專案的差異之處。並沒有特別按照一般 changelog 的格式分成 release, unreleased 等來撰寫。

或許應該說是開發日誌比較妥適。

## 2024-06-28

- 使用 i18next、react-i18next、@formatjs/intl-localematcher 和 negotiator 等來實作 i18n。
  > 路由的 locale 部分採用 ISO 3166 規範，並透過 cookie 來紀錄預設值。
- 使用 ZOD 進行 runtime validation。
- 使用 Anchor 提供的 lclhost 服務來提供開發環境的 HTTPS 協定。

## 2024-05-26

- 雖然可以使用 tailwindcss 配合 css modules 來處理 scope 的問題，但這樣會過早引入或許不必要的抽象，所以我們不會使用 css modules。
  > 將來如果覺得需要，可以統一在 `tailwind.css` 和 `tailwind.config.ts` 看到所有額外定義的 styles，可以再抽出來到 css modules 中。
- 原專案在 RWD 方面有許多力有未殆之處，這次會配合 tailwindcss 在這部分做得更完整。
- 將原本的 component `Background` 抽出來，利用 css `position: fixed` 以及; `overscroll-behavior: none` 來處理 scroll bouncing。
- 原本使用 `react-scroll-motion` 來處理 scroll 動畫，在這次我們使用 `framer-motion` 來實作。
  > 這部分等 CSS scroll-driven animations 支援度高一點以後，可以考慮改成純用 CSS 實作。

## 2024-04-28

- 由於 Next.js 是一個全端框架，盡量用 Next.js 生態系來處理。
  > 有機會的話想要把後端改成用 Rust 生態系的 actix-web。但因為使用者對 100ms 以下的延遲不會很敏感，有機會才會做這個改動。
- 盡量改成使用 tailwindcss，因此排版方式可能會和原版本不盡相同。
- tailwindcss 裡面可以用 dark mode (`dark:`) 來切換配色主題（theme），這種做法有些缺點：
  - 彷彿預設只會有明暗兩種配色主題。
  - 每個需要支援配色主題切換的地方都要手動加上; `dark:` 才能切換。
    > 為了假設將來有更多配色主題的支援性，會透過 css `:root` 以及 css variables 來實作，並透過 `tailwind.config.ts` 來設定客製化的 className。
