# 👥 BetweenUs

A social media forum for anonymous expression.
Users are represented only by a color and a system‑generated ID, allowing them to share Feels (thoughts, opinions, expressions) and Asks (questions).
The platform emphasizes anonymity and authenticity, enabling posts, replies, and votes without revealing personal details.

<img width="1470" height="797" alt="BetweenUs Home Page" src="https://github.com/user-attachments/assets/84b471fd-d155-4fe6-bae2-8f2b9a71e460" />

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

- 🔑 Authentication: Secure login/logout using JWT

## Future Features 🔜

- **👤 Avatars & Identity Layers:** Replace blank color circles with customizable avatars tied to user colors. Avatars provide visual personality while preserving anonymity, creating a more engaging and humanized social experience.

- **🤝 Connection Requests:** Introduce a layered identity reveal system. Users can send an initial connection request to unlock the first letter of another user’s first name, and a second request to see the full name. Profile pages will also show the number of connections, adding emotional stakes to interaction while maintaining mystery.

- **💬 Threaded Conversations:** Enable replies to replies, allowing deeper dialogues and branching conversations. This creates richer discussions that move beyond surface-level interactions and foster nuanced engagement.

- **👥 Communities & DMs:** Group users by their assigned color into shared group chats, forming “color communities.” These communities serve as semi-anonymous hubs where users can discuss, support, and connect. Direct messages between connected users further extend intimacy while balancing privacy and trust.

## 📝 Planning Materials 

- [Trello Board](https://trello.com/invite/b/688b198fd60bbb792d9c6aa6/ATTI7132cc1e0d0ec2907ee2124637a1fdf88555526F/betweenus)

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

## 🎥 Attributions

- **Concept, code & design by: Abdulla Alshaikh**
- **General inquiries answered by: [Stack Overflow](https://stackoverflow.com/questions)**
- **Syntax references from:** [MDN Web Docs](https://developer.mozilla.org/), [W3Schools](https://www.w3schools.com/)  
- **Debugging, styling assistance & refinement** by: [ChatGPT](https://chatgpt.com/) 
