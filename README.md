# Stylish

## Description

A user-friendly e-commerce website with advanced features including category filtering, email-based user authentication, saved item management, and integrated Stripe checkout. Built using React for the frontend, Node.js and Express.js for the backend, and PostgreSQL for the database.

To view the frontend repository, click [here](https://github.com/yee0802/react-store).

## Entity Relationship Diagram

![Entity Relationship Diagram](/ERD.png)

## Setup

To run a local copy on your machine, please follow the steps below:

### Pre-requisites

Install Node.js or update npm to lastest version

```bash
 npm install npm@latest -g
```

### Installation

1. Clone the repository.

```
 git clone https://github.com/yee0802/react-store-server.git
```

2. Change into root directory.

```
 cd react-store-server
```

2. Rename `.env.example` file to `.env`.
3. Create a new database instance in [ElephantSQL]().
4. Edit the `DATABASE_URL` variable in `.env`, swapping `YOUR_DATABASE_URL` for the URL of the database you just created. Leave `?schema=prisma` at the end.

```lua
 DATABASE_URL="YOUR_DATABASE_URL?schema=prisma&connection_limit=5"
```

5. Create another new instance in ElephantSQL (this will be your [Shadow Database](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database)).
6. Edit the `SHADOW_DATABASE_URL` variable in `.env`, swapping `YOUR_SHADOW_DATABASE_URL` for the URL of the shadow database you just created.
   Leave `?schema=shadow` at the end.

```lua
 SHADOW_DATABASE_URL="YOUR_SHADOW_DATABASE_URL?schema=shadow"
```

7. Back in your ElephantSQL shadow database instance, go to the `Browser` tab and enter `CREATE SCHEMA shadow` and the press execute button. This creates a schema
   for Prisma to use for the shadow database.
8. Edit the `JWT_SECRET` variable in `.env` to a secret string of your choice.
9. Sign up or login to [Stripe]().
10. After logging in, navigate to `/test/apikeys` and press `Reveal test key`.
11. Edit the `STRIPE_PRIVATE_KEY` variable in `.env` to the key you just revealed. Do not share that key with anyone but yourself.

```lua
 STRIPE_PRIVATE_KEY="YOUR_PRIVATE_TEST_KEY"
```

12. Install project dependencies.

```
 npm ci
```

13. Finally, run `npx prisma migrate dev` to execute the database migrations. Or `npx prisma migrate reset` to reset database and run all migrations - press y when it asks if you're sure.

## Usage

1. Open two terminals, one for the <a href="https://github.com/yee0802/react-store"  target="_blank">Frontend</a> repository and one for the <a href="https://github.com/yee0802/react-store-server" target="_blank">Backend</a> repository.
2. Navigate to the `react-store` directory in one terminal and run `npm run dev`.
3. Navigate to the `react-store-server` directory in the other terminal and run `npm run start`.
4. Once both servers are live, in the terminal running the Frontend repository, you'll find a link displayed.
   Either press `ctrl + click` on the link or visit http://localhost:5173/ in your browser.

## Credits

Initial data seeding from [Fake Store API](https://fakeapi.platzi.com)

Created by Kye Yee 2024
