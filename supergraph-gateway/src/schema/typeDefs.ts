const gql = String.raw

const typeDef = gql`
  schema
    @link(url: "https://specs.apollo.dev/link/v1.0")
    @link(url: "https://specs.apollo.dev/join/v0.2", for: EXECUTION) {
    query: Query
    mutation: Mutation
  }

  directive @join__field(
    graph: join__Graph!
    requires: join__FieldSet
    provides: join__FieldSet
    type: String
    external: Boolean
    override: String
    usedOverridden: Boolean
  ) repeatable on FIELD_DEFINITION | INPUT_FIELD_DEFINITION

  directive @join__graph(name: String!, url: String!) on ENUM_VALUE

  directive @join__implements(
    graph: join__Graph!
    interface: String!
  ) repeatable on OBJECT | INTERFACE

  directive @join__type(
    graph: join__Graph!
    key: join__FieldSet
    extension: Boolean! = false
    resolvable: Boolean! = true
  ) repeatable on OBJECT | INTERFACE | UNION | ENUM | INPUT_OBJECT | SCALAR

  directive @link(
    url: String
    as: String
    for: link__Purpose
    import: [link__Import]
  ) repeatable on SCHEMA

  scalar join__FieldSet

  enum join__Graph {
    LOCATIONS
      @join__graph(name: "locations", url: "http://localhost:4000/locations")
    REVIEWS @join__graph(name: "reviews", url: "http://localhost:4000/reviews")
  }

  scalar link__Import

  enum link__Purpose {
    """
    SECURITY features provide metadata necessary to securely resolve fields.
    """
    SECURITY

    """
    EXECUTION features provide metadata necessary for operation execution.
    """
    EXECUTION
  }

  type Location
    @join__type(graph: LOCATIONS, key: "id")
    @join__type(graph: REVIEWS, key: "id", resolvable: false) {
    id: ID!

    """
    The name of the location
    """
    name: String! @join__field(graph: LOCATIONS)

    """
    A short description about the location
    """
    description: String! @join__field(graph: LOCATIONS)

    """
    The location's main photo as a URL
    """
    photo: String! @join__field(graph: LOCATIONS)
  }

  input LocationReviewInput @join__type(graph: REVIEWS) {
    """
    Written text
    """
    comment: String!

    """
    A number from 1 - 5 with 1 being lowest and 5 being highest
    """
    rating: Int!

    """
    Location Id
    """
    locationId: String!
  }

  type Mutation @join__type(graph: REVIEWS) {
    submitReview(locationReview: LocationReviewInput): SubmitReviewResponse
  }

  type Query @join__type(graph: LOCATIONS) @join__type(graph: REVIEWS) {
    """
    The full list of locations presented by the Interplanetary Space Tourism department
    """
    locations: [Location!]! @join__field(graph: LOCATIONS)

    """
    The details of a specific location
    """
    location(id: ID!): Location @join__field(graph: LOCATIONS)

    """
    The three latest reviews submitted for FlyBy's locations
    """
    latestReviews: [Review!]! @join__field(graph: REVIEWS)
  }

  type Review @join__type(graph: REVIEWS) {
    id: ID!

    """
    Written text
    """
    comment: String

    """
    A number from 1 - 5 with 1 being lowest and 5 being highest
    """
    rating: Int

    """
    The location the review is about
    """
    location: Location
  }

  type SubmitReviewResponse @join__type(graph: REVIEWS) {
    """
    Similar to HTTP status code, represents the status of the mutation
    """
    code: Int!

    """
    Indicates whether the mutation was successful
    """
    success: Boolean!

    """
    Human-readable message for the UI
    """
    message: String!

    """
    Newly created review
    """
    locationReview: Review
  }
`

export default typeDef
