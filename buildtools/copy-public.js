// buildtools/copy-public.js
const fs = require('fs-extra');
const path = require('path');

async function copyPublicFiles() {
  try {
    // Adjust these paths based on your project structure
    const publicDir = path.join(__dirname, '../public');
    const distDir = path.join(__dirname, '../dist');

    // Ensure dist directory exists
    await fs.ensureDir(distDir);

    // Copy all files from public to dist
    await fs.copy(publicDir, distDir, {
      overwrite: true,
      filter: (src) => {
        // Don't copy index.html if it exists in public
        return !src.endsWith('index.html');
      },
    });

    console.log('Public files copied successfully!');
  } catch (error) {
    console.error('Error copying public files:', error);
    process.exit(1);
  }
}

copyPublicFiles();
