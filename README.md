# Ekaant Agro Tourism Retreat - Website

A fully responsive, dynamic homepage for Ekaant Agro Tourism Retreat built with React, TailwindCSS, and JavaScript.

## 🌐 **Live Website**
**Visit the live site:** [https://ekaant-agro-tourism-myll527r8.vercel.app/](https://ekaant-agro-tourism-myll527r8.vercel.app/)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://ekaant-agro-tourism-myll527r8.vercel.app/)

### 🎯 **Website Showcase**
- **🌿 Ekaant Branding**: Professional logo and green color scheme
- **📱 Fully Responsive**: Perfect on desktop, tablet, and mobile
- **⚡ Fast Performance**: Optimized loading and smooth animations
- **🎨 Modern Design**: Clean, elegant UI with hover effects
- **📍 Interactive Location**: Beautiful location pin illustration
- **❓ FAQ Section**: Collapsible accordion for common questions

## 🌿 Features

- **Fully Responsive Design**: Works perfectly on laptops, tablets, and mobiles
- **Dynamic Content**: All content loaded from `content.json` file
- **Modern UI/UX**: Beautiful animations, hover effects, and smooth transitions
- **Performance Optimized**: Fast loading with optimized images and code
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **React 18** with Create React App
- **TailwindCSS 3.4.0** for styling
- **JavaScript ES6+** for interactivity
- **PostCSS & Autoprefixer** for CSS processing

## 📁 Project Structure

```
homepage/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Location.js
│   │   ├── FAQs.js
│   │   └── Footer.js
│   ├── data/
│   │   └── content.json
│   ├── assets/
│   │   └── images/
│   │       ├── ekaant-logo.png
│   │       ├── hero-forest.jpg
│   │       ├── resort-aerial.png
│   │       ├── farm-stay.png
│   │       ├── farming.png
│   │       ├── wildlife.png
│   │       ├── stargazing.png
│   │       ├── bonfire.png
│   │       ├── wellness.png
│   │       └── location-pin.png
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd homepage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Customization

### Colors (TailwindCSS Config)
```javascript
colors: {
  primary: '#003E17',    // Dark green
  secondary: '#6A8E4E',  // Medium green
  accent: '#B1D082',     // Light green
  brown: '#563a1e',      // Brown
  white: '#FFFFFF',      // White
  darkGrey: '#1a1a1a',   // Dark grey
  lightBackground: '#D9D9D9', // Light grey background
}
```

### Content Management
All content is managed through `src/data/content.json`. Update this file to change:
- Navigation items
- Hero section text
- About section content
- Services and activities
- Location information
- FAQs
- Footer content

## 🌐 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from project directory:**
   ```bash
   cd homepage
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → `Y`
   - Which scope? → Select your account
   - Link to existing project? → `N`
   - Project name? → `ekaant-agro-tourism` (or your preferred name)
   - Directory? → `./` (current directory)
   - Override settings? → `N`

5. **Your site will be deployed!**
   - Production URL: `https://your-project-name.vercel.app`
   - Preview URL: `https://your-project-name-git-main-your-username.vercel.app`

### Method 2: GitHub Integration

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ekaant Agro Tourism website"
   git branch -M main
   git remote add origin https://github.com/yourusername/ekaant-website.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings:
     - Framework Preset: `Create React App`
     - Root Directory: `homepage`
     - Build Command: `npm run build`
     - Output Directory: `build`
   - Click "Deploy"

### Method 3: Drag & Drop

1. **Build your project:**
   ```bash
   cd homepage
   npm run build
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Drag and drop the `build` folder to the Vercel dashboard
   - Your site will be deployed instantly!

## ⚙️ Vercel Configuration

### Environment Variables (if needed)
If you add environment variables later, you can set them in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add any API keys or configuration

### Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `ekaant.com`)
3. Follow DNS configuration instructions

## 🔧 Troubleshooting

### Common Issues

1. **Build Fails:**
   - Ensure all dependencies are installed: `npm install`
   - Check for syntax errors in your code
   - Verify all image files exist in the correct paths

2. **Images Not Loading:**
   - Ensure all images are in `src/assets/images/`
   - Check image file names match the imports
   - Verify image file extensions are correct

3. **Styling Issues:**
   - Clear browser cache
   - Ensure TailwindCSS is properly configured
   - Check for CSS conflicts

### Performance Optimization

- Images are optimized and lazy-loaded
- CSS is minified in production
- JavaScript is bundled and optimized
- Static assets are cached

## 📞 Support

For deployment issues:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## 🎯 Next Steps After Deployment

1. **Test Responsiveness**: Check your site on different devices
2. **Performance**: Run Lighthouse audit
3. **SEO**: Add meta tags and optimize for search engines
4. **Analytics**: Add Google Analytics or Vercel Analytics
5. **Custom Domain**: Set up your own domain name

---

**Ekaant Agro Tourism Retreat** - Where nature meets luxury! 🌿✨
