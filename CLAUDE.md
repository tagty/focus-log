# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
npm run dev      # 開発サーバー起動 (http://localhost:3000)
npm run build    # 本番ビルド
npm run lint     # ESLint
npm run format   # Prettier フォーマット
```

## 技術スタック

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict モード、パスエイリアス `@/*` → `src/*`)
- **Tailwind CSS v4** (`@import "tailwindcss"` で有効化)
- **ESLint** (next/core-web-vitals + next/typescript)
- **Prettier** (シングルクォート、セミコロンあり、printWidth 100)

## ディレクトリ構成

```
src/
├── app/          # App Router のページ・レイアウト
├── components/   # 共有 UI コンポーネント
├── hooks/        # カスタムフック
├── lib/          # ユーティリティ・外部サービス連携
└── types/        # 型定義
```

## 規約

- コンポーネントは `src/components/` に配置し、`export default` で export する
- 型定義は `src/types/` にまとめる
- Server Component を基本とし、インタラクションが必要な箇所のみ `'use client'` を付与する
- コミットメッセージは日本語で書く
