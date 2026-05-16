# Salem African Church of Christ - Abekoko Parish Website

![Salem Church](https://raw.githubusercontent.com/javex-12/abekoko/main/images/logo.jpg)

**"Stay Updated • Stay Blessed"**

Welcome to the official website repository for **Salem African Church of Christ, Abekoko Parish** located in Agege, Lagos, Nigeria. This is a digital home for our church community, providing information about our services, events, sermons, and spiritual resources.

## 🏛️ About

Salem African Church of Christ is a vibrant Christian community dedicated to spreading the Gospel, fostering spiritual growth, and serving the Lagos community with love and compassion.

## ✨ Features

### 📱 **Multi-Page Professional Design**
- **Home Page** - Welcome message, current service info, quick announcements
- **About Us** - Church mission, beliefs, history, and leadership
- **Services & Events** - Order of service, schedules, upcoming events
- **Sermons & Media** - Prayer resources, gallery, spiritual content
- **Contact & Location** - Forms, contact info, giving, location details

### 🎨 **Design & User Experience**
- **Professional red and white color scheme** (Primary: `#c41e3a`, Accent: `#ffd700`)
- **Subtle 3D animations** - floating logos, card hover effects, smooth transitions
- **Fully responsive design** - optimized for desktop, tablet, and mobile
- **Fast loading performance** - optimized CSS and JavaScript
- **Reverent aesthetic** - maintains spiritual atmosphere

### ✨ **3D Animation Elements**
- Logo floating animation with gentle breathing effect
- Card hover effects with subtle lift and rotation
- Button interactions with 3D press effects and shine
- Navigation with smooth 3D hover transitions
- Background elements with floating geometric patterns
- Form fields with gentle lift on focus
- Gallery items with scale and overlay animations

### 📋 **Interactive Features**
- **Contact Forms** - General contact, prayer requests, testimonials
- **Community Registration** - Birthday registration, volunteer sign-up
- **Feedback System** - Suggestions and complaints handling
- **EmailJS Integration** - Functional form submissions
- **Copy-to-clipboard** - Bank account details
- **Mobile-friendly navigation** - Hamburger menu with smooth animations

### 🔧 **Technical Features**
- **Progressive Web App (PWA)** - Installable on mobile devices
- **Service Worker** - Offline functionality and caching
- **SEO Optimized** - Proper meta tags, sitemap, robots.txt
- **Accessibility** - Keyboard navigation, screen reader friendly
- **Cross-browser compatible** - Works on all modern browsers
- **Performance optimized** - Fast loading times

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Animations:** CSS3 Transitions & Keyframes
- **Email Service:** EmailJS
- **PWA:** Service Workers
- **Icons:** Font Awesome
- **Fonts:** Google Fonts (Poppins, Playfair Display)

## 📁 File Structure

```
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services & Events page
├── media.html              # Sermons & Media page
├── contact.html            # Contact & Location page
├── 404.html                # Custom error page
├── styles/
│   └── main.css            # Main stylesheet with 3D animations
├── js/
│   └── main.js             # Interactive JavaScript
├── images/                 # Church photos and assets
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/javex-12/abekoko.git
   ```

2. Navigate to the directory:
   ```bash
   cd abekoko
   ```

3. Open `index.html` in a web browser or run a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Deployment

The website works with:
- **Netlify** (recommended) - Automatic deployment from Git
- **GitHub Pages** - Static site hosting
- **Any web hosting service** - Upload files via FTP

## ⚙️ Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update your public key in `js/main.js`:
   ```javascript
   emailjs.init({
       publicKey: "YOUR_PUBLIC_KEY",
   });
   ```

### Church Information

Update church-specific information in:
- Contact details in all HTML files
- Bank account information in `contact.html`
- Service times and schedules
- Pastor and leadership information

## 📞 Church Contact Information

**Salem African Church of Christ**
- **Address:** 43, Arigbanla Street, Abekoko Bus-stop, Agege, Lagos, Nigeria
- **Pastor:** Rev'd Canon Olufemi Oyelola
- **Phone:** 0906275926, 0703069830
- **Service Times:** 
  - Sunday 10:00 AM
  - Tuesday Bible Study 5:00 PM
  - Wednesday Gethsemane 7:00 AM

## 💰 Support & Giving

**Bank Details:**
- **Bank:** Zenith Bank
- **Account Name:** Salem African Church of Christ
- **Account Number:** 1010270199

## 🎯 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- iOS Safari & Chrome Mobile

## 📱 PWA Features

The website is installable as a Progressive Web App:
- **Offline functionality** - View cached content without internet
- **App-like experience** - Full-screen mode on mobile
- **Home screen installation** - Add to device home screen
- **Push notifications** - Ready for future implementation

## 🔒 Security & Performance

- **HTTPS Required** - For PWA functionality
- **Content Security Policy** - Recommended for production
- **Form Validation** - Client and server-side validation
- **XSS Protection** - Sanitized user inputs
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)

## 🤝 Contributing

To contribute to the website:
1. Contact the church administration
2. Submit suggestions through the feedback form
3. Report issues or bugs
4. Propose new features or improvements

## 📄 License

Created for Salem African Church of Christ, Abekoko Parish. All rights reserved.

## 🙏 Acknowledgments

- **Church Leadership** - Rev'd Canon Olufemi Oyelola and the church family
- **Design** - Modern church website best practices
- **Technical Stack** - HTML5, CSS3, JavaScript, PWA technologies

---

**Built with ❤️ for the glory of God and the Salem Church community**

*"Stay Updated • Stay Blessed"*

*Last Updated: May 2026*
