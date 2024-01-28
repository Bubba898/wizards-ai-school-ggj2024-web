export type FrontendPromise<T> = Promise<{ error?: App.Error, data?: T }>

export async function frontend_promise<T>(promise: Promise<T>): FrontendPromise<T> {
  return new Promise((resolve) => {
    promise.then(
    (data) => resolve({data: data}),
    (error) => {
      console.log(error)
      resolve({
        error: {
          status: error.status,
          name: error.name,
          stack: error.stack,
          detail: JSON.stringify(error.body.detail, null, 2),
          message: error.statusText
        }
      })
    }
  )
  })
}
