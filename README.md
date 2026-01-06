# 📝 Node.js & Express Blog (Practice Project)

This repository is a personal practice project built to understand backend web development fundamentals. It demonstrates how to build a dynamic web application using **Node.js**, **Express**, and **EJS** for server-side rendering.

> **Note:** This is not a production-ready application but a learning playground to explore server-side logic and templating.

---

## 🛠️ Tech Stack

This project is built using the following technologies:

* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **Templating Engine:** EJS (Embedded JavaScript)
* **Styling:** CSS / Bootstrap (Optional: update if you used a specific library)

---

## 🎯 Learning Goals

The main objective of this project was to learn:
* How to set up a server using **Express**.
* How to render dynamic HTML pages using **EJS**.
* Understanding Routing (GET, POST requests).
* Serving static files (CSS, Images) in Express.
* Passing data from the backend to the frontend view.

---

## 💻 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Akshat5rawat/blog.git](https://github.com/Akshat5rawat/blog.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd blog
    ```

3.  **Install dependencies**
    This will install Express, EJS, and other required packages listed in `package.json`.
    ```bash
    npm install
    ```

4.  **Start the server**
    ```bash
    node app.js
    # OR if you are using nodemon
    nodemon app.js
    ```

5.  **View in Browser**
    Open your browser and visit: `http://localhost:3000`

---

## 📂 Project Structure

```text
blog/
├── public/          # Static files (CSS, images)
├── views/           # EJS Templates (pages and partials)
│   ├── partials/    # Header, Footer, etc.
│   └── index.ejs    # Main page
├── app.js           # Main server entry point
├── package.json     # Project dependencies
└── README.md        # Documentation
