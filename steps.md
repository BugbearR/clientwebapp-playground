# Steps

## Create project

Create project by vite.
```
$ pnpm create vite
```
Select Vanilla, TypeScript.
Move vite project contents to project root.
```
$ mv vite-project/* .
```
Rename project name in package.json.
```
  "name": "clientwebapp-playground",
```
## Start web server

Install project dependents.
```
$ pnpm install
```
Start web server for development.
```
$ pnpm dev
```

## Remove default logos and message

Edit src/main.ts

## Extend app area to full client area

Edit src/style.css

## Add ESLint and Prettier setting

Add ESLint and Prettier package
```
pnpm i -D eslint eslint-config-prettier prettier
```

Initialize ESLint setting
```
npx eslint --init
```

Add lint and format directive to package.json
```
  "scripts": {
    ...
    "lint": "eslint src",
    "format": "prettier --write src"
    ...
  },
```

## Add https localhost certificate

Add cert/create_localhost_cert.ts
Add vite.config.ts

## Add Playwright setting

```
pnpm dlx create-playwright
```
