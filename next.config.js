/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // Existing domains
      'images.unsplash.com',
      'hips.hearstapps.com',
      
      // Catbox domains
      'files.catbox.moe',
      'litter.catbox.moe',
      'catbox.moe',
      
      // ImgBB domains
      'i.ibb.co',
      'image.ibb.co',
      'imgbb.com',
      
      // Other popular image hosting services
      'imgur.com',
      'i.imgur.com',
      'flickr.com',
      'live.staticflickr.com',
      'staticflickr.com',
      'img.youtube.com',
      'i.pinimg.com',
      'pinimg.com',
      'media.tenor.com',
      'giphy.com',
      'media.giphy.com',
      'cloudinary.com',
      'res.cloudinary.com',
      'dropbox.com',
      'dl.dropboxusercontent.com',
      'drive.google.com',
      'lh3.googleusercontent.com',
      'pbs.twimg.com',
      'instagram.com',
      'cdninstagram.com',
      'scontent.cdninstagram.com',
      'pixabay.com',
      'cdn.pixabay.com',
      'pexels.com',
      'images.pexels.com',
      'photos.google.com',
      'picsum.photos',
      'upload.wikimedia.org',
      'media.discordapp.net',
      'cdn.discordapp.com',
      'tenor.com'
    ],
  },
}

module.exports = nextConfig