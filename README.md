# graphql-supergraph
GraphQL gateway for threads and users

Run `docker-compose up` in the root folder. Make a sample graphQL query at `http://localhost:8080/v1/graphql`.

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
