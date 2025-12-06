# Favicon Setup Guide

## Current Setup

Your favicon is currently configured to use `/images/logo.jpeg`. However, for best results, you should create optimized favicon files.

## Recommended Favicon Formats & Sizes

For optimal browser support and appearance, create these favicon files:

### Required Sizes:
- **favicon.ico** - 16x16, 32x32, 48x48 (multi-size ICO file) - Place in `/public/`
- **icon-16x16.png** - 16x16 pixels
- **icon-32x32.png** - 32x32 pixels
- **icon-192x192.png** - 192x192 pixels (Android)
- **icon-512x512.png** - 512x512 pixels (Android)
- **apple-touch-icon.png** - 180x180 pixels (iOS)

### Tips for Your Logo:

1. **Extract the Icon**: Since your logo has "THE VADIUS" text, consider using just the "V" icon part for the favicon (text is too small to read at 16x16)

2. **Convert JPEG to PNG**: 
   - Use an image editor (Photoshop, GIMP, or online tools)
   - Export as PNG with transparency support
   - Remove the text, keep only the "V" icon

3. **Create Multiple Sizes**:
   - Use tools like [RealFaviconGenerator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/)
   - Upload your logo and it will generate all required sizes

4. **Quick Online Solution**:
   - Go to https://realfavicongenerator.net/
   - Upload your logo image
   - It will generate all favicon files automatically
   - Download and place in `/public/` directory

## After Creating Favicon Files

Update `app/layout.tsx` with the optimized favicon paths:

```typescript
icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  shortcut: "/favicon.ico",
},
```

## Current Configuration

For now, the favicon is set to use your logo JPEG file. This will work, but creating optimized PNG/ICO files will provide better quality and browser compatibility.

