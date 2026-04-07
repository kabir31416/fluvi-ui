# FluviUI 🌊

[![npm version](https://img.shields.io/npm/v/fluvi-ui.svg)](https://www.npmjs.com/package/fluvi-ui)
[![license](https://img.shields.io/npm/l/fluvi-ui.svg)](https://github.com/kabir1519/fluvi-ui/blob/main/LICENSE)

**FluviUI** is a lightweight, high-performance fluid layout engine for React. It allows developers to create fully responsive, professional-grade grids and layouts **without writing a single media query**.

Built with **TypeScript**, **Tailwind CSS v4.0**, and **React**, it’s designed for simplicity and speed.

---

## ✨ Features

* 🚀 **Zero Media Queries:** Truly fluid layouts that adapt to any screen size automatically.
* 📦 **Lightweight:** Minimal footprint, keeping your bundle size small.
* ⚡ **Tailwind Integrated:** Fully compatible with Tailwind CSS and daisyUI classes.
* 🛠️ **Highly Customizable:** Control gaps, minimum widths, and HTML tags with ease.
* 💪 **Type Safe:** First-class TypeScript support.

---

## 📦 Installation

Install FluviUI via your favorite package manager:

```bash
npm install fluvi-ui
```


## 🚀 Quick Start

Wrap your elements with `FluviDiv` and watch the magic happen. No media queries required!

```jsx
import { FluviDiv } from 'fluvi-ui';

function App() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-primary">
        Our Pricing Plans
      </h1>
      
      {/* 🌊 The Magic Element */}
      <FluviDiv minWidth="320px" gap="2rem" className="max-w-7xl mx-auto">
        
        {/* Your Components / Cards go here */}
        <div className="card bg-base-200 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold">Starter</h2>
          <p className="text-4xl font-black my-4">$29</p>
          <button className="btn btn-primary w-full">Choose Plan</button>
        </div>

        <div className="card bg-primary text-primary-content p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold">Professional</h2>
          <p className="text-4xl font-black my-4">$99</p>
          <button className="btn btn-secondary w-full">Choose Plan</button>
        </div>

        <div className="card bg-base-200 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold">Enterprise</h2>
          <p className="text-4xl font-black my-4">$299</p>
          <button className="btn btn-primary w-full">Choose Plan</button>
        </div>

      </FluviDiv>
    </div>
  );
}

```

## ⚙️ API Reference

### `FluviDiv` Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | **Required** | The elements/cards you want to display in the grid. |
| `minWidth` | `string` | `"280px"` | The minimum width each item should have before wrapping. |
| `gap` | `string` | `"1.5rem"` | The spacing between grid items (Tailwind units or CSS). |
| `as` | `string` | `"div"` | The HTML tag to render (`section`, `article`, `main`, etc.). |
| `className`| `string` | `""` | Additional Tailwind CSS classes for the container. |


## 🎨 Why FluviUI?

Traditional grid systems rely on complex media queries like `sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. 

**FluviUI** simplifies this by using smart CSS `auto-fit` logic. Your layout will:

1. **Automatically** calculate how many items fit in a row.
2. **Smoothly** wrap items when the screen gets too small.
3. **Maintain** perfect spacing without manual breakpoints.


## 🛠️ Development & Contribution

We welcome contributions! To get started:

1. **Clone the repo:** `git clone https://github.com/kabir1519/fluvi-ui.git`
2. **Install deps:** `npm install`
3. **Build:** `npm run build`
4. **Test:** Use `npm link` to test in a local React project.


## 📄 License

This project is licensed under the **MIT License**.

---

### Developed with ❤️ for the Developer Community
