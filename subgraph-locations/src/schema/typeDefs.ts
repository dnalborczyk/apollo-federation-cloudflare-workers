import { gql } from 'graphql-tag'

const typeDefs = gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type Query {
    "The full list of locations presented by the Interplanetary Space Tourism department"
    locations: [Location!]!
    "The details of a specific location"
    location(id: ID!): Location
  }

  type Location @key(fields: "id") {
    id: ID!
    "The name of the location"
    name: String!
    "A short description about the location"
    description: String!
    "The location's main photo as a URL"
    photo: String!
  }
`

export default typeDefs
