# 📚 Versopedia API Documentation



Welcome to the backend documentation for **Versopedia** — a platform that blends the art of poetry with the beauty of human reflection.

This document serves as a guide to the core API endpoints that power the VerseVault experience — from delivering the *Poem of the Day*, to capturing the voices of readers who share how it touched their hearts. Whether you’re integrating this API into a frontend app or simply exploring the architecture, this guide will walk you through each endpoint with clarity and examples.

---

Each endpoint here allows you to:

- 📰 Fetch daily poetic verses
- ✍️ Submit personal reflections
- 📖 Explore what others have written
- ❌ Delete reflections if needed

Whether you're a developer, tester, or curious reader — may you find this code as meaningful as the verses it carries. 🌿

Let’s begin.


---

## 📘 Base URL

```
http://localhost:5000/api
```

---

## 1. 📰 Get Today's Poem

- **Endpoint:** `/reflections/poem/today`
- **Method:** `GET`
- **Description:** Fetches the poem of the day.

### 🔸 Response:
```json
{
    "id": 1,
    "title": "THE Road not taken",
    "author": "Robert Frost",
    "content": "Two roads diverged in a yellow wood",
    "genre": "Nature",
    "date": "2025-06-20T00:00:00.000Z"
}
```

### 🔸 Errors:
```json
{
  "error": "No poem found for today"
}
```

---

## 2. 📝 Submit a Reflection

- **Endpoint:** `/reflections`
- **Method:** `POST`
- **Description:** Adds a reflection for a specific poem.

### 🔸 Request Body:
```json
{
  "poemId": 1,
  "name": "Sakshi",
  "text": "This poem really touched my soul."
}

```

### 🔸 Response:
```json
{
    "id": 3,
    "name": "Sakshi",
    "text": "This poem really touched my soul.",
    "poemId": 1,
    "createdAt": "2025-06-20T16:20:03.663Z"
}
```

### 🔸 Errors:
```json
{
  "error": "Missing required fields"
}
```

---

## 3. 📖 Get Reflections by Poem ID

- **Endpoint:** `/reflections/:poemId`
- **Method:** `GET`
- **Description:** Returns all reflections for the given poem.

### 🔸 Example URL:
```
/reflections/1
```

### 🔸 Response:
```json
[
    {
        "id": 3,
        "name": "Sakshi",
        "text": "This poem really touched my soul.",
        "poemId": 1,
        "createdAt": "2025-06-20T16:20:03.663Z"
    },
    {
        "id": 2,
        "name": "Sakshi",
        "text": "Let's hope this works finally!",
        "poemId": 1,
        "createdAt": "2025-06-20T16:17:49.761Z"
    },
    {
        "id": 1,
        "name": "Sakshi",
        "text": "This one is unforgettable.",
        "poemId": 1,
        "createdAt": "2025-06-20T12:31:48.311Z"
    }
]
```

### 🔸 Errors:
```json
{
  "error": "Poem ID not found"
}
```

---

## 4. ❌ Delete a Reflection

- **Endpoint:** `/reflections/:id`
- **Method:** `DELETE`
- **Description:** Deletes a specific reflection by ID.

### 🔸 Example URL:
```
/reflections/12
```

### 🔸 Response:
```json
{
  "message": "Reflection deleted successfully"
}
```

### 🔸 Errors:
```json
{
  "error": "Reflection not found"
}
```

---

## 🧪 Testing Tools

You can test these endpoints using:

- ✅ Postman
- ✅ Thunder Client (VS Code extension)
- ✅ Curl or your browser for simple `GET` routes

---

## 👩‍💻 Developed by

Sakshi Priya  
B.Tech CSE @ KIIT  
Versopedia — June 2025 ✨

---
