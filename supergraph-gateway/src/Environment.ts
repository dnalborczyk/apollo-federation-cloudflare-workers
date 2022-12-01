import type { ServiceBinding } from 'cloudflare-workers-graphql-datasource'

export default interface Environment {
  GRAPHQL_PATH: string
  subgraphLocationsService: ServiceBinding
  subgraphReviewsService: ServiceBinding
}
