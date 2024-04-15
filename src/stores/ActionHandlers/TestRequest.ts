import CheckAPIConnector from '@/api/Check'
import { useSampleStore, type SampleStore } from '../Sample'
import { waitFor } from '@/utils/promises'

class TestRequestHandler {
  constructor(
    private readonly sampleStore: SampleStore = useSampleStore(),
    private readonly checkApiConnector: CheckAPIConnector = new CheckAPIConnector()
  ) {}

  async handle() {
    this.sampleStore.isLoading = true

    await waitFor(2)

    const name = await this.checkApiConnector.getName()

    this.sampleStore.name = name

    this.sampleStore.isLoading = false
  }
}

export default TestRequestHandler
