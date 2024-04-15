import { waitFor } from '@/utils/promises'

class APIInterface {
  constructor() {}

  public async get(endpoint: string): Promise<string> {
    await waitFor(2)

    return `TEST RESULT GET REQUEST ${endpoint}`
  }

  public async post(endpoint: string): Promise<string> {
    await waitFor(2)

    return `TEST RESULT POST REQUEST ${endpoint}`
  }

  public async put(endpoint: string): Promise<string> {
    await waitFor(2)

    return `TEST RESULT PUT REUQEST ${endpoint}`
  }

  public async delete(endpoint: string): Promise<string> {
    await waitFor(2)

    return `TEST RESULT DELETE REQUEST ${endpoint}`
  }
}

export default APIInterface
