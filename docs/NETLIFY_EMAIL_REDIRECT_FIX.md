# 🔧 Fix: Netlify Email Redirects to Main Website

## ❌ **The Problem**
- **Netlify invitation email** redirects to main website
- **Should redirect** to `/admin/` after login
- **Phone works** because you're going directly to admin URL
- **Laptop fails** because you're clicking email link

---

## 🚀 **SOLUTION 1: Fix Netlify Identity Settings**

### **Update Site URL in Netlify:**
1. **Go to Netlify Dashboard**
2. **Select your Salem Church site**
3. **Settings** → **General**
4. **Site details** section
5. **Site URL**: Make sure it's `https://your-site.netlify.app`
6. **Save settings**

### **Configure Identity Redirect URLs:**
1. **Settings** → **Identity**
2. **Scroll to "Site URL"** section
3. **Confirm site URL** is correct
4. **Look for "Redirect URLs"** or "Callback URLs"
5. **Add**: `https://your-site.netlify.app/admin/`
6. **Save settings**

---

## 🚀 **SOLUTION 2: Add Redirect Script to Main Website**

Add this to your main website (`index_updated.html`) in the `<head>` section:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          // Redirect to admin after login from main site
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

---

## 🚀 **SOLUTION 3: Manual Login Process**

### **Instead of using email link:**

1. **Don't click the email link**
2. **Go directly to**: `https://your-site.netlify.app/admin/`
3. **Click "Login with Netlify Identity"**
4. **Use the email/password** from the invitation
5. **Should stay on admin page**

---

## 🚀 **SOLUTION 4: Create Custom Redirect Page**

I'll create a redirect page that catches email logins:

### **Create redirect handler:**
```html
<!-- This goes in your main website -->
<script>
// Check if user came from Netlify Identity email
if (window.location.hash.includes('access_token') || 
    window.location.hash.includes('confirmation_token')) {
  // Redirect to admin
  window.location.href = '/admin/';
}
</script>
```

---

## 🚀 **SOLUTION 5: Update Netlify Identity Configuration**

### **In Netlify Dashboard:**

1. **Identity** → **Settings and usage**
2. **Look for "Site URL" or "Redirect URLs"**
3. **Add these URLs**:
   - `https://your-site.netlify.app/admin/`
   - `https://your-site.netlify.app/admin/index.html`
4. **Save changes**

### **Check "External providers" settings:**
- Make sure redirect URLs point to `/admin/`
- Not to the main website root

---

## 🚀 **SOLUTION 6: Resend Invitations**

### **After fixing settings:**

1. **Fix the redirect URLs** (Solution 1)
2. **Go to Identity** → **Users**
3. **Delete existing invitations**
4. **Send new invitations**
5. **New emails should redirect correctly**

---

## 🎯 **IMMEDIATE WORKAROUND**

### **For existing users:**

1. **Ignore the email link**
2. **Go directly to**: `https://your-site.netlify.app/admin/`
3. **Click login**
4. **Use email/password from invitation**
5. **Works perfectly!**

---

## 🔍 **WHY THIS HAPPENS**

### **Common causes:**
- **Site URL misconfigured** in Netlify
- **Default redirect** goes to site root (`/`)
- **Identity widget** not configured for admin redirect
- **Email template** uses default redirect URL

### **Phone vs Laptop difference:**
- **Phone**: You go directly to `/admin/` URL
- **Laptop**: You click email link that goes to `/`

---

## 🚀 **BEST SOLUTION**

### **Fix the Netlify settings** (Solution 1):
1. **Correct site URL** in Netlify settings
2. **Add admin redirect URLs**
3. **Resend invitations**
4. **Email links will work correctly**

### **Quick workaround**:
- **Tell users**: "Don't click email link"
- **Instead**: "Go to website.com/admin and login"

---

## 📋 **STEP-BY-STEP FIX**

### **For you to do now:**

1. **Check Netlify site URL** is correct
2. **Add `/admin/` to redirect URLs**
3. **Tell church staff**: "Go directly to `/admin/` and login"
4. **Don't use email links** until redirect is fixed

### **For church staff:**

1. **Bookmark**: `https://your-site.netlify.app/admin/`
2. **Always use bookmark** to access admin
3. **Login with email/password** from invitation
4. **Ignore email links**

---

## 🎉 **QUICK FIX FOR NOW**

**Tell everyone to:**
1. **Go to**: `https://your-site.netlify.app/admin/`
2. **Click login**
3. **Use credentials from email**
4. **Don't click email links**

**This will work immediately while you fix the Netlify settings!**

---

**🎯 The email redirect issue is very common - the workaround (direct admin URL) works perfectly!**