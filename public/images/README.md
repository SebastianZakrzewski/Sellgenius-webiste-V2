# Images Directory

This directory is for storing multimedia files, especially images used in the website.

## Usage in Next.js

Images placed in this directory can be referenced in your components using:

```tsx
import Image from 'next/image';

<Image 
  src="/images/your-image.jpg" 
  alt="Description"
  width={500}
  height={300}
/>
```

Or directly in HTML:

```tsx
<img src="/images/your-image.jpg" alt="Description" />
```

## Directory Structure

- `images/` - Main directory for images
  - Logos, icons, and other assets should be placed here

