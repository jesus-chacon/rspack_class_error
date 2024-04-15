export const waitFor = (seconds: number): Promise<void> => {
  return new Promise((res) => {
    setTimeout(res, seconds * 1000)
  })
}
