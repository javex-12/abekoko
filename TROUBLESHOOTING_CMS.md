# 🔧 Netlify CMS Troubleshooting Guide

## ❌ **Error: "Failed to load config.yml (Failed to fetch)"**

This is a common issue with several possible solutions:

---

## 🚀 **SOLUTION 1: Check File Deployment**

### **Problem**: Files not deployed to Netlify
### **Fix**:
1. **Commit and push all files** to GitHub:
   ```bash
   git add .
   git commit -m "Add Netlify CMS files"
   git push
   ```
2. **Check Netlify deployment**:
   - Go to your Netlify dashboard
   - Check if the latest deployment succeeded
   - Look for the `admin` folder in the deployed files

---

## 🚀 **SOLUTION 2: Enable Git Gateway**

### **Problem**: Git Gateway not enabled
### **Fix**:
1. **Go to Netlify Dashboard**
2. **Select your site**
3. **Settings** → **Identity**
4. **Enable Identity** (if not already enabled)
5. **Scroll down to "Git Gateway"**
6. **Click "Enable Git Gateway"**
7. **Save settings**

---

## 🚀 **SOLUTION 3: Check Branch Name**

### **Problem**: Wrong branch name in config
### **Fix**:
1. **Check your GitHub repository's main branch name**
   - Is it `main` or `master`?
2. **Edit `admin/config.yml`**:
   ```yaml
   backend:
     name: git-gateway
     branch: main  # Change to 'master' if that's your main branch
   ```

---

## 🚀 **SOLUTION 4: Test Local Access**

### **Problem**: CORS or local file access
### **Fix**:
1. **Don't test locally** - CMS only works on deployed sites
2. **Always test on**: `https://your-site.netlify.app/admin`
3. **Never test on**: `file://` or `localhost` without proper server

---

## 🚀 **SOLUTION 5: Updated CMS Version**

### **Problem**: Old Netlify CMS version
### **Fix**: I've updated your `admin/index.html` to use the newer Decap CMS (formerly Netlify CMS)

---

## 🚀 **SOLUTION 6: Check File Paths**

### **Verify these files exist**:
- ✅ `admin/index.html`
- ✅ `admin/config.yml`
- ✅ `content/` folder with subfolders

### **Check file structure**:
```
your-site/
├── admin/
│   ├── index.html
│   └── config.yml
├── content/
│   ├── service/
│   ├── announcements/
│   ├── prayer/
│   └── ...
└── images/
    └── uploads/
```

---

## 🚀 **SOLUTION 7: Alternative Config Location**

If the above doesn't work, try moving the config:

1. **Copy `admin/config.yml`** to the root folder as `config.yml`
2. **Update `admin/index.html`** to specify config location:

```html
<script>
  window.CMS_MANUAL_INIT = true;
</script>
<script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
<script>
  CMS.init({
    config: {
      load_config_file: true,
      config_file_path: '/config.yml'
    }
  });
</script>
```

---

## 🚀 **SOLUTION 8: Simple Test Config**

Create a minimal config to test:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "images/uploads"
public_folder: "/images/uploads"

collections:
  - name: "test"
    label: "Test"
    folder: "content/test"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
```

---

## 🔍 **DEBUGGING STEPS**

### **Step 1: Check Browser Console**
1. **Open browser developer tools** (F12)
2. **Go to Console tab**
3. **Visit `/admin` page**
4. **Look for error messages**

### **Step 2: Check Network Tab**
1. **Open Network tab** in developer tools
2. **Refresh `/admin` page**
3. **Look for failed requests** (red entries)
4. **Check if `config.yml` is being requested**

### **Step 3: Verify Deployment**
1. **Check if files are deployed**:
   - Visit: `https://your-site.netlify.app/admin/config.yml`
   - Should show the config file content
2. **If 404 error**: Files not deployed properly

---

## 📞 **QUICK FIXES TO TRY**

### **Fix 1: Force Redeploy**
1. **Go to Netlify Dashboard**
2. **Deploys tab**
3. **Trigger deploy** → **Deploy site**

### **Fix 2: Clear Browser Cache**
1. **Hard refresh**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Clear cache** for the site
3. **Try incognito/private mode**

### **Fix 3: Check Repository**
1. **Verify files are in GitHub**
2. **Check latest commit** includes admin files
3. **Ensure branch is correct**

---

## ✅ **VERIFICATION CHECKLIST**

Before asking for help, verify:

- [ ] Files committed and pushed to GitHub
- [ ] Netlify deployment successful
- [ ] Git Gateway enabled in Netlify
- [ ] Correct branch name in config
- [ ] Testing on deployed site (not locally)
- [ ] Browser console shows no errors
- [ ] Config file accessible at `/admin/config.yml`

---

## 🆘 **STILL NOT WORKING?**

### **Provide this information**:
1. **Your site URL**
2. **Error message from browser console**
3. **Screenshot of Netlify Identity settings**
4. **Confirmation that files are in GitHub**
5. **Branch name of your repository**

### **Alternative Solutions**:
1. **Use WordPress** (if CMS is critical)
2. **Manual content editing** (temporary)
3. **Different CMS** (Forestry, Sanity, etc.)

---

**🎯 Most issues are solved by ensuring Git Gateway is enabled and files are properly deployed!**