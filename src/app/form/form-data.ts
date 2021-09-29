export const FORM_SUCCESS = {
  name: 'Принято',
  password: 'Принято',
  email: 'Принято',
}

export const FORM_ERRORS = {
  name: '',
  email: '',
  password: ''
}

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Name is required.',
    minlength: 'Name must contain at least 4 characters.',
    maxlength: 'Name must contain no more than 15 characters.'
  },
  email: {
    required: 'Email is required.',
    pattern: 'Incorrect email address format.'
  },
  password: {
    required: 'Password is required.',
    minlength: 'Password must contain at least 7 characters.',
    maxlength: 'Password must contain no more than 25 characters.'
  }
}
