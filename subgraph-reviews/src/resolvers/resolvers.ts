import type Context from '../Context.js'
import type { Resolvers } from '../types/schema.generated.js'

const resolvers: Resolvers<Context> = {
  Query: {
    async latestReviews(parent, args, context) {
      return context.dataSources.reviewsDataSource.getLatestReviews()
    },
  },

  Review: {
    async location(review) {
      return {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore TODO FIXME
        id: review.locationId, // TODO FIXME
      }
    },
  },

  Mutation: {
    async submitReview(parent, args, context) {
      const newReview =
        await context.dataSources.reviewsDataSource.submitReviewForLocation(
          args.locationReview,
        )

      return {
        code: 200,
        locationReview: newReview,
        message: 'success',
        success: true,
      }
    },
  },
}

export default resolvers
