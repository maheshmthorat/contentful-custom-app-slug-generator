# 📝 Contentful Custom App - Slug Generator  

<p>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8buri8TAq9hRdlFa7_9xCejlF_-AWjXFDNg&s" alt="Contentful Logo" width="300"/>
</p>

A **custom Contentful app** that automatically generates **SEO-friendly slugs** from page titles — similar to the **Sanity slug generator** 🪄.  
No more manual typing, just clean and consistent slugs for your content.

---

## ✨ Features  
- 🔠 Generate slugs automatically from **page name / title**  
- ✏️ Edit slugs manually when needed  
- 🛡️ Ensures lowercase, hyphenated, SEO-friendly strings  
- ⚡ Integrated seamlessly into Contentful entry editor  

---

## 📂 Project Structure  
```
├── build/             # Production build files
├── public/            # Static assets
├── src/               # React source code
├── test/mocks/        # Test mocks
├── .gitignore
├── package.json
└── README.md
```
---

## 🛠️ Installation  

1. Clone the repo:  
```bash
gh repo clone maheshmthorat/contentful-custom-app-slug-generator
cd contentful-custom-app-slug-generator
```

2. Install dependencies:

```bash
npm install
```

3. Start development:

```bash
npm start
```

---

## 🚀 Deployment to Contentful

### 1. Build the app

```bash
npm run build
```

### 2. Create App Definition

```bash
npm run create-app-definition
```

### 3. Upload bundle

```bash
npm run upload
```

*(for CI/CD, use `npm run upload-ci` with environment variables)*

---

## 🖼️ Example

**Page name → Slug**

| Page name      | Auto-generated slug |
| -------------- | ------------------- |
| Coming Soon    | `coming-soon`       |
| About Us Today | `about-us-today`    |
| Hello World!   | `hello-world`       |

---

## ⚡ Tech Stack

* ⚛️ React 18
* 🎨 Contentful Forma 36 (F36 components)
* 🛠️ Contentful App SDK
* 📦 contentful-management API

---

## 🤝 Contributing

Pull requests and feature suggestions are welcome 🙌

---

## 👨‍💻 Author

**Mahesh Thorat**  
[GitHub](https://github.com/maheshmthorat/)

---

## 🫰 Donate
[buymeacoffee](https://buymeacoffee.com/maheshmthorat)

---

## 📜 License

MIT License © 2025

---

<p align="center">Made with ❤️ for <b>Contentful</b></p>
