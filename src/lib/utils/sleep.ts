export function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}


// Usage
// await sleep(200)