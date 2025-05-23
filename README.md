# 🚀 Reference App

Hi everyone 👋 🌊
![Made a simple reference app for the demo](demo_app.png)

## 🎯 Purpose

The purpose of this app is to:

- Provide a reference implementation for a full-stack application.

## 📚 Documentation

- **API**: Retrieves information for a specific DC comics character based on name.
- **UI**: Displays DC comics character info.

---

## 🛠️ Tech Stack

This app is built using the following technologies:

### Backend (API) 🌐

- **Language**: Node.js
- **Framework**: NestJS
- **Database**: Static JSON
- **Authentication**: None

### Frontend (UI) 🎨

- **Framework**: Angular
- **Styling**: SCSS

---

## 🏃‍♂️ How to Run the App

### 1️⃣ Running the API (PORT 3000)

1. Navigate to the `api` directory:
   ```bash
   cd api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. The API will be available at `http://localhost:3000/api`.

### 2️⃣ Running the UI (PORT 4200)

1. Navigate to the `ui` directory:
   ```bash
   cd ui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The UI will be available at `http://localhost:4200`.

## 🐳 Containers

Make sure to alias your desired containerization tool to `docker`

The app is containerized, so feel free to build it using

```sh
make
```

Run using

```sh
docker compose up
```

You can then access the app here: http://localhost

Happy coding! 💻✨
