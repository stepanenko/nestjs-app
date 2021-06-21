## Database

Connecting Nest to a database is simply a matter of loading an appropriate Node.js driver for the database,
just as you would with Express or Fastify. You can also directly use any general purpose Node.js database integration library or ORM,
such as Sequelize, Knex.js, TypeORM, and Prisma, to operate at a higher level of abstraction.

For convenience, Nest provides tight integration with TypeORM and Sequelize out-of-the-box with the `@nestjs/typeorm` and `@nestjs/sequelize` packages respectively.
These integrations provide additional NestJS-specific features, such as model/repository injection, testability, and asynchronous configuration to make accessing your chosen database even easier.

### TypeORM Integration

Nest uses TypeORM because it's the most mature Object Relational Mapper (ORM) available for TypeScript.
Since it's written in TypeScript, it integrates well with the Nest framework.
TypeORM provides support for many relational databases, such as PostgreSQL, MySQL, Oracle, Microsoft SQL Server, SQLite, and even NoSQL databases like MongoDB.

TypeORM supports the **repository design pattern**, so each entity has its own repository. These repositories can be obtained from the database connection.

#### Relations
Relations are associations established between two or more tables. Relations are based on common fields from each table, often involving primary and foreign keys.

There are three types of relations:

- **One-to-one** - Every row in the primary table has one and only one associated row in the foreign table. Use the `@OneToOne()` decorator to define this type of relation.
- **One-to-many / Many-to-one**	- Every row in the primary table has one or more related rows in the foreign table. Use the `@OneToMany()` and `@ManyToOne()` decorators to define this type of relation.
- **Many-to-many** - Every row in the primary table has many related rows in the foreign table, and every record in the foreign table has many related rows in the primary table. Use the `@ManyToMany()` decorator to define this type of relation.
