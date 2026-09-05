# Ecommerce Microfrontend (MFE) Shell

A modular, production-ready Microfrontend architecture built with **React**, **Vite**, and **Module Federation** (`@originjs/vite-plugin-federation`) organized in an **npm workspaces monorepo**.

---

## 🏗️ Architecture Overview

The system is decomposed into three decoupled applications:

```
ecommerce-mfe-shell/
├── apps/
│   ├── host-app/          # Host Container / Shell (Port 5000)
│   ├── products-remote/   # Catalog MFE (Port 5001)
│   └── cart-remote/       # Cart & Checkout Badge MFE (Port 5002)
├── package.json           # Monorepo Workspace Configuration
└── README.md
```

| Application | Port | Role / Exposed Module | Description |
| :--- | :--- | :--- | :--- |
| **`host-app`** | `5000` | Host / Shell | Consumes remotes, controls base layout, handles lazy loading & Suspense fallbacks. |
| **`products-remote`** | `5001` | `./ProductList` | Catalog UI rendering products and emitting cross-MFE cart events. |
| **`cart-remote`** | `5002` | `./CartBadge` | Cart badge and counter listening for add-to-cart events across the MFE boundary. |

---

## ⚡ Inter-MFE Communication Pattern

Communication between isolated microfrontends is decoupled using standard browser **Custom Events** (`CustomEvent` API):

* **Event Name:** `cart:add-item`
* **Producer:** `products-remote` dispatches `new CustomEvent('cart:add-item', { detail: product })` via `window.dispatchEvent`.
* **Consumer:** `cart-remote` listens via `window.addEventListener('cart:add-item', handler)` and updates state reactively.
* **Benefit:** Zero direct dependencies between `products-remote` and `cart-remote`.

---

## 🚀 Getting Started

### Prerequisites

* Node.js >= 18.x
* npm >= 9.x

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/prasadaraod/ecommerce-mfe-shell.git
cd ecommerce-mfe-shell
npm install
```

---

## 🛠️ Running Locally

Because Vite's Module Federation relies on compiled remote manifests (`remoteEntry.js`), remotes are built and previewed, while the host runs in Vite development mode:

Open 3 separate terminal tabs from the repository root:

### Terminal 1: Products Remote
```bash
npm run build:products
npm run serve:products
```
> Runs at: `http://localhost:5001` (Exposes `http://localhost:5001/assets/remoteEntry.js`)

### Terminal 2: Cart Remote
```bash
npm run build:cart
npm run serve:cart
```
> Runs at: `http://localhost:5002` (Exposes `http://localhost:5002/assets/remoteEntry.js`)

### Terminal 3: Host Application
```bash
npm run dev:host
```
> Runs at: `http://localhost:5000`

---

## 🌐 Standalone Mode

Each remote microfrontend can also be previewed and developed as a standalone React app:

* Visit `http://localhost:5001` to view and test **Products Remote** in isolation.
* Visit `http://localhost:5002` to view and test **Cart Remote** in isolation (includes standalone mock simulation controls).

---

## 📦 Available Scripts

* `npm run dev:host` - Starts the Host Shell in development mode.
* `npm run build:products` - Compiles the Products remote for Module Federation.
* `npm run serve:products` - Serves the compiled Products remote on port 5001.
* `npm run build:cart` - Compiles the Cart remote for Module Federation.
* `npm run serve:cart` - Serves the compiled Cart remote on port 5002.

---

## 🔒 Shared Dependencies

`react` and `react-dom` are configured as singletons in Module Federation across all apps to prevent multiple React instances from loading into runtime memory.