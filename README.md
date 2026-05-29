# ZiShop Online Store

ZiShop is a responsive e-commerce storefront built with Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and Sanity CMS. It presents products from Sanity, groups them by category and subcategory, and includes common shopping features such as product details, discounts, sorting, favorites, cart management, login, registration, dark/light themes, and English/Farsi localization.

## What This Project Does

- Displays a home page with carousel banners, benefits, special offers, categories, newest products, promotional banners, and brand sections.
- Fetches product content from Sanity CMS using static generation for the home page, offer pages, category pages, subcategory pages, and product detail pages.
- Supports product detail pages with image galleries, specifications, pricing, discount handling, ratings, and similar products.
- Provides product listing pages with sorting by newest, cheapest, most expensive, and most popular.
- Includes cart and favorite product state using Redux Toolkit.
- Includes user login and sign-up API routes backed by Sanity user documents, bcrypt password hashing, JWT tokens, and browser cookies.
- Supports English and Farsi locales through Next.js i18n and local translation files.
- Supports dark and light themes with `next-themes`.
- Generates sitemap files after production builds using `next-sitemap`.
- Includes a separate Sanity Studio project under `sanity_onlineshop` for managing product and user content.

## Tech Stack

- Next.js 12
- React 18
- TypeScript
- Tailwind CSS
- Redux Toolkit and React Redux
- Sanity CMS
- next-sanity-image and @sanity/image-url
- bcryptjs and jsonwebtoken
- Axios
- React Slick
- React Toastify
- next-themes
- next-sitemap

## Project Structure

```text
components/           Reusable UI, layout, header, footer, cart, product, category, and home page sections
hooks/                Custom React hooks for language, countdowns, exchange rates, and window dimensions
lib/                  Sanity client/config and shared TypeScript types
locales/              English and Farsi translation dictionaries
mock/                 Static menu, banner, category, brand, and footer data
pages/                Next.js routes and API handlers
public/               Images, icons, fonts, robots.txt, and generated sitemap files
sanity_onlineshop/    Sanity Studio project and schemas
store/                Redux Toolkit slices and store configuration
styles/               Global Tailwind/CSS styles
utilities/            Formatting, sorting, discount, auth, and error helpers
```

## Main Routes

- `/` - Home page.
- `/offers` - Products marked as special offers.
- `/newestProducts` - Products sorted by register date.
- `/cart` - Shopping cart.
- `/favorite` - Favorite products.
- `/login` - User login.
- `/signUp` - User registration.
- `/about` - About page.
- `/[category]` - Products in a top-level category.
- `/[category]/[subCategory]` - Products in a subcategory.
- `/[category]/[subCategory]/[title]/[slug]` - Product detail page.

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_TOKEN=your_sanity_token_with_read_or_write_access
JWT_SECRET=your_jwt_secret
```

`NEXT_PUBLIC_SANITY_TOKEN` is used by the app's Sanity client and by the registration API route when creating new user documents. `JWT_SECRET` is required for login and registration token signing.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

The build script compiles the Next.js app. The `postbuild` script runs `next-sitemap` to generate sitemap files.

## Sanity Studio

The CMS studio is located in `sanity_onlineshop`.

```bash
cd sanity_onlineshop
npm install
npm run start
```

The Sanity project is configured with project ID `3c4n15ly` and dataset `production`. Product documents include images, name, slug, price, discount, product details/specifications, brand, category path, offer flag, register date, and star rating.

## Notes

- Product pages and category pages are statically generated from Sanity and use `fallback: "blocking"` for paths that are not generated at build time.
- Product images are loaded from `cdn.sanity.io`, which is configured in `next.config.js`.
- Cart, favorites, UI state, menu state, theme, language, and user information are handled client-side with Redux and cookies where needed.
- Some user-facing text in the translation files appears to have encoding issues and may need cleanup if the project is maintained further.
