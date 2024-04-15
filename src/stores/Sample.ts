import { defineStore } from 'pinia'

import TestRequestHandler from './ActionHandlers/TestRequest'

interface SampleState {
  isLoading: boolean
  name?: string
}

const sampleState: SampleState = {
  isLoading: false,
  name: undefined
}

export const useSampleStore = defineStore('sample', {
  state: () => ({ ...sampleState }),
  actions: {
    fetchName() {
      const testRequestHandler = new TestRequestHandler()

      testRequestHandler.handle()
    }
  },
  getters: {}
})

export type SampleStore = ReturnType<typeof useSampleStore>

export default useSampleStore
