# graphql-supergraph
GraphQL gateway for threads and posts

Run `docker-compose up` in the root folder. Make a sample graphQL query at `http://localhost:8000/v1/graphql`.

Sample Query and expected results.

```graphql
query ($threadLimit: Int!, $postLimit: Int!) {
  threads (limit: $threadLimit) {
    id
    posts (limit: $postLimit) {
      id
    }
  }
}
```

and we give the `threadLimit` as 1 and `postLimit` as 2. The response should be as below:

```json
{
  "data": {
    "threads": [
      {
        "id": 212991383,
        "posts": [
          {
            "id": 1300957267
          },
          {
            "id": 1679625662
          }
        ]
      }
    ]
  }
}
```
