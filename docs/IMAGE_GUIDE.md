# Image Setup Guide for Salem Church Website

## 📸 Required Images

Your website needs these image files in the `images/` folder:

### 1. **logo.svg** - Church Logo
- **Format**: SVG, PNG, or JPG
- **Size**: Any size (will be resized to 60px height)
- **Usage**: Header logo

### 2. **hero-bg.jpg** - Hero Background Image
- **Format**: JPG or PNG
- **Size**: 1920x1080px or larger (landscape)
- **Usage**: Background image for the main hero section

### 3. **vicar.svg** - Vicar Photo
- **Format**: SVG, PNG, or JPG
- **Size**: Square format (e.g., 400x400px)
- **Usage**: Rev'd Canon Olufemi Oyelola's photo

## 🔧 How to Add Your Images

### Option 1: If you have photos in other formats (JPG, PNG)
1. Rename your files to match the required names:
   - Your church logo → `logo.png` or `logo.jpg`
   - Your hero background → `hero-bg.jpg`
   - Vicar photo → `vicar.jpg` or `vicar.png`

2. Update the HTML file to use the correct extensions:
   - Change `logo.svg` to `logo.png` (or whatever format you have)
   - Change `vicar.svg` to `vicar.jpg` (or whatever format you have)

### Option 2: Convert to SVG (if needed)
If you specifically want SVG format:
1. Use online converters like:
   - convertio.co
   - cloudconvert.com
   - Or any image editing software that exports SVG

## 📁 File Structure
```
salem-church-website/
├── images/
│   ├── logo.svg (or .png/.jpg)
│   ├── hero-bg.jpg
│   └── vicar.svg (or .png/.jpg)
├── index.html
└── README.md
```

## 🚨 Current Status
- The website will show placeholder images if the files are missing
- Logo will be hidden if not found
- Vicar photo will show a green placeholder with "Vicar Photo" text
- Hero background will show a solid color if image is missing

## ✅ Quick Fix Steps
1. Copy your image files to the `images/` folder
2. Rename them to match the expected names
3. If using different formats (PNG/JPG), update the file extensions in `index.html`
4. Refresh your browser to see the images

## 🔄 Need Help?
If you need to change the image file names in the HTML, let me know what format your images are in and I'll update the code for you!