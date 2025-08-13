# Convert Logo to PNG for Better PWA Support

## Why PNG is Better:
- More reliable for PWA icons
- Better compression for app icons
- Wider browser support
- Transparent backgrounds possible

## How to Convert:

### Option 1: Online Converter
1. Go to https://convertio.co/jpg-png/
2. Upload your `logo.jpg` file
3. Download as `logo.png`
4. Replace in `images/` folder

### Option 2: Using Paint (Windows)
1. Open `logo.jpg` in Paint
2. File → Save As → PNG
3. Save as `logo.png`

### Option 3: Using Preview (Mac)
1. Open `logo.jpg` in Preview
2. File → Export → Format: PNG
3. Save as `logo.png`

## After Converting:
1. Save PNG as `images/logo.png`
2. Update manifest.json to use `.png` instead of `.jpg`
3. Update HTML meta tags to use `.png`
4. Test PWA installation again