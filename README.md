This is an example project for full-stack development based on the
- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/) or [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)



## Getting Started

First, run the docker-compose to start the server:

```bash
docker-compose up --build
# and in the separate terminal, run
yarn dev
```

## Database ORM

To interuct with database we use [Prisma](https://www.prisma.io/).

First of all, take a look at the documentation of base functionality.

### DB scheme

To change the DB structure you can edit the file `prisma/scheme.prisma`

### DB init

To generate database with structure declared in `scheme.prisma`, run:

```bash
yarn prisma db init

```

### Migration

To make migration:

```bash
yarn prisma migration
# and in the separate terminal, run
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
