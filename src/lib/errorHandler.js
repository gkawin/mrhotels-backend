
export const badRequest = (message = '') => {
  const msg = !message ? 'Bad request' : message
  return { code: 400, message: msg }
}

export const notFound = (message = '') => {
  const msg = !message ? 'Not Found' : message
  return { code: 404, message: msg }
}

export const boom = (message = '') => {
  const msg = !message ? 'Internal Server Error' : message
  return { code: 500, message: msg }
}
