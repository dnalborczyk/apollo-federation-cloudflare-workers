import locations, { type Location } from './locationsData.js'

export default class LocationsDataSource {
  async getAllLocations(): Promise<Location[]> {
    return locations
  }

  async getLocation(id: string): Promise<Location | null> {
    return locations.find((location) => location.id === id) ?? null
  }
}
