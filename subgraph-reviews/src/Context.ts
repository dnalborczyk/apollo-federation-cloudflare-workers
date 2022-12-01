import type ReviewsDataSource from './datasources/reviewsDataSource.js'

export default interface ContextValue {
  dataSources: {
    reviewsDataSource: ReviewsDataSource
  }
  // token: string
}
