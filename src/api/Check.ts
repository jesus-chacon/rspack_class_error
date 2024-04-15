import APIInterface from './utils'

class CheckAPIConnector {
  api: APIInterface

  constructor() {
    this.api = new APIInterface()
  }

  public getName(): Promise<string> {
    return this.api.get('path_to_name_request')
  }
}

export default CheckAPIConnector
