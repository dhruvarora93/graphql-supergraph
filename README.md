# graphql-supergraph
GraphQL gateway for threads and posts

Run `docker-compose up` in the root folder. Make a sample graphQL query at `http://localhost:8000/v1/graphql`.

Sample Query
```
query MyQuery ($threadLimit: 2, $postLimit: 2) {
  threads (limit: $threadLimit) {
    id
    posts (limit: $postLimit) {
      id
    }
  }
}
```
