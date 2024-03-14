const statusCode = {
  _200: 200,
  _400: 400,
  _403: 403,
  _500: 500
}

// user messages

const userFound = 'user found'
const userAlreadyExits = (userName: string) => `a user with username: ${userName} already exists please choose a new username`
const passwordNoMatch = 'passwords do not match'