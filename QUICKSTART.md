# 🚀 QUICK START GUIDE

## ⚡ 30-Second Setup

```bash
cd /Users/vishaljha/Downloads/www.XpertRF.com
./setup.sh
npm run dev
```

Open browser to: **http://localhost:3000** 🎉

---

## 📋 Essential Commands

### Development
```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Build for production
npm run preview    # Preview production build
```

### Code Quality
```bash
npm run lint       # Check code quality
npm run format     # Format all code
npm run clean      # Remove build files
```

---

## 📁 Where to Edit

| What | Where |
|------|-------|
| HTML | `src/index.html` |
| CSS | `src/styles/main.css` |
| JavaScript | `src/main.js` |
| Components | `src/components/` |
| Images | `src/assets/images/` |
| Config | `src/config.js` |

---

## 🎯 Common Tasks

### Add a new stylesheet
```bash
# 1. Create file
touch src/styles/components.css

# 2. Import in main.js
echo "import './styles/components.css';" >> src/main.js
```

### Add a new component
```bash
# 1. Create component file
touch src/components/Header.js

# 2. Import in main.js
echo "import './components/Header.js';" >> src/main.js
```

### Add an image
```bash
# 1. Copy image to assets
cp image.jpg src/assets/images/

# 2. Use in HTML
# <img src="./assets/images/image.jpg" alt="Description">
```

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in vite.config.js
# server: { port: 3001 }
```

### Build errors
```bash
npm run clean
npm install
npm run build
```

### Lint errors
```bash
npm run lint -- --fix
npm run format
```

---

## 🚢 Deploy to Production

### Build
```bash
npm run build
# Output: dist/ folder
```

### Deploy Options

**Netlify**
```bash
netlify deploy --prod --dir=dist
```

**Vercel**
```bash
vercel --prod
```

**GitHub Pages**
```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

**AWS S3**
```bash
aws s3 sync dist/ s3://your-bucket/
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `CONTRIBUTING.md` | Development guide |
| `PROJECT_OVERVIEW.md` | Architecture details |
| `TRANSFORMATION.md` | What changed |
| `SECURITY.md` | Security policies |

---

## 💡 Tips

1. **Always run `npm run dev`** for development
2. **Use `npm run lint`** before committing
3. **Test with `npm run preview`** before deploying
4. **Keep dependencies updated**: `npm update`
5. **Read the docs** in markdown files

---

## ✅ Checklist Before Deploy

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Test with `npm run preview`
- [ ] Check console for errors
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check images load
- [ ] Test forms (if any)
- [ ] Review meta tags
- [ ] Test different browsers

---

## 🆘 Need Help?

1. Check documentation files
2. Review error messages
3. Check browser console
4. Run `npm run lint` for issues
5. Rebuild: `npm run clean && npm install && npm run build`

---

**Pro Tip**: Bookmark this file! 🔖

**Status**: ✅ Ready for Professional Development & Production Deployment
