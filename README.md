# 👥 BetweenUs

A social media forum for anonymous expression.
Users are represented only by a color and a system‑generated ID, allowing them to share Feels (thoughts, opinions, expressions) and Asks (questions).
The platform emphasizes anonymity and authenticity, enabling posts, replies, and votes without revealing personal details.

## 📁 File Structure
```
betweenus/
├── controllers/
│   ├── auth/
│   │   ├── dataController.js
│   │   ├── routeController.js
│   │   └── viewController.js
│   ├── feed/
│   │   ├── dataController.js
│   │   ├── routeController.js
│   │   └── viewController.js
│   ├── replies/
│   │   ├── dataController.js
│   │   ├── routeController.js
│   │   └── viewController.js
│   └── votes/
│       ├── dataController.js
│       ├── routeController.js
│       └── viewController.js
│
├── models/
│   ├── db.js
│   ├── post.js
│   ├── reply.js
│   ├── user.js
│   └── vote.js
│
├── public/
│   ├── signUp.js
│   └── style.css
│
├── views/
│   ├── feed/
│   │   ├── Asks.jsx
│   │   ├── Feels.jsx
│   │   └── Index.jsx
│   ├── Layouts/
│   │   └── Layout.jsx
│   ├── posts/
│   │   ├── Edit.jsx
│   │   ├── New.jsx
│   │   └── Show.jsx
│   ├── profile/
│   │   └── Profile.jsx
│   └── replies/
│       ├── Edit.jsx
│       └── New.jsx
│
├── app.js
├── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

## 📌 Routes

| METHOD | ENDPOINT                  | DESCRIPTION                                       | AUTH REQUIRED |
|--------|---------------------------|---------------------------------------------------|---------------|
| **USER ROUTES** ||||  
| POST   | /users                    | Create new User (signup)                          | No            |
| POST   | /users/login              | Login user (email + password)                     | No            |
| POST   | /users/logout             | Logout user (end token/session)                   | Yes           |
| GET    | /users/profile            | Get logged-in user profile (color, ID, posts)     | Yes           |
| PUT    | /users/:id                | Update user info (color, password)                | Yes           |
| DELETE | /users/:id                | Delete user account                               | Yes           |
| **HOME ROUTES** ||||  
| GET    | /                         | Home page (redirect to feed if logged in, login otherwise) | No    |
| GET    | /feed                     | Show all posts feed (Asks & Feels)                | Yes           |
| GET    | /feed/asks                | Show only Asks feed                               | Yes           |
| GET    | /feed/feels               | Show only Feels feed                              | Yes           |
| **POST ROUTES** ||||  
| POST   | /posts                    | Create new post (Ask or Feel)                     | Yes           |
| GET    | /posts/:id                | Get single post by its ID                         | Yes           |
| PUT    | /posts/:id                | Update a post (author only)                       | Yes           |
| DELETE | /posts/:id                | Delete a post (author only)                       | Yes           |
| **REPLY ROUTES** ||||  
| POST   | /posts/:id/replies        | Add a reply to a specific post                    | Yes           |
| GET    | /posts/:id/replies        | Get all replies for a specific post               | Yes           |
| PUT    | /replies/:id              | Update a reply (author only)                      | Yes           |
| DELETE | /replies/:id              | Delete a reply (author only)                      | Yes           |
| **VOTE ROUTES** ||||  
| POST   | /posts/:id/vote           | Upvote or downvote a specific post                | Yes           |
| POST   | /replies/:id/vote         | Upvote or downvote a specific reply               | Yes           |
 


## ⚙️ Features

- 🎨 User Customization: Choose a color identity

- 🔒 Anonymous Profiles: Users appear as only a color + ID, not real names

- ✍️ Posts: Share “Feels” (expressions) or “Asks” (questions)

- 💬 Replies: Respond to posts to keep conversations going

- 👍👎 Votes: Upvote or downvote posts and replies

- 🔑 Authentication: Secure login/logout using JWT

## 💻 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- bcrypt
- jsonwebtoken (JWT)
- method-override
- Morgan
- artillery
- React
- jsx-view-engine
- CSS
