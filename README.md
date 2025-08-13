# Salem African Church of Christ Website

A modern, responsive website for Salem African Church of Christ Abekoko Parish.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Integrated with EmailJS for message handling
- **Service Information**: Current service details and order of service
- **Announcements**: Weekly/monthly services and upcoming events
- **Leadership Section**: Church leadership information
- **Prayer Points**: Weekly prayer points and spiritual content

## Structure

```
salem-church-website/
├── index.html          # Main website file
├── images/             # Image assets directory
│   ├── logo.svg        # Church logo
│   ├── flyer1.svg      # Event flyer 1
│   ├── flyer2.svg      # Event flyer 2
│   ├── vicar.svg       # Vicar photo
│   └── visiting-pastor.svg # Visiting pastor photo
└── README.md           # This file
```

## Setup

1. **Add Images**: Place the following image files in the `images/` directory:
   - `logo.svg` - Church logo
   - `flyer1.svg` - Event flyer (used in hero background)
   - `flyer2.svg` - Family Harvest flyer
   - `vicar.svg` - Rev'd Canon Olufemi Oyelola photo
   - `visiting-pastor.svg` - Special guest pastor photo

2. **EmailJS Configuration**: The contact form is configured with EmailJS. Update the following in `index.html` if needed:
   - Public Key: `Tk_a5VuZRTEMNh4SL`
   - Service ID: `service_qr5y3or`
   - Template ID: `template_nu6l6nf`

3. **Open Website**: Simply open `index.html` in a web browser to view the website.

## Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization:
- `--primary-color`: #166a3a (Church green)
- `--secondary-color`: #0d4e29 (Darker green)
- `--accent-color`: #f8b400 (Gold accent)

### Content Updates
- Update service information in the "Current Service Info" section
- Modify announcements in the "Announcements" section
- Update contact details in the "Contact & Giving" section

### Fonts
- Primary font: Poppins (Google Fonts)
- Secondary font: Playfair Display (Google Fonts)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript (ES6+)
- EmailJS for contact form
- Font Awesome for icons
- Google Fonts

## Contact

For technical support or questions about this website, please contact the church administration.

**Church Details:**
- Address: 43, Arigbanla Street, Abekoko Bus-stop, Agege, Lagos, Nigeria
- Vicar: Rev'd Canon Olufemi Oyelola
- Phone: 0906275926, 0703069830