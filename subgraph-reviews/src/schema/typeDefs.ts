import { gql } from 'graphql-tag'

const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

  type Query {
    "The three latest reviews submitted for FlyBy's locations"
    latestReviews: [Review!]!
  }

  type Review {
    id: ID!
    "Written text"
    comment: String
    "A number from 1 - 5 with 1 being lowest and 5 being highest"
    rating: Int
    "The location the review is about"
    location: Location
  }

  type Location @key(fields: "id", resolvable: false) {
    id: ID!
  }

  type Mutation {
    submitReview(locationReview: LocationReviewInput!): SubmitReviewResponse
  }

  input LocationReviewInput {
    "Written text"
    comment: String!
    "A number from 1 - 5 with 1 being lowest and 5 being highest"
    rating: Int!
    "Location Id"
    locationId: String!
  }

  type SubmitReviewResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly created review"
    locationReview: Review
  }
`

export default typeDefs
