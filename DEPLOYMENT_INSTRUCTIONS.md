# Deployment Instructions

## Setting Up Contact Form Email Forwarding

After deploying to Netlify, follow these steps to receive emails at `espana.dsr@gmail.com`:

### 1. Deploy to Netlify
- Go to [netlify.com](https://netlify.com)
- Drag & drop your project folder (including all files)
- Your site will be deployed automatically

### 2. Configure Email Notifications
1. In Netlify dashboard, go to **Site Settings**
2. Click **Forms** in the left sidebar
3. Click **Form notifications**
4. Click **Add notification**
5. Choose **Email notification**
6. Add email: `espana.dsr@gmail.com`
7. Select your contact form
8. Save the settings

### 3. Test the Form
- Fill out the contact form on your live site
- You should receive an email at `espana.dsr@gmail.com`
- Users will be redirected to the success page after submitting

### 4. Files Updated for Contact Form:
- ✅ `index.html` - Added Netlify form attributes
- ✅ `success.html` - Success page after form submission
- ✅ `netlify.toml` - Netlify configuration
- ✅ `script.js` - Updated form handling
- ✅ Removed date field placeholders (dd.mm.yyyy)
- ✅ Changed "Premium apartmani" to "Moderni apartmani"

### Alternative: Use Formspree (if not using Netlify)
If deploying to Vercel instead of Netlify:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action to: `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Add your email in Formspree dashboard 