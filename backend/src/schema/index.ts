export const typeDefs = `#graphql
  type Book {
    uid: String
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  type Query {
    books: [Book]
  }
`;
