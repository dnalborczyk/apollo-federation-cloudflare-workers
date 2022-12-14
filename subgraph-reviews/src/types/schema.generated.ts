import type { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  _FieldSet: any
}

export type Location = {
  readonly __typename?: 'Location'
  readonly id: Scalars['ID']
}

export type LocationReviewInput = {
  /** Written text */
  readonly comment: Scalars['String']
  /** Location Id */
  readonly locationId: Scalars['String']
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  readonly rating: Scalars['Int']
}

export type Mutation = {
  readonly __typename?: 'Mutation'
  readonly submitReview?: Maybe<SubmitReviewResponse>
}

export type MutationSubmitReviewArgs = {
  locationReview: LocationReviewInput
}

export type Query = {
  readonly __typename?: 'Query'
  /** The three latest reviews submitted for FlyBy's locations */
  readonly latestReviews: ReadonlyArray<Review>
}

export type Review = {
  readonly __typename?: 'Review'
  /** Written text */
  readonly comment?: Maybe<Scalars['String']>
  readonly id: Scalars['ID']
  /** The location the review is about */
  readonly location?: Maybe<Location>
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  readonly rating?: Maybe<Scalars['Int']>
}

export type SubmitReviewResponse = {
  readonly __typename?: 'SubmitReviewResponse'
  /** Similar to HTTP status code, represents the status of the mutation */
  readonly code: Scalars['Int']
  /** Newly created review */
  readonly locationReview?: Maybe<Review>
  /** Human-readable message for the UI */
  readonly message: Scalars['String']
  /** Indicates whether the mutation was successful */
  readonly success: Scalars['Boolean']
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ReferenceResolver<TResult, TReference, TContext> = (
  reference: TReference,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>
type NullableCheck<T, S> = Maybe<T> extends T
  ? Maybe<ListCheck<NonNullable<T>, S>>
  : ListCheck<T, S>
type ListCheck<T, S> = T extends (infer U)[]
  ? NullableCheck<U, S>[]
  : GraphQLRecursivePick<T, S>
export type GraphQLRecursivePick<T, S> = {
  [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]>
}

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Location: ResolverTypeWrapper<Location>
  ID: ResolverTypeWrapper<Scalars['ID']>
  LocationReviewInput: LocationReviewInput
  String: ResolverTypeWrapper<Scalars['String']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Mutation: ResolverTypeWrapper<{}>
  Query: ResolverTypeWrapper<{}>
  Review: ResolverTypeWrapper<Review>
  SubmitReviewResponse: ResolverTypeWrapper<SubmitReviewResponse>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Location: Location
  ID: Scalars['ID']
  LocationReviewInput: LocationReviewInput
  String: Scalars['String']
  Int: Scalars['Int']
  Mutation: {}
  Query: {}
  Review: Review
  SubmitReviewResponse: SubmitReviewResponse
  Boolean: Scalars['Boolean']
}>

export type LocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location'],
> = ResolversObject<{
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes['Location']>,
    { __typename: 'Location' } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
  submitReview?: Resolver<
    Maybe<ResolversTypes['SubmitReviewResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationSubmitReviewArgs, 'locationReview'>
  >
}>

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  latestReviews?: Resolver<
    ReadonlyArray<ResolversTypes['Review']>,
    ParentType,
    ContextType
  >
}>

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review'],
> = ResolversObject<{
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  location?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType
  >
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SubmitReviewResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SubmitReviewResponse'] = ResolversParentTypes['SubmitReviewResponse'],
> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  locationReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType
  >
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  Location?: LocationResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Review?: ReviewResolvers<ContextType>
  SubmitReviewResponse?: SubmitReviewResponseResolvers<ContextType>
}>
