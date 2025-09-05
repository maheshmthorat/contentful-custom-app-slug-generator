# 📝 Contentful Custom App - Slug Generator

<p>
   <img src="https://raw.githubusercontent.com/maheshmthorat/maheshmthorat/refs/heads/main/contentful-custom-app-slug-generator/icon.png" alt="Contentful Logo" width="300"/>
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

## 🚀 Install & Setup Guide

### 🔗 Step 1: Install the App

* Install directly in your Contentful space:
* 👉 [Click to Install](https://app.contentful.com/deeplink?link=apps&id=738gJiCsxBeiRIAnZPjL0C)

### 📝 Step 2: Create the **Page Name** Field

* Field **Name** → `Page name`
* Field **ID** → `pageName`
* This is where you’ll enter your page title.

### 🏷️ Step 3: Create the **Slug** Field

* Field **Name** → `Slug`
* Field **ID** → `slug`
* Make it **Required** + **Unique**
* Under **Appearance**, select **Slug Generator**

### ⚡ Step 4: Generate the Slug

* Enter a **Page name** (e.g., *Contact Us*)
* Click **Generate Slug** → `contact-us` 🎉

---

## 📷 Screenshots

### Step 1

<img src="https://raw.githubusercontent.com/maheshmthorat/maheshmthorat/refs/heads/main/contentful-custom-app-slug-generator/Screen-1.png" alt="Contentful Logo" width="300"/>

### Step 2

<img src="https://raw.githubusercontent.com/maheshmthorat/maheshmthorat/refs/heads/main/contentful-custom-app-slug-generator/Screen-2.png" alt="Contentful Logo" width="300"/>

### Step 3

<img src="https://raw.githubusercontent.com/maheshmthorat/maheshmthorat/refs/heads/main/contentful-custom-app-slug-generator/Screen-3.png" alt="Contentful Logo" width="300"/>

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

_(for CI/CD, use `npm run upload-ci` with environment variables)_

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

- ⚛️ React 18
- 🎨 Contentful Forma 36 (F36 components)
- 🛠️ Contentful App SDK
- 📦 contentful-management API

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
