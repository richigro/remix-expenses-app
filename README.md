## Requirements

you need add an .env file to connect prisma to a mongodb database.
More info on prisma: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb-typescript-mongodb

## Supported Route Types

### All file structure is relative to the routes folder, and URI to the domain name.

| Route Type                        | File Structure                              | URI example                           |
| --------------------------------- | ------------------------------------------- | ------------------------------------- |
| Basic Routes                      | expenses.tsx                                | /expenses                             |
| Nested Routes with folders        | expenses/create.tsx                         | /expenses/create                      |
| Nested Routes with Dot Delimiters | expenses.create.tsx                         | /expenses/create                      |
| Dynamic Routes                    | /expenses/$id.tsx OR /expenses.$id.tsx      | /expenses/<id>                        |
| Slapt Routes                      | /expenses/$                                 | /expenses/match/any/path              |
| Layout Routes                     | /expenses/create.tsx + ezpenses.tsx         | /expenses/create (with shared layout) |
| Pathless Routes                   | /\_ _expenses/create.tsx + _ \_expenses.tsx | /create (with shared layout)          |
