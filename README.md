# POC - Apollo Server using modules

## Description

This is a proof of concept about creating a GraphQL schema in a modular way, to improve logic organization, scalability, testability and reusability.

I have used two different approaches:

1. Using the Apollo Server `modules` feature, available from version [v2.2.1][apollo-server-v2.2.1] and presented in this [talk][apollo-server-schema-composition-talk].

2. Using the [GraphQL Modules][graphql-modules-toolset] toolset, that integrates with Apollo Server.

This repository contains examples for both apporaches.

## Usage

First, clone the this repository and install the dependencies:

```shell
$ yarn
```

Then you can start the Apollo Server modules example:

```shell
$ npm run start:apollo:modules
```

or the GraphQL Modules example:

```shell
$ npm run start:graphql:modules
```

The GraphQL Playground will be available at `http://localhost:4000`.

## Notes

You can find some useful queries to test the examples [here](docs/query-examples.md).

[apollo-server-v2.2.1]: https://github.com/apollographql/apollo-server/blob/master/CHANGELOG.md#v221
[apollo-server-schema-composition-talk]: https://youtu.be/OFT9bSv3aYA
[graphql-modules-toolset]: https://graphql-modules.com
