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
| METHOD | ENDPOINT                       | DESCRIPTION                                        | AUTH REQUIRED |
|--------|--------------------------------|----------------------------------------------------|----------------|
| **AUTH ROUTES**                         |                                                    |                |
| GET    | /signup                        | Render signup page                                 | No             |
| POST   | /signup                        | Create new user                                    | No             |
| GET    | /login                         | Render login page                                  | No             |
| POST   | /login                         | Log in user                                        | No             |
| **PROFILE ROUTES**                      |                                                    |                |
| GET    | /profile                       | Show logged-in user's profile                      | Yes            |
| **FEED ROUTES**                         |                                                    |                |
| GET    | /                              | Show all posts (feed)                              | Yes            |
| GET    | /asks                          | Show only Ask posts                                | Yes            |
| GET    | /feels                         | Show only Feel posts                               | Yes            |
| **POST ROUTES**                         |                                                    |                |
| GET    | /post/new                      | Render new post form                               | Yes            |
| POST   | /                              | Create a new post                                  | Yes            |
| GET    | /post/:id                      | Show single post                                   | Yes            |
| GET    | /post/edit/:id                 | Render edit form for a post                        | Yes            |
| PUT    | /post/:id                      | Update a post                                      | Yes            |
| DELETE | /post/:id                      | Delete a post                                      | Yes            |
| **REPLY ROUTES**                        |                                                    |                |
| GET    | /post/:id/replies              | Get all replies for post                           | Yes            |
| POST   | /post/:id/replies              | Create a reply for post                            | Yes            |
| GET    | /:replyId/edit                 | Render reply edit form                             | Yes            |
| PUT    | /:replyId                      | Update a reply                                     | Yes            |
| DELETE | /:replyId                      | Delete a reply                                     | Yes            |

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
