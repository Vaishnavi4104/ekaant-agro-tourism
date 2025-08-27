# Assets Directory

This directory is for storing static assets like images, icons, and other media files.

## How to add images:

1. **Place your images here** (e.g., `hero-image.jpg`, `logo.png`, etc.)
2. **Import them in your components** like this:

```javascript
import heroImage from '../assets/hero-image.jpg';
import logo from '../assets/logo.png';
```

3. **Use them in your components**:

```javascript
<img src={heroImage} alt="Hero" />
<img src={logo} alt="Logo" />
```

## Supported formats:
- JPG/JPEG
- PNG
- SVG
- WebP
- GIF

## Example file structure:
```
src/assets/
├── images/
│   ├── hero-image.jpg
│   ├── logo.png
│   └── background.jpg
├── icons/
│   └── arrow.svg
└── README.md
```

## Note:
- Keep image files optimized for web (compress them)
- Use descriptive filenames
- Consider using different sizes for responsive images
