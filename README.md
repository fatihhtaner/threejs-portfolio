# İbrahim Fatih Taner — 3D Portfolio

Personal portfolio built with React, Vite, Three.js (React Three Fiber), GSAP and Tailwind CSS. Available in Turkish and English.

## Getting started

```bash
npm install
cp .env.example .env   # fill in the EmailJS keys for the contact form
npm run dev
```

## Project structure

```
public/
  locales/<lng>/*.json   # translations, one file per section (namespace)
  models/  textures/     # 3D models and textures
  assets/                # images and icons
src/
  constants/index.js     # non-translatable data (links, images, 3D layout)
  sections/              # page sections (Hero, About, Projects, ...)
  components/            # shared UI and 3D components
  i18n.js                # i18next setup
```

## Translations

Every visible string lives in `public/locales/{tr,en}/<namespace>.json`.
Data in `src/constants` only stores a `key`; components look up the text with
`t("items.<key>.<field>")`. To add a project or job, add an entry to
`src/constants/index.js` **and** the matching `items.<key>` block to both
`tr` and `en` locale files.

## Deploy

```bash
npm run build
firebase deploy
```
