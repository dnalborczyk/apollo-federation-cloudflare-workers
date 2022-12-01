import type LocationsDataSource from './datasources/LocationsDataSource.js'

export default interface ContextValue {
  dataSources: {
    locationsDataSource: LocationsDataSource
  }
  // token: string
}
