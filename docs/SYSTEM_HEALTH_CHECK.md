# Salem Church Website - System Health Check

## 🔍 Overview

This document helps you verify that all components of your church website are working correctly, especially the CMS (Content Management System) integration.

## ✅ Quick Health Check

### 1. **Main Website Status**
- ✅ Website loads at: `index.html`
- ✅ All sections display correctly
- ✅ Mobile responsive design works
- ✅ Images load properly

### 2. **CMS Dashboard Status**
- ✅ Admin dashboard accessible at: `admin/`
- ✅ Login system works (Netlify Identity)
- ✅ Content editing interface loads
- ✅ File uploads work

### 3. **Content Integration Status**
- ✅ CMS content loader script included
- ✅ Content files exist in `/content/` folders
- ✅ Updates from CMS appear on main website
- ✅ Real-time content synchronization

## 🧪 Testing Your System

### Automated Test
1. Open `system-check.html` in your browser
2. Click "Run Full Test"
3. Review the results

### Manual Testing Steps

#### Test 1: CMS Content Updates
1. Go to `admin/` (your admin dashboard)
2. Login with your credentials
3. Edit "Sunday Service Info"
4. Change the service date or theme
5. Save the changes
6. Go back to main website (`index.html`)
7. Refresh the page
8. ✅ **Expected**: Changes should appear in the "This Sunday's Service" section

#### Test 2: Announcements Update
1. In admin dashboard, go to "Church Announcements"
2. Edit an existing announcement or create a new one
3. Save changes
4. Check main website announcements section
5. ✅ **Expected**: New/updated announcements should appear

#### Test 3: Prayer Points Update
1. In admin dashboard, go to "Weekly Prayer Points"
2. Update prayer points or "Food for Thought"
3. Save changes
4. Check main website prayer section
5. ✅ **Expected**: Updated prayer content should appear

## 🚨 Common Issues & Solutions

### Issue 1: "CMS content not updating on main website"

**Symptoms:**
- You update content in admin dashboard
- Changes save successfully
- But main website still shows old content

**Solutions:**
1. **Hard refresh the main website**: Press `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. **Check browser cache**: Clear browser cache and cookies
3. **Verify file paths**: Ensure content files are in correct folders
4. **Check console errors**: Open browser developer tools (F12) and look for JavaScript errors

### Issue 2: "Admin dashboard not loading"

**Symptoms:**
- `admin/` page shows error or blank screen
- Cannot login to CMS

**Solutions:**
1. **Check Netlify Identity**: Ensure Netlify Identity is enabled for your site
2. **Verify config.yml**: Check `admin/config.yml` for correct settings
3. **Check network**: Ensure internet connection is stable
4. **Clear browser data**: Clear cache, cookies, and local storage

### Issue 3: "Images not loading"

**Symptoms:**
- Broken image icons on website
- Missing church photos or logos

**Solutions:**
1. **Check file paths**: Verify image files exist in `/images/` folder
2. **Check file names**: Ensure exact spelling and case sensitivity
3. **Check file formats**: Ensure images are in supported formats (JPG, PNG, SVG)
4. **Check file sizes**: Large images may load slowly

### Issue 4: "Content files missing"

**Symptoms:**
- Error messages about missing content files
- Default content showing instead of CMS content

**Solutions:**
1. **Create content files**: Use admin dashboard to create initial content
2. **Check folder structure**: Ensure `/content/` folders exist
3. **Verify file permissions**: Ensure files are readable
4. **Check Git repository**: Ensure files are committed to your repository

## 📁 Required File Structure

```
salem/
├── index.html                 # Main website
├── admin/
│   ├── index.html            # CMS dashboard
│   └── config.yml            # CMS configuration
├── js/
│   └── cms-content-loader.js # Content integration script
├── content/                  # CMS content files
│   ├── service/             # Sunday service info
│   ├── announcements/       # Church announcements
│   ├── prayer/              # Prayer points
│   ├── events/              # Special events
│   └── gallery/             # Photo galleries
└── images/                   # Website images
    ├── logo.jpg
    ├── churchpic.png
    ├── vicar.jpg
    └── uploads/             # CMS uploaded images
```

## 🔧 Maintenance Tasks

### Weekly Checks
- [ ] Test admin dashboard login
- [ ] Update Sunday service information
- [ ] Review and update announcements
- [ ] Check prayer points are current

### Monthly Checks
- [ ] Run full system test (`system-check.html`)
- [ ] Review and clean up old announcements
- [ ] Update photo gallery with new images
- [ ] Check all links are working

### As Needed
- [ ] Update church leadership information
- [ ] Add new events and programs
- [ ] Update contact information
- [ ] Backup content files

## 📞 Getting Help

If you encounter issues that these solutions don't resolve:

1. **Check the browser console**: Press F12 and look for error messages
2. **Review the documentation**: Check other files in the `/docs/` folder
3. **Test on different browsers**: Try Chrome, Firefox, Safari, Edge
4. **Check on different devices**: Test on mobile phones and tablets

## 🎯 Success Indicators

Your system is working correctly when:

✅ **Admin Dashboard**
- Loads without errors
- Login works smoothly
- Content editing is responsive
- File uploads work

✅ **Main Website**
- Displays current service information
- Shows updated announcements
- Prayer points are current
- All images load properly

✅ **Integration**
- Changes in admin appear on main site
- Content updates happen automatically
- No JavaScript errors in console
- Mobile version works correctly

## 📊 Performance Tips

1. **Optimize Images**: Keep image files under 1MB for faster loading
2. **Regular Updates**: Update content weekly to keep site fresh
3. **Clean Old Content**: Remove expired announcements and events
4. **Monitor Loading**: Use `system-check.html` to monitor performance

---

**Last Updated**: January 2025  
**Version**: 1.0  
**For**: Salem African Church of Christ, Abekoko Parish