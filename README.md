# 2022 こうがく祭ホームページ

## 使用技術

- [Next.js](https://ja.reactjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Tailwind](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## デザイン

[Figma](https://www.figma.com/file/iFbg1zLpfO1qfiAkTi1c0z/HP?node-id=0%3A1)

## 実行方法

### SSR

```sh
$ yarn install
$ yarn dev
```

ブラウザで[localhost:3000](http://localhost:3000)にアクセスすることで閲覧可能。

### SSG

```sh
$ yarn install
$ yarn start
```

ブラウザで[localhost:3000](http://localhost:3000)にアクセスすることで閲覧可能。

### Storybook

```sh
$ yarn install
$ yarn storybook
```

ブラウザで[localhost:6006](http://localhost:6006)にアクセスすることで閲覧可能。

### export

```sh
$ docker build -t kougakusai-hp2022 .
$ docker run -p 3000:80 kougakusai-hp2022
```

Next.js が出力した静的ファイルを Apache で配信する。
ブラウザで[localhost:3000](http://localhost:3000)にアクセスすることで閲覧可能。
