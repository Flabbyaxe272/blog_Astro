# 🏠 My Blog

A personal blog where I write about my homelab adventures and whatever else catches my interest.

## About

This is my little corner of the internet. You'll mostly find posts about:

- **Homelabbing** — self-hosting, networking, servers, and tinkering
- **Other stuff** — miscellaneous posts as the mood strikes

## Tech Stack

- **Framework:** [Astro](https://astro.build) with the [Blog template](https://github.com/withastro/astro/tree/main/examples/blog)
- **Hosting:** ...
- **Styling:** ...

## Running Locally

```bash
# Clone the repo
git clone https://github.com/flabbyaxe/blog_Public.git
cd blog_Public

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site should be available at `http://localhost:4321`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |
| `npm wrangler tail`               | View real-time logs for all Workers              |

## Deployment

In time, will be deployed using Cloudflare Pages.

## License

Posts and content © me. Code/config is MIT — feel free to borrow it.
