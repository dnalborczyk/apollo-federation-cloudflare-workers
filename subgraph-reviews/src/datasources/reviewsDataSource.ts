import reviews, { type Review } from './reviewsData.js'

const { max } = Math

export default class ReviewsDataSource {
  async getReview(id: string): Promise<Review | null> {
    return reviews.find((review) => review.id === id) ?? null
  }

  async getReviewsForLocation(id: string): Promise<Review[]> {
    return reviews.filter(({ locationId }) => locationId === id)
  }

  async getLatestReviews(): Promise<Review[]> {
    return reviews.slice(max(reviews.length - 3, 0))
  }

  async getOverallRatingForLocation(id: string): Promise<number> {
    const allRatings = reviews
      .filter(({ locationId }) => locationId === id)
      .map(({ rating }) => rating)

    const sum = allRatings.reduce((a, b) => a + b, 0)
    const average = sum / allRatings.length

    return average
  }

  async submitReviewForLocation(review: Omit<Review, 'id'>): Promise<Review> {
    const newReview = {
      ...review,
      id: `rev-${reviews.length + 1}`,
    }
    // reviews = [...reviews, newReview];
    return newReview
  }
}
