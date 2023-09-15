# Astro Document Viewer

[![Built with Astro](https://astro.badg.es/v1/built-with-astro/tiny.svg)](https://astro.build)

A website that allows you to view document files.

## Getting Started

To get started with this application, make sure you have Node.js v18+ installed on your system. Then, follow these steps:

```bash
git clone https://github.com/AREA44/astro-document-viewer
cd astro-document-viewer
pnpm install
pnpm dev
```

Now, you can open your browser and navigate to http://localhost:4321 to see the application running.

To view your document, simply replace the source of the document in the `<Viewer/>` component. For example:

```astro
<Viewer
  src="https://github.com/AREA44/astro-document-viewer/blob/main/public/compressed.tracemonkey-pldi-09.pdf?raw=1"
/>
```

## License

Licensed under the [MIT License](LICENSE).
