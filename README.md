This is an example project for full-stack development based on the
- [Next.js](https://nextjs.org/);
- [NextAuth.js](https://next-auth.js.org/);
- [Prisma](https://www.prisma.io/);
- [MySQL](https://www.mysql.com/) or [PostgreSQL](https://www.postgresql.org/);
- [Docker](https://www.docker.com/);

## Nenx.js API Routes

API routes provide a solution to build your API with Next.js.

[Learn more about Next.js api routes](https://nextjs.org/docs/api-routes/introduction).

## NextAuth.js Credentials provider

NextAuth.js is a complete open-source authentication solution for Next.js applications.

It this project we use authorization with credentials
- [credentials provider](https://next-auth.js.org/providers/credentials) and it's configuration);
- [credentials provider configuration](https://next-auth.js.org/configuration/providers/credentials);

## Database ORM Prisma

To interuct with database we use [Prisma](https://www.prisma.io/).

First of all, take a look at the documentation of base functionality.

### DB scheme

The Prisma schema file (short: schema file, Prisma schema or schema) is the main configuration file for your Prisma setup.

To change the DB structure you can edit the file `prisma/scheme.prisma`

To apply the state from schema to the database, run:

```bash
yarn prisma db push
```

[Learn more about scheme](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

### Prisma client

Prisma Client is an auto-generated and type-safe query builder that's tailored to your data.

To generate prisma client:

```bash
yarn prisma generate
```

[Learn more about prisma client](https://www.prisma.io/docs/concepts/components/prisma-client)

### DB migrations

To create migration from changes in scheme, run:

```bash
yarn prisma migrate dev --name <migration_name> 
```

To apply pending migrations to the database:

```bash
yarn prisma migrate deploy
```

[Learn more about migrations](https://www.prisma.io/docs/concepts/components/prisma-migrate)

## Run dev server

First, run the docker-compose to start the server:

```bash
docker-compose up --build
# and in the separate terminal, run
yarn dev
```