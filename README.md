
```markdown
# Person CRUD REST API 🚀

A simple and professional Node.js + Express RESTful API for managing persons using MongoDB as the database.

---

## 📁 Project Structure


---

## 🌐 API Endpoints

Base URL: `http://localhost:5000/person`

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | `/`                | Fetch all people        |
| POST   | `/`                | Create a new person     |
| PUT    | `/:id`             | Update a person by ID   |
| DELETE | `/:id`             | Delete a person by ID   |

---

## 🧪 API Testing

All APIs were tested using **Postman**.

📁 Check the `/screenshots/` folder for detailed test cases and responses.

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **dotenv** for env configuration
- **CORS**, **body-parser**

---

## 🧾 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/person-crud-api.git
   cd person-crud-api
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root with:

   ```
   MONGO_URI=Paste your URI here
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. Open Postman and test: `http://localhost:5000/person`

---


## 📌 Author

* Developed by **Ravi Shankar Yadav**

```

---
```
