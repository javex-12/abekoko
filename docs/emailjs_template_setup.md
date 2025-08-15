# EmailJS Template Setup Guide

## 📧 Template Configuration for Salem African Church

### Template ID: `template_nu6l6nf`

---

## 🎯 **SUBJECT LINE**
```
New {{form_type}} from Salem Church Website - {{name}}
```

---

## 📝 **EMAIL TEMPLATE (HTML)**

Copy and paste this HTML template into your EmailJS template editor:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; }
        .container { background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; }
        .header { background: linear-gradient(135deg, #c41e3a 0%, #8b1538 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .header p { margin: 5px 0 0 0; font-size: 14px; opacity: 0.9; }
        .content { padding: 30px 20px; }
        .badge { background: #c41e3a; color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; display: inline-block; margin-bottom: 20px; }
        .field { margin-bottom: 15px; padding: 15px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #c41e3a; }
        .label { font-weight: bold; color: #c41e3a; font-size: 14px; margin-bottom: 5px; text-transform: uppercase; }
        .value { color: #333; font-size: 16px; word-wrap: break-word; }
        .message-box { background: white; border: 2px solid #c41e3a; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .footer { background: #1a1a1a; color: white; padding: 20px; text-align: center; font-size: 12px; }
        .timestamp { color: #666; font-size: 12px; text-align: right; margin-top: 20px; font-style: italic; }
        .divider { height: 2px; background: linear-gradient(90deg, #c41e3a 0%, #ffd700 50%, #c41e3a 100%); margin: 20px 0; border: none; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Salem African Church of Christ</h1>
            <p>Abekoko Parish, Agege Lagos</p>
            <p>Stay Updated • Stay Blessed</p>
        </div>
        
        <div class="content">
            <div class="badge">{{form_type}} SUBMISSION</div>
            <h2>New Message Received</h2>
            <hr class="divider">
            
            {{#name}}<div class="field"><div class="label">Full Name</div><div class="value">{{name}}</div></div>{{/name}}
            {{#email}}<div class="field"><div class="label">Email Address</div><div class="value">{{email}}</div></div>{{/email}}
            {{#phone}}<div class="field"><div class="label">Phone Number</div><div class="value">{{phone}}</div></div>{{/phone}}
            {{#address}}<div class="field"><div class="label">Address</div><div class="value">{{address}}</div></div>{{/address}}
            {{#category}}<div class="field"><div class="label">Category</div><div class="value">{{category}}</div></div>{{/category}}
            {{#type}}<div class="field"><div class="label">Type</div><div class="value">{{type}}</div></div>{{/type}}
            {{#birthday_date}}<div class="field"><div class="label">Birthday Date</div><div class="value">{{birthday_date}}</div></div>{{/birthday_date}}
            {{#ministry}}<div class="field"><div class="label">Preferred Ministry</div><div class="value">{{ministry}}</div></div>{{/ministry}}
            {{#experience}}<div class="field"><div class="label">Experience/Skills</div><div class="value">{{experience}}</div></div>{{/experience}}
            {{#availability}}<div class="field"><div class="label">Availability</div><div class="value">{{availability}}</div></div>{{/availability}}
            {{#anonymous}}<div class="field"><div class="label">Anonymous Submission</div><div class="value">{{anonymous}}</div></div>{{/anonymous}}
            
            {{#message}}<div class="message-box"><div class="label">Message</div><div class="value">{{message}}</div></div>{{/message}}
            
            {{#timestamp}}<div class="timestamp">Submitted on: {{timestamp}}</div>{{/timestamp}}
        </div>
        
        <div class="footer">
            <p><strong>Salem African Church of Christ</strong></p>
            <p>Abekoko Parish, Agege Lagos</p>
            <p>This message was sent from the church website</p>
        </div>
    </div>
</body>
</html>
```

---

## 📋 **TEMPLATE VARIABLES**

Your template should include these variables (EmailJS will automatically populate them):

### 🔹 **Contact Information**
- `{{name}}` - Full name of the person
- `{{email}}` - Email address
- `{{phone}}` - Phone number
- `{{address}}` - Physical address (for contact form)

### 🔹 **Form Identification**
- `{{form_type}}` - Type of form (Contact, Prayer, Birthday, etc.)
- `{{category}}` - Category selection from dropdowns
- `{{type}}` - Type selection (for feedback forms)

### 🔹 **Specific Fields**
- `{{message}}` - Main message content
- `{{birthday_date}}` - Birthday date (for birthday registrations)
- `{{ministry}}` - Preferred ministry (for volunteer forms)
- `{{experience}}` - Experience/skills (for volunteer forms)
- `{{availability}}` - Availability (for volunteer forms)
- `{{anonymous}}` - Whether submission is anonymous
- `{{timestamp}}` - When the form was submitted

---

## 🚀 **SETUP INSTRUCTIONS**

### Step 1: Login to EmailJS Dashboard
1. Go to [emailjs.com](https://www.emailjs.com)
2. Login to your account
3. Navigate to "Email Templates"

### Step 2: Edit Your Template
1. Find template ID: `template_nu6l6nf`
2. Click "Edit"
3. Replace the existing content with the HTML template above

### Step 3: Configure Subject Line
Set the subject line to:
```
New {{form_type}} from Salem Church Website - {{name}}
```

### Step 4: Test the Template
1. Use the EmailJS test feature
2. Fill in sample data for the variables
3. Send a test email to verify formatting

---

## 🎨 **TEMPLATE FEATURES**

✅ **Professional Design**
- Church branding with red color scheme
- Clean, modern layout
- Mobile-responsive design

✅ **Dynamic Content**
- Shows only relevant fields for each form type
- Conditional display using {{#variable}} syntax
- Automatic form type identification

✅ **Complete Information**
- All form fields are captured
- Timestamp for tracking
- Clear organization of data

✅ **Church Branding**
- Salem African Church header
- Church colors (red and gold)
- Professional footer with church details

---

## 📞 **SUPPORT**

If you need help setting up the template:
1. Check that all variables match exactly (case-sensitive)
2. Ensure the HTML is properly formatted
3. Test with sample data first
4. Verify your EmailJS service is connected

---

**Template Created for:** Salem African Church of Christ, Abekoko Parish  
**Date:** January 2025  
**Version:** 1.0