export const FORM_SUCCESS = {
  firstName: 'Approved',
  lastName: 'Approved',
  password: 'Approved',
  email: 'Approved',
}

export const FORM_ERRORS = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

export const FORM_VALIDATION_MESSAGES = {
  firstName: {
    required: 'First name is required.',
    minlength: 'First name must contain at least 4 characters.',
    maxlength: 'First name must contain no more than 15 characters.'
  },
  lastName: {
    required: 'Last name is required.',
    minlength: 'Last name must contain at least 4 characters.',
    maxlength: 'Last name must contain no more than 15 characters.'
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
