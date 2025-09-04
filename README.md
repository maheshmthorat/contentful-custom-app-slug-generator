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

## 🛠️ Installation

### Step 1: Install from below url

https://app.contentful.com/deeplink?link=apps&id=738gJiCsxBeiRIAnZPjL0C

### Step 2: Create the 'Page Name' Field

Next, create the field that the slug generator will use to create the slug.

- The field **Name** is **Page name** and the **Field ID** is **pageName**.
- This is the field where you'll enter the name of your page.

### Step 3: Create the 'Slug' Field

The first step is to create a new field to store the slug.

- The field **Name** is **Slug** and the **Field ID** is **slug**.
- The field is a **Required field**, meaning you won't be able to publish an entry if it's empty.
- It's also a **Unique field**, which ensures there aren't any duplicate slugs.
- Under **Appearance**, select the **Slug Generator** option to have the slug automatically created based on another field.

### Step 4: Generate the Slug

Finally, you can see how the two fields work together.

- You enter the **Page name** (in this case, **Contact Us**).
- You need to manually click the **Generate Slug** button when you change Page Name.

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
