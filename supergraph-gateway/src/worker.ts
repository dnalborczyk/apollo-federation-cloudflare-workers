import { ApolloServer } from '@apollo/server'
import {
  ApolloGateway,
  type GraphQLDataSource,
  type ServiceEndpointDefinition,
} from '@apollo/gateway'
import { startServerAndCreateCloudflareWorkersHandler } from 'apollo-server-integrations-cloudflare-workers'
import { CloudflareWorkersGraphQLDataSource } from 'cloudflare-workers-graphql-datasource'
import type Environment from './Environment.js'
import typeDefs from './schema/typeDefs.js'

// export interface ContextValue {
// token: string
// }

let handler: ExportedHandlerFetchHandler<Environment>

export default {
  async fetch(
    request: Request,
    environment: Environment,
    context: ExecutionContext,
  ): Promise<Response> {
    if (handler === undefined) {
      const subgraphConfig = new Map([
        ['locations', environment.subgraphLocationsService],
        ['reviews', environment.subgraphReviewsService],
      ])

      const gateway = new ApolloGateway({
        buildService(definition: ServiceEndpointDefinition): GraphQLDataSource {
          const serviceBinding = subgraphConfig.get(definition.name)

          if (serviceBinding === undefined) {
            throw new Error('Could not find service binding.')
          }

          return new CloudflareWorkersGraphQLDataSource({
            request,
            serviceBinding,
          })
        },

        supergraphSdl: typeDefs,
      })

      const apolloServer = new ApolloServer({
        gateway,
      })

      handler = startServerAndCreateCloudflareWorkersHandler<Environment>(
        apolloServer,
        // {
        //   path: environment.GRAPHQL_PATH,
        // },
      )
    }

    return handler(request, environment, context)
  },
}
