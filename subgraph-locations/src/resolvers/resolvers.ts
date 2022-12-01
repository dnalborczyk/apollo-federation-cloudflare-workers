import type Context from '../Context.js'
import type { Resolvers } from '../types/schema.generated.js'

const resolvers: Resolvers<Context> = {
  Query: {
    async location(parent, args, context) {
      return context.dataSources.locationsDataSource.getLocation(args.id)
    },

    async locations(parent, args, context) {
      return context.dataSources.locationsDataSource.getAllLocations()
    },
  },

  Location: {
    async __resolveReference(enity, context) {
      return context.dataSources.locationsDataSource.getLocation(enity.id)
    },
  },
}

export default resolvers
