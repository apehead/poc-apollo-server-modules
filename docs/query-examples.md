# Query examples

```graphql
query User {
  user(id: "u-1") {
    id
    name
    birthDate
    reviews {
      id
      author {
        id
        name
      }
      body
      product {
        name
      }
    }
    recentPurchases {
      id
      name
      price
    }
  }
}
```

```graphql
query Me {
  me {
    id
    name
    birthDate
  }
}
```

```graphql
query Products {
  products {
    id
    name
    reviews {
      author {
        name
      }
      product {
        id
        name
      }
    }
  }
}
```

```graphql
query ProductById {
  product(id: "p-3") {
    id
    name
    price
    reviews {
      body
    }
  }
}
```

```graphql
query Reviews {
  reviews {
    id
    body
    author {
      id
      name
      birthDate
    }
    product {
      id
      name
    }
  }
}
```

```graphql
query ReviewById {
  review(id: "r-3") {
    id
    body
    author {
      name
      reviews {
        body
      }
    }
    product {
      name
      reviews {
        id
        body
      }
    }
  }
}
```

```graphql
query TopReviews {
  topReviews(first: 2) {
    id
    body
    author {
      id
      name
    }
    product {
      name
      id
      price
    }
  }
}
```
