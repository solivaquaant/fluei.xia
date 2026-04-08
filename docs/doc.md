# Managing @fluei.xia content

This guide explains how to add new stories, photos, and patterns to your website. The system is designed to be automated-you just need to follow the folder structure and configuration rules.

---

## Adding a photo event (Gallery)

The gallery automatically scans for folders and images. To add a new event (e.g., "Winter Bunny 2026"):

### 1. Organize your photos

1. Go to `src/gallery/`.
2. Create a new folder with a simple name (e.g., `winter-2026`).
3. Put all the photos for that event inside this folder.

- **Tip**: Aim for high-quality `.webp` or compressed `.jpg` files for the best performance.

### 2. Update the config

1. Open `src/data/galleryConfig.js`.
2. Add a new object to the `galleryEvents` array:

```javascript
{
  date: 'December 2026',
  title: 'Winter Bunny Collection',
  description: 'A cozy set of bunnies inspired by the first snowfall.',
  folder: 'winter-2026'
}
```

---

## Creating a crochet pattern article

Patterns are powered by **MDX**, which allows you to write simple Markdown but with advanced features like zoomed images and interactive tables.

### 1. Create the pattern folder

1. Go to `src/patterns/`.
2. Create a new folder for your pattern (e.g., `bunny-hat`).
3. Create an `index.mdx` file inside that folder.

### 2. Set the metadata

At the very top of your `index.mdx`, you **must** define the metadata:

```mdx
export const metadata = {
  title: "Cozy Bunny Hat",
  description: "A warm and stretchy hat with adorable long ears.",
  thumbnail: "/src/patterns/bunny-hat/thumb.png",
};

# {metadata.title}

... your content ...
```

### 3. Writing the pattern

- **Headings**: Use `## Heading` to create sections. These will automatically appear in the "ON THIS PAGE" sidebar.
- **Stitch Tables**: Create a table with 3 columns. The system is optimized to keep the "Row #" and "Total" columns narrow.

```markdown
| Row # | Instructions | Total |
| ----- | ------------ | ----- |
| 1     | 6 sc in MR   | 6     |
```

- **Images & sizing**:
  - Regular image: `![alt text](./image.png)`
  - **Manual Ssizing**: Add `|` followed by a percentage or pixel value in the alt text:
    - `![Bear|50%](./bear.png)` (50% width)
    - `![Bear|200px](./bear.png)` (200px width)

### 4. Use the template

- You can copy the contents of `src/patterns/template/template.mdx` whenever you start a new pattern to save time.
