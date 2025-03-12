# Birthday Celebration Website

A beautiful, interactive website to celebrate a special birthday. Customize it with your own memories, wishes, and countdown to make it personal.

## Features

- 🎂 Countdown to the birthday
- 📸 Beautiful memory gallery
- 💌 Birthday wishes from friends and family
- 🎁 Interactive gift animation
- ✨ Smooth animations and transitions
- 📱 Fully responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/birthday-celebration.git
cd birthday-celebration
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Customization

### Environment Variables

All customizable content is stored in the `.env` file. You can modify:

- Birthday date
- Birthday person's name
- Header message
- Memory images and descriptions
- Birthday wishes
- Gift message

### Important: After Changing Environment Variables

When you make changes to the `src/config.tsc` file, you need to restart the development server for the changes to take effect. You can do this by:

1. Using the provided restart script:
```bash
./start
```

2. Or manually:
```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

3. If changes are still not reflected, try clearing the cache:
```bash
rm -rf .next/cache
npm run dev
```

### Image Configuration

For security reasons, Next.js requires you to configure external image domains in `next.config.js`. The following domains are already configured:

- images.unsplash.com
- hips.hearstapps.com

If you want to use images from other domains, add them to the `domains` array in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'hips.hearstapps.com', 'your-new-domain.com'],
  },
}

module.exports = nextConfig
```

## Deployment

You can deploy this website to any platform that supports Next.js, such as Vercel, Netlify, or GitHub Pages.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/) 