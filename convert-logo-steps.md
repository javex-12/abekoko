# Convert Logo to PNG for PWA

## Step 1: Convert JPEG to PNG

### Using Online Tool (Easiest):
1. Go to https://convertio.co/jpg-png/
2. Upload your `images/logo.jpg`
3. Download the converted PNG
4. Save as `images/logo.png`

### Using Paint (Windows):
1. Open `images/logo.jpg` in Paint
2. File → Save As → PNG
3. Save as `images/logo.png`

### Using GIMP (Free):
1. Open `images/logo.jpg` in GIMP
2. File → Export As → logo.png
3. Choose PNG format

## Step 2: Make it Square
If your logo is not square:
1. Open in image editor
2. Add padding/background to make it square
3. Or crop to square format
4. Resize to 512x512 pixels

## Step 3: Update Manifest
Replace in manifest.json:
```json
"src": "./images/logo.jpg"
```
With:
```json
"src": "./images/logo.png"
```