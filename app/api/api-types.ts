// api types
// api -- user --

type User = {
  id: string;
  name: string;
}

type UserCreate = {
  name: string;
  password: string;
  passwordRepeat: string;
}

// api -- auth --

// response types

type Status = 200 | 400 | 403 | 404 | 500

type ResMessage = {
  status: number;
  message: string;
}

// res -- user --

type ResUser = {
  responseMessage: ResMessage;
  user?: User;
}



// res -- auth --
