# Nuxt 3 + Storyblok Boilerplate

The opinionated boilerplate for Nuxt and Storyblok that empowers your web development journey!
Kickstart your projects on a solid foundation, embracing best practices and seamless integration.
Expedite your development process with our carefully curated setup.
Dive in, elevate your Nuxt and Storyblok experience, and witness the synergy of efficiency and simplicity! 🚀

## Features

- Base Framework is [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- Uses [Storyblok](https://www.storyblok.com/docs/guide/introduction) as CMS
- Provides a basic content structure to get started
- Includes [VueUse](https://vueuse.org/) for common Vue utilities
- Includes [Tailwind CSS](https://tailwindcss.com/docs) for styling
- Allows to use [SASS/SCSS](https://sass-lang.com/documentation) in custom css definitions
- Includes [@nuxtjs/i18n](https://i18n.nuxtjs.org/) for internationalization
- Includes [nuxt-schema-org](https://nuxt.com/modules/schema-org) for structured data
- Uses [dayjs](https://day.js.org/docs/en/installation/installation) for date formatting
- Uses [Bun](https://bun.sh/) for task running
- Configures [eslint](https://eslint.org/docs/user-guide/getting-started) with opinionated rules

## Using this boilerplate in a new project

Use the following command to create a new project based on this boilerplate. Replace `<project-name>` with the actual name of your project.

```bash
# bun
bunx create coderscantina/nuxt-storyblok-boilerplate <project-name>
# npm
npx degit coderscantina/nuxt-storyblok-boilerplate <project-name>
```

## Storyblok Setup

1. Create a new space in Storyblok
  1. Adapt the `package.json` file to use the new space id. Replace the `<space>` placeholder with the actual space id.
  2. Go to `Settings` -> `Visual Editor` and add `https://localhost:3000` as Preview URL
2. Create a new API token in Storyblok
  1. Go to `Settings` -> `Access token` -> `Generate`
  2. Give it a name and select `Preview` access level
  3. Put the token in a `.env` file as `NUXT_STORYBLOK_ACCESS_TOKEN`
3. Login via the CLI
   ```bash
   storyblok login
   ```

## Setup

Make sure you've installed the storyblok CLI:

```bash
npm i storyblok -g
```

Make sure to install the dependencies:

```bash
bun install
```

Make sure to create a local SSL certificate: 

```bash
openssl genrsa 2048 > localhost.key
chmod 400 localhost.key
openssl req -new -x509 -nodes -sha256 -days 365 -key localhost.key -out localhost.crt
```

Reference it in the `package.json` file, in the `scripts` section:

```json
{
  // ...
  "scripts": {
    "dev-ssl": "nuxt dev --https --ssl-cert localhost.crt --ssl-key localhost.key"
  }
  // ...
}
```

## Development Server

Start the development server on `https://localhost:3000`:

```bash
bun run dev-ssl
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
