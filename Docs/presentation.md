---
marp: true
theme: default
class:
  - invert
---

# Nest.js

## Building efficient, scalable Node.js server-side applications in Typescript with the Nest.js framework

---

# To Do

_Hide_

- [ ] Finish backend
  - _See backend To Do_
- [ ] Create Demo
- [ ] Investigate OpenAPI generated SPA app

---

# Plan

_Hide_

1. Intro and explain what nestjs is and can do
2. Demo

---

# Contents

1.  Intro
2.  Features
3.  Setup
4.  Demo 1: Generate a CRUD application
5.  Walker app
6.  Demo 2: Walker app

---

![bg](nestjs-website.png)

---

# Intro

- **Node.js**
  - **Express** or **Fastify**
- **Typescript**
- The architecture is heavily inspired by **Angular**.

---

# Features

- Controllers
- Providers _(ie services)_
- MVC _(eg Handlebars template)_
- ORM _(by TypeORM)_
- Modules
- Middleware
- Pipes
- Validation
- OpenApi
- DDD

---

# Other Features

Other interesting features of Nest.js. These will not be shown during this demo.

- Security
  - Oauth, ...
- Microservices
- Queues and Task scheduling (cron)
- Websockets
- Messaging/Events integration
  - RabbitMQ, ...

---

# Setup

Install:

```
npm i -g @nestjs/cli
```

Create a new project:

```
nest new todo-project
```

Generate a CRUD endpoint with Entities DTOs, Controller, Module and Service:

```
nest g crud todo
```
