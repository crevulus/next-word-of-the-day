import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type WordsWord {
    word: String!
    results: [Results]
  }

  type Results {
    definition: String!
    partOfSpeech: String!
    examples: [String]
  }

  type Query {
    getWordData(word: String!): WordsWord!
  }
`;

// type  User {
//   id: ID
//   login: String
//   avatar_url: String
// }

// type  Query {
//   getUsers: [User]
//   getUser(name: String!): User!
