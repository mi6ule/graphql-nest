## Type
###### code-first
in code-first approach you just add some `@decorator` on your field in EntityModel or your typescript type:
```typescript
// Author.entity
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from './post';

@ObjectType()
export class Author {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Post])
  posts: Post[];
}
```
types completly are the same as Graphql types.

###### schema-first
in schema-first approach you must write all schema in advance:
```graphql
# schema.gql
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int!
  title: String!
  votes: Int
}

type Query {
  author(id: Int!): Author
}
```

next step: [[4-resolver]]