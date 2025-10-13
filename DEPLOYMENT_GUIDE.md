# 🚀 Deployment Guide - Salem Church Website

## Quick Deployment Options

### Option 1: Netlify (Recommended - FREE)

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy Website**
   - Drag and drop the entire website folder to Netlify
   - Or connect to GitHub repository for automatic updates
   - Your site will be live in minutes!

3. **Custom Domain (Optional)**
   - Add your own domain (e.g., salemchurch.org)
   - Netlify provides free SSL certificate

### Option 2: GitHub Pages (FREE)

1. **Create GitHub Account**
   - Go to [github.com](https://github.com)
   - Create free account

2. **Upload Files**
   - Create new repository named `salem-church-website`
   - Upload all website files
   - Enable GitHub Pages in repository settings

3. **Access Website**
   - Your site will be available at: `username.github.io/salem-church-website`

### Option 3: Traditional Web Hosting

1. **Choose Hosting Provider**
   - Recommended: Hostinger, Bluehost, SiteGround
   - Look for: PHP support, SSL certificate, good uptime

2. **Upload Files**
   - Use FTP client (FileZilla recommended)
   - Upload all files to `public_html` or `www` folder

3. **Configure Domain**
   - Point domain to hosting server
   - Enable SSL certificate

## 📧 Email Configuration (EmailJS)

### Setup Steps:
1. **Create EmailJS Account**
   - Go to [emailjs.com](https://emailjs.com)
   - Free plan: 200 emails/month

2. **Add Email Service**
   - Connect Gmail, Outlook, or other email provider
   - Note the Service ID

3. **Create Email Template**
   - Design template for contact forms
   - Note the Template ID

4. **Update Website Code**
   - Edit `js/main.js`
   - Replace placeholder IDs with your actual IDs:
   ```javascript
   emailjs.init({
       publicKey: "YOUR_PUBLIC_KEY_HERE",
   });
   
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```

## 🔧 Customization Guide

### Update Church Information

1. **Contact Details** (Update in ALL pages)
   ```html
   <!-- Find and replace in all HTML files -->
   <p>43, Arigbanla Street, Abekoko Bus-stop, Agege, Lagos</p>
   <p>Rev'd Canon Olufemi Oyelola</p>
   <p>0906275926, 0703069830</p>
   ```

2. **Bank Account Details** (contact.html)
   ```html
   <!-- Update in contact.html -->
   <p><strong>Bank:</strong> Zenith Bank</p>
   <p><strong>Account Name:</strong> Salem African Church of Christ</p>
   <p><strong>Account Number:</strong> 1010270199</p>
   ```

3. **Service Times** (Update in multiple files)
   ```html
   <!-- Update service schedules -->
   <p><strong>Sunday Service:</strong> 10:00 AM</p>
   <p><strong>Bible Study:</strong> Tuesday 5:00 PM</p>
   ```

### Replace Images

1. **Logo** - Replace `images/logo.jpg` with your church logo
2. **Pastor Photo** - Replace `images/vicar.svg` with pastor's photo
3. **Event Flyers** - Replace `images/flyer1.jpg` and `images/flyer2.jpg`
4. **Gallery Photos** - Replace `images/1.jpg` through `images/8.jpg`

### Update Colors (Optional)

Edit `styles/main.css`:
```css
:root {
    --primary-color: #c41e3a;    /* Main church color */
    --accent-color: #ffd700;     /* Secondary color */
    /* Change these to match your church branding */
}
```

## 📱 Mobile App Installation

Your website can be installed as a mobile app:

1. **On Android:**
   - Open website in Chrome
   - Tap menu → "Add to Home screen"

2. **On iPhone:**
   - Open website in Safari
   - Tap share button → "Add to Home Screen"

## 🔍 SEO Setup

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership using HTML file method
4. Submit sitemap: `yourwebsite.com/sitemap.xml`

### Google My Business
1. Create/claim your church's Google My Business listing
2. Add website URL
3. Keep information updated

## 📊 Analytics (Optional)

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking code
3. Add to all HTML pages before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🔒 Security Checklist

- [ ] Enable HTTPS/SSL certificate
- [ ] Regular backups of website files
- [ ] Keep contact forms protected from spam
- [ ] Monitor website for unusual activity
- [ ] Update any plugins or dependencies regularly

## 📞 Support

### Technical Issues:
- Check browser console for errors
- Verify all files uploaded correctly
- Test forms and functionality
- Ensure images load properly

### Common Problems:
1. **Forms not working** - Check EmailJS configuration
2. **Images not loading** - Verify file paths and names
3. **Mobile issues** - Test on different devices
4. **Slow loading** - Optimize image sizes

### Getting Help:
- Contact your web developer
- Check hosting provider support
- Use browser developer tools for debugging

## 📋 Launch Checklist

Before going live:
- [ ] Test all pages on desktop and mobile
- [ ] Verify all forms work correctly
- [ ] Check all links and navigation
- [ ] Confirm contact information is correct
- [ ] Test image loading and gallery
- [ ] Verify bank account details
- [ ] Check service times and schedules
- [ ] Test PWA installation
- [ ] Confirm SSL certificate is active
- [ ] Submit to Google Search Console

## 🎉 Post-Launch

1. **Announce the Website**
   - Share on social media
   - Announce during church service
   - Include in church bulletin

2. **Regular Updates**
   - Update service information weekly
   - Add new events and announcements
   - Keep prayer points current
   - Update gallery with new photos

3. **Monitor Performance**
   - Check website speed regularly
   - Monitor form submissions
   - Review analytics data
   - Gather feedback from congregation

---

**Need Help?** Contact your technical administrator or web developer for assistance.

**Remember:** Keep your website updated and engaging for your church community!

*"Stay Updated • Stay Blessed"*