<h1 align="center">
  Personal Website Git Repository
</h1>

<p align="center">
  This is my personal portfolio blog hosted <a href="https://davidkocen.com/" target="_blank">here</a> built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and hosted with <a href="https://aws.amazon.com/amplify/" target="_blank">AWS Amplify</a>.
</p>

<p align="center">
  The original template is forked from <a href="https://github.com/pycoder2000/" target="_blank">Parth Desai</a> and can be found <a href="https://github.com/pycoder2000/blog" target="_blank">here</a>. That blog is itself based on a template by <a href="https://github.com/timlrx" target="_blank">Timothy Lin</a> and can be found <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog" target="_blank">here</a>. The demo for the same can be found <a href="https://tailwind-nextjs-starter-blog.vercel.app/" target="_blank">here</a>.
</p>

## 🪜 Project structure

```bash
📦 root
├── 🗂️ components             # React files to customize the components for the site
├── 🗂️ css                    # Tailwind and Prisma CSS files
├── 🗂️ data                   # Files to change the content of pages
│ ├── 🗂️ authors              # Markdown files for authors of blog
│ ├── 🗂️ blog                 # Markdown files for blog posts
│ └── 🗂️ snippets             # Markdown files for code snippets
├── 🗂️ layouts                # Templates for pages
├── 🗂️ lib                    # Non-react modules
├── 🗂️ pages                  # Page files for website
├── 🗂️ public                 # Static files for images, rss, and assets
│ ├── 🗂️ static               # Holds images, favicons, and other assets
│ │ ├── 🗂️ favicon            # Favicon files
│ │ └── 🗂️ images             # Image Files
│ ├── 📝 feed.xml             # RSS feed
│ ├── 📝 robots.txt           # Helps crawlers to crawl your site
│ └── 📝 sitemap.xml          # Sitemap
├── 🗂️ scripts                # Scripts to run for different tasks
├── 📝 tailwind.config.js     # Contains tailwind stylesheet to change the look
└── 📝 next.config.js         # configuration related to Next.js
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (>=14.x)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/personal-website.git
    cd personal-website
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

This project is hosted using AWS Amplify. Follow the [AWS Amplify documentation](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html) to deploy your own version.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgements

Special thanks to:
- [Parth Desai](https://github.com/pycoder2000/) for the original template.
- [Timothy Lin](https://github.com/timlrx) for the Tailwind Next.js starter blog template.
